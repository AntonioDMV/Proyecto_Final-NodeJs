const Orders = require('../models/order.models')
class OrderService {
   static async delete(id){
     try {
        const dlete = await Orders.destroy({
            where: {id}
        })
        return dlete
     } catch (error) {
        throw error
     }
   }
}

module.exports= OrderService