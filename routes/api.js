const router = require("express").Router();
const apiController = require("../controllers/apiCotroller");
const { uploadSingle } = require("../middleware/multer");
const cors = require("cors");

var corsOption = {
  origin: "server-lifecation-deploy-production.up.railway.app",
};

router.get("/landing-page", cors(corsOption), apiController.landingPage);
router.get("/detail-page/:id", cors(corsOption), apiController.detailPage);
router.post(
  "/booking-page",
  cors(corsOption),
  uploadSingle,
  apiController.bookingPage
);
module.exports = router;
