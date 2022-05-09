var health = document.querySelector("#health")
var mana = document.querySelector("#mana")
var dmgBtn = document.querySelector("#dmgBtn")
var dmgNum = document.querySelector("#dmgNum")
var healthText = document.querySelector("#warningHealth")
var manaNum = document.querySelector("#manaNum")
var manaBtn = document.querySelector("#manaBtn")
var spellBtn = document.querySelector("#spellBtn")
var resetBtn = document.querySelector("#reseter")
var img = document.querySelector("img")
var end = document.querySelector("#endOfGame")

var wizard = {
    health: 100,
    mana : 30,
    dmgtaken: function() {
        if(this.health>0) {
            if(this.health <= 50){
                this.health-=10
                dmgNum.innerHTML = this.health
                img.setAttribute("src", "assets/images/bruisedwizard.png")
                healthText.innerHTML = "... you are getting low!"
                healthText.classList.add("warning")
            } else {
                this.health-=10
                dmgNum.innerHTML = this.health
            }
        }
    },
    manaRefill: function() {
        manaNum.classList.remove("warning")
        if(this.mana >= 150) {
            manaNum.innerHTML = this.mana
        } else {
            this.mana+=30
            if(this.mana >= 150){
                this.mana = 150
            }
            manaNum.innerHTML = this.mana 
        }
    },
    castSpell: function() {
        this.mana-=15
        if(this.mana <= 0){
            this.mana = 0
            manaNum.innerHTML = "You are out of mana!"
            manaNum.classList.add("warning")
        } else {
            manaNum.innerHTML = this.mana   
        }
    },
    gameOver: function() {
        if(this.health == 0){
            img.setAttribute("src", "assets/images/deadwizard.png")
            health.classList.add("hideHealth")
            mana.classList.add("hideMana")
            endOfGame.classList.remove("gameover")
            end.classList.add("warning")
            dmgBtn.classList.add("btn")
            manaBtn.classList.add("btn")
            spellBtn.classList.add("btn")
            resetBtn.classList.add("addReset")
        }
    },
    reset: function(){
        health.classList.remove("hideHealth")
        mana.classList.remove("hideMana")
        healthText.innerHTML = ""
        endOfGame.classList.add("gameover")
        dmgBtn.classList.remove("btn")
        manaBtn.classList.remove("btn")
        spellBtn.classList.remove("btn")
        this.mana = 30
        this.health = 100
        dmgNum.innerHTML = this.health
        manaNum.innerHTML = this.mana
        resetBtn.classList.remove("addReset")
        img.setAttribute("src", "assets/images/wizard.png")
        img.classList.add("alive")
    }
}

dmgBtn.addEventListener("click", function() {
    wizard.dmgtaken()
    wizard.gameOver()
})

manaBtn.addEventListener("click", function() {
    wizard.manaRefill()
})

spellBtn.addEventListener("click", function () {
    wizard.castSpell()
})

reseter.addEventListener("click", function () {
    wizard.reset()
})

/*Utvecklingsmöjligheter jag inte hann kunde ha varit:
-   Fly till en annan värld.
-   Hjälp
-   Visa när skadorna fås av ex. en flygande kula
-   Problem som att det börjar brinna, två val = ska han släcka eller fly?*/

