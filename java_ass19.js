//    function taskCountDown() {
//       let timeDiff = (endTheTime - startTheTime) * 60 * 60

//       if (timeDiff > 0) {
//          function timeCount(){
//             timeDiff--

//             let theHr = Math.floor(timeDiff / (60 * 60))
//             let theMns = Math.floor((timeDiff % (60 * 60)) / 60)
//             let theSe = Math.floor((timeDiff % 60))

//             theHr < 10 ? theHr = `0${theHr}` : theHr = theHr
//             theMns < 10 ? theMns = `0${theMns}` : theMns = theMns
//             theSe < 10 ? theSe = `0${theSe}` : theSe = theSe

//             let taskTime = `${theHr}Hr : ${theMns}Mns : ${theSe}Sec`

//             timeDiv.innerText = taskTime
//          }

//          countDownow = setInterval(() => {
//             timeCount()
//             if (timeDiff == 0) {
//                clearInterval(countDownow)
//                timeDiv.innerText = "Task Completed"
//             }
//          }, 1000);

//          //function to complete the task
//          markIcon.addEventListener("click", () =>{
//             clearInterval(countDownow)
//             textDiv.style.textDecoration = "line-through"
//             timeDiv.innerText = "Task Completed"
//          })
//       }
//       else{
//          timeDiv.innerText = "time incorrect"
//       }
//    }

//    taskCountDown()









// TODO LIST COMPLETE APP
let taskTitle = document.getElementById("tasktitle")
let startTime = document.getElementById("starttime")
let endTime = document.getElementById("endtime")
let addTaskButton = document.getElementById("addtask")
let theUl = document.getElementById("myul")

let trashIconClass = ["bi", "bi-trash"]
let checkIconClass = ["bi", "bi-check"]
let fillIconClass = ["bi", "bi-pen-fill"]


// function that creating the list and it's item
function createListFunc(task, startTheTime, endTheTime) {
    //creates the li, div and icons
    let createdList = document.createElement("li")
    let textDiv = document.createElement("div")
    let timeDiv = document.createElement("div")
    let iconDiv = document.createElement("div")

    // creates icons
    let trashIcon = document.createElement("i")
    let checkIcon = document.createElement("i")
    let fillIcon = document.createElement("i")

    // adds a class to icons here
    trashIcon.classList = trashIconClass.join(" ")
    checkIcon.classList = checkIconClass.join(" ")
    fillIcon.classList = fillIconClass.join(" ")

    //adds classes to the divs
    textDiv.classList = "task-name"
    timeDiv.classList = "duration"
    iconDiv.classList = "manage"

    // added text gotten from the input
    textDiv.innerText = task

    iconDiv.appendChild(trashIcon)
    iconDiv.appendChild(checkIcon)

    // ++ 
    function taskCountDown() {
        let counting = (endTheTime - startTheTime) * 60 * 60

        if (counting > 0) {
            function timeCount() {
                counting--

                let theHr = Math.floor(counting / (60 * 60))
                let theMns = Math.floor((counting % (60 * 60)) / 60)
                let theSe = Math.floor((counting % 60))
                let taskTime = `${theHr}Hr : ${theMns}Mns : ${theSe}Sec`

                // theHr < 10 ? theHr = `0${theHr}` : theHr = theHr
                // theMns < 10 ? theMns = `0${theMns}` : theMns = theMns
                // theSe < 10 ? theSe = `0${theSe}` : theSe = theSe
                timeDiv.innerText = taskTime
            }

            createdList.appendChild(textDiv)
            createdList.appendChild(timeDiv)
            createdList.appendChild(iconDiv)

            // adds the list to the ul 
            theUl.appendChild(createdList)

            // function to delete the list
            trashIcon.addEventListener("click", () => {
                let permit = confirm("Do you want to delete the task?")

                if (permit) {
                    theUl.removeChild(createdList)
                }
            })
            countDownow = setInterval(() => {
                timeCount()
                if (counting == 0) {
                    clearInterval(countDownow)
                    timeDiv.innerText = "Time's up,task Completed"
                }
            }, 1000);

            //function to complete the task
            checkIcon.addEventListener("click", () => {
                clearInterval(countDownow)
                // textDiv.style.textDecoration = "line-through"
                timeDiv.innerText = "Time's up,task Completed"
            })
        }
        else {
            timeDiv.innerText = "time incorrect"
        }
    }

    taskCountDown()


}

addTaskButton.addEventListener("click", () => {
    let taskValue = taskTitle.value
    let starttime = startTime.value.replace(":", ".")
    let endtime = endTime.value.replace(":", ".")


    if (taskTitle.value == "") {
        taskTitle.style.border = "1px solid red"
        taskTitle.style.background = "orchid"
        taskTitle.style.color = "black"
        taskTitle.focus()
        return false
    }
    if (startTime.value == "") {
        startTime.style.border = "1px solid red"
        startTime.style.background = "orchid"
        startTime.focus()
        return false
    }
    if (endTime.value == "") {
        endTime.style.border = "1px solid red"
        endTime.style.background = "orchid"
        endTime.focus()

        return false
    }
    else {
        createListFunc(taskValue, starttime, endtime)
        taskTitle.value = ""
        startTime.value = ""
        endTime.value = ""
    }
    return true
})

