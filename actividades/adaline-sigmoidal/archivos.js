var archivoEntradas = document.getElementById("archivoEntradas");
var archivoSalidas = document.getElementById("archivoSalidas");
var zonaEntradas = document.getElementById('entradas');
var zonaSalidas = document.getElementById('salidas');
var contenidoEntradas = "";

archivoEntradas.addEventListener("change", (e) => {
  var file = archivoEntradas.files[0];
  var textType = /text.*/;
  if (file.type.match(textType)) {
    var reader = new FileReader();
    reader.onload = function (e) {
      contenidoEntradas = reader.result;
      // zonaEntradas.innerHTML = contenidoEntradas.split("\n").join("<br>");;
      crearSet();
    }
    reader.readAsText(file);
  }
});

function crearEntradas(cantidadPuntos) {
  if (!cantidadPuntos) {
    alert("Ingresa cantidad valida");
    return;
  }
  let ficheroNombre = "entradas_sigmoidal.txt";
  let contenido = [];
  for (let x = 0; x < cantidadPuntos/10; x += 0.1) {
    let y = Math.cos(x)
    contenido.push(agregarRuido(y) + " ");
  }
  saveAs(new Blob(contenido, { type: "text/plain;charset=utf-8" }), ficheroNombre);
}

function agregarRuido(y) {
  let max = 0.25
  let min = -0.25;
  return y + (Math.random() * ((max - min) + min));
}

function crearSet() {
  let fichero = contenidoEntradas.split("\n");
  let arregloTemp = [];
  for (let i = 0; i < fichero.length; i++) {
    let paso = fichero[i].trim().split(/\s+/).map(value => +value);
    arregloTemp.push(paso);
  }
  contenidoEntradas = arregloTemp;
  console.log('contenido entradas',contenidoEntradas);
}