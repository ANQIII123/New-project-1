let map = createMap(1.3521, 103.8198);

window.addEventListener('DOMContentLoaded', async function () {

    navigator.geolocation.getCurrentPosition(position => {

        const { coords: { latitude, longitude } } = position;
        let locationIcon = L.icon({
            iconUrl: 'location-icon.png',
            iconSize: [38, 40],
            draggable: true,
            autoPan: true
        })
        let locationMarker = new L.marker([latitude, longitude], { icon: locationIcon }).addTo(map);

        locationMarker.bindPopup("<h1>Here's your location!</h1>");
    })


    document.querySelector('#toggle-btn').addEventListener('click', function () {
        // use hasLayer() to check if the map already have the shopping layer group
        // reminder: group2 contains all the circles
        console.log('Button clicked')

        if (map.hasLayer(nearby_group)) {
            map.addLayer(markerClusterLayer);
            map.removeLayer(nearby_group);
            } else {
            map.addLayer(nearby_group);
            map.removeLayer(markerClusterLayer)
            }
    })
})
