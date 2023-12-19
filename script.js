// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const charSets = [];
let length;
//declare a pass var as an empty string
var pass = '';

// Function to prompt user for password options
function getPasswordOptions() {
  //prompt the user for password length that needs to be between 8-128 chars and turn in into int
  do {
    length = parseInt(prompt("Please select password length between 8 and 128"));
  } while (length < 8 || length > 128);
  //ask user to confirm which char sets
  var specialChars = confirm("Would you like the password to include special characters");
  var numericChars = confirm("Would you like to have a numeric character?");
  var uppercaseChars = confirm("Would you like to have a uppercase?");
  var lowercaseChars = confirm("Would you like to have lowercase?")
  //add all selected char sets to an array so we can start generating it and add one character as we confirm to the random pass
  if (specialChars) {
    charSets.push(specialCharacters);
    pass += getRandom(specialCharacters);
    length--;
  }
  if (numericChars) {
    charSets.push(numericCharacters);
    pass += getRandom(numericCharacters);
    length--;
  }
  if (uppercaseChars) {
    charSets.push(upperCasedCharacters);
    pass += getRandom(upperCasedCharacters);
    length--;
  }
  if (lowercaseChars) {
    charSets.push(lowerCasedCharacters);
    pass += getRandom(lowerCasedCharacters);
    length--;
  }
  //make sure at least one char type is selected

  if (specialChars != true && numericChars != true && uppercaseChars != true && lowercaseChars != true) {
    alert("You have to select at least one char set!");
    getPasswordOptions();
  }
  //flatten array and return it
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  //call the passwordopts func
  getPasswordOptions();
  //loop through the length chosen by the user and add to the string
  for (let i = 0; i < length; i++) {
    pass += getRandom(charSets.flat());
  }
  return pass;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);