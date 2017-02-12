'use strict';
var http = require('http');
var express = require('express');
var path = require('path');

// passport-twitter用
var session = require('express-session')
var auth = require('./server-modules/passport');
var passport = auth.passport;

// ルーティングファイルを指定
var routes = require('./server-modules/routes');
var app = express();
var server = http.createServer(app);

// passport-twitter用
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  secret: '[[nokogirI]]',
  resave: true,
  saveUninitialized: true
}));

// 静的ファイルのルートディレクトリを指定
app.use('/', express.static(path.join(__dirname, 'public')));

// ルーティングを設定
routes.configRoutes(app, server, passport);

// リッスン
server.listen(process.env.PORT || 3000);
console.log('Listening on port %d in %s mode', server.address().port, app.settings.env);
