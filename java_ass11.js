const calculate = document.getElementById("answer");
const button1 = document.getElementById("myBtn1");
const button2 = document.getElementById("myBtn2");
const userInput = document.getElementById("userInput");
const div = document.getElementById("all")
const div2 = document.getElementById("all2")

const minNum = 10;
const maxNum = 25;
const maxAttempts = 6;

let machineGuessNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let attempts = 0;

console.log(machineGuessNumber);

button2.style.display = "none";

const guess = () => {
  const getUserInput = userInput.value.trim();

  if (getUserInput === "") {
    calculate.textContent = "Your input is not meant to be  empty, Please enter a valid number";
    return;
  }

  if (isNaN(getUserInput)) {
    calculate.textContent = "PLEASE,input a number.";
    return;
  }

  const getUserInputToNumber = Number(getUserInput);

  if (getUserInputToNumber > maxNum || getUserInputToNumber < minNum) {
    calculate.textContent = ` Please enter a number between ${minNum} and ${maxNum}`;
    return;
  }

  attempts++;

  if (machineGuessNumber === getUserInputToNumber) {
    calculate.textContent = ` Finally!! You got the answer after ${attempts} attempts`;
    button1.style.display = "none";
    button2.style.display = "inline-block";
  } else if (attempts >= maxAttempts) {
    calculate.textContent = `Game over! The number was ${machineGuessNumber}`;
    button1.style.display = "none";
    button2.style.display = "inline-block";
  } else {
    calculate.textContent = ` Try again! You have ${maxAttempts - attempts} attempts left`;
  }
  userInput.value = "";
  document.getElementById("userInput").value = ""
};

const resetGame = () => {
  machineGuessNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  attempts = 0;
  button1.style.display = "inline-block";
  button2.style.display = "none";
  calculate.textContent = "";
  userInput.value = "";
  console.log(machineGuessNumber);
};

calculate.style.color = "white"
const about = {
  background: "blue",
  color: "white",
  width: "100%",
  maxWidth:"350px",
  height: "auto",
  borderRadius: "10px",
  margin: 'auto',

}
const about2 = {
  padding: '80px'
}
const input = {
  borderRadius: "10px",
  padding: "10px",
  width: "100%",
  maxWidth: "400px"
}

const aboutbutton = {
  border: "none",
  background: "white",
  color:"black",
  borderRadius: "20px",
  padding: "10px 40px",
  marginTop: "20px"
}
const aboutbutton2 = {
  border: "none",
  background: "black",
  color :"white",
  borderRadius: "20px",
  padding: "10px 40px",
  marginTop: "20px"
}
Object.assign(div.style, about)
Object.assign(div2.style, about2)
Object.assign(userInput.style, input)
Object.assign(button1.style, aboutbutton)
Object.assign(button2.style, aboutbutton2)