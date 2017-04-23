var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 9001;

//bodyParser ~ to parse the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//associating files
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/questions', function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});




//connecting to PORT
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});