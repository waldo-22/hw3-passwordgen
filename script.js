let generateBtn = document.querySelector("#generate");
let result = []
let generatedPasswordLength; 
// Write password to the #password input
function writePassword() { 
  let passwordLength = generatedPassLength()
  console.log(passwordLength);
  generatedLowercase()
  generatedUppercase()
  generatedNumber()
  generatedSymbol()
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  result = [] 
}
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  let password = "";
  for (let i = 0; i < generatedPasswordLength; i++) {
    password += result[Math.floor(Math.random()*result.length)]
  }
  return password;
}
function generatedPassLength() {
generatedPasswordLength = window.prompt("how long do you want your password to be? Must be atleast 8 but no more than 128:");
return generatedPasswordLength
}
function generatedLowercase() {
  let generatedLowerLetters = window.confirm("do you want lower cases in your password?")
  let lowerCase = "abcdefghijklmnopqrstuvwxyz"
  if (generatedLowerLetters === true) {
    result = result.concat(lowerCase.split(""))
  }
  console.log(result)

}
function generatedUppercase() {
  let generatedUpperLetters = window.confirm("do you want upper cases in your password?")
  let generatedUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (generatedUpperLetters === true) {
      result = result.concat(generatedUppercase.split(""))
  }
}
function generatedNumber() {
  let userWantsNumbers = window.confirm("do you want numbers in your password?")
  let generatedNumber = "0123456789"
  if (userWantsNumbers === true) {
    result = result.concat(generatedNumber.split(""))
}
}
function generatedSymbol() {
  let userWantsSymbols = window.confirm("do you want symbols in your password?")
  let generatedSymbol = "!@#$%^&*()~`_-+=}{[]:;?/>.<,"
  if (userWantsSymbols === true) {
    result = result.concat(generatedSymbol.split(""))
}
}

  
  
  
  
  
  
  
  
  
  
  
  