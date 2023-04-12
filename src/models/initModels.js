const User = require('./users.models');
const Product = require('./product.models');
const Cart = require('./cart.models');
const ProductInCart = require('./productInCart.models');
const Order = require('./order.models');
const ProductInOrder = require('./productInOrder.models');

const initModels = () => {
    User.hasMany(Order, {foreignKey: 'user_id'});
    Order.belongsTo(User, {foreignKey: 'user_id'});

    User.hasMany(Cart, { foreignKey: 'user_id'});
    Cart.belongsTo(User, { foreignKey: 'user_id'});

    User.hasMany(Product, { foreignKey: 'user_id'});
    Product.belongsTo(User, { foreignKey: 'user_id'});

    
    Product.hasMany(ProductInOrder, { foreignKey: 'product_id' })
    ProductInOrder.belongsTo(Product, { foreignKey: 'product_id' })


    Product.hasMany(ProductInCart, { foreignKey: 'product_id' })
    ProductInCart.belongsTo(Product, { foreignKey: 'product_id' })


    Order.hasMany(ProductInOrder, { foreignKey: 'order_id' }) 
    ProductInOrder.belongsTo(Order, { foreignKey: 'order_id' })


    Cart.hasMany(ProductInCart, { foreignKey: 'cart_id' })
    ProductInCart.belongsTo(Cart, { foreignKey: 'cart_id' })
};


module.exports = initModels;