let name  = "Rohan";
console.log("your name is: ",name);
console.log();
console.log("character is: ",name[0]);
console.log("character is: ",name[1]);
console.log("character is: ",name[2]);
console.log("character is: ",name[3]);
console.log("character is: ",name[4]);
console.log();
console.log("the length is the name is: "+ name.length);

//template literals

let boy1 = "pramod";
let boy2 = "Rehan";

//now suppose we want to print this-> "Pramod is freind of Rehan"
// we can use template literals here
console.log();
let sentence = `${boy1} is friend of ${boy2}`;
console.log(sentence);


//Escape sequence characters

let fruit  = 'ban\'ana';
console.log(fruit);
let fruit2  = "ban\"ana";
console.log(fruit2);

/*
other escape sequence characters
\t - tab
\n - newLine
\r - carriage return 
*/
