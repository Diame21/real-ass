// Getting th first p by their tagname 
let first = document.querySelector("p")
console.log(first)

// To get each p by their Id and setting class to each p

let getFirst = document.querySelector("#p-1")
getFirst.className = "firstaragraph"
console.log(getFirst);
let getSecond = document.querySelector("#p-2")
getSecond.className = "secondparagraph"
console.log(getSecond);
let getThird = document.querySelector("#p-3")
getThird.className = "thirdparagraph"
console.log(getThird);
let getFourth = document.querySelector("#p-4")
getFourth.className = "fourthparagraph"
console.log(getFourth)

let getall = document.querySelectorAll("p")
console.log(getall)