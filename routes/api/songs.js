/********************************
 * Routes for Songs resources
 * 
 * @author Sean Bryan
 * 
 * 2019-09-28
 ********************************/

const router = require("express").Router();
const songController = require("../../controllers/songController");

// Matches with "/api/songs"
router.route("/")
  .get(songController.findAll)
  .post(songController.create);

// Matches with "/api/songs/:id"
router.route("/:id")
  .get(songController.findById)
  .put(songController.update)
  .delete(songController.remove);

// Matches with "/api/songs/user/:id"
router.route("/user/:id")
  .get(songController.findByUserId)

module.exports = router;
