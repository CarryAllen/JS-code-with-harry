/*  
Alert: use to invoke a mini window to inform something to the user

prompt: Taking the value fromt the user

confirm: invoke a box to confirm something from the user
*/

alert("Enter the value of a: ");
let a = prompt("Enter the value of a here:");
a = Number.parseInt(a);
alert(`you have entered ${a} of type "${typeof a}"`);  //template literals


let write = confirm("display on the page? ");
if (write == true) {
  document.write(`\n${a}`);
} else {
  document.write(`Please allow me to write!`);
}
