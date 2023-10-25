<template>
    <div>
        <h2 class="mb-4"><a href="https://www.chartjs.org/" target="_blank">Chart.js</a> charts</h2>
        <div class="row">
<!--            Widget chart 1-->
            <div class="col-sm-4">
                <ChartWidgetSmall :chart-config="widgetChartVisitors" class="mb-5">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             class="rounded-circle bg-gray-200 p-1 stroke-success" width="40" height="40"
                             viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1="17" y1="7" x2="7" y2="17"/>
                            <polyline points="8 7 17 7 17 16"/>
                        </svg>
                    </template>
                    <template #icon-text>
                        <span class="text-success font-size-150 fw-bold ms-3">+78%</span>
                    </template>
                    <template #default>Site Visitors by hour</template>
                </ChartWidgetSmall>
            </div>
<!--            Widget chart 2-->
            <div class="col-sm-4">
                <ChartWidgetSmall :chart-config="widgetChartUsers" class="mb-5">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             class="rounded-circle bg-gray-200 p-1 stroke-info" width="40" height="40"
                             viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 11h6m-3 -3v6" />
                        </svg>
                    </template>
                    <template #icon-text>
                        <span class="text-info font-size-150 fw-bold ms-3">+64%</span>
                    </template>
                    <template #default>New users by month</template>
                </ChartWidgetSmall>
            </div>
<!--            Widget chart 3-->
            <div class="col-sm-4">
                <ChartWidgetSmall :chart-config="widgetChartSales" class="mb-5">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             class="rounded-circle bg-gray-200 p-1 stroke-danger" width="40" height="40"
                             viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <rect x="7" y="9" width="14" height="10" rx="2"/>
                            <circle cx="14" cy="14" r="2"/>
                            <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"/>
                        </svg>
                    </template>
                    <template #icon-text>
                        <span class="text-danger font-size-150 fw-bold ms-3">-13%</span>
                    </template>
                    <template #default>Sales by month</template>
                </ChartWidgetSmall>
            </div>
        </div>

<!--        Micro chart examples-->
        <div class="row mb-5">
            <div class="col-sm-4 mb-5 mb-sm-0">
                <ChartWidgetSmall2 :chart-config="widgetChartSmall1">
                    <template #title>Total followers</template>
                    <template #numbers>410K</template>
                </ChartWidgetSmall2>
            </div>
            <div class="col-sm-4 mb-5 mb-sm-0">
                <ChartWidgetSmall2 :chart-config="widgetChartSmall2">
                    <template #title>Active users</template>
                    <template #numbers>0.12M</template>
                </ChartWidgetSmall2>
            </div>
            <div class="col-sm-4 ">
                <ChartWidgetSmall2 :chart-config="widgetChartSmall3">
                    <template #title>App installs</template>
                    <template #numbers>123K</template>
                </ChartWidgetSmall2>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6 mb-5 mb-sm-0">
                <ChartBigSessions/>
            </div>
            <div class="col-sm-6">
                <ChartBigPageViews/>
            </div>
        </div>
    </div>
</template>

<script>
    import ChartWidgetSmall from "../widgets/ChartWidgetSmall";
    import ChartWidgetSmall2 from "../widgets/ChartWidgetSmall2";
    import charts from "../helpers/charts";
    import ChartBigSessions from "../widgets/ChartBigSessions";
    import ChartBigPageViews from "../widgets/ChartBigPageViews";
    export default {
        name: "Charts",

        components: {ChartBigPageViews, ChartBigSessions, ChartWidgetSmall2, ChartWidgetSmall},

        data() {

            // Demo helper
            const dataGenerator = (from, to, amount) => {
                let data = [];

                for(let i=0;i<amount;i++){
                    data.push(Math.floor(Math.max(from + Math.random()*from, Math.random()*to)));
                }

                return data;
            }

            const dateLabelGenerator = (from, step, amount, format)=>{
                let current = new Date(from);
                let result = [];

                for(let i=0; i<=amount;i++){
                    current = new Date(current.getTime() + step);
                    result.push(format(new Date(current.getTime())));
                }

                return result;
            }

            const lineChartGenerator = (amount, backgroundColor, borderColor, min, max, options = {}) =>{
                return {
                    type: 'line',
                    data:{
                        labels:dateLabelGenerator(new Date('2020-02-07'), 1000*24*3600, amount, (d)=>d.getDate().toString()),
                        datasets:[{
                            ...options,
                            data:dataGenerator(min, max, amount),
                            borderColor,
                            backgroundColor,
                            pointBackgroundColor: 'transparent',
                            pointBorderColor: 'transparent',
                            lineTension: .5,
                        }],
                    },
                    options:{
                        ...options,
                        tooltips: {
                            mode: 'nearest',
                            intersect: false,
                        },
                        // Hide axes for smaller charts
                        scales: {
                            xAxes: [{
                                display: false,
                                scaleLabel: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                },
                            }],
                        },
                    }
                }
            }

            return {
                widgetChartVisitors: {
                    type: 'line',
                    data: {
                        labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',],
                        datasets: [
                            {
                                data: dataGenerator(100, 1000, 12),
                                backgroundColor:'rgba(40,167,69,0.1)',
                                borderColor: 'rgba(40,167,69,0.8)',
                                pointHoverBackgroundColor: 'rgba(40,167,69,0.8)',
                                pointHoverBorderColor: 'rgba(40,167,69,0.8)',
                                pointBackgroundColor: 'transparent',
                                pointBorderColor: 'transparent',
                                lineTension: 0,
                            }
                        ],
                    },
                    options: {
                        aspectRatio:3,
                        layout: {
                            padding: 5,
                        },
                        tooltips: {
                            mode: 'nearest',
                            intersect: false,
                            displayColors:false,
                            callbacks:{
                                label(tooltipInterface, data){
                                    return `${tooltipInterface.value} visitors`;
                                },
                            }
                        },
                        // Hide axes for smaller charts
                        scales: {
                            xAxes: [{
                                display: false,
                                scaleLabel: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                },
                            }],
                        }
                    }
                },
                widgetChartSales: {
                    type: 'bar',
                    data:{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                label: 'Test dataset',
                                data: dataGenerator(100, 850, 12),
                                backgroundColor: '#fe346e',
                            },
                        ],
                    },
                    options: {
                        aspectRatio:3,
                        layout: {
                            padding: 5,
                        },
                        tooltips: {
                            mode: 'nearest',
                            intersect: false,
                        },
                        // Display axes for smaller charts
                        scales: {
                            xAxes: [{
                                display: false,
                                scaleLabel: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                },
                            }],
                        }
                    }
                },
                widgetChartUsers: {
                    type: 'bar',
                    data:{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                label: 'Test dataset',
                                data: dataGenerator(1000, 8500, 12),
                                backgroundColor: '#17a2b8',
                            },
                        ],
                    },
                    options: {
                        aspectRatio:3,
                        layout: {
                            padding: 5,
                        },
                        tooltips: {
                            mode: 'nearest',
                            intersect: false,
                        },
                        // Display axes for smaller charts
                        scales: {
                            xAxes: [{
                                display: false,
                                scaleLabel: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                },
                            }],
                        }
                    }
                },

                widgetChartSmall1: lineChartGenerator(24, '#ffefef','#000', 10, 43 ,{borderWidth:1}),
                widgetChartSmall2: lineChartGenerator(12, '#ffefef','#000', 10, 43 ,{borderWidth:1}),
                widgetChartSmall3: lineChartGenerator(54, '#ffefef','#000', 10, 43 ,{borderWidth:1}),

                bigChart:charts.lineChartSessions,
                bigChart2:charts.lineChartPageViews,
            }
        },
    }
</script>

<style scoped>

</style>