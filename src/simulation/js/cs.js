function CS(map, location) {
    var CS = this;

    var stats = {
        time: undefined,
        queue_length: undefined,
        busy_poles_fc: undefined,
        busy_poles_tsc: undefined,
        arrived_cars: undefined,
        leaving_cars: undefined,
        queued_cars: undefined,
        plugged_cars: undefined,
        energy_consumed: undefined,
        energy_produced: undefined,
        energy_stored: undefined,
        energy_bought: undefined,
        queue_prediction_fc: undefined,
        queue_prediction_tsc: undefined
    };

    var schedule = {
        booking_id: 1,
        data: {
            ev: undefined,
            start: undefined,
            duration: undefined,
            charging_technology: undefined,
            binding: undefined,
            confirmed: undefined
        }
    };

    this.init = function () {
        var marker = new google.maps.Marker({
            map: map,
            icon: config.markers.battery
        });

        CS.setPosition(marker);

        var panel = new google.maps.InfoWindow({
            content: CS.getStats()
        });

        CS.initStats(panel, marker);
    };

    this.setPosition = function (marker) {
        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({'address': location}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                marker.setPosition(results[0].geometry.location);
            }
        });
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
        var info = '';

        for (var key in stats) {
            info += key + ': ' + stats[key] + '<br>';
        }

        return info;
    };

    this.init();
}