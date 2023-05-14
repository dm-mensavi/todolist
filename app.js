const express = require('express');
const bodyParser = require('body-parser');
const app = express();


var items = [];

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

  var date = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  var dateformat = date.toLocaleDateString("en-US", options);
  
  res.render('list', {dateformat, items});
});

app.post('/list', (req, res) => {
  item = req.body.item;
  items.push(item);
  
  res.redirect('/list');
})

//#Customised todo list
app.get('/mytodolist', (req, res) => {

  var date = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  var dateformat = date.toLocaleDateString("en-US", options);
  
  res.render('mytodolist', {dateformat, items});
});

app.post('/mytodolist', (req, res) => {
  item = req.body.item;
  items.push(item);

  res.redirect('/mytodolist');
})

app.listen(3000, () => console.log("Server running on port 3000"));