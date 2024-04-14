function calculate() {
    // Get input values
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;
    
    // Logical part
    let result;
   
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        result = num1 / num2;
    } else {
        document.getElementById('result').innerHTML = 'Error: Invalid operation';
        return;
    }

    // Display result
    document.getElementById('result').className = 'alert alert-success';
    document.getElementById('result').innerHTML = `Result of (${num1}  ${operation} ${num2}) = ${result}`;
}
