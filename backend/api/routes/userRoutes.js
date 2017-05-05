/**
 * Created by Douglas on 05.05.2017.
 */
module.exports = function(app){

    var basePath = '/user';

    //Enpoint to create change and delete users
    app.route(basePath)
        .post()
        .put()
        .delete();

    //Endpoint to log in with username and password
    app.route(basePath + '/login')
        .post();

    //Endpoint to invalidate user token
    app.route(basePath + '/logout')
        .post();

};