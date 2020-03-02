"use strict";
// html elementos
let iteracionHTML = document.getElementById('iteracion');
let pesosHTML = document.getElementById('pesos');
let sesgoHTML = document.getElementById('sesgo');
let etaHTML = document.getElementById('eta');

// valores
let iteracion = 0;
let pesos = [-1, 0, .6, 1, .7];
let sesgo = 1;
let eta = 0.2;

var neuronas = [];

let setEntrenamiento = {
  x: [], // arreglo de arreglos
  y: [] // arreglo de arreglos
};

function comenzarAlgoritmo() {
  if (contenidoEntradas === "") {
    alert("Selecciona los archivos primero");
    return;
  }
  // creacion del set de entrenamiento a partir de los archivos
  crearSetsEntrenamiento();
  // definicion de la cantidad de neuronas
  crearDataSetsGrafica(setEntrenamiento);
  // declaracion de la neurona
  neuronas.push(new Neurona(pesos, sesgo, eta));
  console.log('neuronas: ', neuronas);
  // metodo recursivo para el entrenamiento
  iteration(0);
}

function crearSetsEntrenamiento() {
  let arrX = [];
  for (let i = 0; i < contenidoEntradas[0].length; i++) {
    arrX.push(i/10);    
  }
  setEntrenamiento.y = contenidoEntradas;
  setEntrenamiento.x.push(arrX);
  console.log('Set de entrenamiento creado:', setEntrenamiento);
}

function iteration(i) {
  let entrenado = true;
  pesosHTML.innerHTML = '';
  iteracionHTML.innerHTML = '';
  sesgoHTML.innerHTML = '';
  etaHTML.innerHTML = '';
  console.log(chart.data.datasets);
  neuronas.forEach((value, iteracion) => {
    let set = chart.data.datasets[0].data.slice(i, i+pesos.length+1);
    let valor = value.entrenar(set);
    console.log('valor', valor, iteracion, chart.data.datasets);
    chart.data.datasets[1].data[i+pesos.length].y -= valor;     
    pesosHTML.innerHTML += 'Neurona ' + iteracion + ' -> ' + JSON.stringify(value.pesos) + ' <br> ';
    sesgoHTML.innerHTML += 'Neurona ' + iteracion + ' -> ' +value.sesgo + ' <br> ';
    etaHTML.innerHTML += 'Neurona ' + iteracion + ' -> ' + value.eta + ' <br> ';
  });
  iteracionHTML.innerHTML = i;
  chart.update();
  if ( i < setEntrenamiento.y[0].length - (pesos.length+1)) {
     setTimeout(function () { iteration(++i); }, 100);
  }
  // console.log(i, chart.data.datasets[0].data);
}
