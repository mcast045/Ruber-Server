'use strict'
const express   = require('express');
const router    = express.Router();

// import rides controller
const { seedData, getAllRides, getRideById, createRide, updateRide, deleteRide } = require('./../controllers/rides-controller');

router.post('/seed', seedData);
router.get('/', getAllRides);
router.get('/:id', getRideById);
router.post('/', createRide);
router.put('/:id', updateRide);
router.delete('/:id', deleteRide);

module.exports = router