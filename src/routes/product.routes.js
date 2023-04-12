const {Router} = require('express')
const { updateProductDescription, getAllProduct, createProduct,} = require('../controllers/product.controller')
const { createProductValidatior, updateProductValidatior } = require('../validators/product.validators')

const router= Router()

router.get('/api/v1/product', getAllProduct)

router.post('/api/v1/products', createProduct)

router.put('/api/v1/products/:id', updateProductValidatior, updateProductDescription)

module.exports = router;