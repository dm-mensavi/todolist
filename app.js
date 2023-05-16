const express = require('express');
const bodyParser = require('body-parser');
const dategenerator = require(__dirname+ '/date.js');
const app = express();


var items = [];
var jobs = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//# initial todo list
app.get("/", (req, res) => {
	var date = new Date();
	var today = date.getDay();
  var day ="";
  var mood = "";

  switch(today){
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      
      break;
      case 2:
        day = "Tuesday";
        break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
      default:
      day="Error: Invalid weekday."
  }
  
  mood= (day === (0 || 6))? "happy":"sad";

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  
  var dateformat = date.toLocaleDateString("en-US", options);
  
  
  res.render('index', {day, today, mood, dateformat});

});

//# todo list from instructor
app.get('/list', (req, res) => {


  var gdate = dategenerator.getfulldate();

  res.render('list', {gdate, items});
});

app.post('/list', (req, res) => {
  item = req.body.item;
  items.push(item);
  
  res.redirect('/list');
})

//#Customised work list


app.get('/worklist', (req, res) => {
  
  var date = new Date();
  
  var options = {
    month: 'long',
    day: 'numeric',
  };
  
  var dateformat = date.toLocaleDateString("en-US", options);
  var itemIndex = jobs.indexOf(req.body.job);
  
  res.render('worklist', {dateformat, jobs, itemIndex});
});

app.post('/worklist', (req, res) => {
  jobs.push(req.body.job);

  res.redirect('/worklist');
})

app.listen(3000, () => console.log("Server running on port 3000"));