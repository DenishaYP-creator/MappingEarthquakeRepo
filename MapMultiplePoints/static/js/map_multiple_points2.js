//Map Multiple Points 13.4.2
// Add console.log to check to see if our code is working.
console.log("working");
//Add a Map Object a center & zoom level[Geographicalof ceter of US] */
let map = L.map('mapid').setView([40.7, -94.5], 4);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//Add Multiple Markers

// 1.Get data from cities.js
// let cityData = cities;

//2. Add a Marker to the Map: addTo()fuction
// CODE:
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// 3. Loop through the cities array and create one marker for each city.
// cityData.forEach(function (city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

//____________________________________________________________________________________________________________
// 1.Get data from cities.js
// let cityData = cities;

//2. Add a Marker to the Map: addTo()fuction
// CODE:
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
//////Bind a Popup to the Marker with 
//bindPopup() method on the marker() function. 
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
//   .addTo(map);
// });


//____________________________________________________________________________________________________________

// 1.Get data from cities.js
// let cityData = cities;

//2. Add a Marker to the Map: addTo()fuction
// CODE:
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
//POPULATION FORMATTED TO THOSANDS 
/*format the population with a thousands separator by using the 
toLocaleString() method on the city.population in the bindPopup() method */
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


//____________________________________________________________________________________________________________ 
/*change the marker for each city to a circle that has a radius equivalent to the city's population
replace the marker() function with the circleMarker() function in the forEach() function.
Then assign the "radius" key to the population by using city.population. */
// 1.Get data from cities.js
let cityData = cities;

cityData.forEach(function (city) {
    console.log(city)
    L.circleMarker(city.location, {
            radius: city.population / 100000
        })
        .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
        .addTo(map);
});



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