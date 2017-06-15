/**
 * Created by Douglas on 07.06.2017.
 */
var listController = require('../controllers/listController');

module.exports = function(app){

    var basePath = '/watchlist';

    app.route(basePath)
        .get(listController.getWatchlist)
        .put(listController.addToWatchlist)
        .delete(listController.removeFromWatchlist);
};