var express = require('express');
 
var app = express();

app.set("view engine", "ejs");

var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, resp){
    app.use('/public', express.static('public'))
    resp.render("profile")
});

app.get("/resume", function(req, resp){
    app.use('/public', express.static('public'))
    resp.render("resume")
});

app.get("/reflection", function(req, resp){
    app.use('/public', express.static('public'))
    resp.render("reflection")
});

app.get("/projects", function(req, resp){
    app.use('/public', express.static('public'))
    resp.render("projects")
});

app.get("/contact", function(req, resp){
    app.use('/public', express.static('public'))
    resp.render("contact")
});
app.listen(8080, function () {
    console.log('App listening on port 8080!');
   })