let ButtonApplause = document.querySelector('applause');
let ButtonBubbles = document.querySelector('bubbles');
let ButtonCamera = document.querySelector('camera');

function PlaySound1(){
    var sound = new Audio("applause_y.wav");
    sound.play();
}

function PlaySound2(){
    var sound = new Audio("bubbles_stx.wav");
    sound.play();
}

function PlaySound3(){
    var sound = new Audio("camera1.wav");
    sound.play();
}

