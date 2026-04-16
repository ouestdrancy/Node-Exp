let express = require('express');
let app = express();

app.get('/views/index.html', function(req, res) {
    res.send('Hello Express');
});
































 module.exports = app;
