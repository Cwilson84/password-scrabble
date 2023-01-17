// Assignment code here
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"]; 
var userFullArray = [];
var userPasswordLength = 8;

//begin generation function//
function generatePassword() {
  userFullArray = [];
  var tryAgain = "Oops...something went wrong.  I'm sorry, you'll have to try again.  Please be sure to carefully read and follow all prompts."
  var accepted = "Thank you.  Please follow all prompts to generate your secure password.";

  var userName = prompt("Hello, please enter your name.");
    if (userName.length > 1) {
      alert(accepted);
    } else {
      alert(tryAgain);
      return "Looks like we missed something.  Click the button to try again.";
    }
  var userPasswordLength = prompt(`Password must be between 8 and 128 characters in length.  Please enter a length.`);
    if (userPasswordLength < 8 || userPasswordLength > 128 || isNaN(userPasswordLength)) {
      alert(tryAgain);
      return "Looks like we missed something, " + userName + ".  Click the button to try again.";
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
