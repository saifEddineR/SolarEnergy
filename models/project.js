const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  // owner: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'user',
  // },
  title: String,
  img: String,
  desc: String,
  imgUpload: String,
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('project', ProjectSchema);
