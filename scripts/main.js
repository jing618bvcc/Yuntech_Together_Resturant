/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
function preload(){
    img=loadImage("images/YYuntech_map_E.jpg");
    var o = document.getElementById("mm");
    user1 = window.localStorage.getItem('email');
    if(user1 == null){
        o.style.display = 'none';
    }
    else{
        o.style.display = ' ';
    }
}

function setup(){
    creatCanvas(1840/4,2039/4);
}

function draw(){
    image(img,0,0,1840/4,2039/4);
}