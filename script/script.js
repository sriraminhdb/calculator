document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const keys = document.querySelector('.keys');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    const updateDisplay = (value) => {
        display.value = value;
    };

    keys.addEventListener('click', (e) => {
        if (e.target.classList.contains('keyNum')) {
            currentInput += e.target.textContent;
            updateDisplay(currentInput);
        }
    });

    keys.addEventListener('click', (e) => {
        if (e.target.id === 'keyAdd' || e.target.id === 'keySubtract' || e.target.id === 'keyMultiply' || e.target.id === 'keyDivide') {
            if (currentInput === '') return;
            previousInput = currentInput;
            operator = e.target.textContent;
            currentInput = '';
        }
    });

    document.getElementById('keyClear').addEventListener('click', () => {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('');
    });

    document.getElementById('keyEqual').addEventListener('click', () => {
        if (previousInput === '' || currentInput === '') return;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case 'X':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                if (currentInput === '0') {
                    result = 'Error';
                } else {
                    result = parseFloat(previousInput) / parseFloat(currentInput);
                }
                break;
            default:
                return;
        }
        updateDisplay(result);
        currentInput = result.toString(); 
        previousInput = '';
        operator = '';
    });
});
