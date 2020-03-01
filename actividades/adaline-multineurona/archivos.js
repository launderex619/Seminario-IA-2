var archivoEntradas = document.getElementById("archivoEntradas");
var archivoSalidas = document.getElementById("archivoSalidas");
var zonaEntradas = document.getElementById('entradas');
var zonaSalidas = document.getElementById('salidas');
var contenidoEntradas = "";
var contenidoSalidas = "";

archivoEntradas.addEventListener("change", (e) => {
  var file = archivoEntradas.files[0];
  var textType = /text.*/;
  if (file.type.match(textType)) {
    var reader = new FileReader();
    reader.onload = function (e) {
      contenidoEntradas = reader.result;
      zonaEntradas.innerHTML = contenidoEntradas.split("\n").join("<br>");;
      crearEntradas();
    }
    reader.readAsText(file);
  }
});


archivoSalidas.addEventListener("change", (e) => {
  var file = archivoSalidas.files[0];
  var textType = /text.*/;
  if (file.type.match(textType)) {
    var reader = new FileReader();
    reader.onload = function (e) {
      contenidoSalidas = reader.result;
      zonaSalidas.innerHTML = contenidoSalidas.split("\n").join("<br>");
      crearSalidas();
    }
    reader.readAsText(file);
  }
});

function crearEntradas() {
  let fichero = contenidoEntradas.split("\n");
  let arregloTemp = [];
  for (let i = 0; i < fichero.length; i++) {
    let paso = fichero[i].trim().split(/\s+/).map(value => +value);
    arregloTemp.push(paso);
  }
  contenidoEntradas = arregloTemp;
  console.log(contenidoEntradas);
}

function crearSalidas() {
  let fichero = contenidoSalidas.split("\n");
  let arregloTemp = [];
  for (let i = 0; i < fichero.length; i++) {
    let paso = fichero[i].trim().split(/\s+/).map(value => +value);
    arregloTemp.push(paso);
  }
  contenidoSalidas = arregloTemp;
  console.log(contenidoSalidas);
  contenidoSalidas = math.transpose(contenidoSalidas);
  console.log(contenidoSalidas);
}