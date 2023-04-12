const { check, param } = require('express-validator');
const validateResult = require('../utils/validate');

const createUserValidator = [
check('username', 'Error en el campo username')
    .exists().withMessage('El username debe de existir')
    .notEmpty().withMessage('El username no debe de estar vacio')
    .isString().withMessage('El username debe deser un string')
    .isLength({min: 6}).withMessage('El username debe de tener una longitud de 6 o mas caracteres'),
check('email', 'Error con el correo electronico')
    .exists().withMessage('No se encontro la propiedad email')
    .notEmpty().withMessage('No se encontro la propiedad email')
    .isString()
    .isLength({min: 7, max: 50}).withMessage('El correo eletronico debe de tener una longitud entre 7 y 50 caracteres')
    .isEmail().withMessage('El correo electronico debe de tener un formato de correo'),
check('password', 'Error con la contraseña')
    .exists()
    .notEmpty()
    .isString()
    .isLength({min: 7}),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];


const updateUserValidator = [
    param('id').isInt().withMessage('El id debe ser un numero entero'),
    check("username")
    .isString()
    .exists().withMessage('El username no puede ir vacio')
    .notEmpty()
    .withMessage("EL username no debe ser un string vacio"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
]


module.exports = {
    createUserValidator,
    updateUserValidator,
};