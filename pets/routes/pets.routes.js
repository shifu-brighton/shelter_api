import express from 'express';
import {listPets, getPet, editPet, addPet, deletePet} from "../controlers/pets.controllers.js";

const router = express.Router();

router.get("/", listPets);
router.get("/:id", getPet);
router.put("/:id", editPet);
router.post("/", addPet);
router.delete("/:id", deletePet);

export default router;

/* 
    *We are initializing the router and then declaring the routes that we want to handle
    *We are importing the functions from the controller and then passing them to the routes
    *The routes are then exported to the app.js file
    *The app.js file is the entry point of the application
    *We are also declaring which endpoint will recieve URL parameters on the requests
*/