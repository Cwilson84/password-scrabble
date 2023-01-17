// Assignment code here
var userUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var userLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "?", "_", "-"];
var userSpecial = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"]; 

function passwordGen() {
  var userName = prompt("Hello! Please enter a name to continue.");
  var accepted = ("Thank you, " + userName + `.  Please follow all prompts to generate your secure password.`);
  var tryAgain = ("Oops, something went wrong.  I'm sorry, you'll have to try again.  Please be sure to folow all propmts.");
    if (userName.length > 1) {
      alert(accepted);
    } else {
      alert(tryAgain);
      return;
    }

  var userLength = prompt(`Password must be between 8 and 128 characters in length.  Please enter a length.`);
    if (userLength >= 8 && userLength.length <= 128) {
      alert(`You got it, ` + userName + `.  Password length set to ` + userLength + ` characters.`);
    } else {
      alert(tryAgain);
      return;
    }

  alert(`You must include at least one or more of the following choices.`);
  var userUpper = confirm(`Password may contain uppercase letters.  Press "OK" to include uppercase letters.`);
  var userLower = confirm(`Password may contain lowercase letters.  Press "OK" to include lowercase letters.`);
  var userNumber = confirm(`Password may contain numbers.  Press "OK" to include numbers.`);
  var userSpecial = confirm(`Password may contain special characters.  Press "OK" to include special characters.`);
    if (userUpper === false && userLower === false && userNumber === false && userSpecial === false) {
      alert(tryAgain);
      
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
