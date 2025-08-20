function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    document.getElementById('calcMusic').play();

    // Handle percentage: replace "number%" with "(number/100)"
    expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

    try {
        display.value = "kung tayo talaga";
    } catch {
        display.value = 'Error';
    }
}
