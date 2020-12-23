const weather=document.querySelector(".js-weather");
const API_KEY="eed73e344f263b75b92badc14bc1608b";
const COORDS="coords";

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const temperature=json.main.temp;
        const place=json.name;
        weather.innerText=`${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function geoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function geoError(){
    console.log("Error");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(geoSuccess,geoError);
}

function loadCoords(){
    const loadedCords=localStorage.getItem(COORDS);
    if (loadedCords === null){
        askForCoords();    
    }else{
        const parseCoords=JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}


init();