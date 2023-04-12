const { check } = require("express-validator");
const validationResults = require("../utils/validate");


const createCarValidatior = [
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

const updateCarvalidatior = [
    check('idUser')
        .exists()
        .withMessage('idUser must exist')
        .notEmpty()
        .withMessage('idUser must bot be empty')
        .isInt()
        .withMessage('idUser must be an integer'),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

module.exports = {
    createCarValidatior,
    updateCarvalidatior
}