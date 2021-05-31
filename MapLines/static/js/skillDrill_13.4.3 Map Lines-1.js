//13.4.3  Map Lines

/* Edit your logic.js to create an airline route from SFO to John F. Kennedy International 
Airport (JFK) with two stops, Austin-Bergstrom International Airport (AUS) 
and Toronto Pearson International Airport (YYZ). Make the route a blue dashed line, 
with a weight of 4 and opacity of 0.5 on the light map.

Hint: You'll need to find the coordinates for some of these airports.

Bonus: Add your city or another city as a stopping point.

Your map should look similar to the following:*/


//__________________________________________________________________________________________________________
// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//Map Multiple Lines
// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "yellow"
}).addTo(map);






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Add a Tile Layer for Our Map++++++++++++
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);