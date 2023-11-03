// In your routes
const express = require('express');
const shipController = require('../controllers/ship.controller');
const multer = require('multer');

const router = express.Router();

// Set up the temporary storage for uploaded images
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// POST request to create a new ship listing with images
router.post('/:userId', upload.array('photos', 32), shipController.createShip);
router.get('/:userId', shipController.getShipsByUser);
router.get('/location/:location/from/:dateFrom/to/:dateTo', shipController.getShipsByLocationAndDate);
// router.get('/allShips', shipController.getShips);

module.exports = router;
