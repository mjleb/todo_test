<template>
  <div
    class="alert alert-danger text-left alert-dismissable"
    v-if="alert.error.length != 0"
  >
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

    <div class="h6"><i class="fa fa-exclamation-triangle"></i> Ошибка</div>
    <div v-for="msg in alert.error" class="unstyled">
      <div v-if="msg.status === 400">
        <span v-html="msg.text"> </span><br />&nbsp;&nbsp;Ошибка
        {{ msg.status }} - неверный запрос.
      </div>
      <div v-else-if="msg.status === 401">
        <span v-html="msg.text"> </span><br />&nbsp;&nbsp;Ошибка
        {{ msg.status }} - не авторизован.
      </div>
      <div v-else-if="msg.status === 404">
        <span v-html="msg.text"> </span><br />&nbsp;&nbsp;Ошибка
        {{ msg.status }} - не найдено.
      </div>
      <div v-else-if="msg.status === 500">
        <span v-html="msg.text"> </span><br />&nbsp;&nbsp;Ошибка
        {{ msg.status }} - внутренняя ошибка сервера.
      </div>
      <div v-else>
        <span v-html="msg.text"> </span
        ><span v-if="msg.status"
          ><br />&nbsp;&nbsp;Ошибка {{ msg.status }}.</span
        >
      </div>
    </div>
  </div>
  <div
    class="alert alert-success text-left alert-dismissable"
    v-if="alert.success.length != 0"
  >
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="h6"><i class="fa fa-check-circle"></i> Успешно</div>
    <div v-for="msg in alert.success">
      <div><span v-html="msg.text"> </span></div>
    </div>
  </div>
  <div
    class="alert alert-info text-left alert-dismissable"
    v-if="alert.info.length != 0"
  >
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="h6"><i class="fa fa-info-circle"></i> Информация</div>
    <div v-for="msg in alert.info">
      <div><span v-html="msg.text"> </span></div>
    </div>
  </div>
</template>

 

<script>
/*
 import Alert from '@/components/alert.vue';
 ========================
 <Alert :alert="alert"  />
 =======================
    alert:{
        'error':[],
        'info':[],
        'success':[],
    },
=================
  components: {
      Alert,
  },
=================
              this.alert.error.push({"text": 'ошибка '});
              this.alert.info.push({"text": 'инфо'});
              this.alert.success.push({"text": 'успешно'});

*/
export default {
  name: "Alert",
  props: ["alert"],
};
</script>