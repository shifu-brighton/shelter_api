const petModel = require("../models/pets.models");

const getPet = (req, res) => {
    try {
        const pet = petModel.getItem(req.params.id);
        res.status(200).send(pet);

    } catch (err) {
        res.status(500).send(err)
    }
}

const listPets = (req, res) => {
    try {
        const resp = petModel.listItems()
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const editPet = (req, res) => {
    try {
        const resp = petModel.editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

const addPet = (req, res) => {
    try {
        const resp = petModel.addItem(req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

const deletePet = (req, res) => {
    try {
        const resp = petModel.deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { getPet, listPets, editPet, addPet, deletePet }

/* 
    *Controllers are functions that each endpoint reques will call.
    *They are responsible for handling the request and sending a response
    *They recieve the request and response objects as parameters
    *In the request object, we can access the request parameters, the request body, the request headers, etc
    *we will use the request parameters to get the id of the pet that we want to get, edit or delete from the database
    *We will use the request body to get the data that we want to add to the database
    *Each controller calls a specific function from the model
*/