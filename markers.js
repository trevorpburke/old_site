var markers = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">The Needles</div><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
            "marker-symbol": "theatre"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-118.5044, 36.1214]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Yosemite Valley</div><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href=\"http://madmens5finale.eventbrite.com/\" target=\"_blank\" title=\"Opens in a new window\">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
            "marker-symbol": "theatre"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-119.5936, 37.7455]
        }
    }]

map.on('style.load', function() {
    // Add marker data as a new GeoJSON source.
    map.addSource("markers", {
        "type": "geojson",
        "data": markers
    });

    // Add a layer showing the markers.
    map.addLayer({
        "id": "markers",
        "interactive": true,
        "type": "symbol",
        "source": "markers",
        "layout": {
            "icon-image": "{marker-symbol}-15",
            "icon-allow-overlap": true
        }
    });
});

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mousemove', function(e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        includeGeometry: true,
        layer: 'markers'
    }, function(err, features) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';

        if (err || !features.length) {
            popup.remove();
            return;
        }

        var feature = features[0];

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(feature.geometry.coordinates)
            .setHTML(feature.properties.description)
            .addTo(map);
    });
});