var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var data = {
		'grid': false,
		'projects':projects
	};
	res.render('index', data);
};

exports.viewGrid = function(req, res) {
	var data = {
		'grid': true,
		'projects':projects
	};
	res.render('index', data);

};