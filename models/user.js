var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({

    userName 		: String

});

mongoose.connect('mongodb://localhost:27017/tcpserver');

module.exports = mongoose.model('user', userSchema);