const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Products = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'available_qty'
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_available',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    productImage: {
       type: DataTypes.STRING 
    } 
});


module.exports = Products;