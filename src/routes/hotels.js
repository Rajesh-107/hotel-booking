const express = require("express");
const HotelController = require("../controllers/hotelcontroller");



const router = express.Router();

//Create
router.post("/", HotelController.createHotel);
//update
router.put("/:id", HotelController.updateHotel);
//Delete
router.delete("/:id",  HotelController.deleteHotel);
//get
router.get("/find/:id", HotelController.getHotel);
//get all
router.get("/", HotelController.getAllHotel);
router.get("/countByCity", HotelController.countByCity);
router.get("/countByType", HotelController.countByType);

module.exports = router;
