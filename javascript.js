let firstNum = 0;
let secondNum = 0;
let operator = "";

const numButtons = document.querySelectorAll(".num-btn");
numButtons.forEach( (button) => {
    button.addEventListener("click", ()=> console.log("clicked " + button.value));
});

function operate(num1, num2, oper) {
    //handle invalid user input
    if (!oper) return "PROVIDE OPERATOR";
    if (num1 === "" || num2 === "") return "PROVIDE BOTH NUMBERS";
    if (!(typeof num1 === "number")) return "INVALID NUMBER 1";
    if (!(typeof num2 === "number")) return "INVALID NUMBER 2";
    if (oper === "/" && num2 === 0) return "0 DIVISION ERROR";
    if ( !(["+", "-", "*", "/"].find((op) => op === oper )) ) return "INVALID OPERATOR";
    
    if (oper === "+") return num1 + num2;
    if (oper === "-") return num1 - num2; 
    if (oper === "*") return num1 * num2;
    if (oper === "/") return num1 / num2;

    return "ERROR"
}