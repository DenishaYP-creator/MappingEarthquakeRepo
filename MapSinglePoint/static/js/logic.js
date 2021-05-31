// Add console.log to check to see if our code is working.
console.log("working");
//+++++Add a Map Object++++++
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 14);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
///////////13.4.1Map a Single Point//////////////////////

//1. Add a Marker to the Map: addTo()fuction
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//2. Add a Circle  marker to the Map: addTo()fuction & circle() function 
// CODE
let circle_marker = L.circle([34.0522, -118.2437], {
   radius: 100
}).addTo(map);


//3. create a light-yellow circle with 
//black lines indicating a 300-pixel radius on a dark map
// let marker = L.circleMarker([34.0522, -118.2437], {
//    radius: 300,
//    color: "black",
//    fillColor: "#ffffa1"
// }).addTo(map);



//END ////////////////////////////////////////////////////////////////////////END 
//++++++++++Add a Tile Layer for Our Map++++++++++++
/*. The tile layer is used to load and display a tile layer on the map. 
We have two options to create a tile layer.*/
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);