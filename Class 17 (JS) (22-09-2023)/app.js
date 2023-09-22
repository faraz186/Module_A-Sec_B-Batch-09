var userInput = prompt("Enter where do you live??");

console.log(userInput);

var firstChar = userInput.slice(0, 1).toUpperCase();

var remainChars = userInput.slice(1).toLowerCase();

var completeWord = firstChar + remainChars;

console.log(completeWord);

var cityArr = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

for (var i = 0; i < cityArr.length; i++) {
  if (completeWord === cityArr[i]) {
    console.log("match");
  }
}

var str = "Muhammad Faraz";

console.log(str[0]);

var text = prompt("Enter some text");

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 2) === "  ") {
    alert("Double spaces acquired...");
  }
}

var str = "My name is Muhammad Faraz. I am a JS Developer";

for (var i = 0; i < str.length; i++) {
  if (str.slice(i, i + 8) === "Muhammad") {
    str = str.slice(0, i) + "Ahmed" + str.slice(i + 8);
  }
  // console.log(str.slice(i, i + 8));
}

console.log(str);

var str =
  "The New Yorker magazine doesn't low the phrase World War II.They say. So lets search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers.";

console.log(str.replace(/New Yorker/g, "US"));
al;

var indexNumber = str.indexOf("New Yorker");

var firstText = str.slice(0, indexNumber);
var replaceWord = "US";
var remainText = str.slice(indexNumber + 10);

console.log(firstText + replaceWord + remainText);
console.log(indexNumber);

var str = "Hello World";

console.log(str.charAt(6));

var num = 2.95;

console.log(Math.round(num));

console.log(Math.ceil(num));

console.log(Math.floor(num));

var randomNumbers = Math.random() * 10;
console.log(randomNumbers.toFixed(3));

var num1 = Number(prompt("Enter first value"));

var num2 = Number(prompt("Enter second value"));

var add = num1 + num2;

console.log(typeof add.toString());
