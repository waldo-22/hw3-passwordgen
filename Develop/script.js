// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// /////////////////////////////////////////////////////////////////////////////////////////////
// *Code Chart = CharCode

//function getRandomLowercase() {
  //return string.fromCharCode(Math.floor(Math.random()*26) + 97);
//}
  //console.log(getRandomLowercase());

//function getRandomUppercase() {
  //return string.fromCharCode(Math.floor(Math.random()*26) + 65);
//}
  //console.log(getRandomUppercase());

//function getRandomNumber() {
  //return string.fromCharCode(Math.floor(Math.random()*10) + 48);
//}
  //console.log(getRandomNumber());

//function getRandomSymbol() {
  //return symbols[Math.floor(Math.random() * symbols.lenth)];
  //const symbols = "~`!@#$%^&*()_-+={[}]':;?,/.><";
  
  //}
  //console.log(getRandomSymbol)




  //prev.addEventListener("click", function(event) {

    //container.addEventListener("click", function(event) {



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

//--------------------------------------------------------------------------------------------------------------------------------------------------------


function generatePassword(){
  console.log("did something 1");

    return "did something 2";
}

//a. Password length 8 < 128

function generatedPassLength() {
let generatedPassLength = window.prompt("how long do you want your password to be? Must be atleast 8 but no more than 128:");
  console.log("Users Input:" + generatedPassLength )

let randomNumber = Math.random()*generatedPassLength.length;
let roundedNumber = Math.floor(generatedPassLength);
let generatedPassword = generatedPassLength[roundedNumber];
}

// b. lowercase, uppercase, numbers, special characters


function generatedLowercase() {
let lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
let randomNumber2 = Math.random()*generatedLowercase.length;;
let generatedLowercase = window.confirm("do you want lower cases in your password?")
// insert "concat" and "spit" for results without decimals"
    let result = []
    if (lowerCase ===
}

function generatedUppercase() {
let generatedUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
let randomNumber3 = Math.random()*generatedUppercase.length;;

}


function generatedNumber() {
let generatedNumber = ["0123456789"]
let randomNumber4 = Math.random()*generatedNumber.length;;

}

function generatedSymbol() {
let generatedSymbol = ["!@#$%^&*()~`_-+=}{[]:;?/>.<,"]
let randomNumber5 = Math.random()*generatedSymbol.length;;

}


// 2. Validate input
//?????????????????????????????






// 3. Generate password based on the criteria







// 4. Display password to the page.












