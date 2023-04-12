const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const ProductsInOrder = db.define('product_in_orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_id',
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id',
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    // isAvailable: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false,
    //     field: 'is_available',
    // },
});


module.exports = ProductsInOrder;