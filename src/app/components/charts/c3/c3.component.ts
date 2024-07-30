import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.scss']
})
export class C3Component implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const chartBarStacked = c3.generate({
      bindto: '#chartBarStacked',
      data: {
        columns: [
          ['data1', 11, 8, 15, 18, 19, 17, 20, 25, 32, 20, 14, 20],
          ['data2', 7, 7, 5, 7, 9, 12, 4, 6, 2, 5, 2, 8]
        ],
        type: 'bar',
        groups: [
          ['data1', 'data2']
        ],
        colors: {
          data1: '#fb1c52',
          data2: '#705ec8'
        },
        names: {
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
      },
      bar: {
        width: 16
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },

    });

    const chartMultipleBar = c3.generate({
      bindto: '#chartMultipleBar', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'bar', // default type of chart
        colors: {
          data1: '#705ec8',
          data2: '#fb1c52'
        },
        names: {
          // name of each series
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      },
      bar: {
        width: 16
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const chartHorizontalBar = c3.generate({
      bindto: '#chartHorizontalBar', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 11, 8, 15, 18, 19, 17],
          ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'bar', // default type of chart
        colors: {
          data1: '#fb1c52',
          data2: '#705ec8'
        },
        names: {
          // name of each series
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        rotated: true,
      },
      bar: {
        width: 15
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const chartEmployment = c3.generate({
      bindto: '#chartEmployment', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 9, 4, 9, 11, 15, 17],
          ['data2', 7, 17, 13, 17, 25, 28],
          ['data3', 18, 19, 22, 21, 32, 28]
        ],
        type: 'line', // default type of chart
        colors: {
          data1: '#705ec8',
          data2: '#fb1c52',
          data3: '#2dce89'
        },
        names: {
          // name of each series
          'data1': 'May',
          'data2': 'June',
          'data3': 'July'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['2013', '2014', '2015', '2016', '2017', '2018']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const lineChart1 = c3.generate({
      bindto: '#lineChart1', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 0, 9, 16, 19, 30, 25, 19, 12, 0],
        ],
        type: 'area-spline', // default type of chart
        groups: [
          ['data1', 'data2']
        ],
        colors: {
          data1: '#705ec8'
        },
        names: {
          // name of each series
          'data1': 'Maximum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    });

    const lineChart2 = c3.generate({
      bindto: '#lineChart2', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 12, 7, 8, 6, 8, 9, 12],
          ['data2', 8, 10, 10, 9, 7, 10, 8]
        ],
        type: 'spline', // default type of chart
        colors: {
          data1: '#705ec8',
          data2: '#fb1c52'
        },
        names: {
          // name of each series
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        rotated: true,
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const lineChart3 = c3.generate({
      bindto: '#lineChart3', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 8.0, 7.9, 10.5, 15.5, 19.4, 22.5, 26.2, 27.5, 24.3, 19.3, 14.9, 10.6],
          ['data2', 4.9, 5.2, 6.7, 9.5, 12.9, 16.2, 18.0, 17.6, 15.2, 11.3, 7.6, 5.8]
        ],
        labels: true,
        type: 'line', // default type of chart
        colors: {
          data1: '#705ec8',
          data2: '#fb1c52'
        },
        names: {
          // name of each series
          'data1': 'India',
          'data2': 'USA'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const lineChart4 = c3.generate({
      bindto: '#lineChart4', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 12, 9, 16, 19, 20, 18],
          ['data2', 8, 8, 6, 8, 10, 13]
        ],
        type: 'area-spline', // default type of chart
        groups: [
          ['data1', 'data2']
        ],
        colors: {
          data1: '#fb1c52',
          data2: '#705ec8'
        },
        names: {
          // name of each series
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const lineChart5 = c3.generate({
      bindto: '#lineChart5', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 0, 0, 0.2, 0.5, 0.6, 1.2, 2.5, 2.9, 4.5, 4.9, 5.2, 5.8, 6.5, 6.7, 7.4, 4.9, 6.4, 5.4, 10.8, 6.8, 5.2, 11.9],
          ['data2', 0, 0, 0, 0, 0.3, 0.2, 0.5, 0.6, 1.5, 1.8, 1.9, 2.5, 1.6, 3.8, 3.9, 3.6, 1.8, 1.8, 1.9, 2.8, 5.4, 7.8, 10.9]
        ],
        labels: true,
        type: 'spline', // default type of chart
        colors: {
          data1: '#705ec8',
          data2: '#fb1c52'
        },
        names: {
          // name of each series
          'data1': 'USA',
          'data2': 'India'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const lineChart6 = c3.generate({
      bindto: '#lineChart6', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 12, 8, 16, 19, 20, 18],
          ['data2', 12, 5, 6, 8, 10, 13]
        ],
        type: 'area', // default type of chart
        colors: {
          data1: '#705ec8',
          data2: '#fb1c52'
        },
        names: {
          // name of each series
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const lineChart7 = c3.generate({
      bindto: '#lineChart7', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 10, 8, 10, 12, 20, 18],
          ['data2', 8, 12, 8, 20, 10, 13]
        ],
        type: 'area-spline', // default type of chart
        colors: {
          data1: '#fb1c52',
          data2: '#705ec8'
        },
        names: {
          // name of each series
          'data1': 'data1',
          'data2': 'data2'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const lineChartStep = c3.generate({
      bindto: '#lineChartStep', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 15, 14, 18, 19, 20, 18],
          ['data2', 10, 10, 12, 14, 15, 13]
        ],
        type: 'area-step', // default type of chart
        colors: {
          'data1': '#fb1c52',
          'data2': '#705ec8'
        },
        names: {
          // name of each series
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const lineChart8 = c3.generate({
      bindto: '#lineChart8', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 10, 15, 10, 18, 19, 15],
          ['data2', 7, 7, 5, 7, 9, 12]
        ],
        type: 'step', // default type of chart
        colors: {
          data1: '#705ec8',
          data2: '#fb1c52'
        },
        names: {
          // name of each series
          'data1': 'Maximum',
          'data2': 'Minimum'
        }
      },
      axis: {
        x: {
          type: 'category',
          // name of each category
          categories: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct']
        },
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const chartPie = c3.generate({
      bindto: '#chartPie', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 63],
          ['data2', 44],
          ['data3', 12],
          ['data4', 14]
        ],
        type: 'pie', // default type of chart
        colors: {
          'data1': '#705ec8',
          'data2': '#fb1c52',
          'data3': '#2dce89',
          'data4': '#ff5b51'

        },
        names: {
          // name of each series
          'data1': 'A',
          'data2': 'B',
          'data3': 'C',
          'data4': 'D'
        }
      },
      axis: {
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const chartPie2 = c3.generate({
      bindto: '#chartPie2', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 63],
          ['data2', 40],
          ['data3', 12],
          ['data4', 14],
          ['data5', 29],
          ['data6', 21],
        ],
        type: 'pie', // default type of chart
        colors: {
          'data1': '#705ec8',
          'data2': '#fb1c52',
          'data3': '#fcbf09',
          'data4': '#2dcbf7',
          'data5': '#2dce89',
          'data6': '#f7592d',
        },
        names: {
          // name of each series
          'data1': 'A',
          'data2': 'B',
          'data3': 'C',
          'data4': 'D',
          'data5': 'E',
          'data6': 'F'
        }
      },
      axis: {
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const chartDonut = c3.generate({
      bindto: '#chartDonut', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 58],
          ['data2', 65],
          ['data3', 35],
        ],
        type: 'donut', // default type of chart
        colors: {
          data1: '#705ec8',
          data2: '#fb1c52',
          data3: '#2dce89',
        },
        names: {
          // name of each series
          'data1': 'sales1',
          'data2': 'sales2',
          'data3': 'sales3'
        }
      },
      axis: {
      },
      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })

    const chartDonut2 = c3.generate({
      bindto: '#chartDonut2', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['data1', 78],
          ['data2', 95],
          ['data3', 25],
          ['data4', 45],
          ['data5', 75],
          ['data6', 25],
        ],
        type: 'donut', // default type of chart
        colors: {
          'data1': '#705ec8',
          'data2': '#fb1c52',
          'data3': '#ff5b51',
          'data4': '#2dcbf7',
          'data5': '#2dce89',
          'data6': '#fcbf09',
        },
        names: {
          // name of each series
          'data1': 'sales1',
          'data2': 'sales2',
          'data3': 'sales3',
          'data4': 'sales4',
          'data5': 'sales5',
          'data6': 'sales6',
        }
      },
      axis: {
      },

      legend: {
        show: false, //hide legend
      },
      padding: {
        bottom: 0,
        top: 0
      },
    })


  }

}
