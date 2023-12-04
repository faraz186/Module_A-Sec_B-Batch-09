alert("hello world");

function popUp() {
  alert("hello world");
}

popUp(); // function calling

popUp();
popUp();
popUp();
popUp();
popUp();
popUp();

for (var i = 0; i <= 6; i++) {
  popUp();
}

function greet() {
  var firstname = prompt("Enter first name");
  var lastname = prompt("Enter last name");
  var fullname = firstname + lastname;
  console.log(fullname);
}

greet();

function sum(a, b) {
  // parameter
  //   var a = 20,
  //     b = 30;
  console.log(a + b);
}

sum(10, 50); // arguments

function multiplicationTable(tableNumber, tableLength) {
  for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + "x" + i + "=" + tableNumber * i + "<br>");
  }
}

var tableNumber = +prompt("Enter a number to generate table...");
var tableLength = +prompt("Enter table length..");

multiplicationTable(tableNumber, tableLength);

function sum(num1, num2) {
  return num1 + num2;
}

var res = sum(10, 50);

console.log(res);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var res = arr.slice(0, 5);

arr.push("faraz");

console.log(res);

function calc(num1, opr, num2) {
  if (opr === "+") {
    return num1 + num2;
  } else if (opr === "-") {
    return num1 - num2;
  } else if (opr === "*") {
    return num1 * num2;
  } else if (opr === "/") {
    return num1 / num2;
  }
}

var num1 = prompt("Enter first value..");
var operator = prompt("Enter operator value..");
var num2 = prompt("Enter Second value..");

var result = calc(num1, operator, num2);

console.log(result);

var a = "world";

function greet() {
  a = "hello World";
}

greet();

console.log(a);

// *************************Switch Statement***********************

var username = prompt("Enter your name");

switch (username) {
  case "faraz":
    alert("Hello faraz...");
    break;
  case "arsalan":
    alert("hello arsalan..");
    break;

  case "mustufa":
    alert("Hello Mustufa");
    break;

  case "uzair":
    alert("Hello uzair..");
    break;

  default:
    alert("wrong answer..");
}
