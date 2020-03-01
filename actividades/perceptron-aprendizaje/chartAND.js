var plugin = {
  id: 'plugin',
  beforeDraw: function(chart) {   // Labels fijos en la grafica
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx,
      xScale = chart.scales['x-axis-0'],
      yScale = chart.scales['y-axis-0'];

    ctx.restore();
    ctx.font = "2em roboto";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // (0,0)
    ctx.fillText(
      "0",
      xScale.getPixelForValue('0'),
      yScale.getPixelForValue(0)
    );
    // (0,1)
    ctx.fillText(
      "0",
      xScale.getPixelForValue(0),
      yScale.getPixelForValue(1)
    );
    // (1,0)
    ctx.fillText(
      "0",
      xScale.getPixelForValue(1),
      yScale.getPixelForValue(0)
    );
    // (1,1)
    ctx.fillText(
      "1",
      xScale.getPixelForValue(1),
      yScale.getPixelForValue(1)
    );
    ctx.save();
  }
};

var data = [
  {x: 0, y:0},
  {x: 0, y:0},
];

var ctx = document.getElementById('andCanvas').getContext('2d');
var andC = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Entradas',
      data: data,
      borderWidth: 1,
      borderColor: "#ef1414",
      fill: false,
      cubicInterpolationMode: 'monotone'
    },
    {
      label: '0,0',
      data: [{x: 0, y:0}],
      borderWidth: 1,
      borderColor: "#ef14ff",
      fill: false,
      cubicInterpolationMode: 'monotone'
    },
    {
      label: '1,1',
      data: [{x: 1, y:1}],
      borderWidth: 1,
      borderColor: "#ef14ff",
      fill: false,
      cubicInterpolationMode: 'monotone'
    }
    ]
  },
  plugins: [plugin],
  options: {
    title: {
      display: true,
      text: 'Compuerta logica AND'
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