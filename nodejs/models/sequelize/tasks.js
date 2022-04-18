const {  Sequelize,DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Tasks = sequelize.define("Tasks", {
    id:{
        type: Sequelize.UUID, 
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true        
    },
    name: {type: DataTypes.STRING },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true, 
        }
    },  
    message: {type: Sequelize.TEXT},
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    changetext:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});
return Tasks;
};