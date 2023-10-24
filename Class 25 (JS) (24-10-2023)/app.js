// var arr = [1, 2, 3, 4, 5, 6];

// console.log(arr);

// var obj = {
//   name: "abc",
//   address: "karachi",
//   email: "abc@gmail.com",
// };

// console.log("names" in obj);

// obj.courses = ["html", "css"];

// obj.courses.unshift("react js");

// delete obj.courses;

// console.log(obj);

// var data = {
//   users: {
//     user1: {
//       name: "faraz",
//       age: 21,
//       email: "faraz@gmail.com",
//     },
//     user2: {
//       name: "ahsan",
//       age: 25,
//       email: "ahsan@gmail.com",
//     },
//     user3: {
//       name: "hamza",
//       age: 19,
//       email: "hamza@gmail.com",
//     },
//   },
//   users2: {
//     user4: {
//       name: "mustufa",
//       age: 20,
//       email: "mustufa@gmail.com",
//     },
//   },
// };

// for (var keys in data) {
//   console.log(keys);
//   for (var innerKeys in data[keys]) {
//     console.log(innerKeys);
//     for (var innnerInnerKeys in data[keys][innerKeys]) {
//       console.log(innnerInnerKeys, data[keys][innerKeys][innnerInnerKeys]);
//     }
//   }
// }

// function Student(name, address, email) {
//   this.name = name;
//   this.address = address;
//   this.email = email;
// }

// var student1 = new Student("abc", "karachi", "abc@gmail.com");

// console.log(student1);

// var obj1 = {
//   name: "faraz",
//   age: 21,
//   address: "karachi",
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(obj1.getName());

// document.write();

// var func = function () {
//   console.log("hello..");
// };

// // func();

// function Student(name, address, email) {
//   this.name = name;
//   this.address = address;
//   this.email = email;
// }

// Student.prototype.getName = function () {
//   return this.name;
// };

// var student1 = new Student("abc", "karachi", "abc@gmail.com");

// console.log(student1.address);
// console.log(student1.getName());
// console.log(student1.email);
// console.log(student1.name);

// var obj = {
//   name: "faraz",
//   age: 21,
//   address: "karachi",
// };

// console.log("constructor" in obj);

// console.log(obj);

try {
  aler("Hello world");
} catch (error) {
  throw error.message;
}
