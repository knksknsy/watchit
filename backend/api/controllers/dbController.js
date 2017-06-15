/**
 * Created by Douglas on 31.05.2017.
 */
var log = require('./loggingController');
var mongoClient = require('mongodb').MongoClient;
var database;
var connected = false;

var dbConfig = require('../../config/dbConfig');
var connectionUrl = dbConfig.dbUrl + '/' + dbConfig.dbName;
var db = mongoClient.connect(connectionUrl, function(err, db){
   if(err){
        log.error(err.message);
   } else {
       database = db;
       connected = true;
       log.info('MongoDB connected');
       log.info('Checking Collections:');
       db.createCollection('user', function(err, results) {
           if (err) {
               log.error(err.message);
           } else {
               log.info("Created user collection");
           }
       });
       db.createCollection('list', function(err, results) {
           if (err) {
               log.error(err.message);
           } else {
               log.info("Created list collection");
           }
       })
   }
});

module.exports = {
    database: database,
    userCollection: function (){
        if(connected){
            return database.collection('user');
        } else {
            log.warning("Database not connected");
        }
    },

    listCollection: function (){
        if(connected){
            return database.collection('list');
        } else {
            log.warning("Database not connected");
        }
    }
};

