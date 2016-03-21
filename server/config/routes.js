var auth = require('./auth'),
    mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = function (app){

    app.get('/api/users',auth.isInRole('admin'), function (req, res) {
        User.find({}).exec(function (err, collection){
           if(err){
               console.log('Users could not be loaded ' + err);
               return;
           }
           res.send(collection);
        });
    });

    app.get('/partials/:partialArea/:partialName',function(req,res){
        res.render('../../public/app/'+ req.params.partialArea+'/'+req.params.partialName);

    });
    app.get('/qkoqko', function(req,res){
        res.send({'success': 'udriii'});
        res.end();
    });
    app.post('/login', auth.login);
    app.post('/logout', auth.logout);


    app.get('*', function(req, res){
        console.log('qko qko ');
        console.log(req.user);
        res.render('index', {currentUser: req.user});
    });

};