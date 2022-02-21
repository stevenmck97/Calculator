const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operations]");
const labelDisplay = document.querySelector("#display");

function operate(x, y) {
    let compute;
    switch (operation) {
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

function display() {
    numberBtns.forEach((num) => {
        num.addEventListener("click", () => {
            labelDisplay.innerHTML = num.value;
        });
    });
}

(function runCalculator() {
    display();
})();
