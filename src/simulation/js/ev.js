function EV(map, position) {
    this.map = map;
    this.position = position;
    this.marker = undefined;

    this.stats = {
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
    }
}

EV.prototype.init = function () {
    this.marker = new google.maps.Marker({
        map: this.map,
        position: this.position,
        icon: config.markersFolder + config.markers['car']
    });

    this.initStats();

    setInterval(this.animate.bind(this), 100);
};

EV.prototype.update = function (position) {
    this.marker.setPosition(position);
};

EV.prototype.animate = function () {
    var newPosition = {
        lat: this.marker.getPosition().lat() + 0.0001,
        lng: this.marker.getPosition().lng() + 0.0001
    };

    this.update(newPosition);
};

EV.prototype.initStats = function () {
    var info = "";

    for (var key in this.stats) {
        info += key + ": " + this.stats[key] + "<br>";
    }

    var panel = new google.maps.InfoWindow({
        content: info
    });

    this.marker.addListener('click', function () {
        panel.open(this.map, this);
    });
};