'use strict'
const User  = require('./../models/users');
const Data  = require('./../data/users');

const seedData = (req, res) => {
    User.create(Data)
        .then(users => {
            res.status(200).send({ success: true, data: users});
        })
        .catch(error => {
            res.status(500).send({ success: false, error: error.message});
        });

}

const getAllUsers = (req, res) => {
    User.find()
        .exec((err, users) => {
            if (err) { res.status(500).send({ success: false, error: err.message}); }
            else if (users.length === 0) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
            else { res.status(200).send({ success: true, data: users }); }
        });
}

const getUserById = (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .exec((err, user) => {
            if (err) { res.status(500).send({ success: false, error: err.message}); }
            else if (!user) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
            else { res.status(200).send({ success: true, data: user }); }
        });
}

const createUser = (req, res) => {
    const user = {...req.body};
    User.create(user)
        .then((user) => {
            getAllUsers(req, res); // returns all users after creating a new one
        })
        .catch(err => res.status(500).send({ success: false, error: err.message }));
}

const updateUser = (req, res) => {
    const { id } = req.params;
    const newUser = {...req.body};

    User.findByIdAndUpdate(id, {$set: newUser}, {new: true}, (err, user) => {
        if (err) { res.status(500).send({ success: false, error: err.message}); }
        else if (!user) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
        else { getAllUsers(req, res); }  // returns all users after update
    });
}


const deleteUser = (req, res) => {
    const { id } = req.params;
    console.log(`Item to delete ${id} - from node`);
    User.findByIdAndDelete(id, (err, user) => {
        if (err) { res.status(500).send({ success: false, error: err.message}); }
        else if (!user) { res.status(404).send({ success: false, message: 'There were no users found.' }); }
        else { getAllUsers(req, res); }  // returns all users after delete
    });
}




module.exports = {
    seedData,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}