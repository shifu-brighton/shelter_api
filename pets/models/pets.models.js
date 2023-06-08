import db from '../../db/db.js';


export const getItem = (id) => {
    try{
        const pet = db?.pets?.filter(pet => pet?.id === id)[0]
        return pet

    }catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try{
        return db?.pets

    }catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try{
        const index = db.pets.findIndex(pet => pet.id === id)

        if(index === -1) throw new Error('Pet not found')
        else {
            db.pets[index] = data 
            return db.pets[index]

        }

    }catch (err) {
        console.log('Error', err)
    }
}

export const addItem = data => {
    try{
        const newPet = {id: db.pets.length + 1, ...data}
        db.pets.push(newPet)
        return newPet

    }catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
          //delete item from db
          const index = db.pets.findIndex(pet => pet.id === id)

          if (index === -1) throw new Error('Pet not found')
            else {
                   db.pets.splice(index, 1)
                   return db.pets
            }

        }catch (err) {
            
    }
}
/* 
*These are functions responsible for interacting with the database and returning the correspongin information to our controllers
*The functions are exported and imported into the controllers
*The controllers then use the functions to interact with the database
*The controllers then return the information to the routes
*The routes then return the information to the client
*/