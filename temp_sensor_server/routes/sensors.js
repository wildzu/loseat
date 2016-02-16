exports.findAll = function (req, res) {
    console.log("Sending a sensor response via findAll");
    res.send([{
        name: 'sensor1'
    }, {
        name: 'sensor2'
    }, {
        name: 'sensor3'
    }]);
};

exports.findById = function (req, res) {
    var temperature = Math.floor(-40 + (Math.random() * 80) + 1);

    console.log("Sending a sensor response via findByID");
    res.send({
        id: req.params.id,
        name: "The Sensor",
        location: "description",
        value: temperature
    });
};

