var express = require('express')
var app = express();

app.get('/', function(req, res){
  res.send("Hi There You!")
})

app.get('/bye', function(req, res){
  res.send("GOODBYE!!!")
})

app.get('/dog', function(req, res){
  res.send("WOOF!!!")
})

app.get('/r/:something', function(req, res){
  var thing = req.params.something
  res.send("This is the " + thing)
})

app.get('*', function(req, res){
  res.send("youareastar")
})





app.listen(3000, function(){
  console.log("Listening on Port 3000...");
})
