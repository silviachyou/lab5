var data = require("../data.json");

exports.postStatus = function(req, res) {    
	// Your code goes here
	res.render('post');
	name = req.query.name;
	post = req.query.post;
	newPost = {
		"name": name,
		"post": post
	}
	//console.log(newFriend);
	data["posts"].push(newPost);

 }