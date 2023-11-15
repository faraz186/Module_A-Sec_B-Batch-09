var firebaseConfig = {
  apiKey: "******************************************************",
  authDomain: "*******************************",
  databaseURL: "*******************************************",
  projectId: "**************************",
  storageBucket: "********************************",
  messagingSenderId: "*********************",
  appId: "***********************************************",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

console.log(app.database);

function getVal() {
  var name = document.getElementById("name");
  var section = document.getElementById("section");
  var email = document.getElementById("email");

  var obj = {
    name: name.value,
    email: email.value,
    section: section.value,
  };

  //   console.log(obj);

  var key = Math.random() * 351561245146;

  firebase
    .database()
    .ref("userDetails/users/" + Math.round(key))
    .set(obj);
}

function getVal() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          console.log("email sent...");
        });
      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 2000);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

/************get Data once Method************* */

function getDataFromDatabase() {
  firebase
    .database()
    .ref("userDetails/users")
    .once("value", function (data) {
      console.log(data.val());
    });
}

getDataFromDatabase();

/*********get Data on Method********** */

function getDataFromDatabase() {
  firebase
    .database()
    .ref("userDetails/users")
    .on("child_added", function (data) {
      console.log(data.val());
    });
}

getDataFromDatabase();

/*********Remove Data ********* */

function dataRemoveFromFirebaseDatabase() {
  firebase.database().ref("userDetails/users/332839981317").remove();
}

dataRemoveFromFirebaseDatabase();

/***********Updated Data ******** */

function editDataFromFirebaseDatabase() {
  firebase.database().ref("userDetails/users/175572966854").set({
    email: "faraz@gmail.com",
    name: "faraz",
  });
}

editDataFromFirebaseDatabase();
