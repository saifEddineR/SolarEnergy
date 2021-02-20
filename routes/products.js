// require packages ____________________________________
const express = require('express');
const Product = require('../models/product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' });
const authMiddleware = require('../helpers/authMiddleware');
// setting up ..
const router = express.Router();
const { body, validationResult } = require('express-validator');

// POST a new project router (only superUser) ____________________________________________
router.post('/', authMiddleware, (req, res) => {
  let newProduct = new Product(req.body);
  newProduct
    .save()
    .then((product) => {
      res.status(201).send(product);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ msg: 'server error' });
    });
});
// GET projects router without authentication (for all users)
router.get('/', (req, res) => {
  Product.find()
    .then((products) => res.send(products))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: 'server error' });
    });
});

// UPDATE project router (only superUser) _____________________________________
router.put('/:productId', authMiddleware, (req, res) => {
  const productId = req.params.productId;
  Product.findByIdAndUpdate(productId, { ...req.body })
    .then((product) => {
      if (!product) {
        return res.status(404).send({ msg: 'product not found' });
      }
      res.send({ msg: 'product updated', product });
    })
    .catch((err) => res.status(400).send({ msg: 'ERROR UPDATING PRODUCT' }));
});

// DELETE service router (only superUser) _____________________________________
router.delete('/:productId', authMiddleware, (req, res) => {
  const productId = req.params.productId;
  Product.findByIdAndDelete(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({ msg: 'product not found' });
      }
      res.send({ msg: `product deleted :${product.name}` });
    })
    .catch((err) => res.status(400).send({ msg: 'ERROR UPDATING PRODUCT' }));
});

module.exports = router;
