function CS(map, id, location) {
    var CS = this;

    var stats = {
        id: id,
        time: '',
        queue_length: '',
        busy_poles_fc: '',
        busy_poles_tsc: '',
        arrived_cars: '',
        leaving_cars: '',
        queued_cars: '',
        plugged_cars: '',
        energy_consumed: '',
        energy_produced: '',
        energy_stored: '',
        energy_bought: '',
        queue_prediction_fc: '',
        queue_prediction_tsc: ''
    };

    var schedule = [
        {
            id: 1,
            data: {
                ev: '',
                start: '',
                duration: '',
                charging_technology: '',
                binding: '',
                confirmed: ''
            }
        }
    ];

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
        panel.setContent(CS.getStats());
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