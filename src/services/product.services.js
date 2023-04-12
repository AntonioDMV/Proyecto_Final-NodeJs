const Products = require("../models/product.models");


class ProductService {

    static async getAll(){
        try {
            const getP = await Products.findAll()
            return getP
        } catch (error) {
            throw error
        }
    }

    static async create(newProduct) {
        try {
            const createP = await Products.create(newProduct)
            return createP
        } catch (error) {
            throw error
        }
    }

    static async updatess(updateDescription, id){
        try {
            const updateDescri = await Products.update(updateDescription, {
                where: {id}
            })
            return updateDescri
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductService