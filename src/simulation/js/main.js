$(document).ready(function () {

    // Init map
    var map = new Map();


    // Electric vehicles traveling from A to B
    var ev = [];

    ev.push(new EV(map.map, "Munich", "Berlin"));
    ev.push(new EV(map.map, "Berlin", "Munich"));


    // Charging stations at location C
    var cs = [];

    cs.push(new CS(map.map, "Ingolstadt"));
    cs.push(new CS(map.map, "Nuremberg"));
    cs.push(new CS(map.map, "Bayreuth"));
    cs.push(new CS(map.map, "Rabenstein"));
    cs.push(new CS(map.map, "Osterfeld"));
});