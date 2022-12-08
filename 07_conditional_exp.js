/*
Conditional expressions in JavaScript
1) if
2) if else
3) else if
*/




// if(a > 100) {
//   console.log("a is greater");
// }
// else {
//   console.log("a is not greater");
// }

let a = 70;

if(a<0) {
  console.log("this is an invalid age");
}
else if(a<9) {
  console.log("you are a kid");
}
else if(a<18 && a>=9) {
  console.log("You are a kid youc can drive only after 18");
}
else {
  console.log("you can drive");
}
console.log("done");

//homework:
/* explore switch case

const fruit = "man go";
switch(fruit) {
  case "papaya":
    console.log("this is papaya");
    break;
  case "mango" :
    console.log("this is mango");
    break;
  case "banana":
    console.log("this is berry/fruit");
    break;
  default:
    console.log("this is invalid statement");
    break;
}
*/
