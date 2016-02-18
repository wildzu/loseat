exports.findAll = function (req, res) {

    var temperature = Math.floor(-40 + (Math.random() * 80) + 1);

    console.log("Sending a sensor response via findAll");

    res.send([{
        name: 'sensorA',
        type: 'temperature',
        value: temperature
    }]);
};

exports.findById = function (req, res) {
    var temperature = Math.floor(-40 + (Math.random() * 80) + 1);

    console.log("Sending a sensor response via findByID " + req.params.id);
    res.send({
        id: req.params.id,
        type: "temperature",
        value: temperature
    });
};