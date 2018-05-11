// Node Dependencies
var db = require('../models');
var express = require('express');
var router = express.Router();

// ----------------------------------------------------
// LOGGED IN PROFILE ROUTES
// ----------------------------------------------------

// When user logins in direct them to profile page
// Profile page display recents posts and bio information grabbed in sign up
router.get("/user/:username/profile", function(req, res) {
	if (req.isAuthenticated()) {
		var username = req.user.username;
		var name = req.user.firstName;
		var message = "Welcome";
		var title = message + " " + name;
		db.users.findOne({
			where: {
				username: username
			},
		  	include: [db.posts]
		})
		.then(function(userInfo) {
			console.log('==========');
			console.log('USER INFO');
			console.log('==========');
			console.log(userInfo);
		  var hbsObject = {
		  	login: true,
		  	title: title,
		    userDb: userInfo.dataValues,
		    userPostDb: userInfo
		  };

		  return res.render("profilePage", hbsObject);
		});

	} else {
		res.redirect("/");
	}
});

router.get("/user", function(req, res) {

	res.redirect("/user/" + req.user.username + "/profile");
});

module.exports = router;

