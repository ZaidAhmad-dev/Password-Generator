const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


function getLowerCase() {
    return lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length));
}

function getUpperCase() {
    return upperLetters.charAt(Math.floor(Math.random() * upperLetters.length));
}

function getNumber() {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function getSymbol() {
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}


generateEl.addEventListener("click", generatePassword);

function generatePassword() {
    let length = lenEl.value;
    let hasUpper = upperEl.checked;
    let hasLower = lowerEl.checked;
    let hasNumber = numberEl.checked;
    let hasSymbol = symbolEl.checked;

    let generatedPassword = "";
    let possibleCharacters = "";

    if (hasLower) {
        possibleCharacters += lowerLetters;
    }
    if (hasUpper) {
        possibleCharacters += upperLetters;
    }
    if (hasNumber) {
        possibleCharacters += numbers;
    }
    if (hasSymbol) {
        possibleCharacters += symbols;
    }

    for (let i = 0; i < length; i++) {
        generatedPassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    // Showing error message if no checkbox is checked
    if (generatedPassword === "") {
        swal({
            title: "Error!",
            text: "Please select at least one checkbox!",
            icon: "error",
            button: "OK",
        });
    } else {
        pwEl.textContent = generatedPassword;
    }
}



copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    swal("Copied!", "Your password has been copied to the clipboard.", "success");
});