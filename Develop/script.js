



// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {


  var input = window.prompt("How long do you want your password?");

  var passwordLength = parseInt(input);

  if (isNaN(passwordLength)){
    window.alert("Please enter a number.")
  return
  };

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters")
  return
  };

  var wantNumber = window.confirm("Would you like numbers in your password?");
  var wantSymbol = window.confirm("Would you like symbols in your password?");
  var wantLowerCase = window.confirm("Would you like lower case letters in your password?");
  var wantUpperCase = window.confirm("Would you like upper case in your password?");




}
 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
