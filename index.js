const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const ActorRoutes = require('./src/routes/actor');
const AuthenticationRoutes = require('./src/routes/authentication');
// const MovieRoutes = require('../routes/movies');
// const DirectorRoutes = require('../routes/directorRoutes');

app.use(bodyParser.json());
app.use('/actor', ActorRoutes);
app.use('/auth', AuthenticationRoutes);

// app.use('/movie', MovieRoutes);
// app.use('/director', DirectorRoutes);

app.listen(3000, () => {
    console.log('Started the server!')
});

module.exports = {
    handler: serverless(app)
};

