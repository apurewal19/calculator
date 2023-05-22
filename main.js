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
    pointButton.addEventListener("click", () => {
        addDecimal();
    });
const equalButton = document.getElementById("equal-button");
    equalButton.addEventListener("click", () => {
        if (currentNum != "" && previousNum != "") {
            calculate();
        }
    });
const currentOutputScreen = document.querySelector("#current-output");
const previousOutputScreen = document.querySelector("#previous-output");

window.addEventListener("keydown", handleKeyPress)

numberButtons.forEach(btn => {
    btn.addEventListener ("click", (e) => (
        handleNumber(e.target.textContent)
    ));
});

function handleNumber(number) {
    if (previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = ""
        currentOutputScreen.textContent = currentNum;
    }
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
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(op);
    } else if (currentNum === "") {
        operatorCheck(op);
    } else {
        calculate()
        operator = op;
        previousOutputScreen.textContent = previousNum + " " + operator;
        currentOutputScreen.textContent = "0";
    }
}

function operatorCheck(text) {
    operator = text;
    previousOutputScreen.textContent = previousNum + " " + operator;
    currentOutputScreen.textContent = "0";
    currentNum = "";
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
    if (previousNum.length <= 11) {
        currentOutputScreen.textContent = previousNum;
    } else {
        currentOutputScreen.textContent = previousNum.slice(0,11) + "...";
    }
    previousOutputScreen.textContent = "";
    operator = "";
    currentNum = "";
}

function clearCalculator() {
    currentNum = "";
    previousNum = "";
    operator = "";
    currentOutputScreen.textContent = "0";
    previousOutputScreen.textContent = "";
}

function addDecimal() {
    if (!currentNum.includes('.')) {
        currentNum += ".";
        currentOutputScreen.textContent = currentNum;
    }
}

function handleKeyPress(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key)
    }
    if (
        e.key === "Enter" ||
        (e.key === "=" && currentNum != "" && previousNum != "")
    ) {
        calculate();
    }
    if (e.key === "+" || e.key === "-" || e.key === "/") {
        handleOperator(e.key);
    }
    if (e.key === "*") {
        handleOperator("x");
    }
    if (e.key === ".") {
        addDecimal();
    }
}