// server.js
// where your node app starts

// init project
const dateFormat = require('./formatDate.js')
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", function (req,res) {
  // date is given
  var utc = new Date(parseInt(req.params.date))
  var unix= new Date(parseInt(req.params.date))
  //console.log(unix)
  if (unix== undefined || utc == undefined){
    return res.send({
      utc: dateFormat(new Date()),
      unix:new Date().getTime() / 1000
    })
  }
  //console.log(typeof unix)
  //check date somehow - what do we check?
  if (unix== "Invalid Date" && utc == "Invalid Date"){
    return res.send({
      error: "Invalid Date"})
  } else {
    return res.send({
      utc: dateFormat(utc),
      unix:unix.getTime()
    })
  }
  
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
