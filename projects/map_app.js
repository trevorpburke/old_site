L.mapbox.accessToken = 'pk.eyJ1IjoidHJldm9ycGJ1cmtlIiwiYSI6ImNpazA2MzJwMTAwdDV4Ym01YjRxdThzODQifQ.TbsNOsG_WuAzfkT1fNcH6A';
var geocoder = L.mapbox.geocoder('mapbox.places'),
    map = L.mapbox.map('map', 'examples.map-h67hf2ic');

var spotifyApi = new SpotifyWebApi();

function showMap(err, data) {
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 11);
    }
};

window.onload = function() {
  document.getElementById("search").focus();
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search').addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        geocoder.query(this.value, showMap);
        spotifyApi.searchTracks(this.value)
            .then(function(data){
                console.log(data);
                audioObject = new Audio()
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();                
                // TODO songs should stop on new keydown 
                // TODO stream top 5 songs
                // TODO create visual player in top right screen
                // TODO 
            }, function(err){
                console.error(err);
            })
    }
  }, false);
});

function changeMapStyle(style){
    // TODO option to change map style? 
}

function makePlaylist() {
    // TODO allow users to create playlist of songs about city 
}

// TODO OAuth to allow users to save playlists made? 