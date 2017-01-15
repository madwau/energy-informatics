function EV(map, origin, destination) {
    var EV = this;

    var stats = {
        time: undefined,
        position: undefined,
        geo_position: undefined,
        distance_travelled: undefined,
        time_travelled: undefined,
        time_waited: undefined,
        time_charged: undefined,
        time_driven: undefined,
        battery_level: undefined,
        speed: undefined,
        driving_flag: undefined,
        schedule_status: undefined
    };

    this.start = function () {
        var directions = new google.maps.DirectionsService();

        var request = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        };

        directions.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                EV.autoUpdate(map, result.routes[0].legs);
            }
        });
    };

    this.autoUpdate = function (map, legs) {
        var route, marker, panel;

        route = new google.maps.Polyline({
            path: [],
            geodesic: true,
            strokeColor: '#000000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            editable: false,
            map: map
        });

        marker = new google.maps.Marker({
            map: map,
            icon: config.markers.car
        });

        panel = new google.maps.InfoWindow({
            content: EV.getStats()
        });

        EV.initStats(panel, marker);

        var timeUnit = 0;

        for (var i = 0; i < legs.length; i++) {
            for (var j = 0; j < legs[i].steps.length; j++) {
                for (var k = 0; k < legs[i].steps[j].path.length; k++) {
                    setTimeout(function (coords) {

                        route.getPath().push(coords);
                        EV.moveMarker(map, marker, coords);
                        EV.updateStats(panel);

                    }, 200 * timeUnit++, legs[i].steps[j].path[k]);
                }
            }
        }

    };

    this.moveMarker = function (map, marker, latlng) {
        marker.setPosition(latlng);
    };

    this.initStats = function (panel, marker) {
        marker.addListener('click', function () {
            panel.open(this.map, this);
        });
    };

    this.updateStats = function (panel) {
        panel.setContent(EV.getStats());
    };

    this.getStats = function () {
        var info = "";

        for (var key in stats) {
            info += key + ": " + stats[key] + "<br>";
        }

        return info;
    }

    this.start();
}