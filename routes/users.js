var express = require('express');
var router = express.Router();
var passport =require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var Visitor = require('../models/visitor');


// Register
router.get('/register', function(req, res){
	res.render('visitors');
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});
/*
// Register User
router.post('/register', function(req, res){
	var name = req.body.name;
  var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var password2 = req.body.password2;

	//Validation
	req.checkBody('name', 'Name is requiered').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

	if(errors){
			res.render('register',{
				errors:errors
		});
	} else{
			var newUser = new User({
					name: name,
					email: email,
					username: username,
					password:password
			});

			User.createUser(newUser, function(err, user){
					if(err) throw err;
					console.log(user);
			});

			req.flash('success_msg', 'You are registered and can now login');

			res.redirect('/users/login');
	}
});
*/
router.post('/register', function(req, res){

    var name = req.body.name;
    var email = req.body.email;
    var telephone = req.body.telephone;
    var company = req.body.company;
    var escortname = req.body.escortname;

    //Validation
	req.checkBody('name', 'Name is requiered').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('telephone', 'Telephone is required').notEmpty();
	req.checkBody('company', 'Company is required').notEmpty();
	req.checkBody('escortname', 'Escort name is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
			res.render('register',{
				errors:errors
		});
	} else{
			var newVisitor = new Visitor({
					name: name,
					email: email,
					telephone: telephone,
					company: company,
          escortname: escortname
			});

			Visitor.createVisitor(newVisitor, function(err, visitor){
					if(err) throw err;
					console.log(visitor);
			});

			//req.flash('success_msg', 'You are registered!');

			res.redirect('/users/register');
    }

});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
			if(err) throw err;
			if(!user){
				 	return done(null, false, {message: 'Unknown User'});
			}

			User.comparePassword(password, user.password, function(err, isMatch){
				if(err) throw err;
				if(isMatch){
						return done(null, user);
				} else {
						return done(null, false, {message: 'Invalid password'});
				}
		});
		});
  }));

	passport.serializeUser(function(user, done) {
	  done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.getUserById(id, function(err, user) {
	    done(err, user);
	  });
	});

router.post('/login',
  passport.authenticate('local',{successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
  function(req, res) {
		res.	redirect('/');
});

router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});

module.exports = router;
