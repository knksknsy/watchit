/**
 * Created by Douglas on 05.05.2017.
 */
var userController = require('../controllers/userController');

module.exports = function(app){

    var basePath = '/user';

    //Enpoint to create change and delete users
    app.route(basePath)
        .post(userController.createNewUser)
        .put()
        .delete();

    //Endpoint to log in with username and password
    app.route(basePath + '/login')
        .post(userController.login);

    //Endpoint to invalidate user token
    app.route(basePath + '/logout')
        .post();

};