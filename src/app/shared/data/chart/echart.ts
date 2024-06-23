import { EChartOption } from 'echarts';
import { Colors } from '../e-commerce/products';

//Echart (line Chart)
export let echartLineBarOption: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25'
    },
    tooltip: {
        show: true,
        showContent: true,
        alwaysShowContent: true,
        triggerOn: 'mousemove',
        trigger: 'axis',
        axisPointer: {
            label: {
                show: false,
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ['2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        },

    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [10, 15, 9, 18, 10]
        },
        {
            name: 'profit',
            type: 'line',
            smooth: true,
            data: [8, 5, 25, 10, 10]
        },
        {
            name: 'growth',
            type: 'bar',
            data: [10, 14, 10, 15, 9]
        }
    ],
    color: ['#705ec8', '#2dce89', '#fb1c52']
}

export let echartLineOption: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    xAxis: {
        data: ['2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'line',
            smooth: true,
            data: [12, 25, 12, 35, 12],
        },
        {
            name: 'Profit',
            type: 'line',
            smooth: true,
            data: [8, 12, 28, 10, 10],
        }
    ],
    color: ['#705ec8', '#fb1c52']
}

export let echartVerticalLineBarChart: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '32',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    yAxis: {
        type: 'category',
        data: ['2014', '2015', '2016', '2017', '2018'],
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#c0dfd8'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [10, 15, 9, 18, 10, 15]
        },
        {
            name: 'profit',
            type: 'line',
            smooth: true,
            data: [8, 5, 25, 10, 10]
        },
        {
            name: 'growth',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25]
        }
    ],
    color: ['#705ec8', '#2dce89', '#fb1c52',]
}

export let echartVerticalLineChart: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '32',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    yAxis: {
        type: 'category',
        data: ['2014', '2015', '2016', '2017', '2018'],
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'line',
            smooth: true,
            data: [12, 25, 12, 35, 12, 38],
        },
        {
            name: 'Profit',
            type: 'line',
            smooth: true,
            data: [8, 12, 28, 10, 10, 12],
        }
    ],
    color: ['#705ec8', '#fb1c52']

}

export let echartBarChart: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    xAxis: {
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            stack: 'Stack',
            data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
        },
        {
            name: 'Profit',
            type: 'bar',
            stack: 'Stack',
            data: [12, 14, 15, 50, 24, 24, 10, 20, 30]
        }
    ],
    color: ['#705ec8', '#fb1c52']
}

export let echartHorizontalbarChart: EChartOption = {
    grid: {
        top: '6',
        right: '10',
        bottom: '17',
        left: '32',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    yAxis: {
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'sales',
            type: 'bar',
            stack: 'Stack',
            data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
        },
        {
            name: 'Profit',
            type: 'bar',
            stack: 'Stack',
            data: [12, 14, 15, 50, 24, 24, 10, 20, 30]
        }
    ],
    color: ['#705ec8', '#fb1c52']
}

export let echartSingleLineChart: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    xAxis: {
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'data',
            type: 'line',
            data: [20, 20, 36, 18, 15, 20, 25, 20]
        }
    ],
    color: ['#705ec8']
}

export let echartSingleSmoothLineChart: EChartOption = {
    grid: {
        top: '6',
        right: '0',
        bottom: '17',
        left: '25',
    },
    xAxis: {
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(67, 87, 133, .09)'
            }
        },
        axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
        }
    },
    series: [
        {
            name: 'data',
            type: 'line',
            smooth: true,
            data: [20, 20, 36, 18, 15, 20, 25, 20]
        }
    ],
    color: ['#fb1c52']
}