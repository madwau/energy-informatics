$(document).ready(function () {

    // Init map
    var map = new Map();


    // Electric vehicles traveling from A to B
    var ev = [];

    ev.push(new EV(map.map, 1, "Munich", "Berlin"));
    ev.push(new EV(map.map, 2, "Berlin", "Munich"));


    // Charging stations at location C
    var cs = [];

    cs.push(new CS(map.map, 1, "Ingolstadt"));
    cs.push(new CS(map.map, 2, "Nuremberg"));
    cs.push(new CS(map.map, 3, "Bayreuth"));
    cs.push(new CS(map.map, 4, "Osterfeld"));
    cs.push(new CS(map.map, 5, "Rabenstein"));
});