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

const display = document.querySelector(".display>.main");
const subDisplay = document.querySelector(".display>.sub");
const buttons = document.querySelectorAll(".container>button");
buttons.forEach(button => button.addEventListener("click",evaluateAccion));

let operator = "";
let number1 = "";
let number2 = "";
const waitingForFirstNumber = 1;
const waitingForSecondNumber = 2;
const displayingResult = 3;
let currentState = waitingForFirstNumber;
    
    function evaluateAccion (){
           switch(currentState){
                case waitingForFirstNumber:
                    switch(getTypeOfButton(this.textContent)){
                        case "digit":
                        case ".":
                            displayDigit(this.textContent);
                            break;
                        case "operator":
                            number1 = display.textContent;
                            operator = this.textContent;
                            currentState = waitingForSecondNumber;
                            addTosubDisplay(number1, operator);
                            clearDisplay();
                            break;
                            case "DEL":
                            deleteDigit();
                            break;
                            case "C":
                            clearDisplay();
                            break;
                            case "CE":
                            resetCalc();
                            break;      
                        }
                    break;
                case waitingForSecondNumber:
                    switch(getTypeOfButton(this.textContent)){
                        case "digit":
                        case ".":
                            displayDigit(this.textContent);
                            break;
                        case "operator":
                            number2 = display.textContent;
                            number1 = operate(operator,+number1,+number2);
                            operator = this.textContent;
                            addTosubDisplay(number1, operator);
                            currentState = waitingForSecondNumber;
                            break;
                        case "=":
                            number2 = display.textContent;
                            number1 = operate(operator,+number1,+number2);
                            operator = "";
                            addTosubDisplay(subDisplay.textContent,number2, "=");
                            displayResult(number1);
                            currentState = displayingResult;
                        break;                            
                        case "DEL":
                            deleteDigit(display);
                            break;
                        case "C":
                            clearDisplay();
                            break;
                        case "CE":
                            resetCalc();
                            break;
                    }       
                break;
                case displayingResult:
                    switch(getTypeOfButton(this.textContent)){
                        case "digit":
                            resetCalc();
                            displayDigit(this.textContent);
                            break;
                        case "operator":
                            number1 = display.textContent;
                            operator = this.textContent;
                            currentState = waitingForSecondNumber;
                            addTosubDisplay(number1, operator);
                            clearDisplay();
                            break;                          
                        case "CE":
                            resetCalc();
                            break;
                    }                                           
                break;
        }
    }

    function getTypeOfButton(name){
        switch(name){
            case "0" :
            case "1" :
            case "2" :
            case "3" :
            case "4" :
            case "5" :
            case "6" :
            case "7" :
            case "8" :
            case "9" :
                return "digit";
            case "*" :
            case "÷" :
            case "+" :
            case "-" :
                return "operator";
            case "." : return name;
            case "CE": return name;
            case "C": return name;
            case "DEL": return name;
            case "=" : return name;
            
        }

    }
function displayResult(result){
    display.textContent = result; 
}    
function displayDigit(digit){
    if(display.textContent == "0" && digit != ".")
        display.textContent = "";

    if(this.textContent == ".")
        if (display.textContent.includes(".")) ;
        else display.textContent = display.textContent+digit
    else
        display.textContent = display.textContent+digit;  
}
function addTosubDisplay(){
    const args = Array.prototype.slice.call(arguments);
    subDisplay.textContent = args.join(" ");
}

function clearDisplay(){
    display.textContent = "0";
}

function deleteDigit(){
    let content = display.textContent.slice(0,display.textContent.length-1);
    display.textContent = content != "" ? content : "0"; 
}

function resetCalc(){
    display.textContent = "0";
    subDisplay.textContent = "";
    operator = "";
    number1 = "";
    number2 = "";
    currentState = waitingForFirstNumber;
}

