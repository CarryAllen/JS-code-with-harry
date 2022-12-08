/* 18. Array Methods part - 2

delete: its an operator not method
*/

/* let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
delete num[0]; /// here 0 is an index number
console.log(num);

// ==================================================================
concat: combine 2 or more arrays
let num_more = [11, 12, 13, 14, 15, 16];

let newArray = num.concat(num_more);
console.log(newArray); // combination of above 2 array's wil displayed here
//but does not change existing arrays
console.log(num, num_more);
console.log();

let new_even_more = [123, 2424, 3434, 3434, 4545, 5453];
let newArrayPart2 = num.concat(num_more, new_even_more);
console.log(newArrayPart2);
console.log(); */


/* =================================================================== 
sort method:
it will change/ update original array
 */
/* 
let num = [52, 22, 93, 554, 5, 6, 14, 87, 28, 9];
num.sort();  // it will not sort numberically, it will sort alphabetically thinking it is a string
console.log(num);
console.log();
console.log();

======================================================================
//what if i want to sort array in asecding order

// we can give compare function as as parameter, BUT Compare fucntion should  be dfined first

console.log("Array in Assending order");
let compare = (a, b) => {
  return a - b;
}  //function for assending 
num.sort(compare);
console.log(num);

console.log();
console.log();
======================================================================
console.log("Array in dessending order");
let compare2 = (a, b) => {
  return b - a;
}  //function for dessending 
num.sort(compare2);
console.log(num);

console.log();
console.log();
=======================================================================
console.log("reverse array: ");
reverse :  reverse the array
let re_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
re_num.reverse();
console.log(re_num);
 */

/*
=========================================================================
splice :
has 3 arguments:
("where", "how many elements to remove", " give values using comma to add into array")

*/ 
/* 
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let deleted_values = num.splice(2, 3, 45, 989, 63);
console.log(num); 
console.log("deleted values from original array are: ",deleted_values); 
*/ 


/* 
==========================================================================
slice:  slice out a aprt of an array from an existing array
syntax:
1. num.slice(starting index value) // if given like this it will slice till end of the array
2. num.slice(starting index value, ending index value)
*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let New_num = num.slice(3);
// console.log(New_num);  //[ 4, 5, 6, 7, 8, 9 ]

let New_num = num.slice(3, 6);
console.log(New_num); //[ 4, 5, 6 ]