mapboxgl.accessToken = "pk.eyJ1IjoidHJldm9ycGJ1cmtlIiwiYSI6ImNpazA2MzJwMTAwdDV4Ym01YjRxdThzODQifQ.TbsNOsG_WuAzfkT1fNcH6A";
// TODO: add real-time, basic weather data to popups with basic weather images [sunny, partly cloudy, overcast, snowy, rainy, etc] 
var markers = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">The Needles</div><p><a>Check out more routes and information on </a> <a href=\"http://www.mountainproject.com/v/the-needles--kern-river/105834180\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-118.5044, 36.1214]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Yosemite NP</div><p><a>Check out more routes and information on </a><a href=\"http://www.mountainproject.com/v/yosemite-national-park/105833381\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-119.5936, 37.7455]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Smith Rock</div><p><a>Check out more routes and information on </a> <a href=\"http://www.mountainproject.com/v/smith-rock/105788989\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-121.1389, 44.3676]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Index</div><p><a>Check out more routes and information on </a><a href=\"http://www.mountainproject.com/v/index-/105790635\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-121.5551, 47.8206]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Squamish</div><p><a>Check out more routes and information on </a><a href=\"http://www.mountainproject.com/v/squamish/105798170\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-123.1349, 49.6866]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">City of Rocks</div><p><a>Check out more routes and information on </a><a href=\"http://www.mountainproject.com/v/city-of-rocks/105739322\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-113.724, 42.0778]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Grand Teton National Park</div><p><a>Check out more routes and information on </a><a href=\"http://www.mountainproject.com/v/grand-teton-national-park/105802912\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-110.731201, 43.797665]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Wind River Range</div><p><a>Check out more routes and information on </a><a href=\"https://www.mountainproject.com/v/wind-river-range/105823538\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-109.204, 42.7551]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Eldorado Canyon</div><p><a>Check out more routes and information on </a><a href=\"http://www.mountainproject.com/v/eldorado-canyon-sp/105744246\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-105.2950, 39.9307]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Rifle</div><p><a>Check out more routes and information on </a><a href=\"http://www.mountainproject.com/v/rifle-mountain-park/105744310\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-107.6912, 39.7159]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Maple Canyon</div><p><a>Check out more routes and information on </a><a href=\"http://www.mountainproject.com/v/maple-canyon/105739298\" target=\"_blank\" title=\"Opens in a new window\">MountainProject.com</a>",
            "marker-symbol": "park"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-111.6867, 39.5564]
        }
    },
    ]
};


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-hybrid-v8',
    center: [-122.419, 37.7749295],
    zoom: 11,
    bearing: 27,
    pitch: 45
});

map.on('style.load', function() {
    // Add marker data as a new GeoJSON source.
    map.addSource("markers", {
        "type": "geojson",
        "data": markers
    });
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

var popup = new mapboxgl.Popup();


map.on('click', function (e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        includeGeometry: true,
        layer: 'markers'
    }, function (err, features) {

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

map.on('mousemove', function (e) {
    map.featuresAt(e.point, {
        radius: 7.5, // Half the marker size (15px).
        layer: 'markers'
    }, function (err, features) {
        map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';
    });
});

var locations = {
    'sf': {
        bearing: 27,
        center: [-122.419, 37.7749295],
        zoom: 11,
        pitch: 45
    },
    'needles': {
        duration: 17000,
        center: [-118.5044, 36.1214],
        bearing: 30,
        zoom: 12,
        pitch: 20
    },
    'yosemite': {
        duration: 17000,
        bearing: 0,
        center: [-119.5936, 37.7455],
        zoom: 12,
        speed: 0.3,
        pitch: 60
    },
    'smith': {
        duration: 17000,
        bearing: 90,
        center: [-121.1389, 44.3676],
        zoom: 13.3
    },
    'index': {
        duration: 17000,
        bearing: 45,
        center: [-121.5551, 47.8206],
        zoom: 13.3,
        pitch: 20,
        speed: 0.5
    },
    'squamish': {
        duration: 17000,
        bearing: 180,
        center: [-123.1349, 49.6866],
        zoom: 12.3
    },
    'cityOfRocks': {
        duration: 17000,
        bearing: 90,
        center: [-113.724, 42.0778],
        zoom: 12.1,
        pitch: 40
    },
    'jackson': {
        duration: 17000,
        bearing: 270,
        center: [-110.731201, 43.797665],
        zoom: 10.9,
        pitch: 35
    },
    'winds': {
        duration: 17000,
        bearing: 0,
        center: [-109.204, 42.7551],
        zoom: 12.3,
        pitch: 20
    },
    'eldo': {
        duration: 17000,
        bearing: 270,
        center: [-105.2950, 39.9307],
        zoom: 14.3,
        pitch: 20
    },
    'rifle': {
        duration: 17000,
        bearing: 90,
        center: [-107.6912, 39.7159],
        zoom: 14.3,
        pitch: 20
    },
    'maple': {
        duration: 17000,
        bearing: 90,
        center: [-111.6867, 39.5564],
        zoom: 14.3,
        pitch: 20
    }
};


// On every scroll event, check which element is on screen
window.onscroll = function() {
    var locationNames = Object.keys(locations);
    for (var i = 0, x = locationNames.length; i < x; i++) {
        // does locationName contain an array of location names? or what?
        var locationName = locationNames[i];
        // if the function 'isElementOnScreen' defined below runs TRUE then setActiveLocation will be run 
        if (isElementOnScreen(locationName)) {
            setActiveLocation(locationName);
            break;
        }
    }
};

var activeLocationName = 'sf';
function setActiveLocation(locationName) {
    // not sure what this means below
    if (locationName === activeLocationName) return;

    map.flyTo(locations[locationName]);

    document.getElementById(locationName).setAttribute('class', 'active');
    document.getElementById(activeLocationName).setAttribute('class', '');
    
    activeLocationName = locationName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
