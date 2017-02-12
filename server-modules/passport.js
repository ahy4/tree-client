var conf = require('../config.json');

// http://passportjs.org/guide/twitter/
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

// Sessionの設定
// http://passportjs.org/guide/configure/
passport.serializeUser(function(user, done) {
  var userSession = {
    id: user.id,
    name: user.displayName,
    screen_name: user.username,
    access_token: user.twitter_token,
    access_token_secret: user.twitter_token_secret,
  };
  done(null, userSession);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var port = process.env.PORT || 3000;
passport.use(
  new TwitterStrategy({
    consumerKey: conf.consumer_key,
    consumerSecret: conf.consumer_secret,
    callbackURL: "http://localhost:"+port+"/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    passport.session.id = profile.id;
    process.nextTick(function () {
      // tokenとtoken_secretをセット
      profile.twitter_token = token;
      profile.twitter_token_secret = tokenSecret;
      return done(null, profile);
    });
  }
));

module.exports = {passport: passport};
