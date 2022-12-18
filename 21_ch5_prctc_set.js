/*chapter 5 practice set on array  
practice set on array will appear here
*/

/* Q.1
create an array of numbers and take input from the user to add numbers to this array
*/

/* let arr = [1, 2, 3, 4, 5, 6];
let a =  prompt("enter a number: ");
a = Number.parseInt(a);
arr.push(a);
console.log(arr); */

/* Q.2
Keep adding numbes to the array in Q.1 until 0 is added to the array
*/
/* 
let arr = [1, 2, 3, 4, 5, 6];
let a;
do{
  a =  prompt("enter a number: ");
  a = Number.parseInt(a);
  arr.push(a);
  console.log(arr);
} while (a != 0);
console.log(arr); */

/* Q.3
fliter for number divisible by 10 from a given array
*/

/* let arr = [1, 2, 30, 4, 5, 60];
let n = arr.filter((x)=>{
  return x % 10 == 0
})
console.log(n)
 */


/* Q.4
create an array of square of given numebr
*/

/* let arr = [1, 2, 3, 4, 5, 6];
let square = arr.map((n)=>{
  return n*n;
})
console.log(square); */



/* Q.5
use reduce to calculate factorial of a given number from an array of first n natural number (n being the number, where factorial needs to be calculated)
*/

let arr = [1, 2, 3, 4, 5];

const factorial = (no1, no2) => {
  return no1 * no2;
}

let fact = arr.reduce(factorial);
console.log("factorial of given no: ",fact);

