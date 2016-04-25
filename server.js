// Local Enviorment file loaded
// require('dotenv').config();

var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require("body-parser");
var logger = require('morgan');
var path = require('path');
var PORT =  process.env.PORT || 3333;



// Routing Modules
var index = require('./routes/index.js');



// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session(
  {
    secret: 'my secret',
    cookie: {maxAge: 100000},
    saveUninitialized: true,
    resave: false
  }));

// Static Routes
app.use("/", express.static("public"));
app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use('/partials', express.static('/views/partials'))

// Routes
app.use('/', index);

app.listen(PORT, function () {
  console.log("Listen on port %s", PORT);
});
