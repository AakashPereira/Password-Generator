const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const generateBtn = document.getElementById("generate-btn")

const maxLength = document.getElementById("maxLength")
const includeChars = document.getElementById("includeChars")

const pwdOneEl = document.getElementById("pwdOne")
const pwdTwoEl = document.getElementById("pwdTwo")

const statusEl = document.getElementById("status")

generateBtn.addEventListener("click", function() {
    let passwordOne = generatePassword(maxLength.value, includeChars.checked)
    let passwordTwo = generatePassword(maxLength.value, includeChars.checked)
    
    pwdOneEl.textContent = passwordOne
    pwdTwoEl.textContent = passwordTwo
})

pwdOneEl.addEventListener("click", function() {
    if((pwdOneEl.textContent).length > 0) {
        navigator.clipboard.writeText(pwdOneEl.textContent);
        statusEl.textContent = "✅ Password one has been copied to your clipboard"
        setTimeout(function() {
            statusEl.textContent = ""
        }, 3000)
    } else {
        statusEl.textContent = "❌ Generate a password first to copy it"
        setTimeout(function() {
            statusEl.textContent = ""
        }, 3000)
    }
})

pwdTwoEl.addEventListener("click", function() {
    if((pwdTwoEl.textContent).length > 0) {
        navigator.clipboard.writeText(pwdTwoEl.textContent);
        statusEl.textContent = "✅ Password two has been copied to your clipboard"
        setTimeout(function() {
            statusEl.textContent = ""
        }, 3000)
    } else {
        statusEl.textContent = "❌ Generate a password first to copy it"
        setTimeout(function() {
            statusEl.textContent = ""
        }, 3000)
    }
})

function generatePassword(length, includeChar) {
    let password = ""
    if(includeChar) {
        for (let i = 0; i < length; i++) {
            let randomPosition = Math.floor(Math.random() * characters.length)
            password += characters[randomPosition]
        }
    } else {
        for (let i = 0; i < length; i++) {
            let randomPosition = Math.floor(Math.random() * letters.length)
            password += letters[randomPosition]
        }
    }
    return password;
}
