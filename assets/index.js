const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const includeCharEl = document.getElementById("includeChar");
const maxCharEl = document.getElementById("maxChar");

const passwordOneEl = document.getElementById("passwordOneEl");
const passwordTwoEl = document.getElementById("passwordTwoEl");

const generatePwdBtn = document.getElementById("generatePwdBtn")

const statusEl = document.getElementById("status")

generatePwdBtn.addEventListener("click", function() {
    let includeSymbols = includeCharEl.checked;
    let length = maxCharEl.value;

    passwordOneEl.textContent = generatePwd(length, includeSymbols);
    passwordTwoEl.textContent = generatePwd(length, includeSymbols);
})

passwordOneEl.addEventListener("click", function() {
    if ((passwordTwoEl.textContent).length > 0) {
        navigator.clipboard.writeText(passwordOneEl.textContent);
        statusEl.textContent = "✅ Password one has been copied to your clipboard";
        setTimeout(function() {
            statusEl.textContent = ""
        }, 3500);
    }
})

passwordTwoEl.addEventListener("click", function() {
    if ((passwordOneEl.textContent).length > 0) {
        navigator.clipboard.writeText(passwordTwoEl.textContent);
        statusEl.textContent = "✅ Password two has been copied to your clipboard";
        setTimeout(function() {
            statusEl.textContent = ""
        }, 3500);
    }
})

function generatePwd(length, includeSymbols) {
    let password = ""
    for (let i = 0; i < length; i++) {
        if(includeSymbols) {
            let randomIndex = Math.floor(Math.random() * characters.length)
            password += characters[randomIndex];
        } else {
            let randomIndex = Math.floor(Math.random() * letters.length)
            password += letters[randomIndex];
        }
    }
    return password;
}