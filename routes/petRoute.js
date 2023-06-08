const Router = require("express").Router();

const { listPets, getPet, editPet, addPet, deletePet } = require('../controllers/pets.controllers.js');

const petRoute = Router;

petRoute.get("/:id", getPet);
petRoute.put("/:id", editPet);
petRoute.get("/", listPets);
petRoute.post("/", addPet);
petRoute.delete("/:id", deletePet);


module.exports = petRoute;
