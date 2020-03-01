var andClase = document.getElementById('CompuertaANDClase').getContext('2d');
// grafico por defecto
var chartClase = new Chart(andClase, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: [0, .5, 1, 1.5],
    datasets: [
      {
        label: 'Vista en clase',
        borderColor: 'rgb(255, 99, 132)',
        data: [1.5, 1, .5, 0],
      }
    ]
  },
  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Compuerta logica AND'
    }
  }
});

// Custom
var andCustom = document.getElementById('CompuertaANDCustom').getContext('2d');
var chartCustom = new Chart(andCustom, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: [0,1],
    datasets: [
      {
        label: 'Custom',
        borderColor: 'rgb(99, 132, 255)',
        data: [1.03, 0.786],
      }
    ]
  },
  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Compuerta logica AND'
    }
  }
});

function dibuja(){
  let grap1 = document.getElementById('CompuertaANDClase').getContext('2d');
  grap1.fillStyle = "black";
  grap1.font = "30px Arial";
  grap1.fillText("1", 300, 200);
  grap1.fillText("0", 10, 200);
  grap1.fillText("0", 10, 400);
  grap1.fillText("0", 300, 400);

    let grap2 = document.getElementById('CompuertaANDCustom').getContext('2d');
  grap2.fillStyle = "black";
  grap2.font = "30px Arial";
  grap2.fillText("1", 300, 200);
  grap2.fillText("0", 10, 200);
  grap2.fillText("0", 10, 400);
  grap2.fillText("0", 300, 400);
}