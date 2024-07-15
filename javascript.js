let firstNum = 0;
let secondNum = 0;
let operator = "";

let firstOperation = true;
let firstInput = true; //this is necessary to remove the 0 when first entering a number into the field

let awaitUserInput = true;

const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".num-btn");
const operatorButtons = document.querySelectorAll(".oper-btn");


//Function for performaing Operations
function operate(num1, num2, oper) {
    //handle invalid user input
    if (!oper) return "PROVIDE OPERATOR";
    if (num1 === "" || num2 === "") return "PROVIDE BOTH NUMBERS";
    if (!(typeof num1 === "number")) return "INVALID NUMBER 1";
    if (!(typeof num2 === "number")) return "INVALID NUMBER 2";
    if (oper === "/" && num2 === 0) return "0 DIVISION ERROR";
    if ( !(["+", "-", "*", "/"].find((op) => op === oper )) ) return "INVALID OPERATOR";
    
    operator = ""; // this line will help later for defining first and second numbers for operations
    if (oper === "+") return num1 + num2;
    if (oper === "-") return num1 - num2; 
    if (oper === "*") return num1 * num2;
    if (oper === "/") return num1 / num2;

    return "ERROR"
}


function clearDisplay (){
    display.textContent = "0";
}

function clearSelectedOperatorClass() {
    operatorButtons.forEach((button) => {
        button.classList.remove("selected")
    })
}


numButtons.forEach( (button) => {
    button.addEventListener("click", ()=> {
        awaitUserInput = false;
        if (firstInput){
            display.textContent = button.value;  
            firstInput = false;
        } else {
            display.textContent += button.value;  
        }

        //choose which number to update in memory
        if (firstOperation) {
            firstNum = Number(display.textContent);
        } else {
            secondNum = Number(display.textContent);
        }
    });
});

document.querySelector(".dot-btn").addEventListener("click", () => {
    let displayText = display.textContent;
    let includesDot = displayText.includes(".");
    if (includesDot) {
        return 0;
    }
    else if (firstInput) {
        display.textContent = "0.";
        firstInput = false;
    }
    else
    {
        display.textContent += ".";
    }
});



operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //Clear previous selection and select last pressed operator button
        clearSelectedOperatorClass();
        button.classList.add("selected");

        if (awaitUserInput) {
            operator = button.id;
            return 0;
        }

        if (firstOperation) {
            operator = button.id;
            firstInput = true;
            firstOperation = false;
            awaitUserInput = true;
        } else {
            firstNum = operate(firstNum, secondNum, operator)
            display.textContent = firstNum;
            firstInput = true;
            operator = button.id;
            awaitUserInput = true;
        }

    });
});


document.querySelector(".clr-btn").addEventListener("click", () => {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    firstOperation = true;
    firstInput = true;
    clearSelectedOperatorClass();
    clearDisplay();
});

document.querySelector(".equal-btn").addEventListener("click", ()=> {
    if (!operator) return 0; //don't do anything if no operator is selected

    firstNum = operate(firstNum,secondNum,operator);
    display.textContent = firstNum;
    firstInput = true;
    firstOperation = true;

    operator = "";
    clearSelectedOperatorClass();
});

document.querySelector(".del-btn").addEventListener("click", () => {
    displayText = display.textContent;
    if (displayText.length > 0) {
        displayText = displayText.slice(0,-1);
    }

    if (displayText==="") {
        displayText = "0";
        firstInput = true;
    }
    display.textContent = displayText;
});

