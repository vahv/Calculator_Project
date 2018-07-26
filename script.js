function add (number1, number2){
    return number1+number2;
}
function subtract(number1, number2){
    return number1-number2;
}
function multiply(number1, number2){
    return number1*number2;
}
function dividet(number1, number2){
    if(number2 == 0) return 'Error';
    return number1/number2;
}

function operate (operator,number1,number2){
    switch(operator){
        case "+":   return add(number1,number2);
        case "-":   return subtract(number1,number2);
        case "*":   return multiply(number1,number2);
        case "/":   return dividet(number1,number2);
    }
}

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click",addDigit));
const display = document.querySelector(".display>span");


function addDigit(){
    if(display.textContent == "0" && this.textContent != ".") display.textContent = "";
    if(this.textContent == ".")
        if (display.textContent.includes(".")) ;
        else display.textContent = display.textContent+this.textContent;
    else
        display.textContent = display.textContent+this.textContent;
}