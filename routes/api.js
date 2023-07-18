const router = require("express").Router();
const apiController = require("../controllers/apiCotroller");
const { uploadSingle } = require("../middleware/multer");
// const cors = require("cors");

router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", uploadSingle, apiController.bookingPage);
module.exports = router;
