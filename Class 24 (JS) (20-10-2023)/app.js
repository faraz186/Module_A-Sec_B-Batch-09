// var stdArr = ["faraz", "ahsan", "hamza", [12, true], "arsalan", "mustufa"];

// console.log(stdArr[3][1]);

// function clicked(a) {
//   console.log(a);
// }
// var std1 = {
//   name: "faraz",
//   age: 21,
//   email: "faraz@gmail.com",
//   address: "karachi",
//   getName: function () {
//     return this.age;
//   },
// };

// console.log(std1.getName());

// std1.courses = ["html", "css", "js", "php"];

// std1.courses.push("react js");

// console.log(std1.courses);

// console.log(std1);

// document.write()

// console.log()

// var std1 = {
//   name: "faraz",
//   age: 21,
//   email: "faraz@gmail.com",
//   address: {
//     street: "A",
//     city: "karachi",
//     country: "pakistan",
//     postalCode: 12345,
//   },
//   getName: function () {
//     return this.age;
//   },
// };

// for (var a in std1) {
//   console.log(a, std1[a]);
// }

// console.log(std1.address.city);

// delete std1.email;

// console.log("emailS" in std1);

// var data = {
// sectionA:{
//     users: {
//         user1: {
//             name: "faraz",
//             email: "faraz@gmail.com",
//             age: 21,
//             city: "karachi",
//         },
//         user2: {
//             name: "hamza",
//             email: "hamza@gmail.com",
//             age: 18,
//             city: "lahore",
//         },
//         user3: {
//             name: "ali",
//             email: "ali@gmail.com",
//             age: 24,
//             city: "islamabad",
//         },
//         user4: {
//             name: "ahsan",
//             email: "ahsan@gmail.com",
//             age: 23,
//             city: "karachi",
//         },
//         user5: {
//             name: "ahmed",
//             email: "ahmed@gmail.com",
//             age: 26,
//             city: "multan",
//         },
//     },
// },
// sectionB:{
//     users2: {
//         user6:{
//             name:"abc",
//             age:20,
//             email:"abc@gmail.com",
//             city:"rawalpindi"
//         }
//     },
//     users3: {},
// }
// };

// for (var b in data) {
//   //   console.log(b);
//   for (var c in data[b]) {
//     for(var d in data[b][c])
//     console.log(c);
//   }
// }

// var input = "users4";

// console.log(data.users[input]);

// console.log(data.users.user2);

// var obj = [
//   {
//     userId: 10,
//     id: 198,
//     title: "quis eius est sint explicabo",
//     completed: true,
//   },
//   {
//     userId: 11,
//     id: 198,
//     title: "quis eius est sint explicabo",
//     completed: true,
//   },
//   {
//     userId: 12,
//     id: 198,
//     title: "quis eius est sint explicabo",
//     completed: true,
//   },
//   {
//     userId: 13,
//     id: 198,
//     title: "quis eius est sint explicabo",
//     completed: true,
//   },
// ];

// console.log(obj[0]);

// var std1={}
// var std2 = {}

function Student(name, age, email, address) {
  this.stdname = name;
  this.stdage = age;
  this.stdEmail = email;
  this.stdAddress = address;
}

var student1 = new Student("faraz", 20, "faraz@gmail.com", "karachi");
var student2 = new Student("arsalan", 21, "arsalan@gmail.com", "karachi");
var student3 = new Student("hamza", 21, "hamza@gmail.com", "karachi");
var student4 = new Student("arsalan", 21, "arsalan@gmail.com", "karachi");
var student5 = new Student("arsalan", 21, "arsalan@gmail.com", "karachi");

console.log(student1);

console.log(student2);

// console.log(student3);

// console.log(student4);

// console.log(student5);
