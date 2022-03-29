//select an element and then manipulate it

/* //select
var h1 = document.querySelector("h1")

//manipulate
h1.style.color = "red" */

/* // toggle background-color
//select
var bg = document.getElementsByTagName("body")[0]
var isPink = false;

//manipulate
var interval = setInterval(function() {
    if(isPink) {
        bg.style.backgroundColor = "#82ccdd"
    } else {
        bg.style.backgroundColor = "#68A3B0"
    }
    isPink = !isPink;
}, 2000)

//clear interval
bg.addEventListener("dblclick", function(){
    clearInterval(interval)
}) */ 
//comment shift alt a

//select by id
var element = document.getElementById("highlight")
console.log(element)
console.dir(element)

//select by classname
var elements = document.getElementsByClassName("bolded") //nodelist
console.log(elements)
console.dir(elements)

//select by tagname
var eles = document.getElementsByTagName("li") //nodelist
console.log(eles)
console.dir(eles)

//select by queryselector
var queryTag = document.querySelector("#highlight") //only return the first element
console.log(queryTag)
console.dir(queryTag)

//select by queryselectorall
var queryTagAll = document.querySelectorAll("h1")
console.log(queryTagAll)
console.dir(queryTagAll)

//6 ways
var byId = document.getElementById("first")
console.log(byId)

var byClassname = document.getElementsByClassName("special")[0]
console.log(byClassname)

var byQuery = document.querySelector("p")
console.log(byQuery)

var byQueryAll = document.querySelectorAll("p")[0]
console.log(byQueryAll)

var byQueryP = document.querySelector("h1 + p")
console.log(byQueryP)

var byTagname = document.getElementsByTagName("p")[0]
console.log(byTagname)

//  select
var element = document.querySelector("#highlight")

//manipulate
/* element.style.color = "blue"
element.style.border = "10px solid black"
element.style.fontSize = "55px"
element.style.backgroundColor = "#eee" */

element.classList.add("some-class")

//select
var tag = document.querySelector("h1")

//add a class
tag.classList.add("another-class")

//remove a class
tag.classList.remove("another-class")

//toggle a class
tag.classList.toggle("another-class")

/////manipulating text and content /////
//select
var pEle = document.querySelector(".test")

// chaining methods
document.getElementsByTagName("h1")[0].textContent = "Chaining methods"
document.getElementsByTagName("h1")[0].innerHTML = "<i>Chaining methods</i>"

//manipulate attribute
var link = document.querySelector("a")

//get attr of link, href
link.getAttribute("href") //google.com

//change href attribute
link.setAttribute("href", "http://tannbergsskolan.nu")

// change img src
var img = document.getElementsByTagName("img")[0]
img.setAttribute("src", "assets/images/separation-of-concerns.JPG")
img.setAttribute("alt", "Separation of concerns")

// making things interactive with events
var btn = document.querySelector("button")
//man
btn.addEventListener("click", () => {
    document.querySelector("button + p").innerHTML = "Yay! I've been clicked!!"
})

//select
var lis = document.querySelectorAll("li")

//manipulate
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        //this.style.textDecoration = "line-through"
        this.classList.toggle("to-do")
    })
}
