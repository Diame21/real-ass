function answer() {
    let num1 = parseFloat(document.getElementById('num1').value.trim())
    let num2 = parseFloat(document.getElementById('num2').value.trim())
    let operator = document.getElementById('operator').value
    let result;
    if (num1 === "") {
        result = "Input can't be empty!"
    }
    else if (isNaN(num1) || isNaN(num2)) {
        result = "Input must be a number"
    }
    else {
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
                result = num2 !== 0 ? num1 / num2 : "Cannot be divided by zero"
                break;
            default:
                result = "invalid operator";
        }
    }

    document.getElementById("calculate").textContent = "Result: " + result;
}




// Age retirement 
function Retirement() {
    const age = parseInt(document.getElementById("age").value);
    let retirementAge = 60;
    let yearsLeft = retirementAge - age;
    let yearsdelayed = age - retirementAge
    let message;

    if (age < retirementAge) {
        result = (`You're ${age} years now and you have ${ yearsLeft } years left to retire.`)
    }
    else if(age === 60){
        result = ("You would be retiring this year")
    }
    else if (age > retirementAge){
        result = (`You're ${age} years of age and you should have retired ${yearsdelayed} years ago`)
    }
    else {
        result = ("Input a number")
      }

    document.getElementById("retireResult").textContent = result;
}





