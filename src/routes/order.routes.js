const Router = require('express')
const { createOrder, addProduct, getAllOrders } = require('../controllers/order.controller')
const { createOrderValidatior } = require('../validators/order.validators')
const { createProductInOrder } = require('../validators/productInOrder.validator')

const router = Router()

router.get('/api/v1/order', getAllOrders)

router.post('/api/v1/orders', createOrderValidatior, createOrder)

router.post('/api/v1/orders/add', createProductInOrder ,addProduct)

module.exports = router