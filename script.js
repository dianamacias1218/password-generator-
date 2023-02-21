var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ['@','&','!','*','#','%','~','^','$'];
var passwordLength = [8<=128];

//password requirements
function passwordOptions (){
    let passwordLength = parseInt (
    prompt ("how many characters would you like to use between 8 and 128")
    );
    if (passwordLength > 7 & passwordLength < 129) {
        let lowercase = confirm("uselowercase letters");
        let uppercase = confirm("Use uppercase letters");
        let numbers = confirm("would you like to use numbers?");
        let specialCharacters = confirm("would you like to use special characters?");
        let options = {
            strength: passwordLength,
            uppercase: uppercase,
            lowercase: lowercase,
            numbers: numbers,
            specialCharacters: specialCharacters,
          };
           return options;

        } else {
          alert("Please enter a number between 8 and 128");
        }
      }

 // generate password button
generateBtn.addEventListener("click", writePassword);