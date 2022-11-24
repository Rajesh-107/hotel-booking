const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  photos: {
    type: [String],
  },
  rooms: {
    type: [String],
  },
});
const Hotels = mongoose.model("Hotel", HotelSchema);
module.exports = Hotels
