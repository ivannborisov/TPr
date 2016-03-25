var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    title: String,
    owner: String,
    created: Date,
    tags: [String],
    mainImg: String
})

var Project = mongoose.model('Project', projectSchema);


module.exports.seedInitialProjects = function () {

    Project.remove({},function(){
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
                tags: ['engine', '160HP'],
                mainImg: 'audi1.jpg'

            });
            Project.create({
                title: 'Ford Focus',
                owner: 'vanko',
                created: new Date('10/12/2015'),
                tags: ['visual tuning', '160HP'],
                mainImg: 'audi1.jpg'

            });
            Project.create({
                title: 'Trabant',
                owner: 'peshku',
                created: new Date('10/12/2015'),
                tags: ['engine', '160HP'],
                mainImg: 'audi1.jpg'

            });
            Project.create({
                title: 'Mustang',
                owner: 'goshku',
                created: new Date('10/12/2015'),
                tags: ['engine', '250HP'],
                mainImg: 'audi1.jpg'

            });
            console.log('Projects are added to database');
        }
    });
    });
};