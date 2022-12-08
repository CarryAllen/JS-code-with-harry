// Arrays using Loops: 

let num = [5,5,7,8,6];

//for loop

/* 
for (let i=0; i<num.length; i++) {
  console.log(num[i]);
} */


//==================================================================
//for each
/* num.forEach((element)=>{
  console.log(element * element);
})

console.log(); */

//===================================================================
//Array.from =  used to convert an HTML cpllection into an array
let name = "Rohan";
console.log(name);  //printed as String
let arr = Array.from(name);  //string got coverted into an array
console.log(arr);    //printed as an array

console.log();

//===================================================================
//for....of : kind of short hand of default for loop
console.log("for of Loop: ")
for (let item of num) {
  console.log(item);
}
console.log();

//===================================================================
//for.. in : for in provides index values of elements present in array
console.log("for in Loop: for printing keys(index values)")
for(let i in num) {
  console.log(i);
}
console.log();

//=====================================================================

console.log("for in Loop: if we want to print values, we have to give num[i] in console")
for(let i in num) {
  console.log(num[i]);
}
console.log();