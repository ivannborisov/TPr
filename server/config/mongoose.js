var mongoose = require('mongoose'),
    user = require('../models/User'),
    projects = require('../models/Cars');


module.exports = function (config) {

    mongoose.connect(config.db);

    var db = mongoose.connection;

    db.once('open' , function(err){
        if(err){
            console.log('Database could not be open' + err);
            return;
        }

        console.log('Database up and running');
    });

    db.on('error',function (err){
        console.log('Database error' + err);
    });

    projects.seedInitialProjects();
}

