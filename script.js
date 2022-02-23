const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const labelDisplay = document.querySelector("#display");
const displayEquation = document.querySelector("#displayEquation");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const equalsBtn = document.querySelector("#equals");

equalsBtn.addEventListener("click", evaluate);
deleteBtn.addEventListener("click", deleteNum);

let num = "";
let op = "";
let firstOperand = "";
let secondOperand;

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
    x = Number(x);
    y = Number(y);
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

// function decimalHandler() {}

function displayHandler() {
    numberBtns.forEach((val) => {
        val.addEventListener("click", () => {
            num = val.value;
            displayEquation.innerHTML += num;
        });
    });
}

function setCurrentOperator() {
    operatorBtns.forEach((val) => {
        val.addEventListener("click", () => {
            op = val.value;
            displayEquation.innerHTML += op;
        });
    });
}

function evaluate() {
    equation = displayEquation.innerHTML;
    splitEquation = equation.split(op);
    for (let i = 0; i <= splitEquation.length; i++) {
        answer = splitEquation.reduce((previousValue, currentValue) =>
            compute(op, previousValue, currentValue)
        );
        // answer = compute(op, firstOperand, secondOperand);
        displayEquation.innerHTML = answer;
        console.log(answer);
        firstOperand = answer;
    }
}

function clear() {
    clearBtn.addEventListener("click", () => {
        displayEquation.innerHTML = "";
        labelDisplay.innerHTML = "";
    });
}

function deleteNum() {
    displayEquation.innerHTML = displayEquation.innerHTML
        .toString()
        .slice(0, -1);
}

(function runCalculator() {
    displayHandler();
    setCurrentOperator();
    clear();
})();

// function equationSplit() {
//     equation = displayEquation.innerHTML;
//     splitEquation = equation.split(op);

//     for (let i = 0; i <= splitEquation.length; i++) {
//         if (splitEquation.length === 1) {
//             firstOperand = parseInt(splitEquation[0]);
//             secondOperand = parseInt(splitEquation[1]);
//             answer = compute(op, firstOperand, secondOperand);
//             displayEquation.innerHTML = answer;
//             firstOperand = answer;
//         }
//     }
// }
