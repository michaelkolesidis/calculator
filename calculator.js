const defaultOutput = " ";

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

const populateDisplay = function (event) {
    display.innerHTML = event.target.textContent;
}

const clearDisplay = function (event) {
    display.innerHTML = ' ';
}

const display = document.querySelector("#display");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");


// Events
clearButton.addEventListener("click", (event) => clearDisplay(event))

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(numberButton => numberButton.addEventListener("click", (event) => populateDisplay(event)));



