const barChart = {
    series: [{
        name: 'Overview',
        data: [42, 56, 40, 64, 26, 42, 56, 35, 62]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '14%',
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                }
            }
        },
        yaxis: {
            title: {
                text: '% (Percentage)'
            }
        },
        xaxis: {
            labels: {
                rotate: -90
            },
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            title: {
                text: 'Week',
            }
        },
        colors: ['#556ee6'],
    },
};

export { barChart };