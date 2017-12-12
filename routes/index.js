var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/loginapp'

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res, next){
var resultArray = [];
mongo.connect(url, function(err, db) {
	assert.equal(null,err);
	var cursor = db.collection('visitors').find();
	cursor.forEach(function(doc, err) {
		assert.equal(null, err);
		resultArray.push(doc);
	}, function() {
		db.close();
		res.render('index', {items: resultArray});
	});
});
});

function ensureAuthenticated(req, res, next){
		if(req.isAuthenticated()){
				return next();
		} else {
				//req.flash('error_msg','You are not logged in');
				res.redirect('/users/login');
		}
}

module.exports = router;
