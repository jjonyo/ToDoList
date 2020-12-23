const clockContainer=document.querySelector(".js-clock");
const clockTitle=document.querySelector("h1");

const isClicked="clicked";

function getTime(){
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerText=`${hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;

}



function Clicked(){
    clockTitle.classList.toggle(isClicked);
}

clockTitle.addEventListener("click",Clicked)

function init(){
    getTime()
    setInterval(getTime,1000);
}

init();