

var container = document.getElementById("popup");
var content = document.getElementById("popup-content");
var popupCloser = document.getElementById("popup-closer");


/**
 * Objeto para establecer el contenedor del cuadro emergente
*Si se debe desplazar automáticamente, es decir, si la marca está en el borde de la pantalla, el mapa se desplaza automáticamente cuando se abre para que el cuadro emergente sea completamente visible
**/

 var overlay = new ol.Overlay({
 element: container,
 autoPan: true
});


// Creamos un nuevo objeto mapa
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

/**
 * Aqui agregamos los distintos masrcadores que apareceran en el mapa
*/


// Agregamos el primer marcador en en la laguna de la cocha
let marcador = new ol.Feature({
    geometry: new ol.geom.Point(
        ol.proj.fromLonLat([-77.1486, 1.09703]) 
    ),
});

//Segundo marcado en el santuario de las lajas
let marcador2 = new ol.Feature({
  geometry: new ol.geom.Point(
      ol.proj.fromLonLat([-77.5828, 0.811667]) 
  ),
});


// Tercer marcador para la laguna verde
let marcador3 = new ol.Feature({
  geometry: new ol.geom.Point(
      ol.proj.fromLonLat([-77.7826 , 1.09106]) 
  ),
});


// Tercer marcador para el moroo tumaco
let marcador4 = new ol.Feature({
  geometry: new ol.geom.Point(
      ol.proj.fromLonLat([ -78.79275, 1.79112]) 
  ),
});



/**
 * Agregamo los respectivos Iconos a los marcadores
*/

marcador.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
      src: "img/geo.png",
      scale: 0.07,
  })
}));

marcador2.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
      src: "img/geo.png",
      scale: 0.07,
  })
}));

marcador3.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
      src: "img/geo.png",
      scale: 0.07,
  })
}));

marcador4.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
      src: "img/geo.png",
      scale: 0.07,
  })
}));






// Agregamos los 4 marcadores al arreglo
const marcadores = [marcador,marcador2,marcador3,marcador4]; // Arreglo para que se puedan agregar otros más tarde

/**
 * Colocamos los 4 marcadores a la capa y finalmente agregamos al mapa
*/

let capa = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: marcadores,
    }),
});

map.addLayer(capa);



/**
 * Evento Click sobre cada uno de los marcadores
 */

map.on('click',function(e){
        // Obtener área de píxeles al hacer clic
        var pixel = map.getEventPixel(e.originalEvent);
        map.forEachFeatureAtPixel(pixel,function(feature){
            // coodinate almacena la información de coordenadas cuando se hace clic
            var coodinate = e.coordinate;
            // Establece el contenido del cuadro emergente, que se puede personalizar con HTML
            //content.innerHTML = "<div><h1 style='color:black'>Las Lajas</h1><img src='img/maria.jpg' width='150px' height='150px'></div>";
            // Establecer la posición de visualización de la superposición
            overlay.setPosition(coodinate);
            // Mostrar superposición
            map.addOverlay(overlay);
            //console.log(e)
            console.log(feature.ol_uid)

            if ((feature.ol_uid) == 25){
              content.innerHTML = "<div><h1 style='color:black'>Laguna la Cocha</h1><img src='img/cocha.jpg' width='200px' height='200px'></div>";
            }

            if ((feature.ol_uid) == 27){
              content.innerHTML = "<div><h1 style='color:black'>Las Lajas</h1><img src='img/lajas1.jpg' width='200px' height='200px'></div>";
            }

            if ((feature.ol_uid) == 29){
              content.innerHTML = "<div><h1 style='color:black'>Laguna Verde</h1><img src='img/lagunaverde.jpg' width='200px' height='200px'></div>";
            }


            if ((feature.ol_uid) == 31){
              content.innerHTML = "<div><h1 style='color:black; font: size 5px;'>Morro Tumaco</h1><img src='img/morro.jpg' width='200px' height='200px'></div>";
            }
            
    
        });
    });




  

/**const img = ['img/wp1','img/wp2','img/wp3']
cont = 0;

function Carrusel(contenedor1){
  contenedor1.addEventListener('click',e =>{
    let atras = contenedor1.querySelector('.atras'),
        adelante = contenedor1.querySelector('.adelante'),
        imgagen = contenedor1.querySelector('.adelante'),
  })
}
**/






