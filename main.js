let currentNum = "";
let previousNum = "";
let operator = "";

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearCalculator);
const deleteButton = document.getElementById("delete-button");
const percentButton = document.getElementById("percent-button");
const pointButton = document.getElementById("point-button");
const equalButton = document.getElementById("equal-button");
    equalButton.addEventListener("click", () => {
        if (currentNum != "" && previousNum != "") {
            calculate();
        }
    });
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
        if (currentNum <= 0) {
            previousNum = "Error"
            displayResults();
            return;
        }
        previousNum = previousNum / currentNum;
    }
    previousNum = previousNum.toString();
    displayResults();
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}

function displayResults() {
    previousOutputScreen.textContent = "";
    operator = "";
    if (previousNum.length <= 11) {
        currentOutputScreen.textContent = previousNum;
    } else {
        currentOutputScreen.textContent = previousNum.slice(0,11) + "...";
    }
}

function clearCalculator () {
    currentNum = "";
    previousNum = "";
    operator = "";
    currentOutputScreen.textContent = "";
    previousOutputScreen.textContent = "";
}
