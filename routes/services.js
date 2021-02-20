// require packages ____________________________________
const express = require('express');
const Service = require('../models/service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' });
const authMiddleware = require('../helpers/authMiddleware');
// setting up ..
const router = express.Router();
const { body, validationResult } = require('express-validator');

// POST a new service router (only superUser) ____________________________________________
router.post(
  '/',
  [
    body('title', 'name should only contain alphabetic characters').isLength({ min: 5 }),
    body('desc', 'description should not be empty').isLength({ min: 1 }),
    body('img', 'image input should not be empty').isLength({ min: 1 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      next();
    }
  }
);
router.post(
  '/',
  authMiddleware,

  (req, res) => {
    let newService = new Service(req.body);
    newService
      .save()
      .then((service) => {
        res.status(201).send(service);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ msg: 'server error' });
      });
  }
);
// GET services router without authentication (for all users)
router.get('/', (req, res) => {
  Service.find()
    .then((services) => res.send(services))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: 'server error' });
    });
});

// UPDATE service router (only superUser) _____________________________________
router.put('/:serviceId', authMiddleware, (req, res) => {
  const serviceId = req.params.serviceId;
  Service.findByIdAndUpdate(serviceId, { ...req.body })
    .then((service) => {
      if (!service) {
        return res.status(404).send({ msg: 'service not found' });
      }
      res.send({ msg: 'service updated', service });
    })
    .catch((err) => res.status(400).send({ msg: 'ERROR UPDATING SERVICE' }));
});
// DELETE service router (only superUser) _____________________________________
router.delete('/:serviceId', authMiddleware, (req, res) => {
  const serviceId = req.params.serviceId;
  Service.findByIdAndDelete(serviceId)
    .then((service) => {
      if (!service) {
        return res.status(404).send({ msg: 'service not found' });
      }
      res.send({ msg: `service deleted :${service.title}` });
    })
    .catch((err) => res.status(400).send({ msg: 'ERROR UPDATING SERVICE' }));
});

module.exports = router;
