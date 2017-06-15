/**
 * Created by Douglas on 05.05.2017.
 */
var listController = require('../controllers/listController');

module.exports = function(app){

    var basePath = '/favourites';

    app.route(basePath)
        .get(listController.getFavourites)
        .put(listController.addToFavourites)
        .delete(listController.removeFromFavourites)

};