// var a = parseInt(prompt());

// var b = parseInt(prompt());

// console.log(a + b);

// var UserFirstName = prompt("Enter your first name");

// var UserLastName = prompt("Enter your last name");

// console.log("Hello Mr. " + UserFirstName + " " + UserLastName);

// var city = prompt("Where do you live");

// if (city === "karachi") {
//   console.log("it is one of the beautiful city..");
// }

// var age = "20";

// if (age === 20) {
//   console.log("Hello");
// }

// var correctCity = prompt("Enter your city");
// var score = 0;

// if (correctCity === "lahore") {
//   alert("Correct Answer");
//   score++;
//   console.log(score);
// }

// var age = 20;

// if (age >= 20) {
//   alert("you are eligible");
// } else {
//   alert("you are not eligible");
// }

// var firstname;

// firstname = "faraz"

// var gender = prompt("Enter your gender");

// var message;

// if (gender === "male") {
//   message = 2;
// }

// if (gender === "female") {
//   message = "Hello sister!!";
// } else {
//   alert("wrong value");
// }

// alert(message);

// var ticketNumber = +prompt("Enter your ticket number");

// if (ticketNumber !== 4853201) {
//   alert("enter");
// }

// var kiyalanahai = prompt("kiya lana hai");
// if (kiyalanahai === "dahi") {
//   alert("ley lena");
// } else if (kiyalanahai === "doodh") {
//   alert("chalo ley lena");
// } else if (kiyalanahai === "bread") {
//   alert("abey yr ley lena");
// } else {
//   alert("kuch bhi ley ao khali hath mut ana..");
// }
// ---------------------------------------------------------------------------
var percentage = +prompt("Enter your percentage");

if (percentage >= 80 && percentage <= 100) {
  alert("A+");
} else if (percentage >= 70 && percentage <= 80) {
  alert("A");
} else if (percentage >= 60 && percentage <= 70) {
  alert("B");
} else if (percentage >= 50 && percentage <= 60) {
  alert("C");
} else if (percentage >= 40 && percentage <= 50) {
  alert("D");
} else if (percentage >= 33 && percentage <= 40) {
  alert("E");
} else if (percentage >= 0 && percentage <= 33) {
  alert("F");
}
