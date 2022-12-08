console.log("JavaScript tutorial 3: var let & const");

var a = 45;
var b = "Rohan";
var c = null;
var d = undefined;
//above declarations are all the same

/*var example: 
scope is global
can be redeclared
*/
/*{
  var b  = "this"
  console.log(b)
}
console.log(b)*/

/*let example: 
let scope is limitd to block 
cannot be redeclared
*/
{
  let b  = "this"
  console.log(b)
}
console.log(b)

//const:
/*
constant cannot be redeclared & nor be updated
const must be initialised while declaration unlike var & let
*/