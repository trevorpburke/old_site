window.onload = () => document.getElementById("search").focus();

L.mapbox.accessToken = 'pk.eyJ1IjoidHJldm9ycGJ1cmtlIiwiYSI6ImNpazA2MzJwMTAwdDV4Ym01YjRxdThzODQifQ.TbsNOsG_WuAzfkT1fNcH6A';
const geocoder = L.mapbox.geocoder('mapbox.places'),
    map = L.mapbox.map('map', 'examples.map-h67hf2ic');

const spotifyApi = new SpotifyWebApi();

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search').addEventListener('keydown', mapSearch, false);
  document.getElementById('search').addEventListener('keydown', songSearch, false);
	}
)

function mapSearch(e){
	if (e.keyCode === 13){
		geocoder.query(this.value, showMap);
	}
}

function showMap(err, data) {
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } 
    if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 11);
    }
}

function songSearch(e){
	if (e.keyCode === 13){
		spotifyApi.searchTracks(this.value)
			.then(function(data){
				const track = data.tracks.items[0];
				const artist = track.artists[0].name;
	            const song = track.name;
	            const albumUrl = track.album.images[1].url;
	            document.getElementById("album-img").src = albumUrl;
				document.getElementById('album-img').addEventListener('click', function(){
					const audioObject = new Audio(track.preview_url);
					const nowPlaying = document.getElementById('now-playing');
	               	nowPlaying.innerHTML = 'Song: ' + song + '<br>' + 'Artist: ' + artist;
	               	audioObject.pause();
	               	audioObject.play();
				}, false);
			})
	}
}