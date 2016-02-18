exports.findAll = function (req, res) {

    var request = require("request");

    request("http://localhost:3000/sensors", function (error, response, body) {
        console.log(body);

        var jsonData = JSON.parse(body);

        for (var item in jsonData) {
            console.log(jsonData[item]);
            console.log(jsonData[item]["name"]);
        }

    });

    //send a res
    res.send({
        id: req.params.id
    });
}   