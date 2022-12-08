//functions:
function average (x, y) {
  return  1 + (x+y)/2;
  /* return Math.round(1 + (x+y)/2); */
  console.log("done");
}

let a = 1;
let b = 2;
let c = 3;

console.log("Average of A & B is: ", average(a, b));
console.log("Average of A & B is: ", average(b, c));
console.log("Average of A & B is: ", average(c, a));


//Arrow function:

const sum = (p, q) => {
  return p + q;
}
console.log();
console.log("Sum of arrow function is: ",sum (48, 88));

//function who does not take or retunr any value
const hello = () => {
  console.log("hey how are you ? I am fine !!");
}

hello(); //function call