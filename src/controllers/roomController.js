const RoomModal = require("../models/Room");
const HotelModal = require("../models/Hotel");

exports.createRoom = async (req, res, next) => {
  const hotelID = req.params.hotelid;
  const newRoom = new RoomModal(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await HotelModal.findByIdAndUpdate(hotelID, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await RoomModal.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateRoom);
  } catch (err) {
    next(err);
  }
};
exports.deleteRoom = async (req, res, next) => {
  const hotelID = req.params.hotelid;
  try {
    await RoomModal.findByIdAndDelete(req.params.id);
    try {
      await HotelModal.findByIdAndUpdate(hotelID, {
        $pull: { rooms: req.params.id},
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted");
  } catch (err) {
    next(err);
  }
};
exports.getRoom = async (req, res, next) => {
  try {
    const room = await RoomModal.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
exports.getAllRoom = async (req, res, next) => {
  try {
    const rooms = await RoomModal.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
