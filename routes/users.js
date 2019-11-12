'use strict'
const express   = require('express');
const router    = express.Router();

// import users controller
const { seedData, getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./../controllers/users-controller');

router.post('/seed', seedData);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router