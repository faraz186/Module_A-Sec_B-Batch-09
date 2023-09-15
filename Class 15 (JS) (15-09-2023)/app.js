// var arr = ["Nokia", "Apple", "Samsung", "oppo", "redmi"];

// document.write(
//   "<select>" +
//     "<option>" +
//     arr[0] +
//     "</option>" +
//     "<option>" +
//     arr[1] +
//     "</option>" +
//     "<option>" +
//     arr[2] +
//     "</option>" +
//     "<option>" +
//     arr[3] +
//     "</option>" +
//     "<option>" +
//     arr[4] +
//     "</option>" +
//     "</select>"
// );

// var arr = ["faraz", "hamza", "abc", 100, true];

// console.log(arr[1]);
// var arr1 = new Array("faraz", "hamza", "abc", 100, true);

// console.log(arr1[3]);

// var userInput = prompt("Enter values to add the last of array");
// var userInput1 = prompt("Enter values to add the last of array");
// var userInput2 = prompt("Enter values to add the last of array");
// var userInput3 = prompt("Enter values to add the last of array");
// var userInput4 = prompt("Enter values to add the last of array");

// animals.push(userInput, userInput1, userInput2, userInput3, userInput4);

// var animals = ["dog", "cheetah", "lion", "snake", "crocodile", "elephant"];

// console.log("ORIGINAL ARRAY", animals);
// var startingvalue = +prompt("Enter the valkue =to start");
// var endingvalue = +prompt("Enter ending value");
// var addingElement = prompt("Enter elements");
// var addingElement2 = prompt("Enter elements");
// var addingElement3 = prompt("Enter elements");

// animals.splice(
//   targetIndex,
//   deletedIndex,
//   addingElement,
//   addingElement2,
//   addingElement3
// );

// animals.slice(startingvalue, endingvalue);

// console.log("Copy:", animals.slice(startingvalue, endingvalue));

// ******************************ARRAY************************

// console.log("WELCOME USER");
// console.log("WELCOME USER");
// console.log("WELCOME USER");
// console.log("WELCOME USER");
// console.log("WELCOME USER");
// console.log("WELCOME USER");
// console.log("WELCOME USER");
// console.log("WELCOME USER");
// console.log("WELCOME USER");

// for (var i = 1; i <= 10; i++) {
//   console.log("Welcome user", i);
// }

// for (var i = 12; i <= 10; i = i + 2) {
//   console.log(i);
// }

// var i = 10;

// if (i === 10) {
//   console.log("match");
// }

// document.write("4" + "x" + 1 + "=" + 4 * 1 + "<br>");
// document.write("4" + "x" + 2 + "=" + 4 * 2 + "<br>");
// document.write("4" + "x" + 3 + "=" + 4 * 3 + "<br>");
// document.write("4" + "x" + 4 + "=" + 4 * 4 + "<br>");
// document.write("4" + "x" + 5 + "=" + 4 * 5 + "<br>");
// document.write("4" + "x" + 6 + "=" + 4 * 6 + "<br>");
// document.write("4" + "x" + 7 + "=" + 4 * 7 + "<br>");
// document.write("4" + "x" + 8 + "=" + 4 * 8 + "<br>");
// document.write("4" + "x" + 9 + "=" + 4 * 9 + "<br>");

var userInput = +prompt("Enter a number to generate a multiplication table");

var tableLength = +prompt("Entetr table length");

for (var i = 1; i <= tableLength; i++) {
  document.write(userInput + "x" + i + "=" + userInput * i + "<br>");
}

var arr = ["abc", 100, true, false, "xyz"];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var fruits = ["banana", "mango", "apple", "orange", "grapes"];

for (var i = 0; i < fruits.length; i++) {
  console.log("Element of " + fruits[i] + " at " + " " + i);
}
