const Sequelize = require('sequelize');
//creating instance of sequelize
const sequelize = new Sequelize({
  database: 'Wishlist',
  username: 'root',
  password: '',
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//sequelize won't create database??
// sequelize
//   .query("CREATE DATABASE IF NOT EXISTS `Wishlist`;")
//   .then(data => console.log('create database', data))

//model
const Item = sequelize.define('item', {
    name: Sequelize.STRING,
    bought: Sequelize.BOOLEAN
})

Item.sync({force: true}).then(() => console.log('table created'))

addItem = (itemName, callback) => {
  Item
  .findOrCreate({where: {name: itemName}})
  .then(callback)
}




  module.exports = {
    db: sequelize,
    addItem: addItem,
  }