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
        case "÷":   return dividet(number1,number2);
    }
}

const digits = document.querySelectorAll(".digit");
const display = document.querySelector(".display>.main");
const subDisplay = document.querySelector(".display>.sub");
const operators = document.querySelectorAll(".operator");
const edits = document.querySelectorAll(".edit");

digits.forEach(digit => digit.addEventListener("click",addDigit));
operators.forEach(operator => operator.addEventListener("click",proccessOperator));
edits.forEach(edit => edit.addEventListener("click",proccessEdit));
let operator = "";
let number1 = "";
let number2 = "";
let reset = false;

function proccessOperator(){
    if (operator == ""){ 
        operator = this.textContent;
        number1 = display.textContent;
        subDisplay.textContent = `${number1} ${operator}`;
        display.textContent = "0";
        reset = false;
    }
    else{
        switch(this.textContent){
            case "=":
                number2 = display.textContent;
                number1 = operate(operator,+number1,+number2);
                subDisplay.textContent = `${subDisplay.textContent} ${number2} =`;
                operator = "";
                display.textContent = number1;
                number1 = "";
                reset = true;
            break;
            
            default:
                number2 = display.textContent;
                number1 = operate(operator,+number1,+number2);
                operator = this.textContent;
                subDisplay.textContent = `${number1} ${operator} `;
                display.textContent = "0";
            break;
        }
    }    
}



function addDigit(){
    if(reset){
        display.textContent = "";
        subDisplay.textContent = "";
        reset = false;
    }
    if(display.textContent == "0" && this.textContent != ".")
        display.textContent = "";
    
        
    if(this.textContent == ".")
        if (display.textContent.includes(".")) ;
        else display.textContent = display.textContent+this.textContent;
    else
        display.textContent = display.textContent+this.textContent;
}

function proccessEdit(){
    switch(this.textContent){
        case "C":
            display.textContent = "0";
        break;
        case "CE":
            display.textContent = "0";
            subDisplay.textContent = "";
            operator = "";
            number1 = "";
            number2 = "";
            reset = false;
        break;
        case "DEL":
            let content = display.textContent.slice(0,display.textContent.length-1);
            display.textContent = content != ""? content : "0";
        break;
    }
}