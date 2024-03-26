const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersNoSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let numberOfCharacters = 0;
let symbolsCheck = false;

function setNumberOfCharacters(){
  numberOfCharacters = document.getElementById("myRange").value
}

function toggleSymbolsCheck(){
  symbolsCheck = document.getElementById("symb").checked
  
  //symbolsCheck = !symbolsCheck
}

function genRandString(){
  if (numberOfCharacters == 0)
    return;

  let randoString = ""
  if (symbolsCheck) {
    for(i = 0; i < numberOfCharacters; i++){
      randoString += characters[Math.floor(Math.random()*characters.length)]
    }
  } else {
    for(i = 0; i < numberOfCharacters; i++){
      randoString += charactersNoSymbols[Math.floor(Math.random()*charactersNoSymbols.length)]
    }
  }
  return randoString;
}

function cpyPass(){
   // Get the text field
  let text = document.getElementById('pass').innerHTML;
  navigator.clipboard.writeText(text)
    .catch(err => {
      console.error('Unable to copy text to clipboard: ', err);
    });
}

function generatePassword(){
  setNumberOfCharacters()
  toggleSymbolsCheck()
  let passvar = document.getElementById("pass")
  let password = genRandString()
  passvar.innerHTML = password
}
