const bcrypt = require('bcrypt');
const UserServices = require('../services/user.services');

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserServices.getUser(email);
        if (!user) {
            return next ({
                status: 400,
                message: 'Invalid email',
                error: 'User not found'
            })
        }

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return next ({
                status: 400,
                message: "The password doesn't match with emai User",
                error: 'Invalid Password'
            })
        }

        const {
            id,
            username,
        } = user;
        res.json({
            id,
            username,
            email,
        })
        
    } catch (error) {
        next(error)
    }
};


module.exports = {
    userLogin,
}