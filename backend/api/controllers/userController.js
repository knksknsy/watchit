/**
 * Created by Douglas on 10.05.2017.
 */

var userCollection = require('./dbController').userCollection;
var User = require('../models/userModel');
var log = require('../controllers/loggingController');

module.exports = {

    createNewUser: function(req, res){
        log.info('called endpoint to create user');
        var usr = new User(req.body.user);
        usr.save(function(err, result){
            if(err){
                res.send(err.message);
                return;
            }
            res.send('saved successfully') //TODO meaningful response
        });
    },

    // low prio
   /* updateUser: function(req, res){

    },*/

    deleteUser: function(req, res){

    }

};