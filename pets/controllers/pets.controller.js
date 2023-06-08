import {getItem, listItems, editItem, addItem, deleteItem} from "../models/pets.model.js";

export const getPet = (req, res) => {
    try {
        const pet = getItem(req.params.id);
        res.status(200).send(pet);

    } catch (err) {
        res.status(500).send(err)
    }
}

export const listPets = (req, res) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)

    }catch (err) {
        res.status(500).send(err)
    }
}

export const editPet = (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    }catch (err) {
        res.status(500).send(err)
    }
}

export const addPet = (req, res) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)

    }catch (err) {
        res.status(500).send(err)
    }
}

export const deletePet = (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    }catch (err) {
        res.status(500).send(err)
    }
}

/* 
    *Controllers are functions that each endpoint reques will call.
    *They are responsible for handling the request and sending a response
    *They recieve the request and response objects as parameters
    *In the request object, we can access the request parameters, the request body, the request headers, etc
    *we will use the request parameters to get the id of the pet that we want to get, edit or delete from the database
    *We will use the request body to get the data that we want to add to the database
    *Each controller calls a specific function from the model
*/