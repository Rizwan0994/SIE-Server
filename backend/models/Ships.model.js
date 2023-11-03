
const mongoose = require('mongoose');

const shipSchema = new mongoose.Schema({
  basics: {
    boatType: String,
    sleepingGuests: Number,
    cruisingGuests: Number,
    cabins: Number,
    bathrooms: Number,
    kitchens: Number,
    beds: Number,
  },
  features: {
    manufacturer: String,
    model: String,
    vesselName: String,
    builtIn: [Object],
    refitIn: [Object],
    length: [Object],
    fuelType: [Object],
    fuelCapacity: [Object],
    fuelConsumption: [Object],
    waterCapacity: [Object],
    powerCapacity: [Object],
    engine: Number,
    maxCruising: Number,
  },
  description: {
    listingTitle: String,
    listingDescription: String,
  },
  location: {
    marina: String,
    cruisingRange: Number,
    },
  pricing: {
    charterType: String,
    basePrice: {
      durationType: String,
      price: Number,
      currencyType: String,
    },
    smartPricing: String,
    seasonalPrice: String,
    discounts: {
      bookingDuration: [Object],
      earlyBooking: [Object],
      lastMinute: [Object],
    },
    additionalCharges: [String],
    optionalCharges: [String],
  },
  calendar: {
    checkin_from: String,
    checkin_to: String,
    checkout_regular: String,
    checkout_fordayuse: String,
    minimum_stay_from: String,
    minimum_stay_to: String,
    preperation_time: String,
    booking_window: String,
    date_from: Date,
    date_to: Date,
    price: {
      duration: String,
      amount: Number,
      currency: String,
    },
  },
  policy: {
    policyType: String,
    badWeather: String,
  },
  booking: {
    bookingMethod: String,
    regulations: {
      smokingAllowedOnDeck: Boolean,
      smokingAllowedIndoors: Boolean,
      suitableForChildren: Boolean,
      suitableForPets: Boolean,
      suitableForInfants: Boolean,
      eventsPartiesAllowed: Boolean,
    },
    additionalregulations: String,
  },
  amenities: {
    basics: [String],
    foodAndBeverage: [String],
    electronics: [String],
    Sea_sports: [String],
    Mega_yaghts: [String],
    Yaght_equipment: [String],
  },
  photos: [String],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

// Create a model based on the schema
const ShipModel = mongoose.model('Ships', shipSchema);
module.exports = ShipModel;
