const Users = require("../models/users.models");
const UserServices = require("../services/user.services");
const transporter = require("../utils/mailer")


const getAllUsers = async (req, res, next) => {
    try {
       const getUsers = await Users.findAll()
       res.json(getUsers)
    } catch (error) {
       next(error)
    }
 }

const createUser = async ( req, res, next ) => {
    try {
        const newUser = req.body;
        const users = await UserServices.create(newUser);
        res.status(201).send()
        await transporter.sendMail({
            from: "danielantonio.developer@gmail.com",
            to: users.email,
            subject: 'Tu cuenta ha sido creada, verifica tu email',
            html: `
            <p>Hola ${users.username} Bienvenido a ecommerce API</p>
            <p>Verifica tu correo</p>
            `
            ,
        })
    } catch (error) {
        next(error)
    }
}


const updateUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const { username } = req.body;
        await UserServices.update(id, {username});
        res.status(204).send();
    } catch (error) {
        next();
    }
}


const updateAvatar = async (req, res, next) => {
    try {
       const { id } = req.params
       const updateBodyAv = req.body
       await UserServices.updatesAvatar(updateBodyAv, id)
       res.status(204).send()
    } catch (error) {
       next(error)
    }
 }


module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updateAvatar,
}