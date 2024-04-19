var heladeras = [
    { latitud: -34.61315, longitud: -58.37723, nombre: "Heladera A" },
    { latitud: -34.590075, longitud: -58.386510, nombre: "Heladera B" },
    { latitud: -34.579320, longitud: -58.413611, nombre: "Heladera C" },
    { latitud: -34.601305, longitud: -58.415235, nombre: "Heladera D" },
    { latitud: -34.583808, longitud: -58.452976, nombre: "Heladera E" }
];

var mapContainer = document.getElementById('map');

var map = L.map(mapContainer).setView([-34.6037, -58.3816], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

heladeras.forEach(function(heladera) {
    var marker = L.marker([heladera.latitud, heladera.longitud]).addTo(map);
    marker.bindPopup(heladera.nombre); 

    function openPopupWithDelay() {
        setTimeout(function() {
            marker.openPopup();
        }, 40); 
    }

    marker.on('mouseover', openPopupWithDelay);

    marker.on('mouseout', function() {
        this.closePopup();
    });
});
