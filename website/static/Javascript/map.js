var map;
var gl;

function makeMap(latitude, longitude){
    map = L.map('map').setView([latitude, longitude], 15);
    gl = L.mapboxGL({
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
    style: 'https://api.maptiler.com/maps/73455dbc-952b-45a4-9de5-ac4d83ddb128/style.json?key=Y2maXYBGC9a3IVVU8eXz'
    }).addTo(map);
}

function getLocation(){
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(fillLocation, handleError, {enableHighAccuracy: true});
    }
}

function fillLocation(position){
    const {latitude, longitude} = position.coords;
    document.getElementById("uploadInputLocation").value = latitude + ":" + longitude;
}

function handleError(error){
    document.getElementById("uploadInputLocation").value = "Error uploading location";
}


