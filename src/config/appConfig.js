const MONGOCLIENT = process.env.MONGOCLIENT;

const { root } = require('../constants');
const { router } = require('../routes');
const { mongooseConnect } = require('../resources');

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const session = require('express-session')
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');

const app = express();

mongooseConnect(MONGOCLIENT);
const MongoStore = connectMongo(session);

app.use(session({
  secret : '123',
  cookie : { maxAge : 3600000 },
  saveUninitialized : true,
  resave : false,
  store : new MongoStore({
    mongooseConnection : mongoose.connection,
    ttl : 24 * 60 * 60,
  }),
}));

app.use((request, response, next) => {
    app.locals.session = request.session;
    next();
});

hbs.localsAsTemplateData(app);
hbs.registerPartials(`${root}/views/components`);
app.set('view engine', 'hbs');
app.set('views', `${root}/views`);
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(`${root}/public`));

app.use('/', router);

module.exports = {
  app,
};