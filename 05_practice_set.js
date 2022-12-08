//chapter 1 practice set

//Q1 : Create a variable of type string try to add a number to it
let name = "Rohan";
let b = 6;
console.log(name +" "+ b);

//Q2 : Using typeof operator to findout the datatype of the String in last question
//console.log(typeof name);
console.log(typeof (name + b));

//Q3 : Create a const object in JS can you change it to hold a number later?
const a = {
  Naam : "Rohan",
  section : "B",
}
// a = 45; 
//the answer is No

//Q4 : Try to add a new key to the const object in problem 3 were you able to do it?

a ['friend'] = "Aarav";
a ['Fav'] = "Anshu";
console.log(a);

//Q5 : Write a JS program to create a word meaning dictionery of 5 words

const dict = {
  appreciate : "stuti",
  word : "List",
  behave : "Pagal",
  task : "timepaass"
}

console.log(dict.word);
console.log(dict.task);