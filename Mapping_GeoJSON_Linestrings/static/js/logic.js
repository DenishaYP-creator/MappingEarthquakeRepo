//__________________________________________________________________________________________________________
// Add console.log to check to see if our code is working.
console.log("working");


//__________________________________________________________________________________________________________
// Add console.log to check to see if our code is working.
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Add a Tile Layer for Our Map++++++++++++
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
light.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/DenishaYP-creator/Mapping_Earthquakes/main/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}


// Grabbing our GeoJSON data.
d3.json(torontoData).then(function (data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
      style: myStyle, //Style variable to m ake it shorter 
      oneEachFeature: function (feature, layer) {
        layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3> Destination: " +
          feature.properties.dst + "</h3>");
      }
    })
    .addTo(map);
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