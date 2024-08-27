const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const generateBtn = document.getElementById("generate-btn")
const rangeEl = document.getElementById("range-el")
const checkboxEl = document.getElementById("checkbox-el")
const passwordOneEl = document.getElementById("password-one-el")
const passwordTwoEl = document.getElementById("password-two-el")
const statusEl = document.getElementById("status-el")

generateBtn.addEventListener("click", function() {
    passwordOneEl.textContent = generatePassword(rangeEl.value, checkboxEl.checked)
    passwordOneEl.setAttribute("aria-label", `Copy Password One - ${passwordOneEl.textContent}`)
    passwordTwoEl.textContent = generatePassword(rangeEl.value, checkboxEl.checked)
    passwordTwoEl.setAttribute("aria-label", `Copy Password Two - ${passwordTwoEl.textContent}`)
    
    statusEl.textContent = "✅ Passwords generated successfully"
    setTimeout(function() {
        statusEl.textContent = ""
    }, 3000)
})

passwordOneEl.addEventListener("click", function() {
    copyPassword(1)
})

passwordTwoEl.addEventListener("click", function() {
    copyPassword(2)
})

passwordOneEl.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        copyPassword(1)
    }
});

passwordTwoEl.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        copyPassword(2)
    }
});

function copyPassword(pass) {
    if (pass === 1) {
        if (passwordOneEl.textContent.length > 0) {
            navigator.clipboard.writeText(passwordOneEl.textContent);
            statusEl.textContent = "✅ Password one copied successfully"
            setTimeout(function() {
                statusEl.textContent = ""
            }, 3000)
        } else {
            statusEl.textContent = "⛔️ Generate a password to copy"
        }
    } else {
        if (passwordOneEl.textContent.length > 0) {
            navigator.clipboard.writeText(passwordTwoEl.textContent);
            statusEl.textContent = "✅ Password two copied successfully"
            setTimeout(function() {
                statusEl.textContent = ""
            }, 3000)
        } else {
            statusEl.textContent = "⛔️ Generate a password to copy"
        }
    }
}

function generatePassword(length, includeChar) {
    let password = ""
    if (includeChar) {
        for (let x = 0; x < length; x++) {
            password += characters[Math.floor(Math.random() * characters.length)]
        }
    } else {
        for (let x = 0; x < length; x++) {
            password += letters[Math.floor(Math.random() * letters.length)]
        }
    }
    return password
}
