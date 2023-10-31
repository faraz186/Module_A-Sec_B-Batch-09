// var obj = {
//     name:"faraz",
//     age:21,
//     address:"karachi"
// }

// var str = JSON.stringify(obj);

// var obj1 = JSON.parse(str)

// console.log(obj1)

function values(){
    var input = document.getElementById("name");
    var getValues = localStorage.getItem("name");

    console.log(getValues)

    var arr = JSON.parse(getValues);

    console.log(arr)

    var obj = {
        name:input.value
    }

    arr.push(obj)

    localStorage.setItem("name",JSON.stringify(arr))


    // localStorage.setItem("studentName",input.value)

    // var res = localStorage.getItem("studentName");

    // console.log(res)

    // localStorage.setItem("name",input.value)
}