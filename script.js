// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var result;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
  
}

 
function generatePassword()  {
  var passwordLength = window.prompt("Please specify the length of password. (Between 8 to 128 char.)");
  if (!(passwordLength >= 8 && passwordLength <= 128) ){
    window.alert("Please select password length between 8 to 128 characters");
    generatePassword();
  }
  var isLowerCase = window.confirm("Would you like to add lowercase characters?");
  var isUpperCase = window.confirm("Would you like to add Uppercase characters");
  var isNumeric = window.confirm("Would you like to add numeric characters?");
  var isSpecialCharacters = window.confirm("Would you like to add special characters?");

  if((isLowerCase || isUpperCase || isNumeric || isSpecialCharacters) == false){
     window.alert("Please choose atleast one character type");
     generatePassword();
  }
  else{
            
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lower = upper.toLowerCase();
    numeric = "0123456789";
    specialCharacters = "!@#$%^&*";

   
    var result = "";
    for ( var i = 0; i < passwordLength ; i++ ) {
      if(isLowerCase){
        
        result += lower.charAt(Math.floor(Math.random()*lower.length));
        if(result.length == passwordLength){
          break;
        }
      }

      if(isUpperCase){
        
        result += upper.charAt(Math.floor(Math.random()*upper.length));
        if(result.length == passwordLength){
          break;
        }
      }
      
            
      if(isNumeric){
        
        result += numeric.charAt(Math.floor(Math.random()*numeric.length));
        if(result.length == passwordLength){
          break;
        }
      }
      if(isSpecialCharacters){
        
        result += specialCharacters.charAt(Math.floor(Math.random()*specialCharacters.length));
        if(result.length == passwordLength){
          break;
        }
      }
      
      
     

  }
  
  return result;
 
  };

};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


