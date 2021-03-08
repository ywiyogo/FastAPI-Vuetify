const smilAnimationChart = {
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        series: [
            [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
            [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
            [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
            [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
        ]
    },
    options: {
        height: 300
    }
};

const simpleLineChart = {
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    },
    options: {
        height: 300,
        fullWidth: true,
    }
};

const polarBarChart = {
    data: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
    },
    options: {
        height: 300,
        high: 10,
        low: -10,
        axisX: {
            labelInterpolationFnc: function (value, index) {
                return index % 2 === 0 ? value : null;
            }
        },
    },
};

const areaLineChart = {
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    },
    options: {
        low: 0,
        showArea: true,
        height: 300,
    }
};

const lineSmoothingChart = {
    data: {
        labels: [1, 2, 3, 4, 5],
        series: [
            [1, 5, 10, 0, 1],
            [10, 15, 0, 1, 2]
        ]
    },
    options: {
        height: 300,
        low: 0,
        fullWidth: true,
        chartPadding: {
            right: 20
        },
    },
};

const overlappingBarChart = {
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    },
    options: {
        seriesBarDistance: 10,
        height: 300,
        responsiveOptions: [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: (value) => {
                        return value[0];
                    }
                }
            }]
        ]
    },
};
const stackBarChart = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
        series: [
            [800000, 1200000, 1400000, 1300000, 1520000, 1400000],
            [200000, 400000, 500000, 300000, 452000, 500000],
            [160000, 290000, 410000, 600000, 588000, 410000]
        ]
    },
    options: {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: (value) => {
                return (value / 1000) + 'k';
            }
        },
        height: 300
    }
};

const horizontalBarChart = {
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    },
    options: {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        },
        height: 300
    }
};

const donutAnimateChart = {
    data: {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
    },
    options: {
        donut: true,
        showLabel: false,
        height: 300,
    },
};

const simplePieChart = {
    data: {
        series: [5, 3, 4]
    },
    options: {
        height: 300,
        showLabel: false
    }
};

const distributedSeries = {
    data: {
        labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        series: [20, 60, 120, 200, 180, 20, 10]
    },
    options: {
        height: 300,
        distributeSeries: true,
    }
};

const labelPlacementChart = {
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    },
    options: {
        height: 300,
        axisX: {
            // On the x-axis start means top and end means bottom
            position: 'start'
        },
        axisY: {
            // On the y-axis start means left and end means right
            position: 'end'
        }
    }
};

const extremeConfiguration = {
    data: {
        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
        series: [
            [5, 4, 3, 7],
            [3, 2, 9, 5],
            [1, 5, 8, 4],
            [2, 3, 4, 6],
            [4, 1, 2, 1]
        ]
    },
    options: {
        height: 300,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value.split(/\s+/).map(function (word) {
                    return word[0];
                }).join('');
            }
        },
        axisY: {
            offset: 20
        },
        responsiveOptions: [
            // Options override for media > 400px
            ['screen and (min-width: 400px)', {
                reverseData: true,
                horizontalBars: true,

                axisY: {
                    offset: 60
                }
            }],
            // Options override for media > 800px
            ['screen and (min-width: 800px)', {
                stackBars: false,
                seriesBarDistance: 10
            }],
            // Options override for media > 1000px
            ['screen and (min-width: 1000px)', {
                reverseData: false,
                horizontalBars: false,
                seriesBarDistance: 15
            }]
        ]
    },
};

const lineAreaChart = {
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ]
    },
    options: {
        height: 300,
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
            showLabel: false,
            showGrid: false
        },

    }
}
export {
    smilAnimationChart, simpleLineChart, polarBarChart, areaLineChart, lineSmoothingChart, overlappingBarChart,
    stackBarChart, horizontalBarChart, donutAnimateChart, simplePieChart, distributedSeries, labelPlacementChart, extremeConfiguration, lineAreaChart
};
