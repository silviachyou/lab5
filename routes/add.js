var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add');
	name = req.query.name;
	description = req.query.description;
	newFriend = {
		"name": name,
		"description": description,
		"imageURL": "http://lorempixel.com/400/400/people/" 
	}
	//console.log(newFriend);
	data["friends"].push(newFriend);
 }