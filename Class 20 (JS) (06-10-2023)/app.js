var day = prompt("Enter what day is today");

switch (day) {
  case "mon":
    alert("Whoopee!");
    break;
  case "tues":
    alert("Whoopee!");
    break;
  case "wed":
    alert("Whoopee!");
    break;
  case "thurs":
    alert("Whoopee!");
    break;
  case "fri":
    alert("Whoopee!");
    break;
  case "sat":
    alert("Whoopee!");
    break;
  default:
    alert("family day..");
}

// *********************For loop****************************

for (var i = 0; i < 0; i++) {
  console.log("for loop", i);
}

// *********************While loop****************************

var i = 0;
while (i < 0) {
  console.log("while loop", i);
  i++;
}
// *********************do-While loop****************************

var i = 0;
do {
  console.log(i);
  i++;
 } while (i < 0); 

 
// alert("abfjfsn")

// function check(a) {
//   console.log(a);
//   a.style.backgroundColor = "red";
//   a.style.color = "white";
// }

// function login() {
//   var name = document.getElementById("name");
//   var email = document.getElementById("email");

//   if (name.value && email.value) {
//     console.log(name.value);
//     console.log(email.value);
//   } else {
//     alert("first fill the entire field..");
//   }
// }

function set() {
  var inp = document.getElementById("input");
  inp.value = "faraz";
}
