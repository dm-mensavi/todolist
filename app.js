const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
	var date = new Date();
	var today = date.getDay();
  var day ="";

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

  res.render('index', {day: day});

});



app.listen(3000, () => console.log("Server running on port 3000"));