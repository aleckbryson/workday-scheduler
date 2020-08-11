//Day, date and time added for the current info using moment.js
$('#currentDate').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

//Array made for the different time slots
var timeSlots = {
"9AM": "", "10AM": "", "11AM" : "", "12PM": "", "1PM" : "", "2PM" : "", "3PM" : "", "4PM" : "", "5PM" : ""
};


var timeDiv = $(".time-block");



