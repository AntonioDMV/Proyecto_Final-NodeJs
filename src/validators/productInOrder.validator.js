const { check } = require("express-validator")
const validationResults = require("../utils/validate")

const createProductInOrder = [
    check("orderId")
        .exists()
        .withMessage('orderId must exist')
        .notEmpty()
        .withMessage('orderId must bot be empty')
        .isInt()
        .withMessage('orderId must be an integer'),
    check('productId')
        .exists()
        .withMessage('productId must exist')
        .notEmpty()
        .withMessage('productId must bot be empty')
        .isInt()
        .withMessage('productId must be an integer'),
    check('quantity')
        .exists()
        .withMessage('productsId must exist')
        .notEmpty()
        .withMessage('productsId must bot be empty')
        .isInt()
        .withMessage('productsId must be an integer'),
    check('price')
        .exists()
        .withMessage('price must exist')
        .notEmpty()
        .withMessage('price must bot be empty')
        .isFloat()
        .withMessage('price must be float'),
    // check('isAvailable')
    //     .exists()
    //     .withMessage('isAvailable must exist')
    //     .notEmpty()
    //     .withMessage('isAvailable must not be empty')
    //     .isBoolean()
    //     .withMessage('isAvailable must be a Boolean'),
        (req, res, next) => {
            validationResults(req, res, next)
        }

]

const updateProductInOrder = [
    check('productId')
    .exists()
    .withMessage('productId must exist')
    .notEmpty()
    .withMessage('productId must bot be empty')
    .isInt()
    .withMessage('productId must be an integer'),
check('quantity')
    .exists()
    .withMessage('quantity must exist')
    .notEmpty()
    .withMessage('quantity must bot be empty')
    .isInt()
    .withMessage('quantity must be an integer'),
check('price')
    .exists()
    .withMessage('price must exist')
    .notEmpty()
    .withMessage('price must bot be empty')
    .isFloat()
    .withMessage('price must be float'),
check('isAvailable')
    .exists()
    .withMessage('isAvailable must exist')
    .notEmpty()
    .withMessage('isAvailable must bot be empty')
    .isBoolean()
    .withMessage('isAvailable must be a Boolean'),
    (req, res, next) => {
        validationResults(req, res, next)
    }
]

module.exports = {
    createProductInOrder,
    updateProductInOrder
}