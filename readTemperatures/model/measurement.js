var mongoose = require('mongoose');

var measurementDbSchema = new mongoose.Schema({
    sensorType: String,
    sensorID: Number,
    date: Date,
    value: Number,
    location: String
});

var measurement = module.exports = mongoose.model('Measurement', measurementDbSchema);