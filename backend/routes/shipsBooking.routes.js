const express = require('express');
const router = express.Router();
const bookingCntroller = require('../controllers/shipBooking.controller');

// Define a route to create a new form data record
router.post('/:boatId', bookingCntroller.ShipBooking);

module.exports = router;
