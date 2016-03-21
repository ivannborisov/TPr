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
        db: '',
        port: process.env.PORT || 3030
    }

}