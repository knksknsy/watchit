var express = require('express');
var log = require('./api/controllers/loggingController');
var bodyParser = require('body-parser');
var sessions = require("client-sessions");
var databasehandler = require('./api/controllers/dbController');
app = express();

/*app.use(function(req, res, next){

   if (req.header('Content-Type') === 'application/json'){
       log.info('pasing json');
       var data = "";
       req.on('data', function(chunk){ data += chunk});
       req.on('end', function(){
           req.rawBody = data;
           req.jsonBody = JSON.parse(data);
           log.info(req.jsonBody.);
           next();
       })
   } else {
       log.info('nothing to parse');
       next();
   }

});*/

//Setting up sessions
app.use(sessions({
    cookieName: 'mySession',
    secret: 'pqnfislghqlxcdnwalxemcnqfdfdq',
    duration: 24 * 60 * 60 * 1000, //24 h
    activeDuration: 10 * 60 * 1000, //10 min
    cookie: {
        httpOnly: true
    }
}));

app.use(bodyParser.json());

var userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

var listRoutes = require('./api/routes/listRoutes');
listRoutes(app);

var favouritesRoutes = require('./api/routes/favouritesRoute');
favouritesRoutes(app);

var watchListRoutes = require('./api/routes/watchlistRoute');
watchListRoutes(app);

app.listen(3000, function(){
    log.info('backend listening on port 3000');
});