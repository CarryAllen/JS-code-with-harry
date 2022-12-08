// for(let i=0; i<500; i++) {
//   console.log(i+1);
// }

//program to add first n natural numbers

// let sum = 0;
// let n = window.prompt("enter the value of n: ");
// n = Number.parseInt(n);
// for (let i = 1; i < n; i++) {
//   sum += i;
// }
// console.log();
// console.log("Sum of first " + n + " natural numbers is: " + sum);

const prompt = require("prompt-sync") ();

let Multi = 0;
let n = prompt("enter the value of n: ");
n = Number.parseInt(n);
for (let i = 2; i < n; i++) {
  Multi *= i;
}
console.log();
console.log("Multi of first " + n + " natural numbers is: " + Multi);



