const express = require('express');
const router = express.Router();
const authMiddleware = require('../helpers/authMiddleware');
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');
require('dotenv').config({ path: './config/.env' });
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//check for authorisation _______________
router.get('/auth', authMiddleware, (req, res) => {
  res.json({ msg: 'authorised' });
});
// load connected users
router.get('/', authMiddleware, (req, res) => {
  User.findById(req.userId)
    .select('-password')
    .then((User) => {
      if (!User) {
        return res.status(404).json({ msg: 'User not found' });
      } else {
        res.status(200).json(User);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ msg: 'server error' });
    });
});

// login user ____________________
router.post(
  '/',
  [
    body('name', 'name should only contain alphabetic characters').isAlpha(),
    body('password', 'please write a password !').notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.findOne({ name: req.body.name }).then((user) => {
      console.log('user: ', user);
      if (!user) {
        return res.status(404).json({ errors: [{ msg: 'please register first' }] });
      }
      bcrypt.compare(req.body.password, user.password, (err2, isMatch) => {
        if (err2) {
          console.log(err2);
        } else if (!isMatch) {
          return res.json({ errors: [{ msg: 'wrong password !' }] });
        } else {
          let payload = {
            userId: user._id,
          };
          jwt.sign(payload, process.env.SECRET_KEY, (error, token) => {
            if (error) throw error;
            else res.send({ token });
          });
        }
      });
    });
  }
);

module.exports = router;
