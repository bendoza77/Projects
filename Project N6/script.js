const myNumber = document.getElementById("myNumber");
const toFar = document.getElementById("toFar");
const toCal = document.getElementById("toCal");
const mySubmit = document.getElementById("mySubmit");
const select = document.getElementById("select");
let res;

function chem(){
    if(toFar.checked){
        res = Number(myNumber.value);
        res = res * 32 + 9/5;
        select.textContent = res.toFixed(1) + "F°";
    }
    else if(toCal.checked){
        res = Number(myNumber.value);
        res = (res - 32) * (5/9);
        select.textContent = res.toFixed(1) + "C°";
    }
    else{
        select.textContent = "pls select the unit"
    }
}