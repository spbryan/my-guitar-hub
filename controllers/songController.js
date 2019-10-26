/********************************
 * Controller directing data manipulation for Song Model
 * 
 * @author Sean Bryan
 * 
 * 2019-09-28
 ********************************/
const db = require("../models");

// Defining methods for the Controller
module.exports = {
  findAll: function(req, res) {
    db.Song.find(req.query)
      .then(dbSong => res.json(dbSong))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Song.findById(req.params.id)
      .then(dbSong => res.json(dbSong))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function(req, res) {
    db.Song.find({userId:req.params.id})
      .then(dbSong => res.json(dbSong))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("<debug> inside create and " + JSON.stringify(req.body));
    db.Song.create(req.body)
      .then(dbSong => res.json(dbSong))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Song.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbSong => res.json(dbSong))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Song.findById(req.params.id)
      .then(dbSong => dbSong.remove())
      .then(dbSong => res.json(dbSong))
      .catch(err => res.status(422).json(err));
  }
};