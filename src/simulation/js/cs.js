function CS(map) {
    var CS = this;

    this.init = function (position) {
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            icon: config.markers.battery
        });
    };
}