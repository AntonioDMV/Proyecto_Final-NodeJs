const Carts = require('../models/cart.models')
const Users = require('../models/users.models')
const Products = require('../models/product.models')
const ProductsInCart = require('../models/productInCart.models')

class CarService {
static async getByid(idUsePro){
    try {
        const getP = await Carts.findByPk(idUsePro, {
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            include: [
                {
                    model: Users,
                    attributes: ["username"],
                    include: {
                        model: Products,
                        attributes: ["name", "description",]
                    }
                },
                {
                    model: ProductsInCart,
                    attributes: ["quantity", "price"]
                }
            ]
        })
      return getP
    } catch (error) {
    console.log(error)
    }
}
}
module.exports = CarService