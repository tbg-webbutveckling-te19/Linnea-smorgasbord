var person1 = ['Linnéa', 18, 'Sweden']
console.log(person1[2])

var person2 = ['Sara', 'Sydney', 17]
console.log(person2[2])

var person = {
    name: 'Linnéa',
    age: 18,
    hometown: 'Sweden',
    friends: ['Sara', 'Elina', 'Du'],
    isFriendly: true,
    birthday: function() {
        this.age++; //referera till sig själv
        return this.age
    }
}
console.log(person.birthday())

person.friends.forEach(function(friend) {
    console.log(friend);
})


//Nya filer

var postsOutput = document.getElementById("posts")
var posts = [
    {
        author: "Author numero uno",
        title: "Rainforests are rainy",
        comments: ["Yeah dude totally!", "Rainy rainy!", "Couldn't disagree more!"]

    },
    {
        author: "Numero dos",
        title: "Cities of the world",
        comments: ["Big cities we have", "No more cities", "A city?"]
    }
]

posts.forEach(function(post) {
    postsOutput.innerHTML += `<br> <span class="postKey">Author</span>: ${post.author} <br> <span class="postKey">Title</span>: ${post.title} <br> <span class="postKey">Comments</span>: ${post.comments}`
})

var personInfo = document.getElementById("person")
personInfo.innerHTML = `Name: ${person.name} <br> Age: ${person.age} <br> City: ${person.hometown}`

var input = document.getElementById("updateCity")
input.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        personInfo.innerHTML =
        `Name: ${person.name} <br>
        Age: ${person.age} <br>
        City ${person.hometown = input.value}`
        input.value = ""
    }
})

var btnCelebrate = document.getElementById("celebrate")
btnCelebrate.addEventListener("click", () => {
    person.birthday()
    personInfo.innerHTML =
        `Name: ${person.name} <br>
        Age: ${person.age} <br>
        City ${person.hometown}`
})


//Movie Database

var movieInfo = document.getElementById("movies")
var movies = [
{ 
    title: 'Frozen',
    rating: 5,
    hasWatched: true
},
{
    title: 'Cruella',
    rating: 3.5,
    hasWatched: false
},
{ 
    title: 'Vaiana',
    rating: 4,
    hasWatched: true
},
{ 
    title: 'Encanto',
    rating: 4.5,
    hasWatched: false
},
];

function movieOutput(movie) {
  var result = "";
  if(movie.hasWatched == true) {
      result = "You have watched ";
    } else {
        result = "You have not seen ";
    }
    result += ` ${movie.title} - ${movie.rating} stars <br>`
    return result;
}

movies.forEach(function(movie){
    movieInfo.innerHTML += movieOutput(movie)
});

//animals

var div = document.getElementById("animals")
var btn = document.getElementsByClassName("animalsBtn")

var aDog = document.getElementById("audioDog")
var aCat = document.getElementById("audioCat")
var aWolf = document.getElementById("audioWolf")
var aCow = document.getElementById("audioCow")

var animalSounds = {
    dog: function(sound){
        div.innerHTML = "Bark"
        aDog.play()
    },
    cat: function(sound){
        div.innerHTML = "Meow"
        aCat.play()
    },
    wolf: function(sound){
        div.innerHTML = "Howl"
        aWolf.play()
    },
    cow: function(sound){
        div.innerHTML = "Moo"
        aCow.play()
    }
}

for(var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){
        switch (this.innerHTML) {
            case 'Dog': {
                animalSounds.dog()
                break;
            }
            case 'Cat': {
                animalSounds.cat()
                break;
            }
            case 'Wolf': {
                animalSounds.wolf()
                break;
            }
            case 'Cow': {
                animalSounds.cow()
                break;
            }
        }
    })
}


var btnFriend = document.querySelector('.friend')
var btnUnfriend = document.querySelector('.unfriend')
var btnFriendsList = document.querySelector('.friendsList')

var user = {
    friends: ['Arnold', 'Stallone'],
    addFriend: function(friend) {
        this.friends.push(friend)
    },
    removeFriend: function(index) {
        this.friends.splice(index, 1)
    }
}

btnFriend.addEventListener('click', function() {
    user.addFriend(prompt('Insert name of friend here: '))
    console.log(user.friends)
})

btnUnfriend.addEventListener('click', function() {
    var removeWho = prompt("Enter index to deleter - start from 0")
    console.log{`${user.friends[removeWho]} got removed`}

    user.removeFriend(removeWho)
    console.log()
})