// for (var i = 0; i < 10; i++) {
//   console.log("welcome user");
// }

// var arr = ["faraz", "arslan", "mustufa", "jameel", "haseeb"];

// for (var i = 1; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var arr = [2, 4, 8, 7, 9, 1, 0, 10, 12, 15];
// var minimium = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > minimium) {
//     minimium = arr[i];
//   }
// }

// console.log(minimium);

// var userInput = prompt("Where do you live??");

// var firstChar = userInput.slice(0, 1).toUpperCase();

// var remainChar = userInput.slice(1).toLowerCase();

// var combine = firstChar + remainChar;

// var isAvaliable = false;

// var city = ["Karachi", "Islamabad", "Lahore", "Peshawar"];

// for (var i = 0; i < city.length; i++) {
//   if (combine === city[i]) {
//     isAvaliable = true;
//   }
// }

// if (isAvaliable) {
//   console.log("match");
// } else {
//   console.log("not match");
// }

// var arr = ["faraz", [123, true]];

// console.log(arr[1][0]);

// for (var i = 0; i < 5; i++) {
//   for (j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }

// var arr = ["faraz", [123, [false], true]];

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// create a palindrome word program to check whether a user given input is palindrome or not..

// civic
// radar
// level

var arr = [1, 2, 3];

// console.log(arr[3]);

// for (var i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }

// var userInput = prompt("Enter a word..");

// var check = "";

// for (var i = userInput.length - 1; i >= 0; i--) {
//   check = check + input[i]
// }

// if (userInput === check) {
//   console.log("it is a palindrome word");
// } else {
//   console.log("it is not a palindrome word");
// }

// for(var i =0;i<=10;i++){

// }

var input = prompt("Enter please..");

var Bakery = ["cookie", "chips", "biscuits", "cake", "pastry"];

for (var i = 0; i < Bakery.length; i++) {
  if (input === Bakery[i]) {
    console.log(Bakery[i] + "is avaliable at index", i);
  }
}
