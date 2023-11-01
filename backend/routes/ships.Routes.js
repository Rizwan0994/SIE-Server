const express = require('express');
const shipController = require('../controllers/ship.controller');

const router = express.Router();

// POST request to create a new ship listing
router.post('/:userId', shipController.createShip);

module.exports = router;
