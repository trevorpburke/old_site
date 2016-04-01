L.mapbox.accessToken = 'pk.eyJ1IjoidHJldm9ycGJ1cmtlIiwiYSI6ImNpazA2MzJwMTAwdDV4Ym01YjRxdThzODQifQ.TbsNOsG_WuAzfkT1fNcH6A';
var geocoder = L.mapbox.geocoder('mapbox.places'),
    map = L.mapbox.map('map', 'examples.map-h67hf2ic');

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


function musicQueue(){
	//  TODO <input> will query spotify for song matching input query
    // need to include modal that informs user that inputted query does not match any songs 
    // maybe implement mapbox or html5 location request to automate music queue 
}

function changeMapStyle(){
    // TODO option to change map style? 
}

function makePlaylist() {
    // TODO allow users to create of songs about city 
}

// OAuth to allow users to save playlists made? 