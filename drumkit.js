for (i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function() 
{
    switch (this.innerHTML) {
        case "A <p>TOM-1</p>": 
        let a1 = new Audio ("sounds/tom-1.mp3")
        a1.play()

        document.querySelector("#b1").classList.toggle("annimation3")
        setTimeout (function () {document.querySelector("#b1").classList.toggle("annimation3")}, 100);
        break;

        case "S <p>TOM-2</p>": 
        let a2 = new Audio ("sounds/tom-2.mp3")
        a2.play()

        document.querySelector("#b2").classList.toggle("annimation2")
        setTimeout (function () {document.querySelector("#b2").classList.toggle("annimation2")}, 100);
        break;

        case "D <p>TOM-3</p>": 
        let a3 = new Audio ("sounds/tom-3.mp3")
        a3.play()

        document.querySelector("#b3").classList.toggle("annimation1")
        setTimeout (function () {document.querySelector("#b3").classList.toggle("annimation1")}, 100);
        break;

        case "F <p>TOM-4</p>": 
        let a4 = new Audio("sounds/tom-4.mp3")
        a4.play()

        document.querySelector("#b4").classList.toggle("annimation2")
        setTimeout (function () {document.querySelector("#b4").classList.toggle("annimation2")}, 100);
        break;

        case "G <p>CRASH</p>": 
        let a5 = new Audio("sounds/crash.mp3")
        a5.play()

        document.querySelector("#b5").classList.toggle("annimation3")
        setTimeout (function () {document.querySelector("#b5").classList.toggle("annimation3")}, 100);
        break;

        case "H <p>KICK</p>": 
        let a6 = new Audio("sounds/kick.wav")
        a6.play()

        document.querySelector("#b6").classList.toggle("annimation1")
        setTimeout (function () {document.querySelector("#b6").classList.toggle("annimation1")}, 100);
        break;
        
        case "J <p>SNARE</p>": 
        let a7 = new Audio("sounds/snare.mp3")
        a7.play()

        document.querySelector("#b7").classList.toggle("annimation3")
        setTimeout (function () {document.querySelector("#b7").classList.toggle("annimation3")}, 100);
        break;
        
        case "K <p>HIHAT</p>": 
        let a8 = new Audio("sounds/hihat.wav")
        a8.play()

        document.querySelector("#b8").classList.toggle("annimation1")
        setTimeout (function () {document.querySelector("#b8").classList.toggle("annimation1")}, 100);
        break;

        case "L <p>TINK</p>": 
        let a9 = new Audio("sounds/tink.wav")
        a9.play()

        document.querySelector("#b9").classList.toggle("annimation2")
        setTimeout (function () {document.querySelector("#b9").classList.toggle("annimation2")}, 100);
        break;

        default: console.log()
            break;

    }
})
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    addAnnimation(event.key)
    
})

function makeSound(key) {
    switch (key) {
        case "a": 
        let a1 = new Audio ("sounds/tom-1.mp3")
        a1.play()

        document.querySelector("#b1").classList.toggle("annimation3")
        setTimeout (function () {document.querySelector("#b1").classList.toggle("annimation3")}, 100);
        break;

        case "s": 
        let a2 = new Audio ("sounds/tom-2.mp3")
        a2.play()

        document.querySelector("#b2").classList.toggle("annimation2")
        setTimeout (function () {document.querySelector("#b2").classList.toggle("annimation2")}, 100);
        break;

        case "d": 
        let a3 = new Audio ("sounds/tom-3.mp3")
        a3.play()

        document.querySelector("#b3").classList.toggle("annimation1")
        
        setTimeout (function () {document.querySelector("#b3").classList.toggle("annimation1")}, 100);
        break;

        case "f": 
        let a4 = new Audio("sounds/tom-4.mp3")
        a4.play()

        document.querySelector("#b4").classList.toggle("annimation2")
        setTimeout (function () {document.querySelector("#b4").classList.toggle("annimation2")}, 100);
        break;

        case "g": 
        let a5 = new Audio("sounds/crash.mp3")
        a5.play()

        document.querySelector("#b5").classList.toggle("annimation3")
        setTimeout (function () {document.querySelector("#b5").classList.toggle("annimation3")}, 100);
        break;

        case "h": 
        let a6 = new Audio("sounds/kick.wav")
        a6.play()

        document.querySelector("#b6").classList.toggle("annimation1")
        setTimeout (function () {document.querySelector("#b6").classList.toggle("annimation1")}, 100);
        break;
        
        case "j": 
        let a7 = new Audio("sounds/snare.mp3")
        a7.play()

        document.querySelector("#b7").classList.toggle("annimation3")
        setTimeout (function () {document.querySelector("#b7").classList.toggle("annimation3")}, 100);
        break;
        
        case "k": 
        let a8 = new Audio("sounds/hihat.wav")
        a8.play()

        
        document.querySelector("#b8").classList.toggle("annimation1")
        setTimeout (function () {document.querySelector("#b8").classList.toggle("annimation1")}, 100);
        break;

        case "l": 
        let a9 = new Audio("sounds/tink.wav")
        a9.play()

        document.querySelector("#b9").classList.toggle("annimation2")
        setTimeout (function () {document.querySelector("#b9").classList.toggle("annimation2")}, 100);
        break;

        default: console.log()
            break;

    }
}

