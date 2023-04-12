const PorductService = require("../services/product.services");


const getAllProduct = async (req, res, next) => {
    try {
      const getProduc = await PorductService.getAll()
      res.status(201).json(getProduc)
    } catch (error) {
      next(error)
    }
  }


  const updateProductDescription = async (req, res, next) => {
    try {
      const {id} = req.params
      const updateDescription = req.body
       await PorductService.updatess(updateDescription, id)
      res.status(204).send()
    } catch (error) {
      next(error)
    }
  }



const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await PorductService.create(newProduct);
        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
};


module.exports = {
    createProduct,
    getAllProduct,
    updateProductDescription,
}