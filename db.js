const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  port:'3306',
  dialect:'mysql'
});
module.exports=sequelize