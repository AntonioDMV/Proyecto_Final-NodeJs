const Carts = require('../models/cart.models')
const ProductsInCart = require('../models/productInCart.models')
const CarService = require('../services/car.services')

const  getUserProducts = async (req,res, next) => {
    try {
        const {idUsePro} = req.params
        const getUserP = await CarService.getByid(idUsePro)
        res.json(getUserP)
    } catch (error) {
        next(error)
    }
}

const createCar = async(req, res, next) => {
    try {
        const carBody = req.body
        await Carts.create(carBody)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}


const addToCar = async (req, res, next) => {
    try {
       const {cartId, productId,  quantity, price, status} = req.body;
       await ProductsInCart.create({cartId, productId,  quantity, price, status});
       const totalPrice = price * quantity;
       await Carts.increment(totalPrice, {where: {id: cartId}});
       res.json({
        message: "The car was successfully added"
       });
    } catch (error) {
        next(error);
    }
    }

module.exports = {
    getUserProducts,
    createCar,
    addToCar
}