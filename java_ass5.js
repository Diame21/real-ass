// ASSIGNMENT 
let now = new Date()

let min = now.getMinutes()
let sec = now.getSeconds()
let hrs = now.getHours()
let getName = prompt('WHAT IS YOUR NAME PLEASE?')
getName = getName.trim()

let greeting1 = 'HI,GOOD MORNING '
let greeting2 = 'HI,GOOD AFTERNOON '
let greeting3 = 'HI,GOOD EVENING '

let getTime1 = hrs >= 1 && hrs < 12
let getTime2 = hrs >= 12 && hrs <= 16
let getTime3 = hrs >= 17 && hrs <= 24

if(getTime1 && getName !== ''){
    alert(greeting1 + getName)
    alert(`The time is ${hrs}:${min}:${sec}`)
}
else if(getTime2 && getName !== ''){
    alert(greeting2 + getName)
    alert(`The time is ${hrs}:${min}:${sec}`)
}
else if(getTime3 && getName !== ''){
    alert(greeting3 + getName)
    alert(`The time is ${hrs}:${min}:${sec}`)
}
else{
    alert('Please Input Your Name')
}




