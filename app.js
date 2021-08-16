var createError = require("http-errors")
var path = require("path")

var express = require('express');
var logger = require('morgan');

var designerRouter = require('./src/resources/designers/routes');
var guestRouter = require('./src/resources/guests/routes');
var modelRouter = require('./src/resources/models/routes');
var eventRouter = require('./src/resources/events/routes');
var outfitRouter = require('./src/resources/outfits/routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/designers', designerRouter);
app.use('/guests', guestRouter);
app.use('/models', modelRouter);
app.use('/events', eventRouter);
app.use('/outfits', outfitRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
