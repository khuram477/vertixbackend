const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    jobtitle: String,
    jobposition: String,
    location:String,
   
});

module.exports = mongoose.model("products", ProductSchema);


  