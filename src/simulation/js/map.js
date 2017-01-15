function Map() {
    this.map = undefined;
}

Map.prototype.init = function () {
    // Create new Google Map
    this.map = new google.maps.Map(document.getElementById(config.mapID), {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Center and fit country in viewport
    var geocoder = new google.maps.Geocoder();
    var map = this.map;

    geocoder.geocode({'address': config.mapCenter}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.fitBounds(results[0].geometry.viewport);
        }
    });
};

$(document).ready(function () {
    // Init map
    var map = new Map();
    map.init();


    // List of electric vehicles (EV)
    var ev = [];

    for (var i = 0; i < 10; i++) {

        var position = {
            lat: 48.1373930 + i * 0.5,
            lng: 11.5754480 - i * 0.2
        };

        ev[i] = new EV(map.map, position);
        ev[i].init();
    }


    // List of charging stations (CS)
    var cs = []
});