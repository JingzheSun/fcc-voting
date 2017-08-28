var express = require("express");

module.exports = function(app, passport){
	app.get('/', (req, res) => {
		res.render("./index.html")
	})
}