let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operation = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = '';
            operation = null;
            display.value = '';
        } else if (value === '⌫') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (value === '=' && operation !== null) {
            let result = calculate();
            display.value = result;
            previousNumber = '';
            currentNumber = result.toString();
            operation = null;
        } else if (value === '+' || value === '-' || value === '×' || value === '÷') {
            if (currentNumber !== '') {
                previousNumber = currentNumber;
                currentNumber = '';
            }
            operation = value;
            display.value = previousNumber + ' ' + operation;
        } else {
            currentNumber += value;
            display.value = (operation ? previousNumber + ' ' + operation + ' ' : '') + currentNumber;
        }
    });
});

function calculate() {
    let num1 = parseFloat(previousNumber);
    let num2 = parseFloat(currentNumber);

    if (operation === '+') return num1 + num2;
    if (operation === '-') return num1 - num2;
    if (operation === '×') return num1 * num2;
    if (operation === '÷') return num1 / num2;
}
