const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const ProductsInCart = db.define('product_in_carts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'cart_id',
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


module.exports = ProductsInCart;