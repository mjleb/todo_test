export default function (instance) {
    return {
        validEmail: function (email) {
            var re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яА-Я\-0-9]+\.)+[a-zA-Zа-яА-Я]{2,}))$/;
            return re.test(email);
          },
        checkInputEmail: function () {
            this.valAdd.email = this.valAdd.email.replace(
              /[^\a-\z\A-\Z0-9\А-Я\а-я\-._@]/g,
              ""
            );
          },
          checkInputName: function () {
            this.valAdd.name = this.valAdd.name.replace(
              /[^\a-\z\A-\Z\а-\я\А-\Я0-9\_\-\ \.]/g,
              ""
            );
          },
          checkInputText: function () {
            this.valAdd.text = this.valAdd.message.replace(
              /[^\a-\z\A-\Z0-9\А-Я\а-я\ \!"#$%&'()*+,-./:;<=>?@\[\]_`{|}~]/g,
              ""
            );
          },
    }
}