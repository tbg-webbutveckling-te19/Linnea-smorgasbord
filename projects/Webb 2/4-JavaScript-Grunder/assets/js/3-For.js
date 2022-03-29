// for (initialization; test condition; iteration statement) {
//         Statement(s) to be executed if test condition is true
// }

console.log("For loop started")
for(var i = 0; i <= 10; i++) {
    console.log(`Count is ${i}`)
}
console.log("For loop ended")

for(var i = 0; i <= 6; i += 2) {
    console.log(i);
}

var str = "Hello World!"
for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

var myArr = ["HTML", "CSS", "JS", 35, 18, false, true];
var len = myArr.length;
for(var i = 0; i < len; i++) {
    console.log(myArr[i]);
}

for (var i = 0; i < 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

//excersise
for (var i = -10; i < 20; i++) {
    console.log(i);
}

for (var i = 10; i < 41; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

for (var i = 300; i <= 333; i++) {
    if(i % 2 > 0) {
        console.log(i);
    }
}

for (var i = 5; i < 50; i++) {
    if(i % 5 == 0 && i % 3 == 0) {
        console.log(i);
    }
}

//a function if even or odd
function evenOrOdd(num) {
    if(num % 2 !== 0){
        return 'false'
    } else {
        return 'true'
    }
}
console.log(evenOrOdd(3));

// multiplication by 9
for (let i = 0; i <= 10; i++) {
    console.log(i + ' * 9 = ' + i * 9)
}






