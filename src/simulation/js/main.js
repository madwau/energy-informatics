$(document).ready(function () {

    // Init map
    var map = new Map();

    // Electric vehicles traveling from A to B
    var ev = [];

    ev.push(new EV(map.map, 1, 0, "Munich", "Berlin"));
    ev.push(new EV(map.map, 2, 10, "Munich", "Berlin"));
    ev.push(new EV(map.map, 3, 40, "Munich", "Berlin"));
    ev.push(new EV(map.map, 4, 60, "Munich", "Berlin"));
    ev.push(new EV(map.map, 5, 0, "Berlin", "Munich"));
    ev.push(new EV(map.map, 6, 15, "Berlin", "Munich"));

    // Charging stations at location C
    var cs = [];

    cs.push(new CS(map.map, 1, "Ingolstadt"));
    cs.push(new CS(map.map, 2, "Nuremberg"));
    cs.push(new CS(map.map, 3, "Bayreuth"));
    cs.push(new CS(map.map, 4, "Osterfeld"));
    cs.push(new CS(map.map, 5, "Rabenstein"));
});