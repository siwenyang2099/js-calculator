const display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

const appendNumber = (number) => {
    if (currentOperand.includes('.') && number === '.') return;
    currentOperand += number;
    updateDisplay();
};

const updateDisplay = () => {
    display.innerText = `${previousOperand} ${operation || ''} ${currentOperand}`;
};

const clearDisplay = () => {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
};

const chooseOperation = (op) => {
    if (currentOperand === '') return;
    if (previousOperand !== '') compute();
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
};

const compute = () => {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = prev / current; break;
        default: return;
    }
    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
};
