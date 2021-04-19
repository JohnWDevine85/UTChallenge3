// Assignment code here
// Arrays go here

const numbers = '0123456789';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialCharacters = " !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";

// If the checkboxes are selected as true, then take the corresponding variables above and add them to a new concatenated string
//
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector("#generate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#realGenerateButton");
//
// Write password to the #password input

function writePassword () {
  var passwordSubtotal = ''
  var newPassword = ['']
  var pWordSpecialChar = document.getElementById('pWordSpecialChar')
  var pWordNum = document.getElementById('pWordNum')
  var pWordUpper = document.getElementById('pWordUpper')
  var pWordLower = document.getElementById('pWordLower')
  if (pWordSpecialChar.checked === true) {
    passwordSubtotal = passwordSubtotal + specialCharacters
  }
  // console.log(passwordSubtotal)
  if (pWordNum.checked === true) {
    passwordSubtotal = passwordSubtotal + numbers
  }
  // console.log(passwordSubtotal)
  if (pWordUpper.checked === true) {
    passwordSubtotal = passwordSubtotal + uppercaseLetters
  }
  // console.log(passwordSubtotal)
  if (pWordLower.checked === true) {
    passwordSubtotal = passwordSubtotal + lowercaseLetters
  }
  // console.log(passwordSubtotal)

  var pWordLengthInput = document.getElementById('pWordLength')
  // console.log(pWordLengthInput)
  var looptimes = parseInt(pWordLengthInput.value)
  var subTotalArray = passwordSubtotal.split('')
  for (var i = 0; i < looptimes; i++) {
    newPassword.push(subTotalArray[Math.floor(Math.random()*subTotalArray.length)])
    // var passwordLetters = passwordSubtotal[Math.floor(Math.random() * passwordSubtotal.length)]
    // newPassword = newPassword + passwordLetters
    console.log(newPassword)
  }
  console.log(newPassword)
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword
}
// console.log(newPassword)



//
// // Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
