var firebaseConfig = {
  apiKey: "********************************",
  authDomain: "*********************************",
  projectId: "********************",
  storageBucket: "*****************************",
  messagingSenderId: "**********",
  appId: "*******************************************",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function getData() {
  var email = document.getElementById("email");

  var pass = document.getElementById("password");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, pass.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
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

var obj = {
  name: "faraz",
  age: 20,
  city: "karachi",
};

var str = JSON.stringify(obj);

console.log(str);

var returnObj = JSON.parse(str);

console.log(returnObj);

function getName() {
  var input = document.getElementById("name");

  var getStorageValue = localStorage.getItem("name");

  var OriginalValue = JSON.parse(getStorageValue);

  console.log(OriginalValue);

  if (!OriginalValue) {
    OriginalValue = [];
  }

  var UserObj = {
    name: input.value,
  };

  OriginalValue.push(UserObj);

  localStorage.setItem("name", JSON.stringify(OriginalValue));
}
