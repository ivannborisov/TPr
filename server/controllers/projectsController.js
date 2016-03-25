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
    },
    createProject: function(req, res, next) {

        var newProjectData = req.body;
        newProjectData.created = new Date();
        newProjectData.owner = req.user.username;
        newProjectData.tags = ['visual tuning', 'over 300HP'];
        newProjectData.mainImg = 'audi1.jpg';


        Project.create(newProjectData, function(err, project){
            if(err){
                console.log('Failed to register new user!'+ err);
                return;
            }
            res.send(project);
        });



    },

    createNewProject: function(req, res, next) {

        var newProjectData = req.body;
        newProjectData.created = new Date();
        newProjectData.owner = req.user.username;
        newProjectData.tags = ['visual tuning', 'over 300HP'];
        newProjectData.mainImg =  req.file.filename;


        Project.create(newProjectData, function(err, project){
            if(err){
                console.log('Failed to register new user!'+ err);
                return;
            }
            res.redirect('/cars');
        });



    }


}