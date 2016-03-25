var auth = require('./auth'),
    controllers = require('../controllers'),
    multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/imgs/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // modified here  or user file.mimetype
    }
});

module.exports = function (app){

    app.get('/api/users',auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users' , controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/cars', controllers.projects.getAllCars );
    app.post('/api/cars', controllers.projects.createProject);
    app.get('/api/cars/:id', controllers.projects.getCarById );

    app.post('/project/create',multer({ storage: storage }).single('mainImg'), auth.isAuthenticated, controllers.projects.createNewProject);

    app.get('/partials/:partialArea/:partialName',function(req,res){
        res.render('../../public/app/'+ req.params.partialArea+'/'+req.params.partialName);

    });
    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/api/*', function(req, res) {
        res.status(404);
        res.end();
    });
    app.get('*', function(req, res){
        res.render('index', {currentUser: req.user});
    });

};