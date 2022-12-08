/* map: use this when we want to create an new array by performing some operation
def: creates a new array by performing some operation on each array element */

/* let arr = [45, 65, 89];
let a = arr.map((value)=>{
  console.log(value);
  return value + 1;
}) 
console.log(a); */

/* let arr = [45, 65, 89];
let a = arr.map((value, index)=>{
  console.log(value, index);
  return value + 1;
})
console.log(a); */
/* 
let arr = [45, 65, 89];
let a = arr.map((value, index, array)=>{
  console.log(value, index, array);
  return value + 1;
})
console.log(a); */

//===================================================================

// array filter method: filters the values upon condition if found true
//and this functions does not modify our original array

let arr2 = [45,85,46,5,10,98,76,46,76];
let ans = arr2.filter((a)=>{
  return a <= 10;
})
console.log(ans);


//===================================================================

// Array Reduce method: this function will take 1st & 2nd value and runs the function, then it will take result value and next value and again run s function. this performs till end of the array and then final value gets printed

let arr3 = [4,5,8,2,6];
const reduce_func = (h1, h2) => {
  return h1+h2;
}
let finalarr = arr3.reduce(reduce_func)
console.log(finalarr);