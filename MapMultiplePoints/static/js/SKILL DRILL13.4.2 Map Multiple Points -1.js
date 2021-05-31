//Map Multiple Points 13.4.2
// Add console.log to check to see if our code is working.
console.log("working");
//Add a Map Object a center & zoom level[Geographicalof ceter of US] */
let map = L.map('mapid').setView([40.7, -94.5], 4);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

/*Edit the logic.js file to create an orange circle popup marker for each city, with a lineweight of 4,
 a radius where the population number is decreased by 200,000,  that's on a dark
When you click on the circle, the popup should display the city, state, and the 
population formatted with a thousands separator. */



let cityData = cities;

cityData.forEach(function (city) {
    console.log(city)
    L.circleMarker(city.location, {
            radius: city.population / 100000
        })
        .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
        .addTo(map);
});

/*Add, commit, and push your changes to the Mapping_Mulitple_Points branch.
 Don't delete the branch so that others can use it to learn how to map multiple points with popup markers. */
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