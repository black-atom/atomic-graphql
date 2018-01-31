const Sequelize = require('sequelize');
const { sequelize } = require('../db')

const Product = sequelize.define('product', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: Sequelize.STRING,
    quantity:  Sequelize.INTEGER
});

Product.sync({force: true}).then(() => { });

module.exports = {
    Product
}
