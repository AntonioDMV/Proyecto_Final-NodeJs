const Orders = require('../models/order.models')
const ProductsInOrder = require('../models/productInOrder.models')
const OrderService = require('../services/order.services')




const getAllOrders = async (req, res, next) => {
    try {
        const getOrder = await Orders.findAll()
        res.json(getOrder)
    } catch (error) {
        next(error)
    }
}

const createOrder = async (req, res, next) => {
    try {
        const orderBody = req.body
        await Orders.create(orderBody)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

const addProduct = async (req, res, next) => {
try {
   const {orderId, productId,  quantity, price} = req.body;
   await ProductsInOrder.create({orderId, productId,  quantity, price});
   const total = price * quantity;
   await Orders.increment(total, {where: {id: orderId}});
   res.json({
    message: "The product was successfully added"
   });
} catch (error) {
    next(error);
}
}

const deleteOrder = async (req, res, next) => {
    try {

         const {id} = req.params
        await OrderService.delete(id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllOrders,
    createOrder,
    addProduct,
    deleteOrder
}