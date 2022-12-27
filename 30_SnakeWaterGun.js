/* Create Snake, Water & Gun game in JavaScript.
The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert
Use alert, prompt and confirm whereever required! */

//===========================================================================

let runAgain = true;
do{
  let options = ["S", "W", "G"];
  let compCh = options[Math.floor(Math.random() * options.length)];
  let player = prompt("Choose S for snake, W for water, G for gun");
  console.log("Computer chose: "+ compCh); 
  console.log("Player chose: "+ player); 

  if(player == "S" && compCh == "W" || player == "W" && compCh == "G" || player == "G" && compCh == "S") 
  {
    alert("Player wins..!!")
    console.log("you won");
  }
  else if(player == "S" && compCh == "S" || player == "W" && compCh == "W" ||   player == "G" && compCh == "G") 
  {
    alert("Match Draw..!!")
    console.log("Match Draw");
  }
  runAgain = confirm ("Do you want to paly again?");
} while(runAgain){
  alert("it was fun! seee you soon !!");
}
  console.log("good game");



/* 
let greatnum = true;
do {
  let myarr = ["S", "W", "G"];
  let rnum = myarr[Math.floor(Math.random() * myarr.length)];
  let mynum = prompt("Enter the words Snake, Water and Gun with their first letters: ", "S, W, G");
  console.log("The computer chose: " + rnum)
  console.log("You chose: " + mynum)
  if (rnum == myarr[0] && mynum == myarr[1] || rnum == myarr[1] && mynum == myarr[2] || rnum == myarr[2] && mynum == myarr[0]) {
    alert("You lost the game...");
    console.log("You lost. ");
  }
  else if (rnum == myarr[1] && mynum == myarr[0] || rnum == myarr[2] && mynum == myarr[1] || rnum == myarr[0] && mynum == myarr[2]) {
    alert("You won so point is yours!!");
    console.log("You won. ");
  }
  else if (rnum == myarr[2] && mynum == myarr[2] || rnum == myarr[1] && mynum == myarr[1] || rnum == myarr[0] && mynum == myarr[0]) {
    alert("It is a tie. ");
    console.log("It was a tie.");
  }
  greatnum = confirm("Do you want to play again?");
} while (greatnum) {
  alert("It was a great match.");
};
    console.clear("It was a great match!!"); */