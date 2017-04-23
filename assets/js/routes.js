var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

//associating files with extentions
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

router.get('/questions', function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


//make router accessible to server
module.exports = router;

//---------------------
//
var matchTable = require("./match.js")

// Routes
// We export this function to make it accessible to other files using require.

module.exports = function(app){



app.get("/api/friends", function(req, res) {
  res.json(matchTable);
});


app.post("/api/friends", function(req, res) {
matchTable.push(req.body);
 
var currentUserGrade = req.body.grade;

var result = []

	for (var i=0; i < matchTable.length; i++){
		if(currentUserGrade == matchTable[i].grade){
			result.push(matchTable[i])
		}
	}

	res.send(result[0])

	});

};