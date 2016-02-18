var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var random_num = Math.random();
	console.log(random_num);

	if (random_num > 0.5) {
		var data = {
			'grid': false,
			'projects':projects
		};
		res.render('index', data);
		}
	else {
		res.redirect('/grid');
	}
};

exports.viewGrid = function(req, res) {
	var data = {
		'grid': true,
		'projects':projects
	};
	res.render('index', data);

};