const mathematics = () => {
    let firstValue =prompt('Write your first value:').trim()
    let selector =prompt('Write your operator(-, +, *, /)')
    let secondValue =('Write your second value:').trim()

if(isNaN(firstValue) || isNaN(secondValue)){
    alert('One of your value is not a number')
}
else if(firstValue === "" || secondValue === ""){
    alert("One of your value is empty")
}
else if(selector === "+"){
    let sum = +firstValue + +secondValue
    alert(`The sum of ${firstValue} & ${secondValue} = ${sum}`)
    console.log(firstValue)
    console.log(secondValue)
}
else if(selector === "*"){
    let sum = firstValue * secondValue
    alert(`The sum of ${firstValue} & ${secondValue} = ${sum}`)
}
else if(selector === "-"){
    let sum = firstValue - secondValue
    alert(`The sum of ${firstValue} & ${secondValue} = ${sum}`)
}
else if(selector === "/"){
    let sum = firstValue / secondValue
    alert(`The sum of ${firstValue} & ${secondValue} = ${sum}`)
}
else(
    alert('Input a correct value')
)
}