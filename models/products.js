const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  img: String,
  price: String,
  status: Boolean,
  desc: String,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('product', productSchema);
