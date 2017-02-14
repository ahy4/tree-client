'use strict';
var fs = require('fs');
var path = require('path');
var conf = require('./config-wrap');
var crypto = require('crypto');
var Twitter = require('twitter');
var Handlebars = require('handlebars');

/** 
 * 文字をhash化するやつ
 */
function createHash(password) {
  var sha512 = crypto.createHash('sha512');
  sha512.update(password+conf.hash_password);
  var hash = sha512.digest('hex');
  return hash;
}

var configRoutes = function (app, server, passport) {
  var hashTable = {};

  // main
  app.get('/', function (req, res) {
    // 認証保護
    if (!req.session.passport) return res.redirect('/auth/twitter'); // /login がいい
    // キー達からhashとtwitterオブジェクト生成
    var userInfo = req.session.passport.user;
    var hash = createHash(JSON.stringify(userInfo));
    var tw = new Twitter({
      consumer_key: conf.consumer_key,
      consumer_secret: conf.consumer_secret,
      access_token_key: userInfo.access_token,
      access_token_secret: userInfo.access_token_secret
    });

    // hashTableにハッシュとtwitterオブジェクトの対を保管
    hashTable[hash] = tw;

    // index.hbsを読んでトークン付けてsend
    fs.readFile(path.resolve(__dirname, '../public/index.hbs'), 'utf-8', function (err, hbs) {
      if (err) return res.sendStatus(500);
      var html = Handlebars.compile(hbs)({tokenData:JSON.stringify({token:hash})});
      res.send(html);
    });
  });

  // twitterのoauth認証
  // http://passportjs.org/guide/twitter/
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  // api

  /**
   * GET /api/.../.../.../......
   * params:
   *   * token {String} required
   *   * data {Object}
   * response:
   *   * result {Object}
   *   * success {Boolean}
   *   * err {Error|null}
   */
  app.get(/\/api\/(.*)/, function (req, res) {
    var token = req.query.token;
    var data = req.query.data;
    var tw = hashTable[token];
    var requestPath = req.params[0];
    // console.log(Object.keys(hashTable), token);
    if (typeof tw === "undefined") return res.sendStatus(401);
    console.info("GET [["+requestPath+"]]  query: "+JSON.stringify(data)+")");
    tw.get(requestPath, data)
      .then(function (body) { res.json(body); })
      .catch(function (err) { console.log(err); res.sendStatus(500); });
  });
};

module.exports = { configRoutes: configRoutes };
