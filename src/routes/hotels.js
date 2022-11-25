const express = require("express");
const  HotelController  = require("../controllers/hotelcontroller");
const Hotel = require("../models/Hotel");
const { verifyAdmin } = require("../utils/verifyToken");
// import {createError} from "../utils/error.js"

const router = express.Router();

//Create
router.post("/", verifyAdmin, HotelController.createHotel);
//update
router.put("/:id", verifyAdmin, HotelController.updateHotel);
//Delete
router.delete("/:id",verifyAdmin, HotelController.deleteHotel);
//get
router.get("/:id", HotelController.getHotel);
//get all
router.get("/", HotelController.getAllHotel);

module.exports = router;
