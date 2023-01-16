// Assignment code here
var passwordGenArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "?", "_", "-"];

function passwordGen() {
  let user = prompt("Hello! Please enter a name to continue.");
  var accepted = ("Thank you, " + user + `.  Please type either "YES" or "NO" to the following prompts`);
  var tryAgain = ("Oops, something went wrong.  I'm sorry, you'll have to try again.  Please make sure to folow all propmts!");

  if (user.length > 1) {
    prompt(accepted);
  } else {
    prompt(tryAgain);
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
