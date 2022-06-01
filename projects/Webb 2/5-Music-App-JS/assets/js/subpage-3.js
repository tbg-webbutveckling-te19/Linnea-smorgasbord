var circle = document.querySelector("#circle")
var play = document.querySelector("#play")
var uheart = document.querySelector("#unfilledheart")
var video = document.querySelector("#background-video")
var start = document.querySelector("#start")
var end = document.querySelector("#end")

var playorpause = true
var heart = true
var startmin = 0
var startsec = 0
var startstop = true
var endmin = 0
var endsec = 0

function counting(){
    if(startstop == true){
        if(startsec < 59){
            startsec += 1
            if(startsec < 10){
                start.innerHTML = startmin + ":" + "0" + startsec
            } else {
                start.innerHTML = startmin + ":" + startsec    
            }
        } else {
            startsec = 0
            startmin = 1
            startsec += 1
            if(startsec < 10){
                start.innerHTML = startmin + ":" + "0" + startsec
            } else {
                start.innerHTML = startmin + ":" + startsec    
            }
        }
    } else {
        if(startsec < 10){
            start.innerHTML = startmin + ":" + "0" + startsec
        } else {
            start.innerHTML = startmin + ":" + startsec    
        }
    }
}

var sound = new Howl({
    src: ['../lib/Goodday.mp3']
});

play.addEventListener("click", function(){
    setInterval(counting, 1000);
    if(playorpause == true) {
        startstop = true
        playorpause = false
        $("#circle").animate({
            left : "0",
            left: "+=" + (parseInt($("#circle").css("left")) + 335) + "px"
        }, 203000);
        sound.play();
        video.play()
        play.setAttribute("src", "../images/Icon awesome-pause-circle.svg")
    } else {
        startstop = false
        playorpause = true
        sound.pause()
        video.pause()
        play.setAttribute("src", "../images/Icon ionic-ios-play-circle-white.svg")
        $("#circle").stop()
    }
})

uheart.addEventListener("click", function(){
    if(heart == true){
        heart = false
        uheart.setAttribute("src", "../images/Icon feather-heart.svg")
    } else {
        heart = true
        uheart.setAttribute("src", "../images/Icon feather-heart-unfilled.svg")
    }
})



