// require packages ____________________________________
const express = require('express');
const Project = require('../models/projects');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' });
const authMiddleware = require('../helpers/authMiddleware');
// setting up ..
const router = express.Router();
const { body, validationResult } = require('express-validator');

// POST router ____________________________________________
router.post('/', authMiddleware, (req, res) => {
  let newProject = new Project({ ...req.body, owner: req.userId });
  newProject
    .save()
    .then((project) => {
      res.status(201).send(project);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: 'server error' });
    });
});
// GET projects router ____________________________________
router.get('/', authMiddleware, (req, res) => {
  Project.find()
    .then((projects) => res.send(projects))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: 'server error' });
    });
});
// GET projects router _____________________________________
router.get('/myPosts', authMiddleware, (req, res) => {
  User.find({ owner: req.userId })
    .then((projects) => res.send(projects))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: 'server error' });
    });
});

module.exports = router;
