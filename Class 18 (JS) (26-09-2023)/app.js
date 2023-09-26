// var headuser = prompt("Enter head username");

// var tailuser = prompt("Enter tail username");

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// console.log(floor);

// if (floor === 0) {
//   alert(headuser + " win the toss");
// } else {
//   alert(tailuser + " win the toss");
// }

// var random = Math.random();

// console.log(random);

// var randomValues =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%*/";
// var password = "";

// for (var i = 0; i < 10; i++) {
//   var randomNumbers = Math.floor(Math.random() * randomValues.length);
//     console.log(randomNumbers,randomValues[randomNumbers]);
//   password += randomValues[randomNumbers];
// }

// console.log(password);

// *************************Dates**********************************

// console.log(date.toString().slice(0, 3));

// var dayNames = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

// console.log(date.getTime());

// var Ramadandate = new Date("11 march 2024");

// var Ramadandatemillis = Ramadandate.getTime();

// var today = new Date();

// var todaysmillis = today.getTime();

// var diff = Ramadandatemillis - todaysmillis;

// // console.log(diff);

// var months = diff / (1000 * 60 * 60 * 24 * 30);

// var days = (months - Math.floor(months)) * 24;

// var hours = (days - Math.floor(days)) * 60;

// console.log(Math.floor(hours));

// console.log(Math.floor(months));

// console.log(Math.floor(days));

// var date = new Date("11 march 2024");

// var ramadanmilii = date.getTime();

// var todaydate = new Date();

// var datemilli = todaydate.getTime();

// var diff = ramadanmilii - datemilli;

// console.log(diff);

// var months = diff / (1000 * 60 * 60 * 24 * 30);

// var days = (months - Math.floor(months)) * 24;

// console.log(Math.floor(months));

// console.log(Math.floor(days));

// console.log(date.toString().slice(0, 10));

// var dayNames = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

// console.log(dayNames[date.getDay()]);

// console.log(date.getSeconds());

var date = new Date();

console.log(date.setFullYear(2030));
