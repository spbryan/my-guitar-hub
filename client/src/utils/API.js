/********************************
  * API.js for My Guitar Hub
  * 
  * Build http requests from react with axios
  * 
  * @author Sean Bryan
  * 
  * 2019-10-04
  ********************************/

import axios from "axios";

export default {

  getSongs: function() {
    return axios.get("/api/songs");
  },

  addSong: function(songData) {
    return axios.post("/api/songs", songData);
  },

  updateSong: function(id, songData) {
    return axios.put("/api/songs/" + id, songData);
  },

  getSongBySongId: function(id) {
    return axios.get("/api/songs/" + id);
  },

  deleteSong: function(id) {
    return axios.delete("/api/songs/" + id);
  }
};
