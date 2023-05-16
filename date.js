// exports = generateDate;

exports.getfulldate = () => {
  var date = new Date();

  var options = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric'
  };
  
  return date.toLocaleDateString("en-US", options);
}


exports.getday = () => {
  var date = new Date();

  var options = {
    weekday: 'long'
  };
  
  return "current day of the week is " + date.toLocaleDateString("en-US", options);

}

exports.gettime = () => {
  var now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  return "current time is " +hours+":"+minutes;

}