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

var mychoice = []
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Function to prompt user for password options
function getPasswordOptions(array) {
   
// Set up error messages to stick to the logic
const input = prompt("How many characters would you like your password to contain?")
if (input < 8 || input > 128) {
    alert('Password length must be at least 8 characters but no more than 128. Refresh to try again.')}
    else if (isNaN(input)) {
        alert('Password length must be provided as a number. Refresh to try again.')}
   
        else {
          confirm('Your password length: ' + input + ' digits.')
          // password generation logic starts here
        if (confirm('Click Ok to confirm including special characters.')) {
        mychoice.push(...specialCharacters);
        alert('Your password will include special characters.')
        }
        if (confirm('Click Ok to confirm including numeric characters.')) {
          mychoice.push(...numericCharacters);
          alert('Your password will include numeric characters.')
        }
        if (confirm('Click Ok to confirm including uppercase characters.')) {
          mychoice.push(...upperCasedCharacters);
          alert('Your password will include uppercase characters.')
        }
        if (confirm('Click Ok to confirm including lowercase characters.')) {
          mychoice.push(...lowerCasedCharacters);
          alert('Your password will include lowercase characters')
        }
       
        
      };
      if (mychoice.length == 0) {
        alert('Your password should at least include one character type!');
    }
        
      
        // Function for getting a random element from an array
        
            var password = ''
        for (i = 0; i < input; i++) {
            var char = Math.floor(Math.random() * mychoice.length);
            password += array[char]
        }
        return password
       
        
}

        // Function to generate password with user input
        function generatePassword() {
            return getPasswordOptions(mychoice)
        }
         // conditions end here so password won't generate if conditions are not met - there will be error



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password'); //first word of password id will return

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Add reset button so they can generate a new one and reset the criteria
var resetBtn = document.querySelector('#clear')
resetBtn.addEventListener('click', function() {
  mychoice = [];
  var textarea = document.querySelector('textarea');
  textarea.value = ''
})