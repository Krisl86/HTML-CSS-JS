function display(inputValue) {
    document.querySelector('.display').value += inputValue;
}

function calculate() {
    expression = document.querySelector('.display').value
    answer = eval(expression)
    document.querySelector('.display').value = answer
}

function clearDisplay() {
    document.querySelector('.display').value = ""
}

function backSpace() {
    expression = document.querySelector('.display').value.slice(0, -1)
    document.querySelector('.display').value = expression
}