// gueesing number game

const minNumber = 1;
const maxNumber = 100;

const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempt = 0;
let guess;


while(true){

    guess = window.prompt(`guess the number between a ${minNumber} - ${maxNumber}`)

    if(isNaN(guess)){
        window.alert("Pls eneter the valid number.")
    }
    
    if(guess < minNumber || guess > maxNumber){
        window.alert("Pls enter the valid number.")
    }
    else{
        attempt++;

        if(guess < answer){
            window.alert("your number is low.")
        }
        else if(guess > answer){
            window.alert("your number is high.")
        }
        else{
            window.alert(`your number is corect you guess ${answer} in ${attempt} attempts.`)
            break
        }
    }
}