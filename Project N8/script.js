// the calculator program

const appendDisplay = document.getElementById("appendDisplay");
const clear = document.getElementById("clear");

function display(input){
    appendDisplay.value += input;
}

function total(){
    try{
        appendDisplay.value = eval(appendDisplay.value);
    }
    catch(error){
        appendDisplay.value = "Error"
    }
}



clear.onclick = function(){
    appendDisplay.value = "";
}