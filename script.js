const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const labelDisplay = document.querySelector("#display");
const displayEquation = document.querySelector("#displayEquation");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const equalsBtn = document.querySelector("#equals");

let num = "";
let op = "";
let firstOperand = "";
let secondOperand = "";

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}

function compute(operator, x, y) {
    switch (operator) {
        case "+":
            return add(x, y);

        case "-":
            return subtract(x, y);

        case "*":
            return multiply(x, y);

        case "/":
            return divide(x, y);

        default:
            return null;
    }
}

function setCurrentOperator() {
    operatorBtns.forEach((val) => {
        val.addEventListener("click", () => {
            op = val.value;
            displayEquation.innerHTML += op;
        });
    });
}

function equationSplit() {
    equalsBtn.addEventListener("click", () => {
        equation = displayEquation.innerHTML;
        splitEquation = equation.split(op);
        firstOperand = parseInt(splitEquation[0]);
        secondOperand = parseInt(splitEquation[1]);
        answer = compute(op, firstOperand, secondOperand);
        labelDisplay.innerHTML = `= ${answer}`;
    });
}

function displayHandler() {
    numberBtns.forEach((val) => {
        val.addEventListener("click", () => {
            num = val.value;
            displayEquation.innerHTML += num;
        });
    });
}

function clear() {
    clearBtn.addEventListener("click", () => {
        displayEquation.innerHTML = "";
        labelDisplay.innerHTML = "";
    });
}

(function runCalculator() {
    displayHandler();
    setCurrentOperator();
    equationSplit();
    clear();
})();
