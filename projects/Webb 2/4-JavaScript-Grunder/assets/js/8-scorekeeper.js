var input = document.querySelector("#input")
var score = document.querySelector("#scorekeeper")
var player1 = document.querySelector("#player-1")
var player2 = document.querySelector("#player-2")
var count1 = document.querySelector("#count-1")
var count2 = document.querySelector("#count-2")
var winner = document.querySelector("#winner")
var reset = document.querySelector("#reset")
var inputValue = ""
var count1Value = 1
var count2Value = 1

input.addEventListener("change", function() {
    winner.innerHTML = ""
    inputValue = input.value;
    score.innerHTML = inputValue;
    return inputValue
})

player1.addEventListener("click", function(){
    if(count2Value-1==inputValue) {
    } else {
        if(count1Value<inputValue) {
            count1.innerHTML = count1Value++
        } else if(count1Value==inputValue){
            count1.innerHTML = count1Value++
            winner.innerHTML = '👉Player 1 won this round!👈<br>Reset to play again!'
            return 
        }   
    }    
})

player2.addEventListener("click", function(){
    if(count1Value-1==inputValue) {
    } else {
        if(count2Value<inputValue) {
            count2.innerHTML = count2Value++
        } else if(count2Value==inputValue){
            count2.innerHTML = count2Value++
            winner.innerHTML = '👉Player 2 won this round!👈<br>Reset to play again!'
        }   
    }    
})

reset.addEventListener("click", function(){
    score.innerHTML = "_"
    count1.innerHTML = 0
    count2.innerHTML = 0
    winner.innerHTML = "👆Select a number you are playing to👆"
    count1Value = 1
    count2Value = 1
})

