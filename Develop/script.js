



// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {


var userInput = window.prompt("How long do you want your password?");

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)){
  window.alert("Please enter a number.")
}


}
 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
