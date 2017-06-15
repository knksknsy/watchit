/**
 * Created by Douglas on 11.06.2017.
 */

var dbController = require('./dbController');
var log = require('./loggingController');
var List = require('../models/listModel');

// list = {
//      owner= <email>,
//       name= <ListName>,
//       entries = {
//
//       }
// }

module.exports = {

    createList: function(req, res){
        log.info("Request to create new list incoming");
        var userMail = authenticate(req, res);
        if(userMail){
            var listData = req.body.newList;
            if(listData){
                listData.owner = userMail;
                var list = new List(listData);
                log.info("saving new List");
                list.save(function(err, result){
                    if(err){
                        res.send(err)
                    } else {
                        log.info("new List saved successfully");
                        res.send({status: "ok"});
                    }
                });
            } else {
                var error = {message: "Invalid data provided"};
                log.error("Error while creating new List: " + error.message);
                res.send(error);
            }
        }
    },

    deleteList: function(req,res){
        var userMail = authenticate(req,res);
        if(userMail){
            var id = req.body.id;
            if(!id){
                res.send({message: "Id required to delete List"});
                return;
            }
            List.getListById(id, function(err, list){
                if(err){
                    log.error(err.message);
                    res.send(err);
                } else {
                    if(list === null){
                        res.send("list with id[" + id +"] does not exist");
                    } else {
                        list.delete(function(err, result){
                            if(err){
                                log.error(err.message);
                                res.send(err);
                            } else {
                                res.send({status: "ok"});
                            }
                        });
                    }
                }
            });
        }
    },

    getCustomListsOfUser: function(req, res){
        var userMail = authenticate(req, res);
        if(userMail){
            List.getListsOfUser(userMail, function(err, results){
                if(err){
                    log.error(err.message);
                    res.send(err);
                } else {
                    res.send(results);
                }
            });
        }
    },

    setupDefaultLists: function(userMail){
        var watchlist = new List({
            name: List.WATCHLIST,
            owner: userMail
        });

        var favourites = new List({
            name: List.FAVOURITES,
            owner: userMail
        });

        watchlist.save(function(err, result){
           if(err){
               log.error("Error during User setup. Watchlist couldn't be created: " + err.message);
           }

            favourites.save(function(err, result){
                if(err){
                    log.error("Error during User setup. Favourite List couldn't be created: " + err.message);
                } else {
                    log.info("User Setup for user " + userMail + "complete. Favourites and Watchlist created");
                }
            });
        });
    },

    getFavourites: function(req, res) {
        var userMail = authenticate(req, res);
        if(userMail){
            getList(List.FAVOURITES, userMail, function(err, result){
               if(err){
                   log.error(err.message);
                   res.send(err);
                   return;
               }
               if(!result){
                   log.warning("No favourites list found for user: " + JSON.stringify(userMail) + ", empty array returned.");
                   res.send([]);
               } else {
                   res.send(result.entries);
               }
            });
        }
    },

    getWatchlist: function(req, res){
        var userMail = authenticate(req, res);
        if(userMail){
            getList(List.WATCHLIST, userMail, function(err, result){
                if(err){
                    log.error(err.message);
                    res.send(err);
                    return;
                }
                if(!result){
                    log.warning("No watchlist found for user: " + JSON.stringify(userMail) + ", empty array returned.");
                    res.send([]);
                } else {
                    res.send(result.entries);
                }
            });
        }
    },

    addToFavourites: function(req, res){
        var userMail = authenticate(req, res);
        var movie = req.body.movie;
        if(userMail){
            getList(List.FAVOURITES, userMail, function(err, result){
                if(err){
                    log.error(err.message);
                    res.send(err);
                    return;
                }
                if(!result){
                    log.warning("No favourites list found for user: " + userMail + ", new Favourites list created");
                    var favList = new List({
                        owner: userMail,
                        name: List.FAVOURITES,
                        entries:[movie]
                    });
                    favList.save(function(err, result){
                       if(err){
                           log.error(err.message);
                           res.send(err);
                       } else {
                           log.info("Successfully added movie[" + movie.id + "] to favourites");
                           res.send({status: "ok"});
                       }
                    });

                } else {
                    var changedList = new List(result);
                    if(changedList.add(movie)){
                        changedList.update(function(err, result) {
                            if(err){
                                log.error(error.message);
                                res.send(err);
                            } else {
                                log.info("List successfully updated");
                                res.send({status: "ok"});
                            }
                        });
                    } else {
                        var error = {message: "Movie["+ movie.id +"] all ready saved in Favourites list"};
                        res.send(error);
                    }
                }
            });
        }
    },

    addToWatchlist: function(req, res){
        var userMail = authenticate(req, res);
        var movie = req.body.movie;
        if(userMail){
            getList(List.WATCHLIST, userMail, function(err, result){
                if(err){
                    log.error(err.message);
                    res.send(err);
                    return;
                }
                if(!result){
                    log.warning("No watchlist found for user: " + userMail + ", new watchlist created");
                    var watchlist = new List({
                        owner: userMail,
                        name: List.WATCHLIST,
                        entries:[movie]
                    });
                    watchlist.save(function(err, result){
                        if(err){
                            log.error(err.message);
                            res.send(err);
                        } else {
                            log.info("Successfully added movie[" + movie.id + "] to watchlist");
                            res.send({status: "ok"});
                        }
                    });

                } else {
                    var changedList = new List(result);
                    if(changedList.add(movie)){
                        changedList.update(function(err, result) {
                            if(err){
                                log.error(error.message);
                                res.send(err);
                            } else {
                                log.info("List successfully updated");
                                res.send({status: "ok"});
                            }
                        });
                    } else {
                        var error = {message: "Movie["+ movie.id +"] all ready saved in Watchlist"};
                        res.send(error);
                    }
                }
            });
        }
    },

    removeFromFavourites: function(req,res){
        removeFromDefaultList(List.FAVOURITES, req, res);
    },

    removeFromWatchlist: function(req,res){
        removeFromDefaultList(List.WATCHLIST, req, res);
    }

    // getList: function(req,res) {
    //
    // }
};

function removeFromDefaultList(name, req, res){
    var userMail = authenticate(req, res);
    if(userMail){
        var movieId = req.body.id;
        if(!movieId){
            log.warnig("Invalid Request: trying to delete from list without providing id");
            res.send({message: "no movieId provided"});
            return;
        }
        List.getListByName(name, userMail, function(err, list){
            if(err){
                log.error(err.message);
                res.send(err);
            } else {
                if(list === null){

                } else {
                    list.remove(movieId);
                    list.update(function(err, result){
                        if(err){
                            log.error(error.message);
                            res.send(err);
                        } else {
                            log.info("List successfully updated");
                            res.send({status: "ok"});
                        }
                    });
                }
            }
        });
    }


}

function getList(name, email, callback){  //TODO replace with list model function
    var listCollection = dbController.listCollection();
    listCollection.findOne({name: name, owner: email},function(err, result){
        if(err){
            callback(err, null);
            return;
        }

        if(!result){
            callback(null, null);
            return;
        }

        callback(null, result);
    });
}

function authenticate(req, res){
    if(req.mySession && req.mySession.user){
        return req.mySession.user;
    } else {
        res.send({message: "You are not logged in"});
        return null;
    }
}