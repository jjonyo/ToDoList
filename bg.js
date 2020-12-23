const body=document.querySelector("body");

const IMG_NUMBER=5;


function paintImage(imgNumber){
    const image=new Image();
    image.src=`images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genNumber(){
    const num=Math.floor(Math.random()*IMG_NUMBER);
    return num;
}

function init(){
    const randomNumber=genNumber();
    paintImage(randomNumber);
}

init();