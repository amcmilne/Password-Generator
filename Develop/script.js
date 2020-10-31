

// Assignment Code

//Create client input variables
var pwLength = prompt("Select password length (choose between 8-128 characters.)");
var randomUpperCase = confirm("Include an Upper Case?");
var randomLowerCase = confirm("Include an Lower Case?");
var randomNumber = confirm("Include a Number?");
var randomSymbol = confirm("Include a Symbol?");

var password = "";

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";
  return symbols(Math.floor(Math.random() * symbols.length));
}

if (randomLowerCase == true) {
  password = password + getRandomLowerCase();
}

if (randomUpperCase == true) {
  password = password + getRandomUpperCase();
}

if (randomNumber == true) {
  password = password + getRandomNumber();
}

if (randomSymbol == true) {
  password = password + getRandomSymbol();
}

pwLength = pwLength - password.length;




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
passwordText.value = "password";

// Add event listener to generate button
generateBtn.addEventListener("click", function () {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
);







