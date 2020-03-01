// html elementos
let iteracionAndHTML = document.getElementById('iteracionAnd');
let pesosAndHTML = document.getElementById('pesosAnd');
let sesgoAndHTML = document.getElementById('sesgoAnd');
let etaAndHTML = document.getElementById('etaAnd');
let iteracionOrHTML = document.getElementById('iteracionOr');
let pesosOrHTML = document.getElementById('pesosOr');
let sesgoOrHTML = document.getElementById('sesgoOr');
let etaOrHTML = document.getElementById('etaOr');
// valores
// pesos.innerHTML = JSON.stringify({w1: 0, w2: 0})
let iteracion = 0;
let pesos = [1,.60];
let sesgo = .5;
let eta = .08;
let setEntrenamientoAnd = {
  x: [[1,1],[1,0],[0,1],[0,0]],
  y: [1,0,0,0]
}
let setEntrenamientoOr = {
  x: [[1,1],[1,0],[0,1],[0,0]],
  y: [1,1,1,0]
}
let neuronaAnd = new Neurona(pesos, sesgo, eta, setEntrenamientoAnd);
let neuronaOr = new Neurona(pesos, sesgo, eta, setEntrenamientoOr);
iterationAnd(0);
iterationOr(0);

function iterationAnd(i) {
  let entrenado = neuronaAnd.entrenar();
  andC.data.datasets[0].data = [
        {x: 0, y: neuronaAnd.sesgo* -1 / neuronaAnd.pesos[1]},
        {x: neuronaAnd.sesgo* -1 / neuronaAnd.pesos[0], y:0},
      ];
  pesosAndHTML.innerHTML = JSON.stringify(neuronaAnd.pesos);
  iteracionAndHTML.innerHTML = i;
  sesgoAndHTML.innerHTML = neuronaAnd.sesgo;
  etaAndHTML.innerHTML = neuronaAnd.eta;
  andC.update();
  if(!entrenado){
    setTimeout(function() { iterationAnd(++i); } ,1000);
  }
  console.log(i, andC.data.datasets[0].data);
}

function iterationOr(i) {
  let entrenado = neuronaOr.entrenar();
  orC.data.datasets[0].data = [
        {x: 0, y: neuronaOr.sesgo* -1 / neuronaOr.pesos[1]},
        {x: neuronaOr.sesgo* -1 / neuronaOr.pesos[0], y:0},
      ];
  pesosOrHTML.innerHTML = JSON.stringify(neuronaOr.pesos);
  iteracionOrHTML.innerHTML = i;
  sesgoOrHTML.innerHTML = neuronaOr.sesgo;
  etaOrHTML.innerHTML = neuronaOr.eta;
  orC.update();
  if(!entrenado){
    setTimeout(function() { iterationOr(++i); } ,1000);
  }
  console.log(i, orC.data.datasets[0].data);
}