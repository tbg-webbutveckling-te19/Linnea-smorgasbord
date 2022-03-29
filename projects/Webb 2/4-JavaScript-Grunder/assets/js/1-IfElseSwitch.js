// Greater than
// var age = 18;
// if(age >= 15) {
//     console.log("Du får ta AM-kortet!");
// } else {
//     console.log("du är tyvärr för ung!");
// }

// If something is equal to
// var lesson = "Math";
// if(lesson === "English") {
//     console.log("We have " + lesson);
// } else if (lesson === "History") {
//     console.log("We have " + lesson)
// } else if (lesson === "Biology") {
//     console.log("We have " + lesson)
// } else {
//     console.log("We have spare time")
// }

var user = document.getElementById("userInput")
var subject = document.getElementById("showSubject")

user.addEventListener("keydown", function(event) {
    // console.log(event.key);
    if(event.key === "Enter") {
        if(user.value.indexOf("En") === 0 || user.value.indexOf("en") === 0) {
            console.log("We have English now")
        } else if (user.value.indexOf("Hi") === 0 || user.value.indexOf("hi") === 0) {
            console.log("We have History now")
        } else if (user.value.indexOf("Bi") === 0 || user.value.indexOf("bi") === 0) {
            console.log("We have Biology now")
        } else {
            console.log("We have spare time")
        }
        subject.innerHTML = user.value
        user.value = ""
    }
})

var showWeather = document.getElementById("showWeather")
var isSunny = Math.random()
if(isSunny < .5) {
    showWeather.innerHTML = "Put on some warm clothes today!!"
} else {
    showWeather.innerHTML = "Put on some shorts today"
}

var d = new Date();

var showTime = document.getElementById("time");

// showTime.innerHTML = `${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}`;
showTime.innerHTML = d.toString();

if(d.getHours() <= 12) {
    console.log("Good morning.")
} else {
    console.log("Good Evening")
}

if(d.getHours() < 14) {
    if(d.getMonth() > 9 || d.getMonth() < 2) {
        console.log("Go to sleep and wake up when it is spring")
    } else {
        console.log("Good morning.")
    }
} else {
    console.log("Good evening.")
}

// Switch statement
var grade = "E";
switch(grade) {
    case "A":
        console.log("Great job! You got an A!")
        break;

    case "B":
        console.log("Good job! You got a B!")
        break;

    case 'C':
        console.log('Alright! You got a C!');
        break;

	case 'D':
		console.log('Good! You got a D!');
		break;

	case 'E':
		console.log('OK! You got an E!');
		break;

	case 'F':
		console.log('F! You did not pass.');
		break;

    default:
        console.log("An Error Has Occured!")
}

// Try the switch statement without break;

// if(grade === "A") {

// } else if(grade === "B") {

// } 
// } else if(grade === "C") {

// } 
// } else if(grade === "D") {

// } 
// } else if(grade === "E") {

// } 
// } else if(grade === "F") {

// } else {

// }

var weekday = document.getElementById("currentDay");
var currentDay = d.getDay();

switch(currentDay) {
    case 0:
		weekday.innerHTML = "Sunday";
		break;

	case 1:
		weekday.innerHTML = "Monday";
		break;

	case 2:
		weekday.innerHTML = "Tuesday";
		break;

	case 3:
		weekday.innerHTML = "Wednesday";
		break;

	case 4:
		weekday.innerHTML = "Thursday";
		break;
	case 5:
		weekday.innerHTML = "Friday";
		break;

	case 6:
		weekday.innerHTML = "Saturday";
		break;

	default:
		console.log('What day?');
}

// Control the square
var square = document.getElementById("square")

square.setAttribute("style", "position: absolute; bottom: 100px; left: 960px;")

var innerWidht = window.innerWidht - 50;
var innerHeight = window.innerHeight;

document.addEventListener("keydown", function(e) {
    // console.log(e.key)
    switch(e.key) {
        case "ArrowLeft":
            keyLeft()
        break;

        case "ArrowRight":
            keyRight()
        break;

        case "ArrowUp":
            keyUp()
        break;

        case "ArrowDown":
           keyDown()
        break;
    }
})

// Functions

function keyLeft() {
    var leftNumbers = square.style.left.replace("px", "")
            var left = Number(leftNumbers)
            var speed = 3

            if(left > 0) {
                square.style.left = `${left - speed}px`
            }
}

function keyRight() {
    var leftNumbers = square.style.left.replace("px", "")
            var left = Number(leftNumbers)
            var speed = 3

            if(left < innerWidht) {
                square.style.left = `${left + speed}px`
            }
}

function keyUp() {
    var bottomNumbers = square.style.bottom.replace("px", "")
    var bottom = Number(bottomNumbers)
    var speed = 3

    if(bottom > 0) {
        square.style.bottom = `${bottom + speed}px`
    }
}

function keyDown() {
    var bottomNumbers = square.style.bottom.replace("px", "")
    var bottom = Number(bottomNumbers)
    var speed = 3

    if(bottom > 0) {
        square.style.bottom = `${bottom - speed}px`
    }
}