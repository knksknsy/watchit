var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/test', function (req, res) {
    var object = {
        name : 'Jack',
        age : 39,
        language : 'english'
    }
    res.send(object);
})

app.listen(3000, function() {
    console.log('Watchit Listening on port 3000')
})