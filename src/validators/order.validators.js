const { check } = require("express-validator");
const validationResults = require("../utils/validate");

const createOrderValidatior = [
    check('userId')
        .exists()
        .withMessage('userId must exist')
        .notEmpty()
        .withMessage('userId must bot be empty')
        .isInt()
        .withMessage('userId must be an integer'),
    check('isCompleted')
        .exists()
        .withMessage('isCompleted must exist')
        .notEmpty()
        .withMessage('isCompleted must bot be empty')
        .isBoolean(),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

const updateOrdersValidatior = [
    check('totalPrice')
        .exists()
        .withMessage('totalPrice must exist')
        .notEmpty()
        .withMessage('totalPrice must bot be empty')
        .isInt()
        .withMessage('totalPrice must be an integer')
        .isFloat(),
    check('userId')
        .exists()
        .withMessage('userId must exist')
        .notEmpty()
        .withMessage('userId must bot be empty')
        .isInt()
        .withMessage('userId must be an integer'),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

module.exports = {
    createOrderValidatior,
    updateOrdersValidatior
}