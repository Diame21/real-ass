let count = 70
let countDownDis = document.getElementById("countdown")
let startButton = document.getElementById("start")
let pauseButton = document.getElementById("stop")
let continueButton = document.getElementById("continued")
let resetButton = document.getElementById("reset")

continueButton.style.display = "none"
startButton.addEventListener('click', () => {
    let counting = setInterval(() => {
        count--
        let countLength = countDownDis.textContent.length
        console.log(countLength);
        if (count < 10) {
            countDownDis.textContent = `0${count}`
        }
        else {
            countDownDis.textContent = count
        }

        if (count < 0) {
            clearInterval(counting)
            countDownDis.textContent = "Time's up"
        }

    }, 1000)
    startButton.style.display = "none"

    pauseButton.addEventListener("click", () => {
        clearInterval(counting)
        countDownDis.textContent = "Paused"
        startButton.style.display = "none"
        continueButton.style.display = "inline"
        pauseButton.style.display = "none"
    })
})
resetButton.addEventListener('click', () => {
    counting = setInterval(() => {
        // clearInterval(counting)
        countDownDis.textContent = '70'
    });
    startButton.style.display = "inline"
    pauseButton.style.display = "inline"
    resetButton.style.display = "inline"
    continueButton.style.display = "none"
},0)

continueButton.addEventListener("click", () => {
    if (countDownDis.textContent = "Paused") {

        let counting = setInterval(() => {
            count--
            let countLength = countDownDis.textContent.length
            console.log(countLength);
            if (count < 10) {
                countDownDis.textContent = `0${count}`
            }
            else {
                countDownDis.textContent = count
            }

            if (count < 0) {
                clearInterval(counting)
                countDownDis.textContent = "Time's up"
            }

        }, 1000)
    }
    countDownDis.textContent = "continue"
    startButton.style.display = "none"
    continueButton.style.display = "none"
    pauseButton.style.display = "inline-block"
    
})

