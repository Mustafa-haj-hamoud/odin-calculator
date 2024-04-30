let firstNum = 0;
let secondNum = 0;
let operator = "+";

let numButtons = document.querySelectorAll(".num-btn");

numButtons.forEach( (button) => {
    button.addEventListener("click", ()=> console.log("clicked " + button.value));
});