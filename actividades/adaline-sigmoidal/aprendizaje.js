// html elementos
let iteracionHTML = document.getElementById('iteracion');
let pesosHTML = document.getElementById('pesos');
let sesgoHTML = document.getElementById('sesgo');
let etaHTML = document.getElementById('eta');

// valores
let iteracion = 0;
let pesos = [-1, 1];
let sesgo = -3;
let eta = .1;

var neuronas = [];

let setEntrenamiento = {
  x: [], // arreglo de arreglos
  y: [] // arreglo de arreglos
}

function comenzarAlgoritmo() {
  if (contenidoEntradas === "") {
    alert("Selecciona los archivos primero");
    return;
  }
  // creacion del set de entrenamiento a partir de los archivos
  crearSetsEntrenamiento();
  // definicion de la cantidad de neuronas
  crearDataSetsGrafica(setEntrenamiento.y.length);
  // declaracion de la neurona
  setEntrenamiento.y.forEach((value, it) => neuronas.push(new Neurona(pesos, sesgo, eta, { x: setEntrenamiento.x, y: value })));
  console.log('neuronas: ', neuronas)
  // metodo recursivo para el entrenamiento
  iteration(0);
}

function crearSetsEntrenamiento() {
  contenidoEntradas.forEach((value, it) => {
    setEntrenamiento.y.push(value)
    setEntrenamiento.x.push(it/10);
  });
  console.log('Set de entrenamiento creado:', setEntrenamiento);
}

function iteration(i) {
  let entrenado = true;
  pesosHTML.innerHTML = '';
  iteracionHTML.innerHTML = '';
  sesgoHTML.innerHTML = '';
  etaHTML.innerHTML = '';
  neuronas.forEach((value, iteracion) => {
    if (!value.entrenar()) {
      entrenado = false;
    }
    chart.data.datasets[iteracion].data = [
      { x: 0, y: value.sesgo * -1 / value.pesos[1] },
      { x: value.sesgo * -1 / value.pesos[0], y: 0 },
    ];

    pesosHTML.innerHTML += 'Neurona ' + iteracion + ' -> ' + JSON.stringify(value.pesos) + ' <br> ';
    sesgoHTML.innerHTML += 'Neurona ' + iteracion + ' -> ' +value.sesgo + ' <br> ';
    etaHTML.innerHTML += 'Neurona ' + iteracion + ' -> ' + value.eta + ' <br> ';
  });
  iteracionHTML.innerHTML = i;
  chart.update();
  if (!entrenado) {
    //setTimeout(function () { iteration(++i); }, 4000);
  }
  console.log(i, chart.data.datasets[0].data);
}
