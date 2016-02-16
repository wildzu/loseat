var express = require('express'),
    sensors = require('./routes/sensors');

var app = express();

app.get('/', sensors.findAll);
//app.get('/sensors/:id', wines.findById);

app.listen(2000);
console.log('The Server listening on port 2000...');





/*
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
*/