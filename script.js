const calculatorScreen = document.querySelector('.calculator-screen')
let prevNumber = ''
let calculationOperator = ''
let currentNumber = 0


const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll('.numbers')

const inputNumber = (number) => {
    if (currentNumber == '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
});

const operators = document.querySelectorAll('.operator')

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = (parseFloat(prevNumber) * 10 + parseFloat(currentNumber) * 10) / 10
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            result = parseFloat(currentNumber) / 100
            break;
        default:
            result = currentNumber
            break;
    }

    currentNumber = result.toString()
    calculationOperator = ''
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
    console.log(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }

    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const percentage = document.querySelector('.percentage')

calculatePercentage = () => {
    calculationOperator = '%'
    calculate()
}

percentage.addEventListener('click', () => {
    calculatePercentage()
    updateScreen(currentNumber)
})

