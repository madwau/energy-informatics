$(document).ready(function () {

    // Init map
    var map = new Map();
    map.init();


    // List of electric vehicles (EV)
    var ev = [];

    for (var i = 0; i < 4; i++) {
        ev[i] = new EV(map.map);
    }

    ev[0].start("Munich", "Berlin");
    ev[1].start("Hamburg", "Stuttgart");
    ev[2].start("Dresden", "Cologne");
    ev[3].start("Frankfurt", "Bonn");


    // List of charging stations (CS)
    var cs = [];

    for (i = 0; i < 4; i++) {
        cs[i] = new CS(map.map);
    }

    cs[0].init(new google.maps.LatLng(48.8583694, 2.2944796));
});