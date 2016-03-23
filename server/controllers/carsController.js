var Project = require('mongoose').model('Project');

module.exports = {
    getAllCars: function(req, res){
        Project.find({}).exec(function (error,collection){
            if(error){
                console.log('Projects could not be loaded'+ err);
            }
            res.send(collection);
        });

    },
    getCarById: function(req, res, next){
        Project.findOne({_id: req.params.id}).exec(function(err, car){
            if(err) {
                console.log('Course could not be loaded: ' + err);
            }
            res.send(car);
        });


    }
}