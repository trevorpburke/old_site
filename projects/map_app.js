L.mapbox.accessToken = 'pk.eyJ1IjoidHJldm9ycGJ1cmtlIiwiYSI6ImNpazA2MzJwMTAwdDV4Ym01YjRxdThzODQifQ.TbsNOsG_WuAzfkT1fNcH6A';
var geocoder = L.mapbox.geocoder('mapbox.places'),
    map = L.mapbox.map('map', 'examples.map-h67hf2ic');

var cities = {
	sf: "San Francisco, CA",
	nyc: "New York City, NY",
	london: "London, UK",
	vegas: "Las Vegas, NV",
	la: "Los Angeles, CA",
	newOrleans: "New Orleans, LA"
};

function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 11);
    }
};


function musicQueueOnChange(){
	// <select> onchange will queue spotify song 
	// from song object  
}