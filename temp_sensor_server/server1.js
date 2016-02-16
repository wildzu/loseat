var express = require('express'),
    sensors = require('./routes/sensors');

var app = express();

app.get('/sensors', sensors.findAll);
app.get('/sensors/:id', sensors.findById);

app.listen(3000);
console.log('Sensor server listening on port 3000...');