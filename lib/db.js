var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// connect to cloud database
var username = "morxs";
var password = "asd123";
var address = '@ds043987.mongolab.com:43987/sitepoint';

connect();

// connect to mongo
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}

function disconnect() { mongoose.disconnect(); }