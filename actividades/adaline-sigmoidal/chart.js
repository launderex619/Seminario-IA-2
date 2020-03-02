var plugin = {
  id: 'plugin',
  beforeDraw: function (chart) { // Labels fijos en la grafica
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx,
      xScale = chart.scales['x-axis-0'],
      yScale = chart.scales['y-axis-0'];

    ctx.restore();
    ctx.font = "1em roboto";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // para cada punto de entrada (coordenadas)
    for (let i = 0; i < contenidoEntradas.length; i++) {
      ctx.fillText(
        `P: ${i}`,
        xScale.getPixelForValue(`${contenidoEntradas[i][0]}`),
        yScale.getPixelForValue(contenidoEntradas[i][1])
      );
    }
    ctx.font = "2em roboto";
    // para cada clase de salida (Zonas validas)
    //let llaves = [];
    //let valores = []
    //let zona = 0;
    //math.transpose(contenidoSalidas).filter(( t={}, a=> !(t[a]=a in t) )).forEach(value => {llaves.push(value); valores.push('Zona' + zona++)});
    //for (let i = 0; i < llaves.length; i++) {      
    //ctx.fillText(
    // valores[i],
    // xScale.getPixelForValue(`${llaves[i][0]}`),
    // yScale.getPixelForValue(llaves[i][1])
    //);
    //}
    ctx.save();
  }
};

var data = [{
    x: 0,
    y: 0
  },
  {
    x: 0,
    y: 0
  },
];
let sets = [];
var ctx = document.getElementById('canvas').getContext('2d');
var chart;

function crearGrafico() {
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: sets
    },
    plugins: [plugin],
    options: {
      title: {
        display: true,
        text: 'Problema del archivo'
      },
      tooltips: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          scaleLabel: {
            display: true,
            labelString: 'X',
            fontSize: 14
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Y',
            fontSize: 15
          }
        }]
      }
    }
  });
  console.log('chart', chart.data);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function crearDataSetsGrafica(setEntrenamiento) {
  data = [];
  data2 = [];
  for (let i = 0; i < setEntrenamiento.x[0].length; i++) {
    data.push({
      x: setEntrenamiento.x[0][i],
      y: setEntrenamiento.y[0][i]
    })
    data2.push({
      x: setEntrenamiento.x[0][i],
      y: setEntrenamiento.y[0][i]
    })
  }

  let obj = {
    label: `Grafica 1`,
    data: data,
    borderWidth: 1,
    borderColor: getRandomColor(),
    fill: true,
    cubicInterpolationMode: 'monotone'
  };
  sets.push(obj);
  let obj2 = {
    label: `Grafica 2`,
    data: data2,
    borderWidth: 1,
    borderColor: getRandomColor(),
    fill: true,
    cubicInterpolationMode: 'monotone'
  };
  sets.push(obj2);

  console.log('sets', sets);
  crearGrafico();
}