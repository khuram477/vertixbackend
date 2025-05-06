const mongoose = require('mongoose')
const colors = require('colors')

const dbConnection = async() =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/myDatabase");
        console.log(`Datbase connected successfully`.bgGreen)        
    } catch (error) {
        console.log(`Error in DB Connection: ${error.message}`.bgRed);
    }
}

module.exports = dbConnection







// mongodb://localhost:27017