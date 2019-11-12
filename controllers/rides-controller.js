'use strict'
const Ride  = require('./../models/rides');
const Data  = require('./../data/rides');

const seedData = (req, res) => {
    Ride.create(Data)
        .then(rides => {
            res.status(200).send({ success: true, data: rides});
        })
        .catch(error => {
            res.status(500).send({ success: false, error: error.message});
        });

}

const getAllRides = (req, res) => {
    Ride.find()
        .exec((err, rides) => {
            if (err) { res.status(500).send({ success: false, error: err.message}); }
            else if (rides.length === 0) { res.status(404).send({ success: false, message: 'There were no rides found.' }); }
            else { res.status(200).send({ success: true, data: rides }); }
        });
}

const getRideById = (req, res) => {
    const { id } = req.params;
    Ride.findById(id)
        .exec((err, ride) => {
            if (err) { res.status(500).send({ success: false, error: err.message}); }
            else if (!ride) { res.status(404).send({ success: false, message: 'There were no rides found.' }); }
            else { res.status(200).send({ success: true, data: ride }); }
        });
}

const createRide = (req, res) => {
    const ride = {...req.body};
    Ride.create(ride)
        .then((ride) => {
            getAllRides(req, res); // returns all rides after creating a new one
        })
        .catch(err => res.status(500).send({ success: false, error: err.message }));
}

const updateRide = (req, res) => {
    const { id } = req.params;
    const newRide = {...req.body};

    Ride.findByIdAndUpdate(id, {$set: newRide}, {new: true}, (err, ride) => {
        if (err) { res.status(500).send({ success: false, error: err.message}); }
        else if (!ride) { res.status(404).send({ success: false, message: 'There were no rides found.' }); }
        else { getAllRides(req, res); }  // returns all rides after update
    });
}


const deleteRide = (req, res) => {
    const { id } = req.params;
    console.log(`Item to delete ${id} - from node`);
    Ride.findByIdAndDelete(id, (err, ride) => {
        if (err) { res.status(500).send({ success: false, error: err.message}); }
        // else if (!ride) { res.status(404).send({ success: false, message: 'There were no rides found.' }); }
        else { getAllRides(req, res); }  // returns all rides after delete
    });
}




module.exports = {
    seedData,
    getAllRides,
    getRideById,
    createRide,
    updateRide,
    deleteRide
}