const Sequelize = require('sequelize')
const db = {}

//Connection with MySQL Database(databasename,root,password)
const sequelize = new Sequelize('nodejs_login1', 'root', 'shashwat', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

})

db.Sequelize = Sequelize

module.exports = db
