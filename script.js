var numberOfButtons = document.querySelectorAll(".key").length

for (var i=0;i<numberOfButtons;i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
});

function sound(key) {
    switch (key) {
        case "z":
        var sound1 = new Audio('sounds/piano-c_sharp.mp3');
        sound1.play();
        break;

        case "s":
        var sound2 = new Audio("sounds/piano-c.mp3");
        sound2.play();
        break;

        case "d":
        var sound3 = new Audio('sounds/piano-c.mp3');
        sound3.play();
        break;

        case "c":
        var sound4 = new Audio('sounds/piano-c.mp3');
        sound4.play();
        break;

        case "v":
        var sound5 = new Audio('sounds/piano-c.mp3');
        sound5.play();
        break;

        case "g":
        var sound6 = new Audio('sounds/piano-c.mp3');
        sound6.play();
        break;

        case "h":
        var sound7 = new Audio('sounds/piano-c.mp3');
        sound7.play();
        break;

        case "j":
        var sound8 = new Audio('sounds/piano-c.mp3');
        sound8.play();
        break;

        case "m":
        var sound9 = new Audio('sounds/piano-c.mp3');
        sound9.play();
        break;

        default: console.log(key);
    }
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
