var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var logger = require('morgan');
const cors = require('cors');
var bcrypt = require('bcrypt');

// config
const config = require('./cfg/config.json');

var app = express();

app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, 'views'));

// Session
app.use(cookieParser(config.session_secret));
app.use(expressSession({secret: config.session_secret,}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Access-Control-Allow-Origin
var corsOptions = {
  origin: 'http://localhost:'+config.Vue_PORT,
  optionsSuccessStatus: 200,
  credentials: true,
}
app.use(cors(corsOptions));

// DB
const sequelize = require('./models/sequelize').sequelize;
(async () => {
  DBsync=await sequelize.sync({ alter: true });
})();
// Add defolt User Admin 
// -- on
const Users = require(`./models/sequelize`).Users;
let Val = {};
  Val.login = 'Admin';
  Val.email = 'mail@mail.com';
  Val.passw = bcrypt.hashSync('123', config.salt_passw);
     try {
        (async () => {
          //---
          const DBadd = await Users.findOrCreate({
            where: { login: Val.login },
            defaults: Val,
          });
          if (DBadd.isNewRecord) {
            console.log("Add defolt User Admin - ok");
          } else {
            console.log("Add defolt User Admin - user already exists" );
          }
          //---
        })();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
//--- off


// Router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/tasks');
// --
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

// catch 404
app.use(function(req, res, next) {
  //next(createError(404));
  res.send("error 404");
  
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}