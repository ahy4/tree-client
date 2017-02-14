var conf;

// if (process.env.NODE_ENV === "production") {
  conf = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    hash_password: process.env.HASH_PASSWORD
  };
  console.log(conf);
// } else {
//   try {
//     conf = require('./config.json');
//   } catch (e) {
//     throw new Error("Could not read /server-modules/config.json. \n"+
//       "Please create it or use [ $ NODE_ENV=production ] or [ $ npm run debug ] and set VARS. \n"+
//       "It needs consumer_key, consumer_secret, hash_password, url. hash_password is your password.");
//   }
// }

module.exports = conf;