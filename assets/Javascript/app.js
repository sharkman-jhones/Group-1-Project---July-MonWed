var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 2,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: 'satellite'
  });
  map.setTilt(45);
}

/*function loadMapShapes(){
	map.data.loadGeoJson('states.json', {idPropertyName: 'STATE'});
}

loadMapShapes();*/

/*var mymap = L.map('map').setView([0, 0], 2);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);*/