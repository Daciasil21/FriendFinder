
var finalScore = [
  {
    "name": "Bob",
    "photo": "http://www.halsteaddiving.com/wordpress/wp-content/uploads/2011/04/Bob.jpg",
    "scores":[
        3,
        2,
        2,
        5,
        1,
        3,
        4,
        1,
        1,
        4
      ],
    "score" : "B"
     }
]

function(app){
app.get("/api/friends", function(req, res) {
  res.json(finalScore);
});



// ---------------------------------------------------------------------------
app.post("/api/friends", function(req, res) {
finalScore.push(req.body);
 
var currentUserscore = req.body.score;

var result = []

	for (var i=0; i < finalScore.length; i++){
		if(currentUserscore == finalScore[i].score){
			result.push(finalScore[i])
		}
	}

	res.send(result[0])

	});

};
//----------------------------------------------------------------------------
// routing for HTML paths
var path = require("path");


module.exports = function(app){

	// html routes
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "./questions.html"));
	});

	app.use("/index", function(req, res) {
	  res.sendFile(path.join(__dirname, "./index.html"));
	});

};