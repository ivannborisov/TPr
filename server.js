var express = require('express');


var env = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];
require('./server/config/express')(app, config);


app.get('*',function (req, res ){
    res.write('Qkoooo');
    res.end();
});

app.listen(config.port);
console.log('Server running on port: ' +config.port);
console.log(env);