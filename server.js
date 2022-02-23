// server.js
// where your node app starts

// init project
const formatDate = require('./formatDate.js')
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
  var date= req.params.date
  //gave nothing? get something
  if (date == undefined){
    return res.send({
      utc: formatDate(new Date()),
      unix:Math.floor(new Date().getTime())
    })
  }
  //validity check-- try creating Date from given date
  if (new Date(date) == "Invalid Date"){
    //if it's bad, parseInt() and see if they gave unix
    if (new Date(parseInt(date)) == "Invalid Date"){
    //still bad? okay--
      return res.send({
        error: "Invalid Date"
      })
    } else {
        //send unix
        return res.send({
          utc: formatDate(parseInt(date)),
          unix: Math.floor(new Date(parseInt(date)).getTime())
        })
      }
    //not unix?
  } else {
      //send date
      return res.send({
      utc: formatDate(date),
      unix:Math.floor(new Date(date).getTime())
    })
  }
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
