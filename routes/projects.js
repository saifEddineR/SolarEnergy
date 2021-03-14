// require packages ____________________________________
const express = require('express');
const Project = require('../models/project');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' });
const authMiddleware = require('../helpers/authMiddleware');
// setting up ..
const router = express.Router();
const { body, validationResult } = require('express-validator');
const multer = require('multer');
// multer storage _________________________________________________________
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './img-uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
var upload = multer({ storage: storage });
router.post('/upload', upload.single('project'), function (req, res, next) {
  res.send(req.file);
});
// POST a new project router (only superUser) ____________________________________________
router.post('/', [authMiddleware, upload.single('project')], (req, res) => {
  let path = `${req.protocol}://${req.hostname}:5000/img-uploads/${req.file.filename}`;
  let myBody = JSON.parse(req.body.data);
  let newProject = new Project({ ...myBody, imgUpload: path });
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
// GET projects router without authentication (for all users)
router.get('/', (req, res) => {
  Project.find()
    .then((projects) => res.send(projects))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: 'server error' });
    });
});

// UPDATE project router (only superUser) _____________________________________
router.put('/:projectId', authMiddleware, (req, res) => {
  const projectId = req.params.projectId;
  Project.findByIdAndUpdate(projectId, { ...req.body })
    .then((project) => {
      if (!project) {
        return res.status(404).send({ msg: 'project not found' });
      }
      res.send({ msg: 'project updated', project });
    })
    .catch((err) => res.status(400).send({ msg: 'ERROR UPDATING PROJECT' }));
});
// DELETE service router (only superUser) _____________________________________
router.delete('/:projectId', authMiddleware, (req, res) => {
  const projectId = req.params.projectId;
  Project.findByIdAndDelete(projectId)
    .then((project) => {
      if (!project) {
        return res.status(404).send({ msg: 'project not found' });
      }
      res.send({ msg: `project deleted :${project.title}` });
    })
    .catch((err) => res.status(400).send({ msg: 'ERROR UPDATING PROJECT' }));
});

module.exports = router;
