const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Orders = db.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'total_price',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_completed',
    },
});


module.exports = Orders;