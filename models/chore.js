var connection = require('../connection');

function Chore() {

	this.get = function(response) {
		connection.acquire(function(err, con) {
			con.query('select * from chores', function(err, results) {
				con.release();
				response.send(results);
			});
		});
	};

	this.create = function(chore, response) {
		connection.acquire(function(err, con) {
			con.query('insert into chores set ?', chore, function(err, result) {
				con.release();
				if (err) {
					response.send({status: 1, message: 'CHORE creation failed'});
				}
				else {
					response.send({status: 0, message: 'CHORE creation successful'});
				}
			});
		});
	};

	this.update = function(chore, response) {
		connection.acquire(function(err, con) {
			con.query('update chores set ? where id = ?', [chore, chore.id], function(err, result) {
				con.release();
				if (err) {
					response.send({status: 1, message: 'CHORE update failed'});
				} else {
					response.send({status: 0, message: 'CHORE update successful'});
				}
			});
		});
	};

	this.delete = function(id, response) {
		connection.acquire(function(err, con) {
			con.query('delete from chores where id = ?', [id], function(err, result) {
				con.release();
				if (err) {
					response.send({status: 1, message: 'CHORE delete failed'});
				} else {
					response.send({status: 0, message: 'CHORE delete successful'});
				}
			});
		});
	}
}

module.exports = new Chore();