var chore = require('./models/chore');
var path = require('path');

module.exports = {
	configure: function(app) {
		app.get('/chores', function(req, res) {
			chore.get(res);
		});

		app.post('/chore/', function(req, res) {
			chore.create(req.body, res);
		});

		app.put('/chore/', function(req, res) {
			chore.update(req.body, res);
		});

		app.delete('/chore/:id', function(req, res) {
			chore.delete(req.params.id, res);
		});


	    app.get('*', function(req, res) {
	        res.sendFile('./app/index.html', {root: __dirname});
	    });
	}
}