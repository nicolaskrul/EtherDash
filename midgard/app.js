const debug = require('debug')('my-namespace')
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var cors = require('cors');
var passport = require('passport');


var routes = require('./routes/index');
var users = require('./routes/users');
var tasksRouter = require('./routes/tasks');

var app = express();

// enable ability to read text files
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
var motd = require('./motd.txt');


app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// Add api specific route configurations
app.use('/', routes);
app.use('/users', users);
app.use('/tasks', tasksRouter);

// Connect with MongoDB server
// mongoose.connect('mongodb://localhost/asgard');
mongoose.connect('mongodb://ullr:zH76bBYxjVy4Qu9Vb2LC4xMf29eQNsKJT5N2Kto5z2e2U8gpPe2SoJYschAs4hhV@ds021346.mlab.com:21346/mimir');

console.log('-!- MongoDB connection established')
// Config CORS headers


// Base route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));


// Start server
app.listen(3000, function () {
  console.log('' + motd);
  var host = this.address().address;
  var port = this.address().port;
  console.log('-!- Domain:' + '\n' + '-!- ' + 'http://' + JSON.stringify(host) + port + '\n')
  console.log('-!- Status:' + '\n' +'=======' );
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
//
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
    console.log(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
