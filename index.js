// document.querySelectorAll("button")[0].addEventListener("click", function(){alert("I got call")})
// document.querySelectorAll("button")[1].addEventListener("click", function(){alert("I got call")})
// document.querySelectorAll("button")[2].addEventListener("click", function(){alert("I got call")})
// document.querySelectorAll("button")[3].addEventListener("click", function(){alert("I got call")})
// document.querySelectorAll("button")[4].addEventListener("click", function(){alert("I got call")})
// document.querySelectorAll("button")[5].addEventListener("click", function(){alert("I got call")})
// document.querySelectorAll("button")[6].addEventListener("click", function(){alert("I got call")})


var numberOfButtons = document.querySelectorAll(".drum-btn").length;
// console.log(numberOfButtons);

for (i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml)
        buttonAnimation(buttonInnerHtml)
    })
}


document.addEventListener("keypress", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1Audio = new Audio("sounds/tom-1.mp3");
            tom1Audio.play();
            break;

        case "a":
            var tom2Audio = new Audio("sounds/tom-2.mp3");
            tom2Audio.play();
            break;


        case "s":
            var tom3Audio = new Audio("sounds/tom-3.mp3");
            tom3Audio.play();
            break;


        case "d":
            var tom4Audio = new Audio("sounds/tom-4.mp3");
            tom4Audio.play();
            break;


        case "j":
            var snareAudio = new Audio("sounds/snare.mp3");
            snareAudio.play();
            break;

        case "k":
            var crashAudio = new Audio("sounds/crash.mp3");
            crashAudio.play();
            break;

        case "l":
            var kickAudio = new Audio("sounds/kick-bass.mp3");
            kickAudio.play();
            break;

        default:
            console.log(buttonInnerHtml);
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressesd");

    setTimeout(function(){
        activeButton.classList.remove("pressesd");
    }, 100);
}