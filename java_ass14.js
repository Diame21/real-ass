// const usernameRegex = /^[a-zA-Z0-9!.@_-]{7,}$/;
// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
// const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}/

// let form = document.getElementById('form')
// let formUsername = document.getElementById('username')
// let formEmail = document.getElementById('email')
// let formPassword = document.getElementById('password')
// let usernameError = document.getElementById('usernameError')
// let emailError = document.getElementById('emailError')
// let passwordError = document.getElementById('passwordError')
// const button = document.getElementById("myBtn");
// const submitted = document.getElementById("submitted");
// const formAll = document.getElementById("formAll")
// const formSubmitted = document.getElementById("formSubmitted")
// const remove = document.getElementById("return")
// formSubmitted.style.display = "none";

// // let check = true
// form.addEventListener('submit', (k) => {
//     k.preventDefault()
//     // username 
//     if(formUsername === ""){
//         usernameError.textContent = "required"
//     }
//     else if (!usernameRegex.test(formUsername.value.trim())) {
//         usernameError.textContent = 'Username must be at least 6 characters'
//     }
//     else {
//         usernameError.textContent = ""
//     }
//     // email 
//     if(formEmail === ""){
//         emailError.textContent = "required"
//     }
//     else if (!emailRegex.test(formEmail.value)) {
//         emailError.textContent = "email must contain '@' and a domain"
//     }
//     else {
//         emailError.textContent = ""

//     }
//     // password 
//     if(formPassword === ""){
//         passwordError.textContent = "required"
//     }
//     else if (!passwordRegex.test(formPassword.value)) {
//         passwordError.textContent = 'password must be at least 7 characters,'
//     }
//     else {
//  form.style.display = "none"
//         formAll.style.display = "none"
//         const worall = {
//             width: "100%",
//             maxWidth: "600px",
//             backgroundColor: "white",
//             boxShadow: "0px 0px 5px 1px rgb(210, 209, 209)",
//             marginTop:"130px",
//             height:"400px",
//         }
//         formSubmitted.style.display = "block"
//         submitted.style.display = ""
//         Object.assign(formSubmitted.style, worall)
//     }
// })
// const errorStyling = {
//     color:"rgb(255, 0, 90)",
// }
// const usernameErrorStyling = {
//     color:"rgb(255, 0, 0)",
// }
// const passwordErrorStyling = {
//     color:"rgb(255, 0, 0)",
// }
// // const overall = {
// //     width: "100%",
// //     maxWidth: "600px",
// //     backgroundColor: "white",
// //     boxShadow: "0px 0px 5px 1px rgb(210, 209, 209)",
// //     marginTop:"130px",
// // }
// Object.assign(formAll.style, overall)
// Object.assign(error.style, errorStyling)
// Object.assign(usernameError.style, usernameErrorStyling)
// Object.assign(passwordError.style, passwordErrorStyling)
// const  returnToInput = () => {
//     form.style.display = "block"
//     formSubmitted.style.display = "none"
// }
// remove.addEventListener("click", () =>{
//     formSubmitted.style.display = "none"
//     formAll.style.display = "block"
//     form.style.display = "block"

// })    



const userName = document.getElementById("userName");
const email = document.getElementById("email");
const passWord = document.getElementById("passWord");
let form = document.getElementById("form");
let smallLetter = document.getElementById('small')
let capitalLetter = document.getElementById('caps')
let number = document.getElementById('num')
let symbol = document.getElementById('syms')


const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const checkUsername = /^[a-zA-Z0-9!.@_-]{7,}$/;
const checkPassWord = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}/
const smallLetterRegex = /[a-z]/
const capitalLetterRegex = /[A-Z]/
const numberRegex = /[0-9]/
const symbolRegex = /[@$!%*?&]/
const error = document.getElementById("errorEmail");
const errorUserName = document.getElementById("errorUserName");
const errorPassWord = document.getElementById("errorPassWord");
const button = document.getElementById("myBtn");
const submitted = document.getElementById("submitted");
const formAll = document.getElementById("formAll")
const formSubmitted = document.getElementById("formSubmitted")
const remove = document.getElementById("goBack")
formSubmitted.style.display = "none";

form.addEventListener("submit", (k) => {
    k.preventDefault();
    //email
    if (email.value === "") {
        error.textContent = " required";
    }
    else if (!checkEmail.test(email.value.trim())) {
        error.textContent = "email must contain '@' and a domain";
    }
    else {
        error.textContent = ""
    }
    //userName
    if (userName.value === "") {
        errorUserName.textContent = " required";
    }
    else if (!checkUsername.test(userName.value.trim())) {
        errorUserName.textContent = "Username must be at least 6 characters"
    }
    else {
        errorUserName.textContent = ""
    }
    //password
    if (passWord.value === "") {
        errorPassWord.textContent = " required";
    }
    else if (!checkPassWord.test(passWord.value.trim())) {
        errorPassWord.textContent = "password must be at least 7 character, include uppercase, lowerCase,Number and special character(@#)"
    }

    else {
        if (checkEmail.test(email.value.trim()) && checkUsername.test(userName.value.trim())) {
            form.style.display = "none"
            formAll.style.display = "none"
            const worall = {
                width: "100%",
                maxWidth: "600px",
                backgroundColor: "white",
                boxShadow: "0px 0px 5px 1px rgb(210, 209, 209)",
                marginTop: "130px",
                height: "400px",
            }
            formSubmitted.style.display = "block"
            submitted.style.display = ""
            Object.assign(formSubmitted.style, worall)

        }

    }

})
const errorStyling = {
    color: "rgb(255, 0, 90)",
}
const errorUserNameStyling = {
    color: "rgb(255, 0, 0)",
}
const errorPassWordStyling = {
    color: "rgb(255, 0, 0)",
}
const overall = {
    // width: "100%",
    maxWidth: "600px",
    backgroundColor: "white",
    boxShadow: "0px 0px 5px 1px rgb(210, 209, 209)",
    // marginTop:"130px",
    // height : "100%",
    height: "100vh",

    // marginLeft:"300px",
    margin: "auto"
}
Object.assign(formAll.style, overall)
Object.assign(error.style, errorStyling)
Object.assign(errorUserName.style, errorUserNameStyling)
Object.assign(errorPassWord.style, errorPassWordStyling)
const gobackToInput = () => {
    form.style.display = "block"
    formSubmitted.style.display = "none"
}
remove.addEventListener("click", () => {
    formSubmitted.style.display = "none"
    formAll.style.display = "block"
    form.style.display = "block"
    email.value = ""
    userName.value = ""
    passWord.value = ""
    smallLetter.style.color = "red"
    capitalLetter.style.color = "red"
    number.style.color = "red"
    symbol.style.color = "red"
    errorPassWord.style.display ="none"
    
})
errorPassWord.style.display ="block"
smallLetter.style.color = "red"
capitalLetter.style.color = "red"
number.style.color = "red"
symbol.style.color = "red"
passWord.addEventListener('input', () => {
    if (passWord.value.match(smallLetterRegex)) {
        smallLetter.style.color = 'green'
    }
    else {
        smallLetter.style.color = 'red'
    }
    if (passWord.value.match(capitalLetterRegex)) {
        capitalLetter.style.color = 'green'
    }
    else {
        capitalLetter.style.color = 'red'
    }
    if (passWord.value.match(numberRegex)) {
        number.style.color = 'green'
    }
    else {
        number.style.color = 'red'
    }
    if (passWord.value.match(symbolRegex)) {
        symbol.style.color = 'green'
    }
    else {
        symbol.style.color = 'red'
    }
})
