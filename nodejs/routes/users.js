var express = require('express');
var router = express.Router();
const Users = require(`../models/sequelize`).Users;
var bcrypt = require('bcrypt');
const config = require('../cfg/config.json');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* POST add */
router.post('/add', function (req, res, next) {
  let res_status = 200;
  let error = 0;
  let Val = {};
  Val.login = req.body.login;
  Val.email = 'mail@mail.com';
  Val.passw = req.body.passw;
  //validate
  if (Val.login == '') { error = 1; }
  if (Val.email == '') { error = 1; }
  if (Val.passw == '') { error = 1; }
  // go
  if (error == 0) {
    //--- on
    Val.passw = bcrypt.hashSync(Val.passw, config.salt_passw);
    Val.status = 0;
    Val.role = 'admin';
    //============== create
    try {
      (async () => {
        //---
        const DBadd = await Users.findOrCreate({
          where: { login: Val.login },
          defaults: Val,
        });
        if (DBadd.isNewRecord) {
          res.status(res_status).send({ status: "ok" });
        } else {
          res.status(res_status).send({ status: "error", text: "Пользователь уже существует" });
        }
        //---
      })();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    //--- off
  } else {
    res.status(res_status).send({ status: "error", text: "Ошибка заполенния обязательных полей" });
  }
});

/* POST  login*/
router.post('/login', function (req, res) {
  let res_status = 200;
  let error=0;
 
  try {
    (async () => {
      let userr = await Users.findOne({ where: { login: req.body.login } });
      if (userr === null) {
        req.session.role = '';
        res.status(res_status).send({ status: "error", role: "", text: "Пользователь не найден" });
        error=1;
      } 
      if (userr !== null && bcrypt.hashSync(req.body.passw, config.salt_passw) !=userr.passw) {
        req.session.role = '';
        res.status(res_status).send({ status: "error", role: "", text: "Пароль не верный" });
        error=1;
      }
      if(error==0){
        req.session.role = 'admin';
        res.status(res_status).send({ status: "ok", role: "admin" });
      }
    })();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
/* POST  */
router.get('/logout', function (req, res) {
  let res_status = 200;
  delete req.session.role;
  res.status(res_status).send('ok');

});

module.exports = router;
