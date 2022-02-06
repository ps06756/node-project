const express = require('express');
const process = require('process');
const serverless = require('serverless-http');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ActorRoutes = require('./src/routes/actor');
const MovieRoutes = require('./src/routes/movies');
const AuthenticationRoutes = require('./src/routes/authentication');
// const MovieRoutes = require('../routes/movies');
// const DirectorRoutes = require('../routes/directorRoutes');

app.use(bodyParser.json());
app.use('/actor', ActorRoutes);
app.use('/auth', AuthenticationRoutes);
app.use('/movie', MovieRoutes);

// app.use('/movie', MovieRoutes);
// app.use('/director', DirectorRoutes);

let username = process.env.MONGO_USERNAME;
let password = process.env.MONGO_PASSWORD;
let clusterUrl = 'cluster0.qvteq.mongodb.net';
let dbName = 'test';
let dbUrl = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}`;

console.log(`username = ${username}`);
mongoose.connect(dbUrl)
  .then(() => console.log('Connected to mongodb instance'))
  .catch(error => console.log(`Unable to connect! ${error}`));

app.listen(3000, () => {
    console.log('Started the server!')
});

module.exports = {
    handler: serverless(app)
};

