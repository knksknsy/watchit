/**
 * Created by Douglas on 05.05.2017.
 */
module.exports = function(app){

    var basePath = '/lists';

    //Endpoint to get meta data of all lists and create new Lists
    app.route(basePath)
        .get()
        .post();

    //Endpoint to get change or delete specific list
    app.route(basePath + '/:listID')
        .get()
        .put()
        .delete();

};