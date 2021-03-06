var db = require('../lib/db');

var UserSchema = new db.Schema({
	username: {type: String, unique: true},
	password: String
});

var MyUser = db.mongoose.model('User', UserSchema);

// exports
module.exports.addUser = addUser;

// add to db
function addUser(username, 	password, callback) {
	var instance = new MyUser();
	instance.username = username;
	instance.password = password;
	instance.save(function (err) {
		if (err) {
			callback(err);
		}
		else {
			console.log('User `' + username + '` is saved');
			callback(null, instance);
		}
	});
}