
const shipsBooking = require('../models/ShipsBooking');

const  ShipBooking = async (req, res) => {

     console.log("ship booking", req.body);
    try {
        const { boatId } = req.params;
        const booking = new shipsBooking({
            userId: req.body.userId,
            boatId: boatId,
            no_of_persons: req.body.no_of_persons,
            from_date: new Date(req.body.from_date),
            to_date: new Date(req.body.to_date),
            commision_fees: req.body.commision_fees || 430,
            total: parseInt(req.body.total)
        });

        // Validate the form data
        const validationError = booking.validateSync();
        if (validationError) {
            // Validation failed, return an error response
            return res.status(400).json({ error: validationError.message });
        }

        // Save the form data to the database
        await booking.save();

        res.status(201).json(booking);
    } catch (error) {
        // Handle other errors, e.g., database connection issues
        res.status(500).json({ error: 'An error occurred while saving the data.' });
    }
};

module.exports = {
    ShipBooking
}
