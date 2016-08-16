var mongoose = require('mongoose');

Schema = mongoose.Schema;

var PersonSchema = new Schema({
	id: Number,
	name: String,
	profession: String,
	experience: String
});

mongoose.model('Person', PersonSchema);