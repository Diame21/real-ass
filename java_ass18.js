let form = document.getElementById("form")
let fill = document.getElementById("fill")
let laoding = document.getElementById("loading1")
let pleaseWait = document.getElementById("loading2")
let complete = document.getElementById("loading3")
let hotelForm = document.getElementById("Hotelform")
let hotelIntro = document.getElementById("Firsthotel")
let nextPage = document.getElementById("next")
let User = document.getElementById("userName")
let dayle = document.getElementById("myparagraph")
let typeOfAccomodation = document.getElementById("typeOfAccommodation")
let freeAccommodation = document.getElementById("freeAcc")
let hotelAccommodation = document.getElementById("hotelAcc")
let forFree = document.getElementById("forFree")
let forFreeContent = document.getElementById("forFreeContent")
let hotelAccPage = document.getElementById("hotelPart")
let userName2 = document.getElementById("Name")
let userRoom = document.getElementById("Room")
let typeOfRoom = document.getElementById("roomType")
let forFreeButton = document.getElementById("forFreeBut")
let forHotel = document.getElementById("forHotel")
let forHotelContent = document.getElementById("forHotelContent1")
let daysNext = document.getElementById("daysNext")
let howDays = document.getElementById("days")
let standard = document.getElementById("Standard")
let emerald = document.getElementById("Emerald")
let supreme = document.getElementById("Supreme")
let presidential = document.getElementById("Presidential")
let accBack = document.getElementById("accBack")
let value = document.getElementById("value1")
let valueTwo = document.getElementById("value2")
let valueThree = document.getElementById("value3")
let valueFour= document.getElementById("value4")
let calc = document.getElementById("calc")
let calc2 = document.getElementById("calc2")
let calc3 = document.getElementById("calc3")
let calc4 = document.getElementById("calc4")
// let forPaidButton = document.getElementById("forPaid")
// let textPattern = /[A-Za-z]/
laoding.style.display = "none"
pleaseWait.style.display = "none"
complete.style.display = "none"
hotelForm.style.display = "none"
hotelIntro.style.display = "block"
typeOfAccomodation.style.display = "none"
forFree.style.display = "none"
hotelAccPage.style.display = "none"
forHotel.style.display = "none"



//Code for the Intro part
// setTimeout(() => {
//     laoding.style.display = "none"
//     pleaseWait.style.display = "none"
//     complete.style.display = "none"
//     hotelForm.style.display = "none"
//     hotelIntro.style.display = "block"
// }, 7000);
setTimeout(() => {
    laoding.style.display = "block"
    pleaseWait.style.display = "none"
    complete.style.display = "none"
    hotelForm.style.display = "none"
    hotelIntro.style.display = "none"
}, 7000);
setTimeout(() => {
    laoding.style.display = "none"
    pleaseWait.style.display = "block"
    complete.style.display = "none"
    hotelForm.style.display = "none"
    hotelIntro.style.display = "none"
}, 8000);
setTimeout(() => {
    laoding.style.display = "none"
    pleaseWait.style.display = "none"
    complete.style.display = "block"
    hotelForm.style.display = "none"
    hotelIntro.style.display = "none"
}, 9000);

setTimeout(() => {
    laoding.style.display = "none"
    pleaseWait.style.display = "none"
    complete.style.display = "none"
    hotelIntro.style.display = "none"
    hotelForm.style.display = "block"

}, 10000);


let firstname;
let lastname;
nextPage.addEventListener("click", () => {
    first = document.getElementById("firstname").value.trim()
    last = document.getElementById("lastname").value.trim()
    let error1 = document.getElementById("error1")
    let error2 = document.getElementById("error2")

    error1.textContent = ""
    error2.textContent = ""
    error1.style.color = "yellow"
    error2.style.color = "yellow"

    if (last === "" && first === "") {
        error1.textContent = "please input your First name"
        error2.textContent = "please input your Last name"
        return;
    }
    else if (first == "") {
        error1.textContent = "please input your First name"
        return;
    }
    else if (last == "") {
        error2.textContent = "please input your Last name"
        return;
    }
    typeOfAccomodation.style.display = "block"
    hotelForm.style.display = "none"
    User.textContent = `${first} ${last}`
})

freeAccommodation.addEventListener("click", () => {
    forFree.style.display = "block"
    typeOfAccomodation.style.display = "none"
    forFreeContent.textContent = `Dear ${first} ${last}, thank you for selecting
    free accommodation,our staff wll get you the available room soon.`
})
forFreeButton.addEventListener("click", () => {
    typeOfAccomodation.style.display = "block"
    forFree.style.display = "none"
    hotelForm.style.display = "none"
    User.textContent = `${first} ${last}`
})
// forPaidButton.addEventListener("click", () => {
//     typeOfAccomodation.style.display = "none"
//     forFree.style.display = "none"
//     hotelForm.style.display = "block"
//     User.textContent = `${first} ${last}`
// })

let days;
// let dayle;
let hours;
let mins;
let secs;
hotelAccommodation.addEventListener("click", () => {
    forFree.style.display = "none"
    forHotelContent.textContent = `${first} ${last}`
    forHotel.style.display = "block"
    typeOfAccomodation.style.display = "none"

})
const futureCountDown = (futuredate) => {
    let future = new Date(futuredate).getTime()
    let now = new Date().getTime()
    let diff = future - now
    let realDays = 24 * 60 * 60 * 1000;
    let realHours = 60 * 60 * 1000;
    let realMins = 60 * 1000;
    let realSecs = 1000;

    days = Math.floor(diff / realDays)
    hours = Math.floor((diff % realDays) / realHours)
    mins = Math.floor((diff % realHours) / realMins)
    secs = Math.floor((diff % realMins) / realSecs)
    // dayle = document.getElementById("myparagraph")

}
accBack.addEventListener("click", () => {
    typeOfAccomodation.style.display = "none"
    forFree.style.display = "none"
    hotelForm.style.display = "block"
    User.textContent = `${first} ${last}`
})


let duration = document.getElementById("duration")
daysNext.addEventListener("click", () => {
    if (duration.value.trim() !== '') {
        hotelAccPage.style.display = 'block'
        forHotel.style.display = 'none'
    }
    else {
        duration.style.border = '4px solid red'
        duration.focus()
    }
    userName2.textContent = `${first} ${last}`
})

let stand = document.getElementById("stand")
standard.addEventListener("click", () => {
    const daysValue = howDays.value.trim();
    const daysAsNumber = Number(daysValue);

    if (daysValue === '' || isNaN(daysAsNumber)) {
        howDays.style.border = '4px solid red';
        howDays.value = '';
        howDays.placeholder = 'Please enter a valid number';
        howDays.focus();
        setTimeout(() => {
            howDays.style.border = '2px solid black';
            howDays.placeholder = 'e.g 3';
        }, 1200);
        return;
    }
    else {
        value.textContent = daysAsNumber;
        // calc.textContent = daysAsNumber * 5000;
        userRoom.style.display = 'none'
        stand.style.display = 'block'
        // stand.textContent = `Your Standard Room At #5,000 per Night. Your Bill At The Expiration of ${duration} will be`
        calc.textContent = daysAsNumber * 5000;
    }
})

let eme = document.getElementById("emer")
emerald.addEventListener("click", () => {
    const daysValue = howDays.value.trim();
    const daysAsNumber = Number(daysValue);

    if (daysValue === '' || isNaN(daysAsNumber)) {
        howDays.style.border = '4px solid red';
        howDays.value = '';
        howDays.placeholder = 'Please enter a valid number';
        howDays.focus();
        setTimeout(() => {
            howDays.style.border = '2px solid black';
            howDays.placeholder = 'e.g 3';
        }, 1200);
        return;
    }
    else {
        valueTwo.textContent = daysAsNumber;
        // calc.textContent = daysAsNumber * 15000;
        userRoom.style.display = 'none'
        eme.style.display = 'block'
        // stand.textContent = `Your Standard Room At #5,000 per Night. Your Bill At The Expiration of ${duration} will be`
        calc2.textContent = daysAsNumber * 15000;
    }
    // userRoom.style.display = 'none'
    // eme.style.display = 'block'
})
let sup = document.getElementById("sup")
supreme.addEventListener("click", () => {
    const daysValue = howDays.value.trim();
    const daysAsNumber = Number(daysValue);

    if (daysValue === '' || isNaN(daysAsNumber)) {
        howDays.style.border = '4px solid red';
        howDays.value = '';
        howDays.placeholder = 'Please enter a valid number';
        howDays.focus();
        setTimeout(() => {
            howDays.style.border = '2px solid black';
            howDays.placeholder = 'e.g 3';
        }, 1200);
        return;
    }
    else {
        valueThree.textContent = daysAsNumber;
        // calc.textContent = daysAsNumber * 5000;
        userRoom.style.display = 'none'
        sup.style.display = 'block'
        // stand.textContent = `Your Standard Room At #5,000 per Night. Your Bill At The Expiration of ${duration} will be`
        calc3.textContent = daysAsNumber * 25000;
    }
    // userRoom.style.display = 'none'
    // sup.style.display = 'block'
})
let president = document.getElementById("pre")
presidential.addEventListener("click", () => {
    const daysValue = howDays.value.trim();
    const daysAsNumber = Number(daysValue);

    if (daysValue === '' || isNaN(daysAsNumber)) {
        howDays.style.border = '4px solid red';
        howDays.value = '';
        howDays.placeholder = 'Please enter a valid number';
        howDays.focus();
        setTimeout(() => {
            howDays.style.border = '2px solid black';
            howDays.placeholder = 'e.g 3';
        }, 1200);
        return;
    }
    else {
        valueFour.textContent = daysAsNumber;
        // calc.textContent = daysAsNumber * 5000;
        userRoom.style.display = 'none'
        pre.style.display = 'block'
        // stand.textContent = `Your Standard Room At #5,000 per Night. Your Bill At The Expiration of ${duration} will be`
        calc4.textContent = daysAsNumber * 90000;
    }
    // userRoom.style.display = 'none'
    // sup.style.display = 'block'
})

// For standard 
let cancel = document.getElementById("Cancel1")
cancel.addEventListener("click", () => {
    hotelAccPage.style.display = 'block'
    userRoom.style.display = 'block'
    stand.style.display = 'none'
    eme.style.display = 'none'
    sup.style.display = 'none'
    pre.style.display = 'none'
    howDays.value = ''
    howDays.focus()
})

let continueBtns = document.getElementById("Continue1")
continueBtns.addEventListener("click", () => {
    hotelAccPage.style.display = "none"
    counter.style.display = 'block';
    const daysValue = Number(howDays.value.trim());
    const daysAsNumber = isNaN(daysValue) || daysValue <= 0 ? 1 : daysValue;
    let future = new Date().getTime() + (daysAsNumber * 24 * 60 * 60 * 1000);
    let timer = setInterval(() => {
        let now = new Date().getTime();
        let diff = future - now;
        if (diff <= 0) {
            clearInterval(timer);
            document.getElementById("display").textContent = "Your booking period has ended!";
            return;
        }
        let daysLeft = Math.floor(diff / (24 * 60 * 60 * 1000));
        let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        let secs = Math.floor((diff % (60 * 1000)) / 1000);

        document.getElementById("display").textContent =
            `${daysLeft}d : ${hours}h : ${mins}m : ${secs}s`;

    }, 1000);
})

// for emerald 
let cancelTwo = document.getElementById("Cancel2")
cancelTwo.addEventListener("click", () => {
    hotelAccPage.style.display = 'block'
    userRoom.style.display = 'block'
    stand.style.display = 'none'
    eme.style.display = 'none'
    sup.style.display = 'none'
    pre.style.display = 'none'
    howDays.value = ''
    howDays.focus()
})
let continueBtnsTwo = document.getElementById("Continue2")
continueBtnsTwo.addEventListener("click", () => {
    hotelAccPage.style.display = "none"
    counter.style.display = 'block';
    const daysValue = Number(howDays.value.trim());
    const daysAsNumber = isNaN(daysValue) || daysValue <= 0 ? 1 : daysValue;
    let future = new Date().getTime() + (daysAsNumber * 24 * 60 * 60 * 1000);
    let timer = setInterval(() => {
        let now = new Date().getTime();
        let diff = future - now;
        if (diff <= 0) {
            clearInterval(timer);
            document.getElementById("display").textContent = "Your booking period has ended!";
            return;
        }
        let daysLeft = Math.floor(diff / (24 * 60 * 60 * 1000));
        let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        let secs = Math.floor((diff % (60 * 1000)) / 1000);

        document.getElementById("display").textContent =
            `${daysLeft}d : ${hours}h : ${mins}m : ${secs}s`;

    }, 1000);
})
// for supreme 
let cancelThree = document.getElementById("Cancel3")
cancelThree.addEventListener("click", () => {
    hotelAccPage.style.display = 'block'
    userRoom.style.display = 'block'
    stand.style.display = 'none'
    eme.style.display = 'none'
    sup.style.display = 'none'
    pre.style.display = 'none'
    howDays.value = ''
    howDays.focus()
})
let continueBtnsThree = document.getElementById("Continue3")
continueBtnsThree.addEventListener("click", () => {
    hotelAccPage.style.display = "none"
    counter.style.display = 'block';
    const daysValue = Number(howDays.value.trim());
    const daysAsNumber = isNaN(daysValue) || daysValue <= 0 ? 1 : daysValue;
    let future = new Date().getTime() + (daysAsNumber * 24 * 60 * 60 * 1000);
    let timer = setInterval(() => {
        let now = new Date().getTime();
        let diff = future - now;
        if (diff <= 0) {
            clearInterval(timer);
            document.getElementById("display").textContent = "Your booking period has ended!";
            return;
        }
        let daysLeft = Math.floor(diff / (24 * 60 * 60 * 1000));
        let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        let secs = Math.floor((diff % (60 * 1000)) / 1000);

        document.getElementById("display").textContent =
            `${daysLeft}d : ${hours}h : ${mins}m : ${secs}s`;

    }, 1000);
})
// for presidential 
let cancelFour = document.getElementById("Cancel4")
cancelFour.addEventListener("click", () => {
    hotelAccPage.style.display = 'block'
    userRoom.style.display = 'block'
    stand.style.display = 'none'
    eme.style.display = 'none'
    sup.style.display = 'none'
    pre.style.display = 'none'
    howDays.value = ''
    howDays.focus()
})
let continueBtnsFour = document.getElementById("Continue4")
continueBtnsFour.addEventListener("click", () => {
    hotelAccPage.style.display = "none"
    counter.style.display = 'block';
    const daysValue = Number(howDays.value.trim());
    const daysAsNumber = isNaN(daysValue) || daysValue <= 0 ? 1 : daysValue;
    let future = new Date().getTime() + (daysAsNumber * 24 * 60 * 60 * 1000);
    let timer = setInterval(() => {
        let now = new Date().getTime();
        let diff = future - now;
        if (diff <= 0) {
            clearInterval(timer);
            document.getElementById("display").textContent = "Your booking period has ended!";
            return;
        }
        let daysLeft = Math.floor(diff / (24 * 60 * 60 * 1000));
        let hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
        let secs = Math.floor((diff % (60 * 1000)) / 1000);

        document.getElementById("display").textContent =
            `${daysLeft}d : ${hours}h : ${mins}m : ${secs}s`;

    }, 1000);
})