var Sequelize = require('sequelize');
const config = require('../../cfg/config.json');

// initialize database connection

var sequelize = new Sequelize(config.DBSequelize.dbname, config.DBSequelize.user, config.DBSequelize.passw, {
  host: config.DBSequelize.host,
  dialect: config.DBSequelize.typeDB,
  define: {freeTableName: true, },
  pool: {
    max: 10,
    min: 1,
    acquire: 30000,
    idle: 10000
  }
});

const Users = require(`./users`)(sequelize);
const Tasks = require(`./tasks`)(sequelize);

module.exports.Users=Users;
module.exports.Tasks=Tasks;

try {
  (async () => {
    await sequelize.authenticate();
  })();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// export connection
module.exports.sequelize = sequelize;