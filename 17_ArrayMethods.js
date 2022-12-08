// 17. Array Methods:

let num = [1, 2, 3];
let b = num.toString()  //converts an array into string
console.log(b, typeof b);

let c = num.join(" and ");
console.log(c, typeof c);   //1 and 2 and 3 string

//pop method: changes the same array by removing last element from the array

let n = [3, 5, 6, 7];
n.pop();
console.log(n); //[ 3, 5, 6]

//push method: adding an element at the end into the same array 

let list = [4, 6, 3, 5, 4, 3];
list.push(99);
console.log(list);   //op: [4, 6, 3, 5, 4, 3, 99]

//shift: removes first element and return from the array

let dict = [4, 6, 8, 0, 2, 4];
let result = dict.shift();
console.log(result);

//unshoft: add first element and return from the array and return new array length

let wrap = [4, 6, 8, 0, 2, 4];
let rslt = wrap.unshift(8);
console.log(rslt, wrap);