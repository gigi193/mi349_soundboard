let ButtonApplause = document.getElementById('B_applause');
let ButtonBubbles = document.getElementById('B_bubbles');
let ButtonCamera = document.getElementById('B_camera');

ButtonApplause.addEventListener("click",function(){
    document.getElementById("applause").play()
})

ButtonApplause.addEventListener("mouseenter",function(){
    document.getElementById("applause").play()
})

ButtonBubbles.addEventListener("click",function(){
    document.getElementById("bubbles").play()
})

ButtonBubbles.addEventListener("mouseenter",function(){
    document.getElementById("bubbles").play()
})

ButtonCamera.addEventListener("click",function(){
    document.getElementById("camera").play()
})

ButtonCamera.addEventListener("mouseenter",function(){
    document.getElementById("camera").play()
})

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

