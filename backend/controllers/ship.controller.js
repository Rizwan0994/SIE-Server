
const cloudinary = require('../config/cloudinary');
const ShipModel = require('../models/Ships.model');
const multer = require('multer');
const fs = require('fs');



// Set up the temporaray storage for uploaded images
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// createShip controller
const createShip = async (req, res) => {
  try {
    const { userId } = req.params;
    const { shipData } = req.body;

    const parsedShipData = JSON.parse(shipData);

    console.log("ship data:", parsedShipData);
 
    // Array to store Cloudinary image URLs
    const imageUrls = [];

    for (const file of req.files) {
      // Create a temporary file to store the uploaded image
      const tempFilePath = `./temp-upload-${Date.now()}.png`;

      // Write the buffer data to the temporary file
      fs.writeFileSync(tempFilePath, file.buffer);

      // Upload the image to Cloudinary
      const imageUploadResult = await cloudinary.uploader.upload(tempFilePath, {
        folder: "pictures",
      });

      // Delete the temporary file after uploading to Cloudinary
      fs.unlinkSync(tempFilePath);

      // Add the Cloudinary URL to the array
      imageUrls.push(imageUploadResult.secure_url);
    }
  console.log("imageUrls:", imageUrls);
      // Create a new ship model with uploaded image URLs
      
      const newShipData = {
        basics: parsedShipData.basics,
        features: parsedShipData.features,
        location: parsedShipData.location,
        description: parsedShipData.description,
        pricing: parsedShipData.pricing,
        calendar: parsedShipData.calendar,
        policy: parsedShipData.policy,
        booking: parsedShipData.booking,
        amenities: parsedShipData.amenities,
        photos: imageUrls,
        userId: userId,
      };
      const newShip = new ShipModel(newShipData);

      // Save the ship data
      await newShip.save();
      res.status(201).json(newShip);
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating the ship listing' });
  }
};


const getShipsByLocationAndDate = async (req, res) => {
  try {
    const { location, dateFrom, dateTo } = req.params;
console.log("location:", location);
console.log("dateFrom:", dateFrom);
console.log("dateTo:", dateTo);
    // Parse date strings to Date objects
    const fromDate = new Date(dateFrom);
    const toDate = new Date(dateTo);

    console.log("fromDate:", fromDate);
    if (isNaN(fromDate) || isNaN(toDate)) {
      return res.status(400).json({ error: 'Invalid date format' });
    }
    
    // Find ships that match the location and date range
    const ships = await ShipModel.find({
      'location.marina': location,
      'calendar.date_from': { $lte: toDate },
      'calendar.date_to': { $gte: fromDate },
    });

    if (ships.length === 0) {
      return res.status(404).json({ error: 'No ship listings found for this location and date range' });
    }

    res.status(200).json(ships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching ship listings by location and date range' });
  }
};



// get ships controller
const getShipsByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find all ship listings
    const ships = await ShipModel.find({ userId });

    if (ships.length === 0) {
      return res.status(404).json({ error: 'No ship listings found for this user' });
    }

    res.status(200).json(ships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching ship listings by user' });
  }
};

const getShips = async (req, res) => {
  try {
   console.log("get ships");
    const ships = await ShipModel.find();
    if (ships.length === 0) {
      return res.status(404).json({ error: 'No ship listings found ' });
    }

    res.status(200).json(ships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching' });
  }
};

module.exports = { createShip, getShipsByUser,getShipsByLocationAndDate, getShips };

