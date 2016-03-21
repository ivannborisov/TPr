var mongoose = require('mongoose'),

    crypto = require('crypto');


module.exports = function (config) {

    mongoose.connect(config.db);

    var db = mongoose.connection;

    db.once('open' , function(err){
        if(err){
            console.log('Database could not be open' + err);
            return;
        }

        console.log('Database up and running');
    });

    db.on('error',function (err){
        console.log('Database error' + err);
    });

    var userSchema = mongoose.Schema({
        username: String,
        firstName: String,
        lastName: String,
        salt: String,
        hashPass: String,
        roles: [String]
    });

    userSchema.method({
        authenticate: function (password){

            if(generateHashedPassword(this.salt, password)=== this.hashPass){
                return true
            }
        }
    });

    var User = mongoose.model('User', userSchema);
    User.remove({}, function () {

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
            console.log(collection);
        });
    });





}

function generateSalt(){
    return crypto.randomBytes(128).toString('base64');
}
function generateHashedPassword (salt,pwd){
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}