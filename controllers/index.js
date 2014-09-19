var Newemail = require('../models/submission.js')

var indexController = {

	index: function(req, res) {
		res.render('index');
	},

	submission: function(req, res){
			// console.log('from index.js', req.body);
			var newEmail = Newemail({
				email: req.body.email,

			});

			newEmail.save(function(err,doc){
				if(err){
					console.log("ERROR!", err)
				}
				else{
					res.redirect('#')
				}
			})
		},





};


module.exports = indexController;