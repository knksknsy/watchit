/**
 * Created by Douglas on 15.06.2017.
 */
var dbController = require('../controllers/dbController');
var ObjectId = require('mongodb').ObjectID;
var log = require('../controllers/loggingController');

const FAVOURITES = "favourites";
const WATCHLIST = "watchlist";

var List = function(data){
    this.data = data;
    if(!this.data.entries){
        this.data.entries = [];
    }
};

List.prototype.data = {};

List.prototype.getEntries = function(){
    return this.data.entries;
};

List.prototype.getOwner = function(){
    return this.data.owner;
};

List.prototype.getName =  function(){
    return this.data.name;
};

//add to list
List.prototype.add = function(movie){
    if(this.indexOf(movie.id) !== null){
        log.warning('Adding movie to list failed: Movie [' + movie.id + '] allready part of list [' + this.data.owner + '|' + this.data.name + ']');
        return false;
    } else {
        this.data.entries.push(movie);
        log.info('Added Movie[' + movie.id + '] to List[' + this.data.owner + '|' + this.data.name + ']');
        return true;
    }
};

List.prototype.indexOf = function(movieId){
    var index;
    for(index = 0; index < this.data.entries.length; index++){
        if(movieId === this.data.entries[index].id){
            return index;
        }
    }
    return null;
};

//remove from list
List.prototype.remove = function(movieId){
    var index = this.indexOf(movieId);
    if(index === null){
        log.warning('Cannot delete Movie[' + movieId + '] from List[' + this.data.owner + '|' + this.data.name + '], because it is not part of the List');
        return false;
    } else {
        this.data.entries.splice(index, 1);
        log.info('Deleted Movie[' + movieId + '] from List[' + this.data.owner + '|' + this.data.name + ']');
    }
};
//save
List.prototype.save = function(callback){
    var listData = this.data;
    if(this.isValid()){
        List.getListByName(listData.name, listData.owner, function(err,result){
            if(err){
                log.error(err.message);
                callback(err, null);
                return;
            }
            if(result){
                var error = {message: "List with name '" + result.data.name + "' allready exists" };
                log.error(error.message);
                callback(error, null);
            } else {
                //save
                var listCollection = dbController.listCollection();
                listCollection.insert(listData, function(err, result){
                    if(err){
                        log.error(err.message);
                        callback(err, null);
                    } else {
                        log.info(JSON.stringify(result));
                        log.info("List " + result.name + " of user " + result.owner + " saved");
                        callback(null, result)
                    }
                });
            }
        });
    } else {
        var error = {message: "Invalid data for user or list name"}
        log.error(error.message);
        callback(error, null);
    }


};

//update
List.prototype.update = function(callback){
        if(!this.data._id){
            var error = {message: "List can't be updated since it's not persisted yet"};
            log.error(error.message);
            callback(error, null);
        } else {
            var listCollection = dbController.listCollection();
            listCollection.updateOne({_id: this.data._id}, {$set: {entries: this.data.entries}}, function(err, result){
                if(err){
                    callback(err, null)
                } else {
                    callback(null, result);
                }
            });
        }
};

//delete
List.prototype.delete = function(callback){
    var id = this.data._id;
    if(!id){
        var err = {message: "List without id can't be deleted"};
        log.error(err.message);
        callback(err, false);
    } else {
        var listController = dbController.listCollection();
        listController.remove({_id: id}, function(err, result){
            if(err){
                log.error(err.message);
                callback(err, false);
            } else {
                log.info("List[" + id + "] deleted successfully");
                callback(null, true);
            }
        });
    }
};

//validate
List.prototype.isValid = function (){
    if('string' !== typeof this.data.owner){
        log.error("ListValidation: owner must be a String");
        return false;
    }
    if('string' !== typeof this.data.name){
        log.error("ListValidation: list name must be a String");
        return false;
    }
    return true;
};

//find by name ->List
List.getListByName = function(name, userMail, callback){
    var listCollection = dbController.listCollection();
    listCollection.findOne({owner: userMail, name: name}, function(err, result){
        if(err){
            log.error(err.message);
            callback(err, null);
            return;
        }
        if(!result){
            log.info("List with name [" + name + "] of owner["+ userMail +"] not found");
            callback(null, null);
            return;
        }
        callback(null,  new List(result));
    });
};

//find by id -> List
List.getListById = function(id, callback){
    var listCollection = dbController.listCollection();
    listCollection.findOne({_id: new ObjectId(id)}, function(err, result){
        if(err){
            log.error(err.message);
            callback(err, null);
            return;
        }
        if(!result){
            log.warning("List with id [" + id + "] not found");
            callback(null, null);
            return;
        }
        callback(null, new List(result));
    });
};

//find all of user
List.getListsOfUser = function(userMail, callback){
    var listCollection = dbController.listCollection();
    listCollection.find({owner: userMail}).toArray(function (err, results) {
        if(err){
            log.error(err.message);
            callback(err, null);
            return;
        }
        var listNamesAndIds = [];
        var i;
        for(i=0; i<results.length; i++){
            if(results[i].name !== FAVOURITES && results[i].name !== WATCHLIST){
                listNamesAndIds.push({id: results[i]._id , name: results[i].name})
            }
        }
        callback(null, listNamesAndIds);
    });
};

List.WATCHLIST = WATCHLIST;
List.FAVOURITES = FAVOURITES;

module.exports = List;