var express = require("express");
var mongoose = require("mongoose");
var url = "mongodb://amazoneastdatabase:wg7CsIy5zQKItBM4@database-shard-00-00-esilf.mongodb.net:27017,database-shard-00-01-esilf.mongodb.net:27017,database-shard-00-02-esilf.mongodb.net:27017/test?ssl=true&replicaSet=database-shard-0&authSource=admin";

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', () => console.log('ERROR!'));
db.on('connected',()=> console.log("connnection established"));

var User = require('./public/models/user.js');
var Vote = require('./public/models/vote.js');

User.find({}, (err, data) => {
	console.log(err || data)
});
Vote.find({}, (err, data) => {
	console.log(err || data)
});

/*User.remove({}, function(err, res){
    if (err) {
        console.log("Error:" + err);
    }
    else {
        console.log("Res:" + res);
    }
})*/
	   /* if(!data || !data.length){			 
				var vote = new Vote({
					title: "example",
				    creatorName: "s",
				    options: [{opt: "abc", cnt: 2}],                  
				});

				vote.save((err, res) => {
					if (err) {
						console.log("Error:" + err);
					}
					else {
						console.log("Res:" + res);
					}
				});
			}*/