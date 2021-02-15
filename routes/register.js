// require packages ____________________________________
const express = require('express');
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' });
// setting up ..
const router = express.Router();
const { body, validationResult } = require('express-validator');

// register user ________________________________________
router.post(
  '/',
  [
    body('name', 'name should only contain alphabetic characters').isAlpha(),
    body('password', 'password should be more than 5 characters').isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.find({ name: req.body.name }).then((users) => {
      if (users.length) {
        return res
          .status(400)
          .send({ errors: [{ msg: 'user is already registered !' }] });
      }
      let newUser = new User(req.body);
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, (err, hashedpwd) => {
          if (err) {
            console.log(err);
          } else {
            newUser.password = hashedpwd;
            newUser.save();

            let payload = {
              userId: newUser._id,
            };
            jwt.sign(payload, process.env.SECRET_KEY, (error, token) => {
              if (error) throw error;
              else res.send({ token });
            });
          }
        });
      });
    });
  }
);

module.exports = router;
