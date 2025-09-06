const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transportSchema = new Schema({
    fullname: {
        type: String, // Data type
        required: true // Validation
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: true,
    },
    pickup_location: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Transport" /* File name */, transportSchema /*Function name*/);