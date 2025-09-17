// AGE CHECKER 
let userAge = prompt("INPUT YOUR AGE")
userAge = parseInt(userAge)
let yearsLeft = 18 - userAge

 if (userAge >= 18){
    alert(`You're ${userAge} years old and you're eligible to drive`)
}
else if (yearsLeft){
    alert(`You're ineligible to drive,you've ${yearsLeft} years left before you can drive.`)
}
else{
    alert("Input a correct age")
}


// GRADER CHECKER 
let score = prompt("ENTER YOUR SCORE:")
score = parseInt(score)   

if (score >= 80 && score <=100){
    alert('Grade: A');
}
else if (score >= 70 && score < 80){
    alert('Grade: B')
}
else if (score >= 60 && score < 70){
    alert('Grade: C')
}
else if (score >= 50 && score < 60){
    alert('Grade: D')
}
else if (score >= 0 && score < 50){
    alert('Grade: F')
}
else{
    alert("Invalid score entered")
}
