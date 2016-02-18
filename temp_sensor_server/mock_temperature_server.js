var express = require('express'),
    sensors = require('./routes/mock_temperature_sensor_routes');

var app = express();

app.get('/sensors', sensors.findAll);
app.get('/sensors/:id', sensors.findById);


var port = parseInt(process.argv[2]);

if (port > 3000) {
    console.log("Port given " + port)
} else {
    console.log("Using default port 3000");
    port = 3000;
}

app.listen(port);
console.log('Sensor server listening on port ' + port);