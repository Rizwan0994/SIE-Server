const cloudinary = require('../config/cloudinary');
const ShipModel = require('../models/Ships.model');
const multer = require('multer');

// Set up the temporaray storage for uploaded images
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { files: 32 }, // Limit to 32 files per request
});
const createShip = async (req, res) => {
  try {
    const { userId } = req.params;
    const { ...shipData } = req.body;
    console.log(shipData);

    // Use `multer` to handle image uploads
    upload.array('photos', 32)(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ error: 'Error uploading images' });
      }

      const photos = req.files && req.files.length > 0 ? req.files.map((file) => file.buffer) : [];
      if (photos.length === 0) {
        return res.status(400).json({ error: 'At least one photo is required!' });
      }

      if (photos.length > 32) {
        return res.status(400).json({ error: 'You can upload a maximum of 32 images.' });
      }

      const uploadedImages = [];

      // Upload images to Cloudinary
      await Promise.all(
        photos.map((photo) =>
          new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
              if (error) {
                console.error(error);
                reject(error);
              } else {
                uploadedImages.push(result.secure_url);
                resolve();
              }
            }).end(photo);
          })
        )
      );

      // Create a new ship model with uploaded image URLs
      const newShip = new ShipModel({
        ...shipData,
        photos: uploadedImages,
        userId,
      });

      // Save the ship data
      await newShip.save();
      res.status(201).json(newShip);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating the ship listing' });
  }
};

module.exports = { createShip };
