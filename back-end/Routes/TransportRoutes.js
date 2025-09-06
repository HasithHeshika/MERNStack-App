const express = require('express');
const router = express.Router();

//Import model
const Transport = require("../Model/TransportModel");

//Import controller
const TransportController = require("../Controllers/TransportControllers");

router.get("/", TransportController.getTransports);

// Export the router
module.exports = router;