var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/tuningprojectsbg',
        port: process.env.PORT || 3030
    },
    production:{

        rootPath: rootPath,
        db: 'mongodb://tuningprojects:741963456@ds033255.mongolab.com:33255/tuningprojects',
        port: process.env.PORT || 3030
    }

}