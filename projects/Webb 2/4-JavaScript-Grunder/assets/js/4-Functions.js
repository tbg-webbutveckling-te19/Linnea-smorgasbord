function twinkle() {
    console.log('Blinka, lilla stjärna där,')
    console.log('hur jag undrar var du är,')
    console.log('Fjärran lockar du min sky,')
}

twinkle()
twinkle()

// Arguments

// Declare a function
function square(num) {
    console.log(num * num);
}

// Call a function
square(2)

function area(height, width) {
    console.log(`The area is: ${Math.round(height * width)} cm`)
}

area(5.2, 3.2)

function sayHello(name) {
    console.log(`Hello there ${name}`)
}

sayHello(`Linnéa`)
//sayHello(prompt(`What is your name?`))

function greet(p1, p2, p3, p4) {
    console.log(`Hello, ${p1 + p2 + p3 + p4}`)
    console.log(`Hello, ${p1}, ${p2}, ${p3}, ${p4}`)
}

greet(`Hej`, `Vad`, `Gör`, `Du?`)

var resultOfSquare = document.getElementsByClassName("result")[0]
function toSquare(x) {
    return x * x
}

resultOfSquare.innerHTML = `4 squared is ${toSquare(4)}`

function quadrupleMe(x) {
    return x * 4
}

resultOfSquare.innerHTML = `<p>Quadruple this: ${quadrupleMe(4)}</p>` //kan skriva klass på p taggen för att stylea

var storeFunc = quadrupleMe(7)

resultOfSquare.innerHTML = `${storeFunc * storeFunc}`

// Higher order function

//H1
var showTime = document.getElementById("showTime")

//start
var start = document.getElementById("startTime")

//stop
var stopp = document.getElementById("stopTime")

//global var for clearInterval 
var myInterval;

//function start
function myTimer() {
    var d = new Date()
    showTime.innerHTML = d.toLocaleTimeString()
}

myTimer()

//start button event listener
start.addEventListener("click", function() {
    myInterval = setInterval(myTimer, 1000)
}) 

//fucntion stop
function stopTimer() {
    clearInterval(myInterval)
}

//stop button event listener

stopp.addEventListener("click", function(){
    stopTimer()
})

// tellFortune, barn, smabos vars och jobb
//yo will be a x in y, and married to 
//slumpmässiga: make an array for each argument
//when button is click, randomize values from each. 

var output = document.getElementById("writeFortune")
var btnFortune = document.getElementById("showFortune")

const job = ["youtuber", "shopaholic", "designer", "homeless"]
const places = ["Stockholm", "Spanien", "Italien", "Hemavan"]
const partner = ["Anders", "Göran", "Ingvar", "Göta"]
const children = [1, 2, 3, 4, 7, 8]

function tellFortune(job, places, partner, children) {
    output.innerHTML = `You will be a ${job} in ${places}, and married to ${partner} with ${children} kids.`
}
btnFortune.addEventListener("click", () => {
    var rJob = job[Math.floor(Math.random() * job.lenght)]
    var rPlaces = places[Math.floor(Math.random() * places.places)]
    var rPartner = partner[Math.floor(Math.random() * partner.lenght)]
    var rChildren = children[Math.floor(Math.random() * children.lenght)]

    tellFortune(rJob, rPlaces, rPartner, rChildren)
})