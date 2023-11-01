const mongoose = require('mongoose');

const shipSchema = new mongoose.Schema({
    //basic info
    basics: {
        boatType: String,
        sleepingGuests: Number,
        cruisingGuests: Number,
        cabins: Number,
        bathrooms: Number,
        kitchens: Number,
        beds: Number,
    },
    //features
    features: {
        manufacturer: String,
        model: String,
        vesselName: String,
        builtIn: String,
        refitIn: String,
        length: String,
        fuelType: String,
        fuelCapacity: String,
        fuelConsumption: String,
        waterCapacity: String,
    },
    //amenities....
    amenities: {
        basics: [String],
        foodAndBeverage: [String],
        electronics: [String],
        seaSports: [String],
        megaYachts: [String],
        yachtEquipment: [String],
    },
    //location.....
    location: {
        marina: [String],
        cruisingRange: String,
    },
    //photos.....
    photos: [String],

    //description.....
    description: {
        listingTitle: String,
        listingDescription: String,
    },

    //pricing.....
    pricing: {
        charterType: String,
        basePrice:String,
        smartPricing:String,
        seasonalPrice: String,
        // Discounts:{bookingDuration: [String],earlyBooking:[String],lastMinute:[String] }
        Discounts: {
            bookingDuration: [{
              dayuse: String,
              weekly: String,
              twoweeks: String,
              month: String,
            }],
            earlyBooking: [{
              twomonths: String,
              fourmonths: String,
              sixmonths: String,
              eightmonths: String,
            }],
            lastMinute: [{
              days25: String,
              days8: String,
              days15: String,
              days3: String,
            }],
          },
        additionalCharges:[String],
        optionalCharges:[String]
    },
    //calendar.....
    calendar:{
        checkin_from: { type: String, default: '00:00' },
        checkin_to: { type: String, default: '00:00' },
        checkout_regular: String,
        checkout_fordayuse: String,
        minimum_stay_from: String,
        minimum_stay_to: String,
        preperation_time: String,
        booking_window: String,
        available: Boolean,
        unavailable: Boolean,
        date_from: { type: Date, default: new Date() },
        date_to: { type: Date, default: new Date() },
        price: {
          duration: String,
          amount: { type: Number, default: 0 },
          currency: { type: String, default: 'EUR' },
        },
    },

    //policy.....
    policy:{ policyType: String,
             badWeather: String
           },
    //booking.....
    bookig:{
        bookingMethod: String,
        regulations:[String],
     },
    //additionalRegulationBOX.....
     additionalRegulation:String,
    //createdBy.....
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
     },
    //listing Status.....
    listingStatus:{
        type: String,
    
    },

}, {
    timestamps: true,
});

const ShipModel = mongoose.model('Ships', shipSchema);
module.exports = ShipModel;
