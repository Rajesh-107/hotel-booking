const express = require("express");
const  HotelController  = require("../controllers/hotelcontroller");
const Hotel = require("../models/Hotel");
// import {createError} from "../utils/error.js"

const router = express.Router();

//Create
router.post("/", HotelController.createHotel);
//update
router.put("/:id", HotelController.updateHotel);
//Delete
router.delete("/:id", HotelController.deleteHotel);
//get
router.get("/:id", HotelController.getHotel);
//get all
router.get("/", HotelController.getAllHotel);

module.exports = router;
