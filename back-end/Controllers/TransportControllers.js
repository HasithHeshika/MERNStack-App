const { get } = require("mongoose");
const Transport = require("../Model/TransportModel");

const getTransports = async (req, res, next) => {

    // Get all transports from the database
    let transports;
    try {
        transports = await Transport.find();
    } catch (err) {
        console.log(err);
    }

    // If no transports found
    if (!transports) {
        return res.status(404).json({ message: "No transports found" });
    }

    // Display all transports
    return res.status(200).json({ transports });
};

exports.getTransports = getTransports;