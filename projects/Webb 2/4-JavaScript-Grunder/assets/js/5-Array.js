const rndmArray =  ["Adam", 34, false]

var makeArray = []
var makearray = new Array()

console.log(rndmArray[1])
console.log(rndmArray.lenght)

//push() - appends element at the end of an array
var colors = ["red", "blue", "green"]
console.log(colors)
colors.push("purple")
console.log(colors)

//pop() - remove an item in the end of an array
colors.pop();
console.log(colors)

//unshift() - add an item at the beginning of an array
colors.unshift("yellow")
console.log(colors)

//shift() - remove an item at the beginning of an array
colors.shift()
console.log(colors)

//indexOf() - find the index of an item in the array
console.log(colors.indexOf("blue"))

//slice() - copy parts of an array
const fruits = ["banana", "orange", "lemon", "pear", "melon"]

//use slice() to copy the 2nd and 3rd fruit
var citrus = fruits.slice(1,3)
console.log(citrus)

// almost the whole array
citrus = fruits.slice(1)
console.log(citrus)

//copy the entire array
citrus = fruits.slice(0)
console.log(citrus)

//reverse() - reverse the order in an array
citrus.reverse()
console.log(citrus)

//array with groups
const groups = [[1,2,3], ["hey", "hej", "hello"], [false, true]];
console.log(groups[1][1]) //få ut hej, index av index

var games = ["Zelda", "Megaman", "Iceclimber", "Mario"]
for(var i = 0; i < games.length; i++) {
    console.log(games[i])
}

games.forEach(function(game) { //Mycket snabbare sätt
    console.log(game)
})

var countries = [ "Sweden", "Norway", "Finland"]
countries.forEach(function(country){
    console.log(country)
})

var cars = ["Audi", "Volvo", "Bmw"]
cars.forEach(function(car){
    console.log(car)
})


var num = [12, 15, 6, 34, 28]
function max(arr) {
    var maxNum = 0;
    num.forEach(function(i) {
        if(maxNum < i){
            maxNum = i
        }
    })
    return maxNum
}

console.log(max(num))

