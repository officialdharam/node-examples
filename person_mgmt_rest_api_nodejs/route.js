module.exports = function(app){
	var persons = require('./controller/persons');
	app.get('/persons', persons.findAll);
	app.get('/persons/:id', persons.findById);
	app.post('/persons', persons.add);
	app.put('/persons/:id', persons.update);
	app.delete('/persons/:id', persons.delete);
	app.get('/import', persons.import);
}