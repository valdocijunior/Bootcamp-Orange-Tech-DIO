var isValid = function(s) {   
  const stack = []; 

 //TODO: implemente a lógica de caracteres válidos e retorne se a string é valida ou não.

}
let arr = gets().split("");

function parentese(str) {

 if (str.length === 0) {

  return true;

 } else if (str.length === 1) {

  return false;

 } else if (str.length > 1 && str[0] === "(" && str[1] === ")") {

  return true;

 } else if (str.length > 1 && str[0] === "[" && str[1] === "]") {

  return true;

 } else if (str.length > 1 && str[0] === "{" && str[1] === "}") {

  return true;

 } else {

  return false;

 }

}

print(parentese(arr));