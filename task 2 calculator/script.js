// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let firstOperand = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/', '%', 'mod'].includes(value)) {
            operator = value;
            firstOperand = currentNumber;
            currentNumber = '';
        } else if (value === 'C') {
            clear();
        } else if (value === 'DEL') {
            deleteNumber();
        } else {
            currentNumber += value;
        }

        updateDisplay();
    });
});

function calculate() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentNumber);

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = (num1 / 100) * num2;
            break;
        case 'mod':
            result = num1 % num2;
            break;
        default:
            result = 0;
    }

    currentNumber = result.toString();
    firstOperand = '';
    operator = '';
}

function clear() {
    currentNumber = '';
    firstOperand = '';
    operator = '';
}

function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);
}

function updateDisplay() {
    if (firstOperand !== '') {
        display.value = firstOperand + ' ' + operator + ' ' + currentNumber;
    } else {
        display.value = currentNumber;
    }
}