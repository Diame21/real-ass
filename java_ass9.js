const calculate = document.getElementById("calculate")
const Repay = () => {
    const loanAmount = Number(document.getElementById("loanAmount").value);
    const getMonths = Number(document.getElementById("months").value);
    
    // A monthlyRIO of 15% = 0.15
    const monthlyRIO = 0.15
    const monthlyRepayment = loanAmount * monthlyRIO;
    const totalRepayment = loanAmount + (monthlyRepayment * getMonths)

    if (isNaN(loanAmount) || loanAmount === "" || isNaN(getMonths)) {
        calculate.textContent = 'Please,input a valid amount'
        return;
    }  
    else if(getMonths === 1){
        const totalAmount = loanAmount + monthlyRepayment 
        calculate.textContent = `You're expected to return ${totalAmount} in ${getMonths} month`
    }  
    else if(getMonths === 2){
        const totalAmount = totalRepayment
        const newTotalAmount = totalAmount / getMonths
        calculate.textContent = `You're expected to return ${totalAmount} in ${getMonths} month and installmentally pay ${newTotalAmount} each month till ${getMonths} months is completed`
    }  
    else if(getMonths === 3){
        const totalAmount = totalRepayment
        const newTotalAmount = totalAmount / getMonths
        calculate.textContent = `You're expected to return ${totalAmount} in ${getMonths} month and installmentally pay ${newTotalAmount} each month till ${getMonths} months is completed`
    }  
    else if(getMonths === 4){
        const totalAmount = totalRepayment
        const newTotalAmount = totalAmount / getMonths
        calculate.textContent = `You're expected to return ${totalAmount} in ${getMonths} month and installmentally pay ${newTotalAmount} each month till ${getMonths} months is completed`
    }  
    else if(getMonths === 5){
        const totalAmount = totalRepayment
        const newTotalAmount = totalAmount / getMonths
        calculate.textContent = `You're expected to return ${totalAmount} in ${getMonths} month and installmentally pay ${newTotalAmount} each month till ${getMonths} months is completed`
    }  
}
