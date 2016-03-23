var encryption = require('../utilities/encryption');
var User = require('mongoose').model('User');

module.exports = {

    updateUser: function(req, res, next) {
        console.log(req.body);

        if(req.user._id == req.body._id){

            var updatedUserData = req.body;
            if(updatedUserData.password && updatedUserData.password.length >0){
                updatedUserData.salt = encryption.generateSalt();
                updatedUserData.hashPass = encryption.generateHashedPassword(updatedUserData.password, updatedUserData.salt );
            }

            User.update({_id: req.body._id}, updatedUserData, function(){
                res.end();
            });
        }
        else {
            res.send({reason: 'Dont have permission!'});
        }
    },
    createUser: function(req, res, next) {
        var newUserData = req.body;
        newUserData.salt = encryption.generateSalt();
        newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
        User.create(newUserData, function(err,user){
            if(err){
                console.log('Failed to register new user!'+ err);
                return;
            }

            req.logIn(user,function (err) {
                if(err) {
                    res.status(400);
                    return res.send({reason: err.toString()});
                }
                res.send(user);
            });
        });
    },
    getAllUsers: function(req, res){
        User.find({}).exec(function (error,collection){
            if(error){
                console.log('Users could not be loaded'+ err);
            }
            res.send(collection);
        });
    }
}