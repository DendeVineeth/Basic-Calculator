let input = "";
let display = document.getElementById("display");

function appendInput(value) {
    input += value;
    display.innerText = input;
}

function clearDisplay() {
    input = "";
    display.innerText = "0";
}

function calculateResult() {
    try {
        input = eval(input).toString();
        display.innerText = input;
    } catch (error) {
        display.innerText = "Error";
    }
}
