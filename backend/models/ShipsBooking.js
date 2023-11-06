const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  boatId: {
    type: String,
    required: true
  },
  no_of_persons: {
    type: Number,
    required: true
  },
  from_date: {
    type: Date,
    required: true
  },
  to_date: {
    type: Date,
    required: true
  },
  commision_fees: {
    type: Number,
    default: 430
  },
  total: {
    type: Number,
    required: true
  }
});

const shipsBooking = mongoose.model('shipsBooking', formDataSchema);

module.exports = shipsBooking;
