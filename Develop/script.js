



// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min) + min)
}

function randomItem(list) {
  return list[randomInt(0, passwordCriteria - 1)]
}


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

  var likeNumber = window.confirm("Would you like numbers in your password?");
  var likeSymbol = window.confirm("Would you like symbols in your password?");
  var likeLowerCase = window.confirm("Would you like lower case letters in your password?");
  var likeUpperCase = window.confirm("Would you like upper case in your password?");

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolsList = ["!", "@", "#", "$", "&", "?", "%"];
  var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCaseList = []

  var passwordCriteria = []

  for (var i = 0; i < lowerCaseList.length; i++) {
    upperCaseList[i] = lowerCaseList[i].toUpperCase()
  }

  if (likeNumber === true) {
    passwordCriteria.push(numberList)
  }

  if (likeSymbol === true) {
    passwordCriteria.push(symbolsList)
  }

  if (likeLowerCase === true) {
    passwordCriteria.push(lowerCaseList)
  }

  if (likeUpperCase === true) {
    passwordCriteria.push(upperCaseList)
  }

  var createdPassword = ""

  for (i = 0; i < passwordLength; i++) {
    var randomList = randomItem(passwordCriteria)
    var randomChar = randomItem(randomList)
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
