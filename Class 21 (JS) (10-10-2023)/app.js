// function get() {
//   var para = document.getElementById("para");
//   console.log(para.innerHTML);
// }
// function set() {
//   var para = document.getElementById("para");
//   para.innerHTML += "<h1>Hello World</h1>";
// }
// var firstName = "Mohammad";
// var lastName = "faraz";
// console.log(`Welcome to ${firstName} ${lastName}. I am a web developer`);
// console.log("Welcome to " + firstName + " " + lastName);

// function makeInvisible() {
//   var img = document.getElementById("img");
//   console.log(img);
//   // img.style.display = "none";
//   console.log(img);
//   img.className += " hidden";
// }

// function changeImage(id, IMagelink) {
//   var image = document.getElementById(id);
//   image.src = IMagelink;
// }

// function changeImageBefore(id, imageLink) {
//   var image = document.getElementById(id);
//   image.src = imageLink;
// }

// var anchor = document.getElementById("link");
// anchor.href = "https://www.google.com";
// anchor.target = "_blank";
// console.log(anchor);

var para = document.getElementById("para");
para.style.fontSize = "30px";
para.style.border = "2px solid black";
para.style.padding = "10px 15px 20px 10px";
para.style.color = "green";

var getAllParas = document.getElementsByTagName("p");
getAllParas[0].style.color = "red";
getAllParas[1].style.color = "blue";
getAllParas[2].style.color = "green";
getAllParas[3].style.color = "grey";
getAllParas[4].style.color = "pink";

for (var i = 0; i < getAllParas.length; i++) {
  getAllParas[i].style.color = "red";
}

console.log(getAllParas);

console.log(document.childNodes[1].childNodes[2].childNodes[7]);
