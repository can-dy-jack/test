var lineChart4 = echarts.init(document.getElementById('echart-line4'));
var lineOption4 = {
    textStyle: {
        color: '#FFBE22'
    },
    title: {
        text: '气温变化',
        textStyle: {
            color: '#FFBE22'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高', '最低']
    },
    toolbox: {
        show: true,
        right: '5%',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    }],
    series: [{
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
            data: [{
                name: '周最低',
                value: -2,
                xAxis: 1,
                yAxis: -1.5
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};
lineChart4.setOption(lineOption4);


// 
var lineChart5 = echarts.init(document.getElementById('echart-line5'));
var lineOption5 = {
    textStyle: {
        color: '#FFBE22'
    },
    title: {
        text: '气温变化',
        textStyle: {
            color: '#FFBE22'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高', '最低']
    },
    toolbox: {
        show: true,
        right: '5%',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    }],
    series: [{
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
            data: [{
                name: '周最低',
                value: -2,
                xAxis: 1,
                yAxis: -1.5
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};
lineChart5.setOption(lineOption5);


// 6
var lineChart6 = echarts.init(document.getElementById('echart-line6'));
var lineOption6 = {
    textStyle: {
        color: '#FFBE22'
    },
    title: {
        text: '气温变化',
        textStyle: {
            color: '#FFBE22'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高', '最低']
    },
    toolbox: {
        show: true,
        right: '5%',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    }],
    series: [{
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
            data: [{
                name: '周最低',
                value: -2,
                xAxis: 1,
                yAxis: -1.5
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};
lineChart6.setOption(lineOption6);
