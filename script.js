const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const labelDisplay = document.querySelector("#display");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const equalsBtn = document.querySelector("#compute");

let num = "";
let op = "";

function operate(x, y) {
    let compute;
    switch (op) {
        case "+":
            compute = x + y;
            break;

        case "-":
            compute = x - y;
            break;

        case "*":
            compute = x * y;
            break;

        case "/":
            compute = x / y;
            break;

        default:
            return;
    }
}

function getCurrentOperator() {
    operatorBtns.forEach((val) => {
        val.addEventListener("click", () => {
            op = val.value;
            labelDisplay.innerHTML += op;
            console.log(op);
        });
    });
}

function display() {
    numberBtns.forEach((val) => {
        val.addEventListener("click", () => {
            num = val.value;
            labelDisplay.innerHTML += num;
        });
    });
}

function clear() {
    clearBtn.addEventListener("click", () => {
        labelDisplay.innerHTML = "";
    });
}

(function runCalculator() {
    display();
    operator();
    clear();
})();
