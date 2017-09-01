var express = require("express");
var User = require('./models/user.js');
var Vote = require('./models/vote.js');

module.exports = function(app, passport){
	app.get('/', (req, res) => {
		res.render("./index.html")
	})

	app.post('/',(req, res) => {
		Vote.find({}, (err, data) => {
			res.json(data)
		});
	})

	app.post('/login',(req, res) => {
		res.json({
			login:req.isAuthenticated(),
			name: passport.name
		})
	})

	app.post('/newPoll',(req, res) => {
		var info = req.body;
		var opts = [];
		for(var option in info){
			if(option.startsWith('opt'))
				opts.push({opt:info[option], cnt:0})
		}
		console.log(req.user.twitter.username)
		var vote = new Vote({
			title: req.body.title,
			creatorName: req.user.twitter.username,
			options: opts,     
		});
		vote.save((err, res) => {
			if (err) {
				console.log("Error:" + err);
			}else {
				console.log("Res:" + res);
			}
		});
		res.redirect('/')
	})

	app.post('/update',(req, res) => {
		var info = req.body;
		Vote.update(
			{_id: info.pollId, "options.opt": info.vote}, 
			{$inc: {"options.$.cnt": 1}},
			(err, data)=>{
				if (err) {
					console.log("Error:" + err);
					res.send('error');
				} else {
					res.send('finish');
				}
			})
	})

	app.post('/delete',(req, res) => {
		var id = req.body.pollId;
		Vote.remove({_id:id}, function(err, data){
			if (err) {
				console.log("Error:" + err);
				res.send('error');
			}else {
				res.send('finish');
			}
		});
	})

	app.get('/logout', (req, res)=>{
		req.logout();
		res.redirect('/');
	})

	app.get('/login', passport.authenticate('twitter'));

	app.get('/login/callback', passport.authenticate('twitter',{
		successRedirect: '/',
		failureRedirect: '/'
	}));
}