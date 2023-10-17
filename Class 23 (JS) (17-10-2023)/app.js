function addtodo() {
  var input = document.getElementById("inputField");

  //   *******************Create list***************************

  var liElement = document.createElement("li");

  var litext = document.createTextNode(input.value);

  liElement.appendChild(litext);

  var list = document.getElementById("list");

  list.appendChild(liElement);

  input.value = "";

  //   ****************************Delete button**************************

  var delbtn = document.createElement("button");

  var delText = document.createTextNode("delete");

  delbtn.setAttribute("onclick", "deleteItem(this)");

  delbtn.appendChild(delText);

  liElement.appendChild(delbtn);

  //   ****************************Edit button**************************

  var Editbtn = document.createElement("button");

  var EditText = document.createTextNode("Edit");

  Editbtn.setAttribute("onclick", "editItem(this)");

  Editbtn.appendChild(EditText);

  liElement.appendChild(Editbtn);
}

function deleteAll() {
  var list = document.getElementById("list");
  list.innerHTML = "";
}

function deleteItem(x) {
  console.log(x.parentNode.remove());
}

function editItem(e) {
  //   console.log(e.parentNode.firstChild.nodeValue);

  var EditInput = prompt("Enter updated value...");

  e.parentNode.firstChild.nodeValue = EditInput;
}
