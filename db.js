const db = {
    pets: [
        {
            id: 1,
            name: 'Bingo',
            type: 'dog',
            breed: 'German Shepherd',
            age: 3,
            color: 'brown',
            weight: 50,
        },
        {
            id: 2,
            name: 'Mittens',
            type: 'cat',
            breed: 'Persian',
            age: 2,
            color: 'white',
            weight: 10,
        },
        {
            id: 3,
            name: 'Goldie',
            type: 'fish',
            breed: 'Goldfish',
            age: 1,
            color: 'orange',
            weight: 0.5,
        },
        {
            id: 4,
            name: 'Buddy',
            type: 'dog',
            breed: 'Beagle',
            age: 4,
            color: 'brown',
            weight: 30,
        },
    ]
}

module.exports = db;

/* 
*db object contains a pets property whose value is an array of objects, each object being a pet
*each pet has an id, name, type, breed, age, color, and weight
*the id is a number, the name is a string, the type is a string, the breed is a string, the age is a number, the color is a string, and the weight is a number
*the id is unique to each pet
*/
