/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let myName = "Daniel";
let danielsRole = "mentor";
let message = ""
if(myName === "Daniel" && danielsRole === "mentor"){
  message = "Hi, I'm Daniel, I'm a mentor."
} else{
  message = "Hi, I'm Daniel, I'm a student."
}
console.log(message);
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
