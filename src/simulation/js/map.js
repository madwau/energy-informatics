function Map() {
    this.init = function () {

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

    this.init();
}