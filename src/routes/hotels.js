const express = require("express");
const Hotel = require("../models/Hotel");
const  createError  = require("../utils/error");

const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//get
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get all
router.get("/", async (req, res, next) => {
  const failed = true;
 
  if(failed) return next(CreateError(401, "You are not authenticated"))
  try {
    const Hotels = await Hotel.findById("jdgg");
    res.status(200).json(Hotels);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
