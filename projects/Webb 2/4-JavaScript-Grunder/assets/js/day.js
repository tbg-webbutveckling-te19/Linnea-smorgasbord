var time = document.querySelector("#time")
var info = document.querySelector("#information")
var instruction = document.querySelector("#instruction")

setInterval(myTimer, 1000);

function myTimer() {
    var date = new Date()
    time.innerHTML = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
}

window.addEventListener("keydown", function(e){
    switch (e.key) {
        case "Enter":
            instruction.innerHTML = 'Press "A" to get to know the year. <br> Press "B" to know which day it is. <br> Press "C" to show todays weather.'
            break;
        case "a":
            var d = new Date();
            info.innerHTML = "It is " + d.getFullYear() + "!"
            break;
        case "b":
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var d = new Date();
            info.innerHTML = "It is " + weekday[d.getDay()] + " today!";
            break;
        case "c":
            const items = ["The weather is bad today", "Get to the beach, the sun is out!", "Ummh... rainy..."]
            info.innerHTML = items[Math.floor(Math.random()*items.length)]
            break;
    }
})
