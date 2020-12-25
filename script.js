const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    };
    Function inputDigit(digit) {
    Const { displayValue, waitingForSecondOperand } = calculator;
    If (waitingForSecondOperand === true) {
    Calculator.displayValue = digit;
    Calculator.waitingForSecondOperand = false;
    } else {
    Calculator.displayValue=displayValue === ‘0’ ? digit : displayValue+digit;
    }
    }
    Function inputDecimal(dot) {
    If (calculator.waitingForSecondOperand === true) {
    Calculator.displayValue = “0.”
    Calculator.waitingForSecondOperand = false;
    Return
    }
    If (!calculator.displayValue.includes(dot)) {
    Calculator.displayValue += dot;
    }
    }
    Function handleOperator(nextOperator) {
    Const { firstOperand, displayValue, operator } = calculator
    Const inputValue  = parseFloat(displayValue);
    If(operator && calculator.waitingForSecondOperand) {
    Calculator.operator = nextOperator;
    Return;
    }
    If (firstOperand == null && ! isNaN(inputValue)) {
    Calculator.firstOperand = inputValue;
    } else if (operator) {
    Const result = calculate(firstOperand, inputValue, operator);
    Calculator.displayValue = ‘${parseFloat(result.toFixed(7))}’;
    Calculator.firstOperand = result;
    }
    Calculator.waitingForSecondOperand = true;
    Calculator.opreator = nextOperator;
    }
    Function calculate(firstOperand, secondOperand, operator) {
    If (operator === ‘+’) {
    Return firstOperand + secondOperand;
    } else if (operator === ‘-‘) {
    Return firstOperand – secondOperand;
    } else if (operator ===’*’) {
    Return firstoperand * secondOperand;
    } else if (operator === ‘/’) {
    Return firstOperand / secondOperand;
    }
    Return secondOperand;
    }
    Function resetCalculator () {
    Calculator.displayValue = ‘0’;
    Calculator.firstOperand = null;
    Calculator.waitingForSecondOperand = false;
    Calculator.operator = null;
    }
//sinus
function sin(sinus)
var radians = (sinus * Math.PI)/100;
return Math.sin(radians);
}
const sinus = document.querySelector(',sin');

sinus.addEventListener(',click',function(){
    const valueScreen = calculator.displayValue;
    console.log(valueScreen);
    const result = sin(valueScreen);

    resetCalculator();
    inputDigit(result.toFixed(2));

    stopPropagnation();
})

//cosinus
function cos(cosinus)
var radians = (cosinus * Math.PI)/100;
return Math.cos(radians);
}
const cosinus= document.querySelector(',cos');

sinus.addEventListener(',click',function(){
    const valueScreen = calculator.displayValue;
    console.log(valueScreen);
    const result = cos(valueScreen);

    resetCalculator();
    inputDigit(result.toFixed(2));

    stopPropagnation();
})

//tangen
function tan(tangen)
var radians = (tangen * Math.PI)/100;
return Math.sin(radians);
}
const tangen = document.querySelector(',tan');

sinus.addEventListener(',click',function(){
    const valueScreen = calculator.displayValue;
    console.log(valueScreen);
    const result = tan(valueScreen);

    resetCalculator();
    inputDigit(result.toFixed(2));

    stopPropagnation();
})

    Function updateDisplay() {
    Const display = document.querySelector(‘.calculator-screen’);
    Display.value = calculator.displayValue;
    }
    updateDisplay();
    const keys = document.querySelector(‘.calculator-keys’);
    keys.addEventListener(‘click’, event => {
    const { target } = event;
    const { value} = target;
    if (!target.matches(‘button’)) {
    return;
    }
    Switch (value) {
    Case ‘+’;
    Case ‘-‘;
    Case ‘*’;
    Case ‘/’;
    Case ‘=’;
    handleOperator(value);
    break;
    case’.’:
    inputDecimal (value);
    break;
    case ‘all-clear’:
    resetCalculator();
    break;
    default;
    if(Number.isInteger(parseFloat(value))) {
    inputDigit(value);
    }
    }
    updateDisplay();
    });