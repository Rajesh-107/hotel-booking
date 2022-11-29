const express = require('express');
const  RoomController  = require("../controllers/roomController");

const router = express.Router();

//Create
router.post("/:hotelid",  RoomController.createRoom);
//update
router.put("/:id",  RoomController.updateRoom);
//Delete
router.delete("/:id/:hotelid", RoomController.deleteRoom);
//get
router.get("/:id", RoomController.getRoom);
//get all
router.get("/", RoomController.getAllRoom);

module.exports = router;



