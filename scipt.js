// ****************************CHAPTER # 31-34***************************************
// _______________DATE METHOD_______________________________



// 1. Write a program that displays current date and time in
// your browser

// ANSWER-------
const date = new Date();
document.write('<h1>Current Date & Time:</h1>');
document.write(`${date}</br>`);

// 2. Write a program that alerts the current month in words.
// For example December


// ANSWER-------

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const currentMonth = monthNames[date.getMonth()];
document.write('<h1>Current Month in words:</h1>');
document.write(`Current Month: <b> ${currentMonth}</b> </br>`);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// ANSWER-------

const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday", "Sunday"];
const getDay = day[date.getDay()];
alert(`Today is: ${getDay}`);
document.write('<h1>Current Day:</h1>');
document.write(`Today is: <b> ${getDay}</b> </br>`);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// ANSWER-------


const newDay = date.getDay();

document.write("<h1>Today: </h1>");
if (newDay === 0 || newDay === 6) {
    document.write("<h1>It's Fun day</h1> <br/>");
} else {
    document.write("<b>Today is a weekday</b><br/>");
}


//   5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// ANSWER-------

const dayOfMonth = date.getDate();
document.write("<h1>Date Check:</h1>");

if (dayOfMonth <= 15) {
    document.write("<b>First fifteen days of the month</b><br/>");
} else {
    document.write("<b>Last days of the month</b><br/>");
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// ANSWER-----
let minutesSince1970 = Date.now() / (1000 * 60);

let millisecondsSince1970 = Date.now();

document.write("<h1>Jan. 1, 1970:</h1>");

document.write(`Current Date: ${date}<br/>`);

document.write(`Elapsed Milliseconds since Jan. 1, 1970: <b>${millisecondsSince1970}</b><br/>`);

document.write(`Elapsed Minutes since Jan. 1, 1970: <b>${Math.floor(minutesSince1970)} minutes</b>`);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”



// ANSWER-----

let hour = date.getHours();
document.write("<h1>Time</h1>");

if (hour < 12) {
    document.write(`It's AM<br/>`);
} else {
    document.write(`It's PM<br/>`);
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// ANSWER-----

let laterDate = new Date(2020, 11, 31);
document.write("<h1>Last Day of 2020:</h1>");
document.write(`Later Date: ${laterDate}<br/>`);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// ANSWER-----
let ramadanStartDate = new Date(2015, 5, 18);
let currentDate = new Date();
let timeDifference = currentDate - ramadanStartDate;

let daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write("<h1>Number of Days Since 1st Ramadan (June 18, 2015):</h1>");
document.write(`<p><b>${daysPast} </b>days have passed since 1st Ramadan,2015:</p><br/>`);


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// ANSWER-----

let startOf2015 = new Date(2015, 0, 1); 

let time_Difference = currentDate - startOf2015;

let secondsElapsed = Math.floor(timeDifference / 1000);

// Display the result
document.write("<h1>Seconds since the beginning of 2015:</h1>");
document.write(`<p>On reference date ${date}, <b>${secondsElapsed} </b>seconds had passed seince begining of 2015 </p> <br/>`);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// ANSWER-----
let newHour = da

document.write("<h1>Reset the date object an hour:</h1>");
document.write(`Current Date: ${date}<br/>`);