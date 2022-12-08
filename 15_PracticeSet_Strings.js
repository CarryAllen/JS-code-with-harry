//practice set on Strings :

// Q. what wiil the following print in JavaScript
//console.log("har\"".length);

let str = "har\"";
console.log(str.length);  //o/p: 4


// Q.Explore the includes(), startsWith() & endsWith() fumction of a String
//includes: if word found in given sentence it will return true o/w false

//includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(sentence.includes(word)); //true

//now here, we will use the template literals along with the turnery syntax to print the output

console.log(`the word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log();


/* startsWith:
syntax:
startsWith(searchString)
startsWith(searchString, position) */

let word2 = "The";
console.log(sentence.startsWith(word2));

console.log(`The word starts with "${word2}" ${sentence.startsWith(word2) ? 'is' : 'is not'} in the sentence`);

console.log();


/* endsWtih():
Syntax:
endsWith(searchString)
endsWith(searchString, endPosition) */

let word3 = "g.";
console.log(sentence.endsWith(word3));

console.log(`The word ends with "${word3}" ${sentence.endsWith(word3) ? 'is' : 'is not'} in the sentence`);

console.log();


// Q.Write a program to convert a given string to lowerCase

let char = "HARRY";
console.log(char.toLowerCase());
console.log(char.toUpperCase());

console.log();



// Q.Extract the amount out of the given string -> "Please give Rs.1000"

let sentnce = "Please give Rs.1000";
let amount = Number.parseInt(sentnce.slice("Please give Rs.".length));
console.log(amount);
console.log(typeof amount);



// Q.try to change 4th character of the given string

let name = "Deepika";
console.log(name.replace("t", 4));  //name will pe not changed because strings are immutable
name[3] = "T";  //name will pe not changed because strings are immutable