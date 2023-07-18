const router = require("express").Router();
const apiController = require("../controllers/apiCotroller");
const { uploadSingle } = require("../middleware/multer");
const cors = require("cors");

router.get("/landing-page", cors(), apiController.landingPage);
router.get("/detail-page/:id", cors(), apiController.detailPage);
router.post("/booking-page", cors(), uploadSingle, apiController.bookingPage);
module.exports = router;
