// leaflet.js
function initializeMap() {
  var map = L.map('map').setView([4.7110, -74.0721], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  var manzanas = [
    {lat: 4.7110, lng: -74.0721, codigo: '001', nombre: 'Manzana 1', localidad: 'Localidad 1', direccion: 'Dirección 1'},
    {lat: 4.7210, lng: -74.0621, codigo: '002', nombre: 'Manzana 2', localidad: 'Localidad 2', direccion: 'Dirección 2'},
  ];

  manzanas.forEach(function(manzana) {
    var marker = L.marker([manzana.lat, manzana.lng]).addTo(map);
    var infoCard = `
      <div class="card info-card">
        <div class="card-body">
          <h5 class="card-title">${manzana.nombre}</h5>
          <p class="card-text"><strong>Código:</strong> ${manzana.codigo}</p>
          <p class="card-text"><strong>Localidad:</strong> ${manzana.localidad}</p>
          <p class="card-text"><strong>Dirección:</strong> ${manzana.direccion}</p>
        </div>
      </div>
    `;
    marker.bindPopup(infoCard);
  });
}

  