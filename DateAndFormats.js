//JS Date, Date Formats, set and get methods
const d = new Date(); //Date --> Object
console.log(d);// yyyy-mm-ddThh:mm:ss.sssZ current date and time

const d1 = new Date("June 4, 2023 12:00:00");
console.log(d1); // Sun Jun 04 2023 12:00:00

const d2 = new Date(2024, 15, 24, 10, 33, 30);
console.log(d2); // Thu Mar 24 2024 10:33:30

const d3 = new Date(2025);
// document.getElementById("d3").innerHTML = d3;

const d4 = Date.parse("June 3, 2025");
console.log("Date in milliseconds: ",d4); // 1738281600000 -> converts to milliseconds

const d5 = new Date();
const getYear = d5.getFullYear();
const getMonth = d5.getMonth();
const getPreviousMonth = d5.getMonth() -1; //returns previous month
const getCurrDay = d5.getDay();
console.log("Current year: ",getYear);
console.log("Current month: ",getMonth); //returns current month from 0 - 11;
console.log("Previous month: ",getPreviousMonth);
console.log("Current day: ",getCurrDay); // returns current day from 0 - 6 (week format);

const d6 = new Date("January 1, 2020");
d6.setFullYear(2025); // last day of the previous year is set in console and in the front end the first day of the year which is set is displayed.
// document.getElementById("d6").innerHTML = d6; // sets the date in HTML element
console.log(d6)
const d7 = new Date("January 1, 2020");
d7.setMonth(11); // sets the month to November in console and december in UI
console.log(d7)
// document.getElementById("d7").innerHTML = d7;
const d8 = new Date("January 1, 2020");
d8.setDate(15); // sets the date to 14 in console and 1st in UI
console.log(d8);
// document.getElementById("d8").innerHTML = d8;
const d9 = new Date("January 1, 2020");
d9.setSeconds(30); // sets the seconds to 30 
console.log(d9)
document.getElementById("d9").innerHTML = d9;