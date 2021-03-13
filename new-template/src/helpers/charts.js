/**
 * Chart config helper for demos
 */
export default {
    lineChartSessions:{
        type: 'line',
        data:{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets:[
                {
                    data:[923,1032,1123,1211,1352,1936,1758,1801,1799,1965,2043,1876],
                    pointBorderColor:'#6246ea',
                    pointBackgroundColor:'#fff',
                    backgroundColor: 'rgba(98,70,234,0.1)',
                    borderColor: '#6246ea',
                    pointBorderWidth:2,
                    pointHoverBorderWidth:2,
                    pointHoverRadius:6,
                    pointRadius:4,
                    borderWidth:2,
                },
                {
                    data:[123,165,237,589,234, 121,90,211,298, 429, 685, 899],
                    pointBorderColor:'#4e4e4e',
                    pointBackgroundColor:'#fff',
                    backgroundColor: 'rgba(78,78,78,0.1)',
                    borderColor: '#4e4e4e',
                    pointBorderWidth:2,
                    pointHoverBorderWidth:2,
                    pointHoverRadius:6,
                    pointRadius:4,
                    borderWidth:2,
                }
            ]
        },
        options:{
            tooltips:{
                mode:'nearest',
                intersect: false,
                displayColors:false,
                callbacks:{
                    label(tooltipInterface, data){
                        return `${tooltipInterface.value} Sessions`;
                    },
                    title(tooltipInterface, data){
                        tooltipInterface = tooltipInterface[0];
                        let year = (new Date).getFullYear() - (tooltipInterface.datasetIndex+1)*1;
                        return `${tooltipInterface.label} ${year}`;
                    }
                }
            },
            scales:{
                yAxes:[
                    {
                        gridLines:{
                            display:false,
                        },
                        ticks:{
                            beginAtZero:true,
                        }
                    }
                ]
            }
        }
    },
    lineChartPageViews:{
        type: 'line',
        data:{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets:[
                {
                    data:[
                        12341,
                        13536,
                        17483,
                        16433,
                        18345,
                        19867,
                        22949,
                        12334,
                        7965,
                        10942,
                        13034,
                        17459,
                        19654,
                        22954,
                    ],
                    pointBorderColor:'#6246ea',
                    pointBackgroundColor:'#fff',
                    backgroundColor: 'rgba(98,70,234,0.1)',
                    borderColor: '#6246ea',
                    pointBorderWidth:2,
                    pointHoverBorderWidth:2,
                    pointHoverRadius:6,
                    pointRadius:4,
                    borderWidth:2,
                },
                {
                    data:[1223,1745,1823,932,2138, 3294,2395,3434,3593, 5234, 8542, 10304],
                    pointBorderColor:'#4e4e4e',
                    pointBackgroundColor:'#fff',
                    backgroundColor: 'rgba(78,78,78,0.1)',
                    borderColor: '#4e4e4e',
                    pointBorderWidth:2,
                    pointHoverBorderWidth:2,
                    pointHoverRadius:6,
                    pointRadius:4,
                    borderWidth:2,
                }
            ]
        },
        options:{
            tooltips:{
                mode:'nearest',
                intersect: false,
                displayColors:false,
                callbacks:{
                    label(tooltipInterface, data){
                        let forMarted = Intl.NumberFormat({style:'decimal'}).format(tooltipInterface.value);
                        return `${forMarted} Page views`;
                    },
                    // Title is
                    title(tooltipInterface, data){
                        tooltipInterface = tooltipInterface[0];
                        let year = (new Date).getFullYear() - (tooltipInterface.datasetIndex+1)*1;
                        return `${tooltipInterface.label} ${year}`;
                    }
                }
            },
            scales:{
                yAxes:[
                    {
                        gridLines:{
                            display:false,
                        },
                        ticks:{
                            beginAtZero:true,
                        }
                    }
                ]
            }
        }
    },
}