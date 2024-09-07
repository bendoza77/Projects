function passwordGenerator(lenght, digit, upperCase, lowerCase, special){
    
    const lower = "asdfghjklzxcvbnmqwertyuiop";
    const upper = "ZXCVBNMLKJHGFDSAQWERTYUIOP";
    const passwordSpecila = ",./?!@#$%^&*()_+=";
    const passwordDigit = "0123456789";

    let chars = ""
    let password = ""

    chars += digit ? passwordDigit : "";
    chars += upperCase ? upper : "";
    chars += lowerCase ? lower : "";
    chars += special ? passwordSpecila : "";


    if(lenght <= 0){
        return "you password must have at least 1 character";
    }
    if(chars.length === 0){
        return "you must have at least one character";
    }

    for(let i = 0; i < lenght; i++){
        const random = Math.floor(Math.random() * chars.length);
        password += random;
    }

    return password;



}

const lenght = 12;
const digit = true;
const upperCase = true;
const lowerCase = true;
const special = true;

const passwordGen = passwordGenerator(lenght, digit, upperCase, lowerCase, special);

console.log(passwordGen);