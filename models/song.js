const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  genre: { type: String, required:true },
  guitarType: { type: String, required:true },
  artist: { type: String, required:true },
  lyrics: { type: String },
  musicLinks: { type: [String]},
  videoLinks: { type: [String]},
  instructLinks: { type: [String]},
  tabLinks: { type: [String]},
  proficiencyRating: { type: String, required: true },
  image: { type: String}
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
