L.mapbox.accessToken = 'pk.eyJ1IjoidHJldm9ycGJ1cmtlIiwiYSI6ImNpazA2MzJwMTAwdDV4Ym01YjRxdThzODQifQ.TbsNOsG_WuAzfkT1fNcH6A';
		var map = L.mapbox.map('map', 'mapbox.streets');

		var gpx_array = ['stravaRuns/20150711-144059-Run.gpx', 
						"stravaRuns/20150716-233605-Run.gpx",
						"stravaRuns/20150726-163103-Run.gpx",
						"stravaRuns/20150727-145512-Run.gpx",
						"stravaRuns/20150730-010120-Run.gpx",
						"stravaRuns/20150731-234045-Run.gpx",
						"stravaRuns/20150802-130541-Run.gpx",
						"stravaRuns/20150803-094237-Run.gpx",
						"stravaRuns/20150806-092744-Run.gpx",
						"stravaRuns/20150809-113252-Run.gpx",
						"stravaRuns/20150810-215259-Run.gpx",
						"stravaRuns/20150812-231332-Run.gpx",
						"stravaRuns/20150814-002041-Run.gpx",
						"stravaRuns/20150815-145734-Run.gpx",
						"stravaRuns/20150711-144059-Run.gpx"];
    	/*
		// trying to map the omnivore.gpx() function to an array of all my GPX files
    	var runLayer = gpx_array.map(function(file){
    		omnivore.gpx(file)
    			.on('ready', function(){
    				map.fitBounds(runLayer.getBounds());
    			})
    	})
    	*/
    	
    	// add all gpx files to map
    	// do not touch ANYTHING on lines 52-133

    	// TODO: add markers to
    	
    	var runLayer = omnivore.gpx(gpx_array[0])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);

    	var runLayer1 = omnivore.gpx(gpx_array[1])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    		    	var runLayer2 = omnivore.gpx(gpx_array[2])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    	var runLayer3 = omnivore.gpx(gpx_array[3])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
        var runLayer4 = omnivore.gpx(gpx_array[4])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    	var runLayer5 = omnivore.gpx(gpx_array[5])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    		
    	var runLayer6 = omnivore.gpx(gpx_array[6])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    	var runLayer7 = omnivore.gpx(gpx_array[7])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    	var runLayer8 = omnivore.gpx(gpx_array[8])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    	var runLayer9 = omnivore.gpx(gpx_array[9])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
			
        var runLayer10 = omnivore.gpx(gpx_array[10])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    	var runLayer11 = omnivore.gpx(gpx_array[11])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    		
		var runLayer12 = omnivore.gpx(gpx_array[12])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    	var runLayer13 = omnivore.gpx(gpx_array[13])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
        var runLayer14 = omnivore.gpx(gpx_array[14])
    		.on('ready', function() {
        		map.fitBounds(runLayer.getBounds());
    		})
    		.addTo(map);
    	map = .setView([44.35, -68.3], 11);