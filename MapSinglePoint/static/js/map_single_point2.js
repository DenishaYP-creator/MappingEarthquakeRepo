// Add console.log to check to see if our code is working.
console.log("working");

//+++++Add a Map Object++++++
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//1. Add a Marker to the Map: addTo()fuction
let marker = L.marker([34.0522, -118.2437]).addTo(map);

let circle_marker = L.circle([34.0522, -118.2437], {
    radius: 100
}).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);