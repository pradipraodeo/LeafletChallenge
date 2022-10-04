// URLs for earthquakes and lines
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
var lineUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"


// Reading data and consoling
d3.json(lineUrl, function(platesdata){
  console.log(platesdata.features) 
  d3.json(queryUrl, function(earthquakedata) {
    console.log(earthquakedata.features)
    createFeatures(platesdata,earthquakedata) 
  
  })
  })

//Function to create circle markers of the earthquakes and lines on the map
function createFeatures(platesdata,earthquakedata) {

    // Define function to set the circle color based on the magnitude
    function circleColor(depth) {
    if (depth < 10) {
    return '#ffffcc'
    }
    else if (depth < 30) {
    return '#addd8e'
    }
    else if (depth < 50) {
    return '#9ebcda'
    }
    else if (depth < 70) {
    return '#41b6c4'
    }
    else if (depth < 90) {
    return '#253494'
    }
    else {
    return '#bd0026'
    }
   }