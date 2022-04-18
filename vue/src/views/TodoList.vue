<template>
  <div>
    <MenuTop />

    <div class="container">
      <!-- ============================ -->
      <div class="">
        <Alert :alert="alert" />
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="">
            <div class="">
              <div class="row no-gutters">
                <div class="col-xl-10 col-lg-8 col-12"></div>

                <div
                  class="col-xl-2 col-lg-4 col-12 text-right mt-10-mob mb-20"
                >
                  <button
                    class="btn btn-primary btn-md-block"
                    type="button"
                    v-on:click="FormAdd()"
                    data-toggle="modal"
                    data-target="#TaskAddModal"
                  >
                    <i class="fa fa-plus"></i> Добавить
                  </button>
                </div>
              </div>
            </div>
            <div class="ibox-content">
              <div class="mb-20">
                <!--table-responsive -->
                <table class="table table-stripped table-hover table-bordered">
                  <thead class="">
                    <tr>
                      <th>
                        <div class="row no-gutters">
                          <div class="col-md-5 col-sm-12 col-12 mb-10-mob">
                            <div
                              class="btn-group btn-group-sm float-left mr-10"
                              role="group"
                            >
                              <button
                                :class="[
                                  'btn  ',
                                  (sort.field == 'name') &
                                  (sort.order_by == 'asc')
                                    ? ' btn-secondary '
                                    : 'btn-outline-secondary',
                                ]"
                                v-on:click="Sort('name', 'asc')"
                                title="по возрастанию"
                              >
                                <i class="fa fa-sort-up" aria-hidden="true"></i>
                              </button>
                              <button
                                :class="[
                                  'btn  ',
                                  (sort.field == 'name') &
                                  (sort.order_by == 'desc')
                                    ? ' btn-secondary '
                                    : 'btn-outline-secondary',
                                ]"
                                v-on:click="Sort('name', 'desc')"
                                title="по убыванию"
                              >
                                <i
                                  class="fa fa-sort-desc"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                            <div class="float-left">Имя пользователя</div>
                          </div>
                          <div class="col-md-5 col-sm-12 col-12 mb-10-mob">
                            <div
                              class="btn-group btn-group-sm float-left mr-10"
                              role="group"
                            >
                              <button
                                :class="[
                                  'btn  ',
                                  (sort.field == 'email') &
                                  (sort.order_by == 'asc')
                                    ? ' btn-secondary '
                                    : 'btn-outline-secondary',
                                ]"
                                v-on:click="Sort('email', 'asc')"
                                title="по возрастанию"
                              >
                                <i class="fa fa-sort-up" aria-hidden="true"></i>
                              </button>
                              <button
                                :class="[
                                  'btn  ',
                                  (sort.field == 'email') &
                                  (sort.order_by == 'desc')
                                    ? ' btn-secondary '
                                    : 'btn-outline-secondary',
                                ]"
                                v-on:click="Sort('email', 'desc')"
                                title="по убыванию"
                              >
                                <i
                                  class="fa fa-sort-desc"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                            <div class="float-left">Email</div>
                          </div>
                          <div class="col-md-2 col-sm-12 col-12 mb-10-mob">
                            <div
                              class="btn-group btn-group-sm float-left mr-10"
                              role="group"
                            >
                              <button
                                :class="[
                                  'btn  ',
                                  (sort.field == 'status') &
                                  (sort.order_by == 'asc')
                                    ? ' btn-secondary '
                                    : 'btn-outline-secondary',
                                ]"
                                v-on:click="Sort('status', 'asc')"
                                title="по возрастанию"
                              >
                                <i class="fa fa-sort-up" aria-hidden="true"></i>
                              </button>
                              <button
                                :class="[
                                  'btn  ',
                                  (sort.field == 'status') &
                                  (sort.order_by == 'desc')
                                    ? ' btn-secondary '
                                    : 'btn-outline-secondary',
                                ]"
                                v-on:click="Sort('status', 'desc')"
                                title="по убыванию"
                              >
                                <i
                                  class="fa fa-sort-desc"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                            <div class="float-left">Статус</div>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="TasksList.total == 0">
                      <td class="pp-0">
                        <div class="alert alert-light text-center mb-0">
                          задач нет
                        </div>
                      </td>
                    </tr>
                    <tr
                      v-for="(item, indexdevice) in TasksList.tasks"
                      v-bind:key="indexdevice"
                      :class="['  ', item.status == '1' ? '  ' : '']"
                    >
                      <td>
                        <div class="row no-gutters">
                          <div class="col-md-5 col-sm-12 col-sm-12 text-break">
                            <i class="fa fa-user mr-5" aria-hidden="true"></i>
                            <strong> {{ item.name }}</strong>
                          </div>

                          <div class="col-md-5 col-sm-12 col-sm-12 text-break">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            {{ item.email }}
                          </div>
                          <div class="col-md-2 col-sm-12 col-sm-12">
                            <button
                              v-if="UserData.role"
                              :class="[
                                'btn btn-outline-secondary mb-15-mob mt-15-mob',
                                item.status == '1' ? ' text-success' : '',
                              ]"
                              v-on:click="SaveEdit('status', item)"
                              title="Статус"
                            >
                              <i
                                :class="[
                                  'fa ',
                                  item.status == '1'
                                    ? 'fa-check-square-o'
                                    : 'fa-square-o',
                                ]"
                                aria-hidden="true"
                              ></i>

                              {{
                                item.status == "1"
                                  ? "выполнено"
                                  : "не выполнено"
                              }}
                            </button>
                            <div
                              v-if="!UserData.role"
                              :class="[
                                ' ',
                                item.status == '1' ? ' text-success' : '',
                              ]"
                            >
                              <i
                                :class="[
                                  'fa ',
                                  item.status == '1'
                                    ? 'fa-check-square-o'
                                    : 'fa-square-o',
                                ]"
                                aria-hidden="true"
                              ></i>

                              {{
                                item.status == "1"
                                  ? "выполнено"
                                  : "не выполнено"
                              }}
                            </div>
                          </div>
                          <div class="col-xl-12 col-lg-12 col-sm-12 mt-15">
                            <h6><strong>Задача </strong></h6>
                            <p class="text-muted small">
                              <i class="fa fa-calendar" aria-hidden="true"></i>
                              Создано: {{ formatDate(item.createdAt) }}
                            </p>
                            <div class="text-break">
                              {{ item.message }}
                            </div>

                            <div class="row mt-20 no-gutters">
                              <div class="col-10">
                                <p class="text-muted small">
                                  <span
                                    class="text-warning mt-15"
                                    v-if="item.changetext"
                                    >Отредактировано администратором</span
                                  >
                                </p>

                                <button
                                  v-if="UserData.role == 'admin'"
                                  class="btn btn-outline-secondary mb-15-mob"
                                  v-on:click="FormEdit(item)"
                                  data-toggle="modal"
                                  data-target="#TaskEditModal"
                                  title="Редактировать"
                                >
                                  <i class="fa fa-pencil"></i> редактировать
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- ======= -->

              <!-- ======= -->
              <nav aria-label="Page navigation ">
                <ul class="pagination">
                  <li class="page-item">
                    <button
                      class="page-link"
                      v-if="allpages > 1 && page > 1"
                      v-on:click="SellPage(page - 1)"
                      type="button"
                    >
                      <i class="fa fa-chevron-left"></i>
                    </button>
                  </li>
                  <li
                    class="page-item"
                    v-for="(pagenumber, key) in allpages"
                    v-bind:key="key"
                  >
                    <button
                      class="page-link"
                      v-on:click="SellPage(pagenumber)"
                      :class="
                        pagenumber == page
                          ? '  btn btn-outline-secondary page active'
                          : '  btn btn-outline-secondary page '
                      "
                    >
                      {{ pagenumber }}
                    </button>
                  </li>
                  <li class="page-item">
                    <button
                      class="page-link"
                      v-if="page < allpages"
                      v-on:click="SellPage(page + 1)"
                      type="button"
                    >
                      <i class="fa fa-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
              <!-- ======= -->

              <!-- ======= -->
            </div>
          </div>
        </div>
      </div>
      <!-- ============================ -->
      <!-- Button trigger modal -->
      <!-- Modal Add  -->
      <div
        class="modal fade"
        id="TaskAddModal"
        tabindex="-1"
        aria-labelledby="TaskAddModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="TaskAddModalLabel">
                Добавление новой задачи
              </h5>
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
              <Alert :alert="alertAdd" />
              <div class="alert alert-light mb-0">
                <div class="form-group row mb-20">
                  <label class="col-sm-2 col-form-label"
                    >Имя <span class="text-danger">*</span>:</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      v-model.trim="valAdd.name"
                      :input="check_name()"
                      :maxlength="valLimits.maxname"
                      required
                    />
                    <small class="form-text text-muted"
                      >Разрешенные символы: A-zА-я0-9._- . Максимальное
                      количество {{ valLimits.maxname }} символов. Осталось:
                      <span
                        class="input-group-addon"
                        v-text="valLimits.maxname - valAdd.name.length"
                      ></span>
                    </small>
                  </div>
                </div>
                <div class="form-group row mb-20">
                  <label class="col-sm-2 col-form-label"
                    >Email <span class="text-danger">*</span>:</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      v-model.trim="valAdd.email"
                      :input="check_email()"
                      :maxlength="valLimits.maxemail"
                      required
                    />
                    <small class="form-text text-muted"
                      >Максимальное количество {{ valAdd.maxemail }} символов.
                      Осталось:
                      <span
                        class="input-group-addon"
                        v-text="valLimits.maxemail - valAdd.email.length"
                      ></span>
                    </small>
                  </div>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1"
                    >Текст <span class="text-danger">*</span></label
                  >
                  <textarea
                    class="form-control"
                    v-model="valAdd.message"
                    rows="5"
                    :maxlength="valLimits.maxtext"
                    :change="check_text()"
                    required
                  ></textarea>
                  <small class="form-text text-muted"
                    >Максимальное количество {{ valLimits.maxtext }} символов.
                    Осталось:
                    <span
                      class="input-group-addon"
                      v-text="valLimits.maxtext - valAdd.message.length"
                    ></span>
                  </small>
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
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="SaveAdd()"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Edit  -->
      <div
        class="modal fade"
        id="TaskEditModal"
        tabindex="-1"
        aria-labelledby="TaskEditModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="TaskEditModalLabel">
                Редактирование задачи
              </h5>
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
              <Alert :alert="alertEdit" />
              <div class="alert alert-light mb-0">
                <div class="form-group row mb-5">
                  <label class="col-sm-12 col-form-label"
                    >Имя <span class="text-danger">*</span>:
                    <b> {{ valEdit.name }} </b>
                  </label>

                  <label class="col-12 col-form-label"
                    >Email <span class="text-danger">*</span>:
                    <b> {{ valEdit.email }} </b>
                  </label>
                  <label class="col-12 col-form-label">
                    <small
                      ><i class="fa fa-calendar" aria-hidden="true"></i>
                      Создано: {{ valEdit.createdAt }}
                    </small>
                    <br /><small
                      ><i class="fa fa-calendar" aria-hidden="true"></i>
                      Изменено: {{ valEdit.updatedAt }}
                    </small>
                  </label>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1"
                    >Текст <span class="text-danger">*</span></label
                  >
                  <textarea
                    class="form-control"
                    v-model="valEdit.message"
                    rows="5"
                    :maxlength="valLimits.maxtext"
                    :change="check_text()"
                    required
                  ></textarea>
                  <small class="form-text text-muted"
                    >Максимальное количество {{ valLimits.maxtext }} символов.
                    Осталось:
                    <span
                      class="input-group-addon"
                      v-text="valLimits.maxtext - valEdit.message.length"
                    ></span>
                  </small>
                </div>

                <small
                  ><span class="text-danger">*</span> - поля, обязательные для
                  заполнения</small
                >
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Отменить
              </button>
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="SaveEdit('message', valEdit)"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
  <script>
import { mapGetters } from "vuex";
import api from "@/api/index";
import lib from "@/lib/index";
import Alert from "@/components/alert.vue";
import MenuTop from "@/components/menutop.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "TodoList",
  props: ["authrole"],
  components: {
    MenuTop,
    Footer,
    Alert,
  },
  data() {
    return {
      title: "Список задач",
      parents: {},
      alert: {
        error: [],
        info: [],
        success: [],
      },
      alertEdit: {
        error: [],
        info: [],
        success: [],
      },
      alertAdd: {
        error: [],
        info: [],
        success: [],
      },
      sort: {
        field: "",
        order_by: "",
      },
      limit: 3,
      page: 1,
      allpages: 1,
      TasksList: [],
      valLimits: {
        maxname: 100,
        maxemail: 256,
        maxtext: 1000,
      },
      valAdd: {
        name: "",
        email: "",
        message: "",
      },
      valEdit: {
        id: null,
        name: "",
        email: "",
        message: "",
      },
    };
  },
  computed: {
    ...mapGetters(["UserData"]),
  },
  methods: {
    Sort(field, order_by) {
      this.sort.order_by = order_by;
      this.sort.field = field;
      this.page = 1;
      this.GetTaskList();
    },
    SellPage(pagenumber) {
      this.page = pagenumber;
      this.GetTaskList();
    },
    CleanformAdd() {
      this.valAdd.name = "";
      this.valAdd.email = "";
      this.valAdd.message = "";
    },
    CleanformEdit() {
      this.valEdit.id = null;
      this.valEdit.name = "";
      this.valEdit.email = "";
      this.valEdit.message = "";
    },
    CleanAlert() {
      this.alert.error = [];
      this.alert.info = [];
      this.alert.success = [];
    },
    CleanAlertAdd() {
      this.alertAdd.error = [];
      this.alertAdd.info = [];
      this.alertAdd.success = [];
    },
    CleanAlertEdit() {
      this.alertEdit.error = [];
      this.alertEdit.info = [];
      this.alertEdit.success = [];
    },
    async GetTaskList() {
      //==================
      lib.debug.clog("GetTaskList ");
      try {
        const task_list_data = await api.tasks.list({
          field: this.sort.field,
          order_by: this.sort.order_by,
          page: this.page,
        });
        this.TasksList = task_list_data.data;
        this.$store.dispatch("update", { role: this.TasksList.role });
        this.allpages = Math.ceil(task_list_data.data.total / this.limit);
      } catch (error) {
        this.alert.error.push({ text: "Ошибка получения данных" });
      }
    },
    FormAdd() {
      this.CleanAlertAdd();
      this.CleanformAdd();
    },
    async SaveAdd() {
      this.CleanAlertAdd();
      this.CleanAlert();
      let errflag = 0;
      if (
        this.valAdd.name == "" ||
        this.valAdd.email == "" ||
        this.valAdd.message == ""
      ) {
        errflag = 1;
        this.alertAdd.error.push({ text: "Заполните обязательные поля" });
      }
      if (this.valAdd.email != "" && !this.validEmail(this.valAdd.email)) {
        errflag = 1;
        this.alertAdd.error.push({ text: "Введен некорректный email" });
      }
      if (errflag == 0) {
        try {
          const ResSave = await api.tasks.add({ data: this.valAdd });
          if (ResSave.data.id != null) {
            this.alert.success.push({ text: "Задача успешно добавлена" });
            setTimeout(() => {
              this.alert.success = "";
            }, 4 * 1000);
            this.CleanformAdd();
            this.GetTaskList();
            $("#TaskAddModal").modal("hide");
          } else {
            this.alertAdd.error.push({ text: "Не сохранено" });
          }
        } catch (error) {
          this.alertAdd.error.push({ text: "Ошибка сохранения данных" });
        }
      }
    },
    formatDate(date) {
      return date;
    },
    FormEdit(data) {
      this.CleanAlertEdit();
      this.valEdit = data;
    },
    async SaveEdit(fieldUpdate, Val) {
      this.CleanAlert();
      let textalert = "";

      let reqVal = { id: Val.id, fieldupdate: fieldUpdate };
      if (fieldUpdate == "status") {
        reqVal.status = Val.status;
        textalert = "Статус задачи успешно изменен";
      }
      if (fieldUpdate == "message" && Val.message != null) {
        reqVal.message = Val.message;
        textalert = "Тест задачи успешно изменен";
      } else {
        this.alertEdit.error.push({ text: "Заполните обязательные поля" });
      }

      if (reqVal.id != null) {
        try {
          const ResSave = await api.tasks.update(reqVal);
          this.alert.success.push({ text: textalert });
          this.GetTaskList();
          this.CleanformEdit();
        } catch (error) {
          this.alertEdit.error.push({ text: "Ошибка сохранения данных" });
        }

        this.alert.info.push({ text: "Имя: " + Val.name });
        this.alert.info.push({ text: "email: " + Val.email });
        this.alert.info.push({ text: "Задача: " + Val.message });
        // setTimeout(() => {
        //   this.alert.info = "";
        //   this.alert.success = "";
        // }, 4 * 1000);
        $("#TaskEditModal").modal("hide");
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яА-Я\-0-9]+\.)+[a-zA-Zа-яА-Я]{2,}))$/;
      return re.test(email);
    },
    check_email: function () {
      this.valAdd.email = this.valAdd.email.replace(
        /[^\a-\z\A-\Z0-9\А-Я\а-я\-._@]/g,
        ""
      );
    },
    check_name: function () {
      this.valAdd.name = this.valAdd.name.replace(
        /[^\a-\z\A-\Z\а-\я\А-\Я0-9\_\-\ \.]/g,
        ""
      );
    },
    check_text: function () {
      this.valAdd.text = this.valAdd.message.replace(
        /[^\a-\z\A-\Z0-9\А-Я\а-я\ \!"#$%&'()*+,-./:;<=>?@\[\]_`{|}~]/g,
        ""
      );
    },
  },
  mounted() {
    this.GetTaskList();
  },
};
</script>
 