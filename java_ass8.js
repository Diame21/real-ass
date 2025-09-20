function answer() {
    let num1 = parseFloat(document.getElementById('num1').value.trim())
    let num2 = parseFloat(document.getElementById('num2').value.trim())
    let operator = document.getElementById('operator').value
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
            result = num1 / num2 
            break;
        default:
            result = "invalid operator";
    }
    if (num1 == ""){
        result = "Input a number"
    }
    else if(isNaN(num1) || isNaN(num2)){
        result = 'Input a number'

    }
    document.getElementById("calculate").textContent = "Result: " + result;
}



