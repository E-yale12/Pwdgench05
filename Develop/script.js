//Array of special characters to be included in password
var specialCharacters = [ '@', '%', '+','\\', '/',"'",'!','#','$', '^', '?', ':',',',')', '(','}','{', ']','[',
'~', '-',  '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't',  'u', 'v', 'w', 'x',  'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
'R', 'S', 'T', 'U',  'V', 'W', 'X', 'Y', 'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    var speChar = prompt("Enter a special character: ");
    var num = prompt("Enter a number: ");
    var passwordLenght = parseInt(prompt("Enter the length: "));
    
var initL = speChar.length + num.length;
var genLength = Math.ceil((passwordLenght - initL)/2);


    var randomPassword = [];

    for(var i = 1; i <= genLength; i++){
        randomPassword.push(lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)],upperCasedCharacters[Math.floor(Math.random()*upperCasedCharacters.length)]);
       
    }

randomPassword.push(speChar);
randomPassword.push(num);
var passwordText = document.querySelector('#password');

passwordText.value = randomPassword.join("");
    
}

// Function for getting a random element from an array
function getRandom(arr) { 

};  

// Function to generate password with user input
function generatePassword() {

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);
