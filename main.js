let currentNum = "";
let previousNum = "";
let operator = "";

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");
const percentButton = document.getElementById("percent-button");
const pointButton = document.getElementById("point-button");
const equalButton = document.getElementById("equal-button");
    equalButton.addEventListener("click", calculate);
const currentOutputScreen = document.querySelector("#current-output");
const previousOutputScreen = document.querySelector("#previous-output");

numberButtons.forEach(btn => {
    btn.addEventListener ("click", (e) => (
        handleNumber(e.target.textContent)
    ));
});

function handleNumber(number) {
    if (currentNum.length <= 11) {
        currentNum += number;
        currentOutputScreen.textContent = currentNum;
    }
};

operatorButtons.forEach(btn => {
    btn.addEventListener ("click", (e) => (
        handleOperator (e.target.textContent)
    ));
});

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousOutputScreen.textContent = previousNum + " " + operator;
    currentNum = "";
    currentOutputScreen.textContent = "";
}

function calculate() {
previousNum = Number(previousNum);
currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum = previousNum + currentNum;
    } else if (operator === "-") {
        previousNum = previousNum - currentNum;
    } else if (operator === "x") {
        previousNum = previousNum * currentNum;
    } else if (operator === "/") {
        previousNum = previousNum / currentNum;
    }
    previousOutputScreen.textContent = "";
    currentOutputScreen.textContent = previousNum;
}

// function add(a,b) {
//     return a + b;
// }

// function subtract(a,b) {
//     return a - b;
// }

// function multiply(a,b) {
//     return a * b;
// }

// function divide(a,b) {
//     return a / b;
// }


