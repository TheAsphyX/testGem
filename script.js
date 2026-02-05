document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelector('.buttons');

    let currentInput = '';
    let operator = null;
    let previousInput = '';
    let resetDisplay = false;

    buttons.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.classList.contains('btn')) return;

        if (target.classList.contains('number') || target.classList.contains('decimal')) {
            handleNumber(target.dataset.value);
        } else if (target.classList.contains('operator')) {
            handleOperator(target.dataset.value);
        } else if (target.classList.contains('equals')) {
            handleEquals();
        } else if (target.classList.contains('clear')) {
            handleClear();
        }
        updateDisplay();
    });

    const handleNumber = (number) => {
        if (resetDisplay) {
            currentInput = number;
            resetDisplay = false;
        } else {
            if (number === '.' && currentInput.includes('.')) return;
            currentInput += number;
        }
    };

    const handleOperator = (nextOperator) => {
        if (currentInput === '' && previousInput === '') return;

        if (previousInput === '') {
            previousInput = currentInput;
        } else if (currentInput !== '') {
            previousInput = calculate(previousInput, currentInput, operator);
        }

        operator = nextOperator;
        currentInput = '';
        resetDisplay = true;
    };

    const handleEquals = () => {
        if (previousInput === '' || currentInput === '' || operator === null) return;
        currentInput = calculate(previousInput, currentInput, operator);
        previousInput = '';
        operator = null;
        resetDisplay = true;
    };

    const handleClear = () => {
        currentInput = '';
        operator = null;
        previousInput = '';
        resetDisplay = false;
        display.textContent = '0';
    };

    const calculate = (num1, num2, op) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        if (isNaN(a) || isNaN(b)) return '';

        switch (op) {
            case '+': return (a + b).toString();
            case '-': return (a - b).toString();
            case '*': return (a * b).toString();
            case '/': return (a / b).toString();
            default: return '';
        }
    };

    const updateDisplay = () => {
        display.textContent = currentInput === '' ? (previousInput === '' ? '0' : previousInput) : currentInput;
    };
});
