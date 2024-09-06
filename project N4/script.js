const reset = document.getElementById("reset");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const myResult = document.getElementById("myResult");
let count = 0;


minusBtn.onclick = function(){
    count--;
    myResult.textContent = count;
}

plusBtn.onclick = function(){
    count++;
    myResult.textContent = count;
}

reset.onclick = function(){
    count = 0;
    myResult.textContent = count;
}