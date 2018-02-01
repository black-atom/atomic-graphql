const Sequelize = require('sequelize');


module.exports = (db) => {
    const product = db.define('Product', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: Sequelize.STRING,
        quantity:  Sequelize.INTEGER
    });

    product.associate = ({}) => {
    }

    return product
}



