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
    numberBtns.forEach((val) => {
        val.addEventListener("click", () => {
            num = val.value;
            labelDisplay.innerHTML += num;
        });
    });
}

(function runCalculator() {
    display();
})();
