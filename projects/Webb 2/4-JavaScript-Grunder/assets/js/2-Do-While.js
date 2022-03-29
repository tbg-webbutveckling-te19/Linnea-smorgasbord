// while
var count = 0;
console.log("start")
while(count < 10) {
    console.log(`Count is ${count}`);
    count++;
}
console.log("end")

//do while
var counter = 0

console.log(`start`)
do {
    console.log(`counte is ${counter}`);
    counter++;
} while (counter < 5 ) {
    console.log(`end`)
}

//while playcard 

var btnDraw = document.getElementById("draw")
btnDraw.addEventListener("click", function() {
    // lista ut vilken färg det är
    do {
        var cardSuit = math.floor(Math.random() * 4);
        var cardValue = math.floor((Math.random() * 14) + 1);
        
        if(cardValue === 1) {
            cardValue = cardValue + 1;
        } else if(cardValue === 11) {
            cardValue = "Jack";
        } else if(cardValue === 12) {
            cardValue = "Queen";
        } else if(cardValue === 13) {
            cardValue = "King";
        } else if(cardValue === 14) {
            cardValue = "Ace";
        } 

        switch(cardSuit) {
            case 0:
                console.log(`you drew a ${cardValue} of hearts`);
                break;

            case 1:
                console.log(`you drew a ${cardValue} of spades`);
                break;

            case 2:
                console.log(`you drew a ${cardValue} of clubs`);
                break;
            
            case 3:
                console.log(`you drew a ${cardValue} of diamons`);
                break;

            default:
                console.log(`fail`)
        }

    } while(cardSuit !== 0) {
        console.log(`Congratulations! You drew a ${cardValue} of Hearts`);
        congratsText.setAttribute("src", "https://cdn.pixabay.com/photo/2012/04/13/20/38/hearts-33564_1280.png")
    } 
    // Så länge som färgen inte är hjärter ska korten fortsätta dras
    //lista ut vilken symbol
    //färg avgör handling
    //om ej hjärter fortsätt
    
})
