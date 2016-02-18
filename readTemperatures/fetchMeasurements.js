var mongoose = require('mongoose'),
    measurement = mongoose.model('Measurement'),
    httpRequest = require("request"),
    fs = require('fs');

var sensorConfig = JSON.parse(fs.readFileSync('config_sensors.json', 'utf8'));

var openDbReqs = 0;

exports.fetchMeasurements = function () {

    for (var sensorSet in sensorConfig) {
        for (var sensor in sensorConfig[sensorSet]) {
            console.log(sensorConfig[sensorSet][sensor].name);
            var getSensor = sensorConfig[sensorSet][sensor];
            var reqHost = getSensor.ip + "/sensors/" + getSensor.id;
            console.log("Requesting data from : " + reqHost);

            openDbReqs++;

            httpRequest(reqHost, function (error, response, body) {
                if (!error) {
                    console.log("Got some data...");

                    var jsonData = JSON.parse(body);

                    console.log("ID " + jsonData.id + " location in " + getSensorData(jsonData.id, "location") + " has value " + jsonData.value);


                    //make a submit into the DB
                    var aMeasurement = new measurement({
                        sensorType: jsonData.type,
                        sensorID: jsonData.id,
                        date: Date.now(),
                        value: jsonData.value,
                        location: getSensorData(jsonData.id, "location")
                    });

                    console.log(aMeasurement);

                    aMeasurement.save(function (err, aMeasurement) {
                        if (err) {
                            return console.error(err);
                        } else {
                            closeHandle();
                        }
                    });



                } else {
                    console.log("ERROR :" + error);
                    closeHandle();
                }

            })
        };
    }
}

function getSensorData(id, data) {
    for (var sensorSet in sensorConfig) {
        for (var sensor in sensorConfig[sensorSet]) {
            if (sensorConfig[sensorSet][sensor].id == id) {
                return sensorConfig[sensorSet][sensor][data];
            }
        }
    }
}

function closeHandle() {
    console.log("Closing a handle...");
    openDbReqs--;
    console.log("still open " + openDbReqs);

    if (openDbReqs == 0) {
        console.log("No more handles. Close mongoose...");
        mongoose.connection.close();
    }
}