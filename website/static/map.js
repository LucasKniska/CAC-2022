var map = L.map('map').setView([39.63577, -79.81244], 14);
var gl = L.mapboxGL({
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  style: 'https://api.maptiler.com/maps/73455dbc-952b-45a4-9de5-ac4d83ddb128/style.json?key=Y2maXYBGC9a3IVVU8eXz'
}).addTo(map);


function uploadImage(position){
    const {latitude, longitude} = position.coords;

    var marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup("<b>Uploaded by: </b> <b>On: </b> <img src='CoopersRockPage1.jpg'>")
}

function getLocation(){
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(uploadImage, console.log(), {enableHighAccuracy: true});
    }
}