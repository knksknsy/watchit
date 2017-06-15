/**
 * Created by Douglas on 05.05.2017.
 */
// user shlould have following fields: email, password

var dbController = require('../controllers/dbController');
var bcrypt = require('bcryptjs');
var log = require('../controllers/loggingController');

var User = function (data) {
    this.data = data;
};

User.prototype.data = {};

// User.prototype.changeEmail = function (email) {  Can't be used, otherwise lists which are identified by email will be lost
//     this.data.email = email;
// };

User.prototype.changePassword = function (password) {
    this.data.password = password;
};

User.prototype.get = function (name) {
    return this.data[name];
};

User.prototype.set = function (name, value) {
    this.data[name] = value;
};

//returns true or errorMessage
User.prototype.validate = function () {
    if('string' !== typeof this.data['password']){
        return "'password' must be a set string";
    }
    if('string' !== typeof this.data['email']){
        //TODO OPTIONAL validate email address
        return "'email' must be a set string";
    }
    return true;
};

User.prototype.sanitize = function () {

};

User.findByMail = function (mail, callback) {
    var collection = dbController.userCollection();
    collection.findOne({email: mail}, function(err, result){
        if(err){
            log.error(err.message);
            callback(err , null);
            return;
        }

        if (!result){
            callback(null, null);
            return;
        }

        log.info('DB access successful, result: ' + JSON.stringify(result));
        var foundUser = new User(result);
        callback(null, foundUser);
        return;
    });
};

User.prototype.save = function (callback) {
    var validation = this.validate();
    if(validation !== true) {
        callback({message: validation});
        return;
    }

    var userData = this.data;

    //check for same username
    User.findByMail(userData['email'], function(err, result){
        if(err){
            log.error(err.message);
            callback(err, null);
            return;
        }
        //check if username is taken
        if(result){
            var error = {
                message: "Can't save user, email allready exists."
            };
            log.error(error.message);
            callback(error, null);
            return;
        }

        //hashing password
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                callback(err);
                return;
            }
            bcrypt.hash(userData.password, salt, function (err, hash) {
                if (err) {
                    callback(err);
                    return;
                }
                userData.password = hash;

                //saving in db
                var collection = dbController.userCollection();
                collection.insert(userData, function(err, result){
                    if(err){
                        log.error("Couldn't persist new user: " + JSON.stringify(userData)); //TODO sensitive data in logs
                        callback(err);
                        return;
                    }

                    callback(null, result);
                    log.info("saved user " + JSON.stringify(result)); //TODO sensitive data in logs
                    return;
                });
            });
        });
    })
};

User.prototype.comparePassword = function(password, callback){
    bcrypt.compare(password, this.data.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
}
module.exports = User;