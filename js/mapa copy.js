
// Creamos el mapa


var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-77.267, 1.283]),
      zoom: 8
    })
});


// Agregamos el primer marcador en ipiales
let marcador = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-77.63966, 0.82501]) //Cordenadas Ipiales Nariño
    ),
});

// Agregamos icono
marcador.setStyle(new ol.style.Style({
    image: new ol.style.Icon({
        src: "img/mapa.png",
        imgsize:[5,5]
    })
}));

// Segundo marcado en la laguna de la cocha
let marcador2 = new ol.Feature({
  geometry: new ol.geom.Point(
      ol.proj.fromLonLat([-78.3643, 0.3003]) //Cordenadas Ipiales Nariño
  ),
});


map.on('singleclick', function(evt) {
  var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
      // Aquí se puede filtrar la feature
      return feature;
  });

  if (feature) {
      console.log("Click en: ", feature);
      console.log(feature.ol_uid)
  }

  if (feature.ol_uid===24){
     console.log("funciono")
  }
});








// marcadores debe ser un arreglo
const marcadores = [marcador,marcador2]; // Arreglo para que se puedan agregar otros más tarde

//marcadores.push(marcador);// Agregamos el marcador al arreglo

let capa = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: marcadores, // A la capa le ponemos los marcadores
    }),
});
// Y agregamos la capa al mapa
map.addLayer(capa);