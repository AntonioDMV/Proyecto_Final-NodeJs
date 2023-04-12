const { Router } = require('express');
const { createUser, updateUser, updateAvatar, getAllUsers } = require('../controllers/user.controller');
const { createUserValidator, updateUserValidator } = require('../validators/user.validators');

const router = Router();

router.get('/api/v1/users', getAllUsers);
router.post('/api/v1/user', createUserValidator, createUser );
router.put('/api/v1/user/:id', updateUserValidator ,updateUser);
router.put('/api/v1/avatar/:id', updateAvatar);

module.exports = router;