var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    title: String,
    owner: String,
    created: Date,
    tags: [String]
})

var Project = mongoose.model('Project', projectSchema);


module.exports.seedInitialProjects = function () {

    //User.remove({},function(){
    Project.find({}).exec(function (err, collection) {
        if (err) {
            console.log(err);
            return;
        }

        if (collection.length === 0) {

            Project.create({
                title: 'Audy S7',
                owner: 'vanko',
                created: new Date('10/12/2015'),
                tags: ['engine', '160HP']
            });
            Project.create({
                title: 'Ford Focus',
                owner: 'vanko',
                created: new Date('10/12/2015'),
                tags: ['visual tuning', '160HP']
            });
            Project.create({
                title: 'Trabant',
                owner: 'peshku',
                created: new Date('10/12/2015'),
                tags: ['engine', '160HP']
            });
            Project.create({
                title: 'Mustang',
                owner: 'goshku',
                created: new Date('10/12/2015'),
                tags: ['engine', '250HP']
            });
            console.log('Projects are added to database');
        }
    });
    //});
};