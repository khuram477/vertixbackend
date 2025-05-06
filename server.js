const express = require('express');
const colors = require('colors');
const dbConnection = require('./config/dbcon');
const dotenv = require('dotenv').config();
const Productmodel = require('./config/Product');
const cors = require('cors');

// Connect to MongoDB
dbConnection();

// Initialize App
const app = express();
app.use(express.json());
app.use(cors());

/* -------------------- PRODUCT ROUTES -------------------- */

// Save Product (only jobtitle, jobposition, location)
app.post("/saveproduct", async (req, res) => {
    try {
        const { jobtitle, jobposition, location } = req.body;

        const newProduct = new Productmodel({
            jobtitle,
            jobposition,
            location,
        });

        const savedProduct = await newProduct.save();
        res.send(savedProduct);
    } catch (err) {
        console.error('❌ Save Product Error:', err);
        res.status(500).send({ error: 'Failed to save product' });
    }
});

// Get All Products
app.get("/getproduct", async (req, res) => {
    try {
        const result = await Productmodel.find();
        res.send(result);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch products' });
    }
});

// Delete Product by ID
app.delete("/deleteproduct/:id", async (req, res) => {
    try {
        const result = await Productmodel.deleteOne({ _id: req.params.id });
        res.send({ message: 'Product deleted successfully', result });
    } catch (err) {
        res.status(500).send({ error: 'Failed to delete product' });
    }
});

/* -------------------- START SERVER -------------------- */
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`.bgMagenta);
});
