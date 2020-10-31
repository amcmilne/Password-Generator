// GIVEN I need a new, secure password

// Assignment Code

//Create client input variables
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// Add event listener to generate button

var randomUpperCase = false;
var randomLowerCase = false;
var randomNumber = false;
var randomSymbol = false;
var pwLength = 0;
var symbols = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/";

var generateBtn = document.querySelector("#generate");

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
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered

function generatePassword() {
  var password = "";

  var passwordOptions = [
    ["lower", "upper", "number", "symbol"],
    [randomLowerCase, randomUpperCase, randomNumber, randomSymbol]
  ]

  var complexityCounter = 0;

  for (i = 0; i < passwordOptions[1].length; i++) {
    if (passwordOptions[1][i]) {
      complexityCounter++;
    }
  }

  // Handle remainders
  var numOfCharForEachOption = pwLength / complexityCounter;
  var numOfCharForEachOptionRemainder = numOfCharForEachOption % 1 > 0 ? 1 : 0;

  numOfCharForEachOption = Math.floor(numOfCharForEachOption);

  if (randomLowerCase == true) {
    if (password.length == 0 && numOfCharForEachOptionRemainder > 0) {
      password = password + getRandomLowerCase();
    }

    for (i = 0; i < numOfCharForEachOption; i++) {
      password = password + getRandomLowerCase();
    }
  }

  if (randomUpperCase == true) {
    if (password.length == 0 && numOfCharForEachOptionRemainder > 0) {
      password = password + getRandomUpperCase();
    }
    for (i = 0; i < numOfCharForEachOption; i++) {
      password = password + getRandomUpperCase();
    }
  }

  if (randomNumber == true) {
    if (password.length == 0 && numOfCharForEachOptionRemainder > 0) {
      password = password + getRandomNumber();
    }
    for (i = 0; i < numOfCharForEachOption; i++) {
      password = password + getRandomNumber();
    }
  }

  if (randomSymbol == true) {
    if (password.length == 0 && numOfCharForEachOptionRemainder > 0) {
      password = password + getRandomSymbol();
    }
    for (i = 0; i < numOfCharForEachOption; i++) {
      password = password + getRandomSymbol();
    }
  }

  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  // Write password to the #password input 

  document.getElementById("password").value = password;
}


if (generateBtn) {
  generateBtn.addEventListener("click", function () {
    pwLength = 0;
    while (pwLength < 8 || pwLength > 128)
      pwLength = prompt("Select password length (choose between 8-128 characters.)");
    randomUpperCase = confirm("Include an Upper Case?");
    randomLowerCase = confirm("Include an Lower Case?");
    randomNumber = confirm("Include a Number?");
    randomSymbol = confirm("Include a Symbol?");

    generatePassword();
  });
}


