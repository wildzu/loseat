exports.findAll = function (req, res) {

    var request = require("request");

    request("http://localhost:3000/sensors", function (error, response, body) {
        console.log(body);
    });

    //send a res
    res.send({
        id:req.params.id
    });
}