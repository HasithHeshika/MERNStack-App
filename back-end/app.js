const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/TransportRoutes');

const app = express();

// Middleware
app.use("/transports", router);

// w1YX5x9EDkrgEDhL

mongoose.connect("mongodb+srv://admin:w1YX5x9EDkrgEDhL@cluster0.dxsad0f.mongodb.net/")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log((err)));