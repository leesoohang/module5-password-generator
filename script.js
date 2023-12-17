// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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



// Function to prompt user for password options
function getPasswordOptions(option) {
    confirm('Click Ok to confirm including ' + option + '.');
    switch (option) {
        case 'special characters':
        text = 'specialCharacters';
        break;
        case 'numeric characters':
        text = 'numericCharacters';
        break;
        case 'uppercase characters':
        text = 'upperCasedCharacters';
        break;}
    return mychoice.concat(option) 
}
// need prompt("How many characters would you like your password to contain?")
//if the text.length (var password) <= 8 or > 128, return error message "Password length must be provided as a number"
const input = prompt("How many characters would you like your password to contain?")
if (input < 8 || input > 128) {
    alert('Password length must be at least 8 characters but no more than 128. Refresh to try again.')}
    else if (isNaN(input)) {
        alert('Password length must be provided as a number. Refresh to try again.')}
   

var mychoice = lowerCasedCharacters
var newchoice
if (getPasswordOptions('special characters')) {
    var newchoice = mychoice.concat(specialCharacters)
}
if (getPasswordOptions('numeric characters')) {
    var newchoice = mychoice.concat(numericCharacters)
}
if (getPasswordOptions('uppercase characters')) {
    var newchoice = mychoice.concat(upperCasedCharacters)
}


// var array = getPasswordOptions()
// switch (array) {
//     case getPasswordOptions('special characters'):
//         array += specialCharacters
//         break;
//     case getPasswordOptions('numeric characters'):
//             array += numericCharacters
//             break;
//     case getPasswordOptions('uppercase characters'):
//                 array += upperCasedCharacters
//                 break;
// }
// Function for getting a random element from an array
// if (getPasswordOptions('special characters')) {
//     var array = specialCharacters
// }

// if (getPasswordOptions('numeric characters')) {
//     var array = numericCharacters
// }

// if (getPasswordOptions('uppercase characters')) {
//     var array = upperCasedCharacters
// }

function getRandom(array) {
    var password = ''
for (i = 0; i < input; i++) {
    var char = Math.floor(Math.random() * newchoice.length);
    password += array[char]
}
return password
}



// Function to generate password with user input
function generatePassword() {
    return getRandom(newchoice)
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password'); //first word of password id will return

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);