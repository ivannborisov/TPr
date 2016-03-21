var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    username: {type:String, require: '{PATH} is required', unique: true},
    firstName: {type:String, require: '{PATH} is required'},
    lastName: {type:String, require: '{PATH} is required'},
    salt: String,
    hashPass: String,
    roles: [String]
});

userSchema.method({
    authenticate: function (password){

        if(encryption.generateHashedPassword(this.salt, password)=== this.hashPass){
            return true
        }
    }
});

var User = mongoose.model('User', userSchema);


module.exports.seedInitialUsers = function () {

    //User.remove({},function(){
    User.find({}).exec(function (err, collection) {
        if (err) {
            console.log(err);
            return;
        }

        if (collection.length === 0) {
            var salt;
            var hashedPwd;

            salt = generateSalt();
            hashedPwd = generateHashedPassword(salt, '123456');
            User.create({username: 'vanko', firstName: 'Ivan', lastName: 'Borisov', salt:salt,hashPass: hashedPwd , roles:['admin']});
            salt = generateSalt();
            hashedPwd = generateHashedPassword(salt, '123456');
            User.create({username: 'peshko', firstName: 'Pesho', lastName: 'Addeer', salt:salt,hashPass: hashedPwd, roles:['standard']});
            salt = generateSalt();
            hashedPwd = generateHashedPassword(salt, '123456');
            User.create({username: 'goshku', firstName: 'Goshu', lastName: 'Eaadd', salt:salt,hashPass: hashedPwd, roles:[]});
            console.log('Users are added to database');
        }

    });
    //});
};
