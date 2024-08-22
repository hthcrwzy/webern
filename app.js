var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

app.use(express.static('views'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const webernMusic = new Map([
  ['1', 'パッサカリア'],
  ['2', '軽やかな小舟に乗って逃れよ'],
  ['3', '『第7の環』による5つの歌曲'],
  ['4', '5つの歌曲'],
  ['5', '5つの断章'],
  ['6', '管弦楽のための6つの小品'],
  ['7', 'ヴァイオリンとピアノのための4つの小品'],
  ['8', '2つの歌曲'],
  ['9', '6つのバガテル'],
  ['10', '管弦楽のための5つの小品'],
  ['11', 'チェロとピアノのための3つの小品'],
  ['12', '4つの歌曲'],
  ['13', '4つの歌'],
  ['14', '6つの歌'],
  ['15', '5つの宗教的歌曲'],
  ['16', 'ラテン語詩による5つのカノン'],
  ['17', '3つの宗教的民謡'],
  ['18', '3つの歌曲'],
  ['19', '2つの歌曲'],
  ['20', '弦楽三重奏曲'],
  ['21', '交響曲'],
  ['22', '四重奏曲'],
  ['23', '3つの歌'],
  ['24', '9楽器のための協奏曲'],
  ['25', '3つの歌'],
  ['26', '眼の光'],
  ['27', 'ピアノのための変奏曲'],
  ['28', '弦楽四重奏曲'],
  ['29', 'カンタータ第1番'],
  ['30', '管弦楽のための変奏曲'],
  ['31', 'カンタータ第2番']
]);

app.get('/opus/:number', (req, res) => {
  const number = req.params.number;
  const element = webernMusic.get(number)

  if (element) {
    res.json({ 'work': element })
  } else {
    res.status(404).json({})
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;