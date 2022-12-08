/* chapter 3 Practice set on loops

Write a program to print the marks of a student in an object using for loop 
  obj  = {herry: 70, rohan: 56, Akash: 67}
*/

/* let marks = {
  harry : 90,
  shubahm: 45,
  Rohan: 76,
  mohit: 87
}

for (let i=0; i<Object.keys(marks).length; i++) {
  console.log("The marks of: ", Object.keys(marks)[i] + " are "+marks[Object.keys(marks)[i]]);
}
console.log();
 */


//Write a program in Q.1 using for in loop

/* for (let key in marks) {
  console.log(key);
  console.log();
  console.log("the marks of " + key + " are " + marks[key]);
}
 */


//Write a program to print "try again" until the user enters the correct number

/* let cn = 43;
let i; 
while(i != cn) { 
  i = prompt("Guess the correct number: "); 
  if(i != cn){
    console.log("Try again");
  }
}
console.log("You have entered correct number!"); */


//write a function to find mean of 5 numbers

const mean = (a, b, c, d) => {
  return (a+b+c+d)/4;
}

console.log("mean of the given numbers is: ", mean(4,5,6,7))