/*document.getElementById("selectAll") = function login (str) {
  str = document.getElementById("username")
  const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
  if (str.length >= 4 && str.length <= 25 && regex.test(str)) {
    return alert("correct")
  } else {
    return alert("false")
  } 
*/

function validation() {
  var name = document.getElementById("name")
  var password = document.getElementById("password")
  //const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
  if (name.value == "") {
    alert("Name is not informed!");
    name.focus();
    return;
  }

  if (password.value == "")
    alert("password is not correct!");
  password.focus();
  return;
}







//   switch (senha.length >= 4 && senha.length <= 25 && regex.test(senha)) {
//     case true:
//    return true;
//    case false:
//      return false;

// }


/*

function CodelandUsernameValidation(str) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
  if (str.length >= 4 && str.length <= 25 && regex.test(str)) {
    return true
  } else {
    return false
  }
  // code goes here  
}

docum

// keep this function call here 
//console.log(CodelandUsernameValidation(readline(abcd)))