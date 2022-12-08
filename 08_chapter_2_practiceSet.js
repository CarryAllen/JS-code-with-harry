// use logical opearators to find whether the age of a person lies between 10 & 20


/*
let person = 15; 
if(person > 10 && person < 20){
  console.log("age of the person lies betweeen 10 & 20");
} else {
  console.log("invalid age");
}
*/


//demonstrate the use of switch case statement in JS
/*
const age = 15;
switch(age) {
  case 11:
    console.log("age is eleven");
    break;
  case 13 :
    console.log("Age is thirteen");
    break;
  case 15:
    console.log("age is fifteen");
    break;
  case 17:
    console.log("age is 17");
    break;
  default:
    console.log("invalid value entered");
    break;
}
*/

// Write a JS program to know number is divisible by 2 & 3

/*
let num = 20

if(num % 2 == 0 && num%3==0) {
  console.log("number is divisibale by 2 & 3");
} else {
  console.log("number is not divisible");
}
*/


// Write a JS program to know number is divisible by 2 OR 3
/*
let num = 20

if(num % 2 == 0) {
  console.log("number is only divisible by 2");
} else if(num%3==0){
  console.log("number is only divisible by 3");
} else {
  console.log("number is not divisible");
}
*/


//print "you can drive" & "you cannot drive" based on case age is above 18 using turnery operator

let age = 19;
let a = age > 18 ? "you can drive" : "you cannot drive";
console.log(a);