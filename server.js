// dependencies
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const fs = require('fs');
const dbConnect = require('./server/config/dbConnect')
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './apps'));
app.set('view engine', 'ejs');

// middleware
app.use(session({
    secret: "rubberbabybuggybumpers",
    name: 'cookie_monster',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(favicon(path.join(__dirname, './client/public/images', 'user-favicon.ico')));
app.use(express.static(path.join(__dirname, './client/public')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("Power Overwhelming...")
})
