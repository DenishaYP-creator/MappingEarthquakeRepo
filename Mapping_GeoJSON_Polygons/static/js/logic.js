//__________________________________________________________________________________________________________
// Add console.log to check to see if our code is working.
console.log("working");


//Add a Tile Layer for Our Map++++++++++++
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Add a Tile Layer for Our Map++++++++++++
// We create the tile layer that will be the background of our map.
let satellitesStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create the map object with center and zoom level.
let baseMaps = {
  "Streets": streets,
  "Satellite": satellitesStreets,
};

let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satellitesStreets]
});
L.control.layers(baseMaps).addTo(map)


// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/DenishaYP-creator/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function (data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

//LONGER VERSION 

// Grabbing our GeoJSON data.
// d3.json(torontoData).then(function (data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//     color: "#ffffa1",
//   weight: 2,
//   oneEachFeature: function(feature, layer) {
//     layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3> Destination: "
//     + feature.properties.dst +  "</h3>");
//     }
//   })
//   .addTo(map);
// });