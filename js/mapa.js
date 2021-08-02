
/**
 * Estudiante: Diego Fernado Moran Figueroa
 * Universidad Nacional de Colombia Sede-Palmira
 * 
 */

// Variables donde se va a colocar el mapa y marcadores mediante JavaScript 

var container = document.getElementById("popup");
var content = document.getElementById("popup-content");
var popupCloser = document.getElementById("popup-closer");
// Defino el arreglo donde estan alamacenadas todas las imagenes que mediante el uso de Java Script se realiza las interaccioens
const imgCarrusel = ['img/wp1.jpg','img/wp2.jpg','img/wp3.jpg','img/wp4.jpg','img/wp5.jpg','img/wp7.jpg']

// Contadores para controlar  cuando las imagenes van adelante o atras en el carrusel de imagenes
cont = 0;
cont1 = 0;

// Variables donde se van a colocar  el carrusel de imagenes mediante Java Script 

let contenedorCarrusel = document.querySelector('.carrusel');
let atras = document.querySelector('.atras');
let adelante = document.querySelector('.adelante');
let imagenCarrusel = document.querySelector('.carrusel_image');


/**
 * Objeto para establecer el contenedor del cuadro emergente
*Si se debe desplazar automáticamente, es decir, si la marca está en el borde de la pantalla, el mapa se desplaza automáticamente cuando se abre para que el cuadro emergente sea completamente visible
**/

 var overlay = new ol.Overlay({
 element: container,
 autoPan: true
});


/**
 * Creamos un nuevo objeto mapa para desplegar toda la informacion
 * En este caso usamos la libreria de open layers  para graficar el mapa
 * Fuente:  https://openlayers.org/
 */
 


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
 * Agregamos los distintos masrcadores que apareceran en el mapa
*/


// Agregamos el primer marcador en en la laguna de la cocha-Nariño
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


// cuarto marcador para el playa tumaco
let marcador4 = new ol.Feature({
  geometry: new ol.geom.Point(
      ol.proj.fromLonLat([ -78.79275, 1.79112]) 
  ),
});

//

// Quinto marcador para samaniego nariño
let marcador5 = new ol.Feature({
  geometry: new ol.geom.Point(
      ol.proj.fromLonLat([ -77.5937, 1.33438]) 
  ),
});

// Sexto marcador para el santuario de iles
let marcador6 = new ol.Feature({
  geometry: new ol.geom.Point(
      ol.proj.fromLonLat([ -77.517, 0.967]) 
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

marcador5.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
      src: "img/geo.png",
      scale: 0.07,
  })
}));

marcador6.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
      src: "img/geo.png",
      scale: 0.07,
  })
}));



/**
 *  Agregamos los marcadores en el mapa  mediante un arreglo y finalmente agregamos
 * todos los marcadores mediante una capa del mapa
 */


const marcadores = [marcador,marcador2,marcador3,marcador4,marcador5,marcador6]; 
let capa = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: marcadores,
    }),
});

map.addLayer(capa);



/**
 * Evento Click sobre cada uno de los marcadores
 * Al dar click sobre cada marcador se muestra una imagen, de un lugar en nariño
 */

map.on('click',function(e){

        // Obtener área de píxeles al hacer clic
        var pixel = map.getEventPixel(e.originalEvent);
        map.forEachFeatureAtPixel(pixel,function(feature){
            // coodinate almacena la información de coordenadas cuando se hace clic
            var coodinate = e.coordinate;
            overlay.setPosition(coodinate);
            // Mostrar superposición
            map.addOverlay(overlay);
            
            // Deacuerdo a la ubicacion del click se establece el contenido del cuadro emeregente

            if ((feature.ol_uid) == 25){
              content.innerHTML = "<div><h1 style='color:black; font-size: 25px; text-align: center;' >Laguna la Cocha</h1><img src='img/cocha.jpg' width='200px' height='200px'></div>";
            }

            if ((feature.ol_uid) == 27){
              content.innerHTML = "<div><h1 style='color:black; font-size: 25px; text-align: center;'>Las Lajas</h1><img src='img/lajas1.jpg' width='200px' height='200px'></div>";
            }

            if ((feature.ol_uid) == 29){
              content.innerHTML = "<div><h1 style='color:black; font-size: 25px; text-align: center;'>Laguna Verde</h1><img src='img/lagunaverde.jpg' width='200px' height='200px'></div>";
            }


            if ((feature.ol_uid) == 31){
              content.innerHTML = "<div><h1 style='color:black; font-size: 25px; text-align: center;'>Morro Tumaco</h1><img src='img/morro.jpg' width='200px' height='200px'></div>";
            }

            if ((feature.ol_uid) == 33){
              content.innerHTML = "<div><h1 style='color:black; font-size: 25px; text-align: center;'>Samaniego</h1><img src='img/samaniego.jpeg' width='200px' height='200px'></div>";
            }

            if ((feature.ol_uid) == 35){
              content.innerHTML = "<div><h1 style='color:black; font-size: 25px; text-align: center;'>Santuario de Iles</h1><img src='img/santuario_iles.jpg' width='200px' height='200px'></div>";
            }
            
    
        });
    });


// Este bloque de codigo permite  mostrar imagenes , deacuerdo al evento click
// Si se digita el boton atras  se ejecuta la funcion
atras.addEventListener('click', () => {
  //console.log("Funciono atras")
  if (cont > 0){
   imagenCarrusel.src = imgCarrusel[cont-1];
   cont = cont-1
   console.log(cont)
  }
  else{
    imagenCarrusel.src = imgCarrusel[imgCarrusel.length-1];
    cont = imgCarrusel.length -1;
  }
  
});


// Este bloque permite mostar imagenes, deacuero al evento click
// si se digita el boton adelante se ejecuta la funcion 

adelante.addEventListener('click', () => {
  //console.log("Funciono adelante")

  if (cont1 < imgCarrusel.length-1){
   imagenCarrusel.src = imgCarrusel[cont1+1];
   cont1 = cont1+1
   console.log(cont1)
  }
  else{
    imagenCarrusel.src = imgCarrusel[0];
    cont1 = 0;
  }
   
});








