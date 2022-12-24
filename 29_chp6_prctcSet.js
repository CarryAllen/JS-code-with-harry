/*
Q.1 Write a program using prompt functin to take input of age as a value from the user and use alert to tell if he can drive
*/


/* 
let age = prompt("Enter age: ");
age = Number.parseInt(age);


const canDrive = () => {
  return age >= 18 ? true : false ;
}

if (canDrive(age)){
  alert("yes you can drive")
} else {
  alert("you cannot drive")
} 
*/

//==========================================================================

/*
Q.2: in questn 1, use confirm to ask user if hea wants to see the prompt again
*/
/* 
let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false;
}

while (runAgain) {
  let age = prompt("Enter age: ");
  age = Number.parseInt(age);

  if (canDrive(age)) {
    alert("yes you can drive")
  } else {
    alert("you cannot drive")
  }
  runAgain = confirm("you want to see prompt again?");
} */


/*
q.3 In the previous question use console.error to log the error if the age entered is negative
*/

/* let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false;
}

while (runAgain) {
  let age = prompt("Enter age: ");
  age = Number.parseInt(age);
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("yes you can drive")
  } else {
    alert("you cannot drive")
  }
  runAgain = confirm("you want to see prompt again?");
} */

/*
Q.4 : Write a program to change the url to google.com (redirection) if user enters a nunber greater than 4
*/

/* 
let number = prompt("Enter you number: ");
  number = Number.parseInt(number);

  if (number > 4) {
    location.href = "https://google.com";
  }
 */


/* 
Q.5: Change the background color of the page to yellow to red or any other color based on user input through prompt 
*/

let color = prompt ("Enter the page background color: ");
document.body.style.background = color;