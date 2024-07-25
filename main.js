function clock() {
  var date = new Date();
  var hourElement = document.getElementById("hours");
  var minuteElement = document.getElementById("minute");
  var secondElement = document.getElementById("second");
  var hours = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours == 0) {
    hours = 12;
  } 
  else
  {
    hours = hours 
  }
  hours = hours < 10 ? "0" + hours : hours;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  // hours = hours ? hours : 12; // the hour '0' should be '12'
  hourElement.innerHTML = `${hours}`;
  minuteElement.innerHTML = `${minute}`;
  secondElement.innerHTML = `${second} ${ampm}`;
}
setInterval(clock, 1000);
