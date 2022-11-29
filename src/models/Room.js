const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumber: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);
const RoomModal = mongoose.model("Rooms", RoomSchema);
module.exports = RoomModal;
