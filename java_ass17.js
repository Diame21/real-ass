
let bookride = document.getElementById("content")
let form = document.getElementById("form")
let fromWhere = document.getElementById("from")
let toWhere = document.getElementById("to")
let cancelride = document.getElementById("cancelride")
let startride = document.getElementById("startride")
let infoBox = document.getElementById("infoBox")
let Info = document.getElementById("Info")
let payment = document.getElementById("payment")


let stopWatch = document.getElementById("stopWatch")
let wish = document.getElementById("wish")
let setMin = document.getElementById("mins")
let setSec = document.getElementById("sec")
let continueRide = document.getElementById("continue")
let pauseCount = document.getElementById("pauseCount")
let stopCount = document.getElementById("stopCount")
let receiptBox = document.getElementById("receiptBox")
let timeAcct = document.getElementById("time")
let timeFare = document.getElementById("timefare")
let busFare = document.getElementById("busfare")
let tax = document.getElementById("tax")
let totalPayment = document.getElementById("totalpayment")
let textPattern = /^[0-9a-zA-Z]+$/ 



// DOM 
let showStyle = {
    visibility: "visible",
    position: "relative"
}
let HideStyle = {
    visibility: "hidden",
    position: "absolute"
}
let inputError = {
    border: "1px solid white",
    background: "red"
    
}

// form validation for booking a ride
form.addEventListener("submit", (event) =>{
    event.preventDefault()

    let allcorrect = true

    if(!fromWhere.value.match(textPattern)){
        Object.assign(fromWhere.style, inputError)
        allcorrect = false
    }
    if(!toWhere.value.match(textPattern)){
        Object.assign(toWhere.style, inputError)
        allcorrect = false
    }

    if(allcorrect == true){
        Object.assign(bookride.style, HideStyle)
        
        Info.innerText = ` You are requesting a ride from ${fromWhere.value} to
         ${toWhere.value}. Please confirm your ride`
        Object.assign(infoBox.style, showStyle)
    }
})

cancelride.addEventListener("click", () =>{
    fromWhere.value = ""
    toWhere.value = ""
    
    Object.assign(bookride.style, showStyle)
    
    Object.assign(infoBox.style, HideStyle)

})


// RIDE STARTS HERE
let timeInSeconds = 0 
const timeFormat = () =>{

    let minutes = Math.floor(timeInSeconds/60) 
    let seconds = timeInSeconds %  60 

    minutes<10 ? setMin.innerText = `0${minutes}` : setMin.innerText = minutes
    seconds<10 ? setSec.innerText = `0${seconds}` : setSec.innerText = seconds
}

// RIDE STARTS COUNTING FROM HERE
const startCounting = () =>{
    countDownnow = setInterval (() =>{
        timeInSeconds ++
        timeFormat()
    }, 100)
    // to hide the start
    Object.assign(infoBox.style, HideStyle) 
    // shows the count down
    Object.assign(stopWatch.style,showStyle) 
    // To ask if the ride should continue
    Object.assign(wish.style, HideStyle)

    continueRide.style.display = "none"
    pauseCount.style.display = "inline"
    stopCount.style.display = "inline"
    //pause the function
    pauseCount.addEventListener("click", () => {
        showStyle.color = "white"
        clearInterval(countDownnow)
        continueRide.style.display = "inline"
        pauseCount.style.display = "none"

        wish.innerText = "Do you wish to Continue Ride?"
        Object.assign(wish.style, showStyle )
    })
    // stop the ride funtion
    stopCount.addEventListener("click", () =>{
        clearInterval(countDownnow)
        timeInSeconds = 0
        
        continueRide.innerText = "START AGAIN"
        continueRide.style.display = "inline"

        pauseCount.style.display = "none"

        let totaltimeSpent = `${setMin.innerText} : ${setSec.innerText}`
        let timeFee = 50 * parseInt(setMin.innerText)
        // let busFee = 600
        let busFee  = parseInt(timeFee * setMin.innerText)
        let taxFee = parseInt((timeFee + busFee) / 10)
        let totalFee = timeFee + busFee + taxFee
        payment.addEventListener("click", () => {
            alert('Payment successful! Thank you for riding with us')
        })
        timeAcct.innerText = totaltimeSpent
        timeFare.innerText = timeFee
        busFare.innerText = busFee
        tax.innerText = taxFee
        totalPayment.innerText = totalFee

        stopWatch.style.display = "none"
        Object.assign(receiptBox.style, showStyle)
    })
}
// this is to start the Ride at the beginning
startride.addEventListener("click", startCounting) 
// this is to continue the ride 
continueRide.addEventListener("click", startCounting)