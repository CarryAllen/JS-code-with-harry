/* Excercise:
Write a JavaScript program to generate a random number and store it in a veriable, The program then takes n input from the user to tell them guess the number and guess was correct, greter or smaller than the generated number

100- chances is the score of the user. The program is expected to terminate once the number is guessed. Number should be in between 1- 100
*/



let x = Math.floor(Math.random() * 100);
//console.log(x);
let n;
let chances = 0;

do {
  n = prompt("\nguess the number from 0 to 100: ");
  n = Number.parseInt(n);
  if (n > x) {
    console.log("\nnumber is smaller than you have entered");
    chances++;
  } else if (n < x) {
    console.log("\nnumber is greater than you have entered");
    chances++;
  }
} while (x != n);
console.log("\nCongratulations!!! you have guess the correct number");
console.log("\ncorrect number is: " + x);
console.log("\nyour score is: " + (100 - chances));



//=======================================================================
// copied from harry's comments

/* let random_number=Math.random(),chances=0;
(random_number<0.1)?(random_number+=(0.2)):(random_number+=0);
random_number=Math.floor(random_number*100);
let user_num;
do{

    user_num=parseInt(prompt("Enter a number : "));
    if(user_num>random_number)
    {
        console.log("\n"+user_num+" is greater than the original number ");
        chances++;
    }
    else if(user_num<random_number)
    {
        console.log("\n"+user_num+" is smaller than the original number ");
        chances++;
    }
    else
    {
        console.log("\nCongratulations ! You entered the correct number");
    }
}
while(user_num!=random_number)
console.log("\nYou took "+chances+" chances");
console.log("\nYour score is "+(100-chances));
 */
//=============================================================================

/* let y = Math.floor((Math.random() * 100) + 1);
let x;
let count=0;
do{
  x = prompt("Enter the Number Between 1 to 100");
  count++
  if(x>y)
    console.log("Sorry!!! You guessed the Greater Number")
  else
    console.log("Sorry!!! You Guessed the Smaller Number")
}while(y!=x);  
console.log("Congratulations!!! You Guessed Correct Number")
console.log("Correct Number is :- "+y);
let score = 100-count;
console.log("Your score is :- "+score); */