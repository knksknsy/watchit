var express = require('express');
app = express();

var userRoutes = require('./api/routes/userRoutes');
userRoutes(app);

var listRoutes = require('./api/routes/listRoutes');
listRoutes(app);

var favouritesRoutes = require('./api/routes/favouritesRoute');
favouritesRoutes(app);

app.listen(3000, function(){
    console.log('backend listening on port 3000');
});