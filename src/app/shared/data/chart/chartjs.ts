import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


//BarChart
export let barChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11
      }
    }]
  }
};
export let barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let barChartType: ChartType = 'bar';
export let barChartLegend = true;
export let barChartPlugins = [];
export let barChartData: ChartDataSets[] = [
  {
    data: [14, 12, 34, 25, 24, 20],
    label: '# of Votes',
    barPercentage: 0.6,
  }
];
export let barChartColors: Color[] = [
  {
    backgroundColor: '#705ec8'
  }
]


// Transparency Bar Chart
export let transparentBarOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11
      }
    }]
  }
}
export let transparentBarLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let transparentBarType: ChartType = 'bar';
export let transparentBarLegend = true;
export let transparentBarPlugins = [];
export let transparentBarData: ChartDataSets[] = [
  {
    data: [14, 12, 34, 25, 24, 20],
    label: '# of Votes',
    barPercentage: 0.6,
  }
];
export let transparentBarColors: Color[] = [
  {
    backgroundColor: '#fb1c52'
  }
]

//Gradient Bar Chart

export let gradientBarOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11
      }
    }]
  }
}
export let gradientBarLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let gradientBarType: ChartType = 'bar';
export let gradientBarLegend = true;
export let gradientBarPlugins = []
export let gradientBarData: ChartDataSets[] = [
  {
    data: [14, 12, 34, 25, 24, 20],
    label: '# of Votes',
    barPercentage: 0.6,
  }
];


// let Barcanvas: ElementRef;
// let Barctx = Barcanvas.nativeElement.getContext('2d');
// let gradient = Barctx.createLinearGradient(0, 0, 0, 250);
// gradient.addColorStop(0, '#20c2fa');
// gradient.addColorStop(1, '#705ec8');

export let gradientBarColor = [

]


//Horizontal Bar
export let HorizontalBarOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        max: 80
      }
    }]
  }
}
export let HorizontalBarLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let HorizontalBarType: ChartType = 'horizontalBar';
export let HorizontalBarLegend = true;
export let HorizontalBarPlugins = []

export let HorizontalBarData: ChartDataSets[] = [
  {
    data: [14, 12, 34, 25, 24, 20],
    label: '# of Votes',
    barPercentage: 0.6,
  }
];
export let HorizontalBarColors: Color[] = [
  {
    backgroundColor: ['#fb1c52', '#705ec8', '#2dce89', '#ff5b51', '#fcbf09', '#5b7fff']
  }
]

//Horizontal Bar2
export let Horizontal2Options: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        max: 80
      }
    }]
  }
}
export let Horizontal2Labels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
export let Horizontal2Type: ChartType = 'horizontalBar';
export let Horizontal2Legend = true;
export let Horizontal2Plugins = []

export let Horizontal2Data: ChartDataSets[] = [
  {
    data: [14, 12, 34, 25, 24, 20],
  },
  {
    data: [22, 30, 25, 30, 20, 40],
  }
];

export let Horizontal2Colors: Color[] = [
  {
    backgroundColor: ['#705ec8', '#2dce89', '#ff5b51', '#fcbf09', '#5b7fff']
  },
  {
    backgroundColor: '#fb1c52'
  }
]

//Vertical Stacked Bar Chart
export let verticalStackOptions: ChartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      stacked: true,
      ticks: {
        beginAtZero: true,
        fontSize: 11
      }
    }],
    xAxes: [{
      stacked: true,
      ticks: {
        fontSize: 11
      }
    }]
  }
}
export let verticalStackLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let verticalStackType: ChartType = 'bar';
export let verticalStackLegend = true;
export let verticalStackData: ChartDataSets[] = [
  {
    data: [14, 12, 34, 25, 24, 20],
    fill: true
  },
  {
    data: [14, 12, 34, 25, 24, 20],
    fill: true
  }
]
export let verticalStackColors: Color[] = [
  {
    backgroundColor: '#705ec8',
    borderWidth: 1,
  },
  {
    backgroundColor: '#fb1c52',
    borderWidth: 1,
  }
]

//Horizontal Stacked Bar Chart
export let horizontalStackOptions: ChartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      stacked: true,
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80
      }
    }],
    xAxes: [{
      stacked: true,
      ticks: {
        beginAtZero: true,
        fontSize: 11
      }
    }]
  }
}
export let horizontalStackLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export let horizontalStackType: ChartType = 'horizontalBar';
export let horizontalStackLegend = true;
export let horizontalStackData: ChartDataSets[] = [
  {
    data: [14, 12, 34, 25, 24, 20],
    fill: true
  },
  {
    data: [14, 12, 34, 25, 24, 20],
    fill: true
  }
]
export let horizontalStackColors: Color[] = [
  {
    backgroundColor: '#705ec8',
    borderWidth: 1,
  },
  {
    backgroundColor: '#fb1c52',
    borderWidth: 1,
  }
]


//Line Charts
export let lineChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11
      }
    }]
  }
};
export let lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartDataSets[] = [
  {
    data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
    fill: false
  },
  {
    data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
    fill: false
  },
];
export let lineChartColors: Color[] = [
  {
    borderColor: '#fb1c52',
    borderWidth: 1,
  },
  {
    borderColor: '#705ec8',
    borderWidth: 1,
  },
];

//Area Chart
export let AreaChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        max: 80
      }
    }],
    xAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 11
      }
    }]
  }
}
export let AreaChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export let AreaChartType: ChartType = 'line';
export let AreaChartData: ChartDataSets[] = [
  { data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25] },
  { data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45] }
]

// let canvas: ElementRef
// let ctx: CanvasRenderingContext2D = canvas.nativeElement.getContext('2d');
// let areaGradient1 = ctx.createLinearGradient(0, 350, 0, 0);
// areaGradient1.addColorStop(0, 'rgba(241, 0, 117,0)');
// areaGradient1.addColorStop(1, 'rgba(241, 0, 117,.5)');

// let areaGradient2 = ctx.createLinearGradient(0, 280, 0, 0);
// areaGradient2.addColorStop(0, 'rgba(86, 70, 255,0)');
// areaGradient2.addColorStop(1, 'rgba(86, 70, 255,.5)');

export let AreaChartColors: Color[] = [
  {
    borderColor: '#fb1c52',
    borderWidth: 1,
  },
  {
    borderColor: '#705ec8',
    borderWidth: 1,
  }

]



//DoughNut Chart and Pie chart data
export let PieChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
export let PieChartData: ChartDataSets[] = [
  {
    data: [35, 24, 20, 15, 8],
    backgroundColor: ['#fb1c52', '#705ec8', '#2dce89', '#ff5b51', '#fcbf09', '#5b7fff']
  }

]
export let PieChartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
}
export let DoughnutChartType: ChartType = 'doughnut';
export let PieChartType: ChartType = 'pie';

