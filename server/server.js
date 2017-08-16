var express = require('express');
var app     = express();

var port = 8080;

app.get('/', function(req, res) {
    res.json({ message: 'hooray! Welcome to the api!' });
});

app.listen(port);
console.log('server listening on ' + port);
