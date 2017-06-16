/**
 * Created by Douglas on 10.05.2017.
 */

var userCollection = require('./dbController').userCollection;
var User = require('../models/userModel');
var listController = require('./listController');
var log = require('./loggingController');

module.exports = {

    createNewUser: function(req, res){
        log.info('called endpoint to create user');
        var usr = new User(req.body.user);
        usr.save(function(err, result){
            if(err){
                res.send(err.message);
                return;
            }
            res.send({message: 'Successfully created User'});

            //setting Up user
            listController.setupDefaultLists(usr.get('email'));
        });
    },

    // low prio
   /* updateUser: function(req, res){

    },*/

    deleteUser: function(req, res){

    },

    login: function(req, res){
        var suppliedUser = req.body.user;
        User.findByMail(suppliedUser.email, function(err, foundUser){
            if(err){
                res.send(err);
                return;
            }
            if(!foundUser){
                res.send({message: "User not found"});
                return;
            }
            foundUser.comparePassword(suppliedUser.password, function(err, isMatch){
                if(err){
                    res.send(err);
                    return;
                }
                if(isMatch){
                    req.mySession.user = foundUser.data.email;
                    res.send({status: "ok"});
                } else {
                    res.send({message: "invalid password"});
                }
            })
        });
    },

    isLoggedIn: function(req, res){
        if(req.mySession && req.mySession.user){
            res.send({loggedIn: true});
        } else {
            res.send({loggedIn: false});
        }
    },

    logout: function(req, res){
        if(req.mySession && req.mySession.user){
            req.mySession.reset();
        }
        res.send({message: "your are logged out"});
    }
};