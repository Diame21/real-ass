let passwordCharacter = "123456789!ygsdfhuHSAGCGUZH.()%isbijhjsjBHSC:@93uy7t6fadghbj#ksd"
let passwordBut = document.getElementById("generatePassword")
let getList = document.getElementById("theUl")
let getLength = document.getElementById("getlen")

const generatePassword = (len) => {
    let passwordGenerated = ''
    let passwordLength = passwordCharacter.length
    // console.log(passwordLength);

    for (let b = 0; b < len; b++) {
        machineCharacter = Math.floor(Math.random() * passwordLength)
        passwordGenerated += passwordCharacter[machineCharacter]
    }

    //adding the generated password to a list
    getList.innerHTML += `<li>${passwordGenerated}</li>`
    console.log(passwordGenerated);
}
passwordBut.addEventListener('click', (len) =>{
    generatePassword(getLength.value)

})


// color generator 
let button = document.getElementById("generateBtn");
let box = document.getElementById("colorBox");
let box2 = document.getElementById("but")
const generateColor = () => {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener("click", () => {
    const color = generateColor();
    box.style.backgroundColor = color;
    box.textContent = `color: ${color}`
})

// box2.removeEventListener("click",() => {
//     button.addEventListener("click", () => {
    
// })
// } )

const styling = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    padding: "20px"
}
const boxStyling = {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
    padding: "30px",
    marginTop: "30px"
}
Object.assign(box.style, boxStyling)
Object.assign(button.style, styling)