const { Sequelize,DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Users = sequelize.define("Users", {
  id:{
      type: Sequelize.UUID, 
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true        
  },
  login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
},
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true,
      }
  },
  passw:{
    type: DataTypes.STRING,
    allowNull: false
  },
  role:{
    type: DataTypes.STRING
  },
  status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
  }
});
return Users;
};