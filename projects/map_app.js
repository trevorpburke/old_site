L.mapbox.accessToken = 'pk.eyJ1IjoidHJldm9ycGJ1cmtlIiwiYSI6ImNpazA2MzJwMTAwdDV4Ym01YjRxdThzODQifQ.TbsNOsG_WuAzfkT1fNcH6A';
var geocoder = L.mapbox.geocoder('mapbox.places'),
    map = L.mapbox.map('map', 'examples.map-h67hf2ic');

document.getElementById("search").addEventListener("keypress",
                                                    changeMapAndSong);

var spotifyApi = new SpotifyWebApi();

/*var results = function(){
    if (event.keyCode == "13"){
        var data=this.value;
        geocoder.query(this.value, showMap);
    }
}
*/


function changeMapAndSong(){
    if (event.keyCode == "13"){
        var data=this.value;
        geocoder.query(this.value, showMap);
        spotifyApi.searchTracks(this.value)
            .then(function(data){
                console.log(data);
                audioObject = new Audio()
                audioObject = new Audio(data.tracks.items[0].preview_url);
                var current = audioObject.play();                
                // TODO figure out way 
                //to stop song on new keypress
                // TODO stream top 5 songs
                // TODO create visual player in top right screen
                // TODO 
            }, function(err){
                console.error(err);
            })
    }
}


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

function changeMapStyle(){
    // TODO option to change map style? 
}

function makePlaylist() {
    // TODO allow users to create of songs about city 
}


// OAuth to allow users to save playlists made? 