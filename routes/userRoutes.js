// const express = require('express');
const userController = require('../controllers/userController');
const router = require('express').Router();

router.post('/users', userController.createUser);

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
// router.get('/users/search', userController.findUsersByName);

router.put('/users/:id', userController.updateUser);

router.delete('/users/:id', userController.deleteUser);


module.exports = router;
