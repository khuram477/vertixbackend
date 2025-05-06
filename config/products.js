const mongoose = require('mongoose');

const BestproductsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  Discount: { type: Number, required: true },
  img: {
    data: Buffer,
    contentType: String,
  },
});
module.exports = mongoose.model('Bestproducts', BestproductsSchema);
