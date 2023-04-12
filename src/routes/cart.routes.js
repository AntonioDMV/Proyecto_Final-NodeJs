const {Router} = require('express')
const { createCar, addToCar, getUserProducts } = require('../controllers/cart.controller')
const { createCarValidatior } = require('../validators/cart.validators')
const { createProductIncar } = require('../validators/productInCart.validator')

const router = Router()

router.get('/api/v1/cart/:idUsePro', getUserProducts)

router.post('/api/v1/cart', createCarValidatior, createCar)

router.post('/api/v1/cart/add', createProductIncar, addToCar)

module.exports = router