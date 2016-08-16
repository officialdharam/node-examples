var mongoose  = require('mongoose');
Person = mongoose.model('Person');

exports.findAll = function(req, res) { 
	Person.find({}, function(err, results) {
		return res.send(results);
	});
};

exports.findById = function(req, res) {
	var id = req.params.id;
	Person.find({'id': id}, function(err, result) {
		return res.send(result);
	});
};

exports.add = function(req, res) { 
	var body = req.body;
	Person.create(body, function(err, person) {
		if(err)
			return console.log(err);
		return res.send(person);
	});
};

exports.update = function(req, res) {
	var body = req.body;
	var id = req.params.id;
	
	Person.update({'id':id}, req.body, function(err, idAffected) {
		if(err) {
			return console.log(err);
		}
		return res.sendStatus(202);
	});	
};

exports.delete = function(req, res) {
	var id = req.params.id;
	Person.remove({'id':id}, function(err, result) {
		return res.send(result);
	});
};

exports.import = function(req, res){
  Person.create(
    { "id":1,"name": "Dharam", "profession": "Software Engineer", "experience": "8+" },
    { "id":2,"name": "Ranjana","profession": "Software Engineer", "experience": "8+" },
    { "id":3,"name": "Ankit", "profession": "Software Engineer", "experience": "7+" },
    { "id":4,"name": "Devesh", "profession": "Software Engineer", "experience": "12+" }
	, function (err) {
		if (err) return console.log(err);
		return res.sendStatus(202);
  });
};