<template>
  <div>
    <div
      class="
        d-flex
        flex-column flex-md-row
        align-items-center
        p-3
        px-md-4
        mb-3
        bg-white
        border-bottom
        shadow-sm
      "
    >
      <h5 class="my-0 mr-md-auto font-weight-normal">ToDo</h5>

   
      <button
        v-if="!UserData.role"
        class="btn btn-primary btn-md-block"
        type="button"
        v-on:click="FormLogin()"
        data-toggle="modal"
        data-target="#LoginModal"
      >
        Войти
      </button>
      <h6  v-if="UserData.role" class="my-0 mr-md-auto font-weight-normal mb-10 mt-10"><i class="fa fa-user-circle-o" aria-hidden="true"></i> Администратор</h6>
      <button 
        v-if="UserData.role"
        v-on:click="Logout()"
      class="btn btn-outline-primary">
        <i class="fa fa-sign-out"></i> Выйти
      </button>
    </div>
    <div class="container mt-20"><Alert :alert="alert" /></div>

    <!-- Modal Login  -->
    <div
      class="modal fade"
      id="LoginModal"
      tabindex="-1"
      aria-labelledby="LoginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="LoginModalLabel">Вход</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body pb-10">
            <Alert :alert="alertLogin" />
            <div class="alert alert-light mb-0">
              <div class="form-group row mb-20">
                <label class="col-sm-3 col-form-label"
                  >Логин <span class="text-danger">*</span>:</label
                >
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="valLogin.login"
                    :input="checklogin()"
                    :maxlength="valLimits.login"
                    required
                  />
                  <small class="form-text text-muted"
                    >Разрешенные символы: A-zА-я0-9._- . Максимальное количество
                    {{ valLimits.login }} символов. Осталось:
                    <span
                      class="input-group-addon"
                      v-text="valLimits.login - valLogin.login.length"
                    ></span>
                  </small>
                </div>
              </div>
              <div class="form-group row mb-20">
                <label class="col-sm-3 col-form-label"
                  >Пароль <span class="text-danger">*</span>:</label
                >
                <div class="col-sm-9">
                  <input
                    type="password"
                    class="form-control"
                    v-model.trim="valLogin.passw"
                    :input="checkpassw()"
                    :maxlength="valLimits.passw"
                    required
                  />
                  <small class="form-text text-muted"
                    >Максимальное количество {{ valLimits.passw }} символов.
                    Осталось:
                    <span
                      class="input-group-addon"
                      v-text="valLimits.passw - valLogin.passw.length"
                    ></span>
                  </small>
                </div>
              </div>
            </div>
            <small
              ><span class="text-danger">*</span> - поля, обязательные для
              заполнения</small
            >
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Отменить
            </button>
            <button type="button" class="btn btn-primary" v-on:click="Login()">
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from "vuex";
import api from "../api/index";
import lib from "@/lib/index";
import Alert from "@/components/alert.vue";

import bcrypt from 'bcryptjs';

export default {
  name: "app",
  components: {
    Alert,
  },
  data() {
    return {
      alert: {
        error: [],
        info: [],
        success: [],
      },
      alertLogin: {
        error: [],
        info: [],
        success: [],
      },
      valLogin: {
        login: "",
        passw: "",
      },
      valLimits: {
        login: 256,
        passw: 256,
      },
    };
  },
 computed: {
    ...mapGetters(["UserData"]),
  },
  methods: {
        CleanAlert() {
      this.alert.error = [];
      this.alert.info = [];
      this.alert.success = [];
    },
    CleanAlertLogin() {
      this.alertLogin.error = [];
      this.alertLogin.info = [];
      this.alertLogin.success = [];
    },
    CleanformLogin() {
      this.valLogin.login = "";
      this.valLogin.passw = "";
    },
    FormLogin() {
      this.CleanAlertLogin();
      this.CleanformLogin();
    },
    async Login() {
      this.CleanAlertLogin();
      this.CleanAlert();
      let errflag = 0;
      if (this.valLogin.login == "" || this.valLogin.passw == "") {
        errflag = 1;
        this.alertLogin.error.push({ text: "Заполните обязательные поля" });
      }
      if (errflag == 0) {
        try {
          const ResLogin = await api.user.login({login:this.valLogin.login,'passw':this.valLogin.passw});
          if(ResLogin.data.status == 'error'){
            this.$store.dispatch('login',{role:''});
            this.alertLogin.error.push({ text: ResLogin.data.text });
          }else{
            this.$store.dispatch('login',{role:ResLogin.data.role}); 
            this.alert.info.push({ text: "Вы аутентифицировались как администратор" });
            setTimeout(() => { this.alert.info=''; }, 4*1000);
            $("#LoginModal").modal("hide");
          }
          
        } catch (error) {
          this.alertLogin.error.push({ text: "Не верный логин или пароль" });
        }
        //$("#LoginModal").modal("hide");
      }
    },
    formSubmit() {
      this.Logout();
    },
    async Logout() {
      this.CleanAlert();
      this.alert.error = [];
      try {
        const data = await api.user.logout(); 
        if(data.status==200 || data.status==304){
            this.$store.dispatch('update',{role:null}); 
            this.alert.success.push({ text: "Вы успешно разлогинились" });
            setTimeout(() => { this.alert.success=''; }, 4*1000);
        }else{
            this.alert.error.push({
              text: "Неизвестная ошибка: " + data.status,
            });
        }
      } catch (error) {
        this.alert.error.push({ text: "Ошибка отправки данных?" });
      }
      
    },
    checklogin() {
      this.valLogin.login = this.valLogin.login.replace(
        /[^\a-\z\A-\Z\а-\я\А-\Я0-9\_\-\\.]/g,
        ""
      );
    },
    checkpassw() {},
  },
    created () {
      let user={};
      user.role=null;
      this.$store.dispatch('update',{role:null}); 

  },
};
</script>
 