//Day, date and time added for the current info using moment.js
var currentDate = $('#currentDate').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

//Array made for the different time slots
var timeSlots = {
"9AM": "", "10AM": "", "11AM" : "", "12PM": "", "1PM" : "", "2PM" : "", "3PM" : "", "4PM" : "", "5PM" : ""
};

var timeDiv = $(".time-block");

var counter = 1;
for(var i = 0; i < timeSlots.length; i++) {
  var entry = "#entry-" + counter;
  $(entry).text(timeSlots[i]);
  var slot = "#slot-" + counter;
  var currentHour = moment().hour();
  var timeString = $(slot).text();
  var timeNum = hourNumber(timeString);  

  if(timeNum < currentHour) {
    $(entry).addClass("past");
  } else if (timeNum > currentHour) {
    $(entry).addClass("future");
  } else {
    $(entry).addClass("present");
  }
  counter ++;
}


function hourNumber(houText) {
    switch(houText) {
      case "8 AM": 
        return 8;
      case "9 AM": 
        return 9;
      case "10 AM": 
        return 10;
      case "11 AM": 
        return 11;
      case "12 PM": 
        return 12;
      case "1 PM": 
        return 13;
      case "2 PM": 
        return 14;
      case "3 PM": 
        return 15;
      case "4 PM": 
        return 16;
      case "5 PM": 
        return 17;
    }
  }

  $(document).ready(function(){
    if(!localStorage.getItem(timeSlots)) {
      modifyTask(timeSlots);
    } else {
      modifyTask(JSON.parse(localStorage.getItem(timeSlots)));
    }
  })

  //On click button added to save content in the text area
  $("button").click(function() {
    value = $(this).siblings("textarea").val();
    houText = $(this).siblings("div").text();
    
    taskSave(houText, value);
  });
  

  function loadLocal() {
    result = localStorage.getItem(timeSlots)
    return (result ? result : timeSlots);
  }
  
  function callLocal() {
    localStorage.setItem(timeSlots, JSON.stringify(timeSlots));
  };
  
  function saveLocal(object) {
    localStorage.setItem(timeSlots, JSON.stringify(object));
  }
  
  //Function created to save the logged
  function taskSave(houText, val) {
    if(!localStorage.getItem(timeSlots)) {
      callLocal();
    }
  
    var loggedHours = JSON.parse(localStorage.getItem(timeSlots));
    loggedHours[houText] = val
  
    saveLocal(loggedHours);
  }
  
  function modifyTask(hourTask) {
    $(".time-block").each(function(block) {
      let res = $(this).children("div");
      $(this).children("textarea").text(hourTask[res.text()]);
    })
  }
  