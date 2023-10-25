<template>
    <div>
        <h1 class="mb-4">Website traffic analytics</h1>
        <Breadcrumb :items="[{page:'Home', link:'/'}, {page:'Analytics', active:true}]"/>
        <div class="row">
            <!-- Page visits chart -->
            <div class="col-sm-6">
                <Card>
                    <div class="mb-4">
                        <div class="font-size-100 color-gray-600">
                            Page views
                        </div>
                        <div class="fw-bold font-size-200 ">
                            456'245
                        </div>
                        <div class="d-flex flex-row align-items-center mt-2">
                            <div class="d-flex flex-row align-items-center me-2">
                                <div class="text-success bg-success-light rounded-circle p-1" style="width:2rem;height:2rem;" v-html="icons.ArrowUp"></div>
                                <div class="ms-1 fw-bold text-success font-size-75">
                                    +429.12%
                                </div>
                            </div>
                            <div class="font-size-100 color-gray-600">
                                in the last 12 months
                            </div>
                        </div>
                    </div>
                    <Chart :config="chart1Config" />
                </Card>
            </div>

            <!-- Device usage chart -->
            <div class="col-sm-6">
                <Card>
                    <div class="mb-4">
                        <div class="font-size-100 color-gray-600">
                            Views by device
                        </div>
                        <div class="fw-bold font-size-200 ">
                            December 5th - 29th
                        </div>
                    </div>
                    <Chart :config="chart2Config" />
                </Card>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 mt-5">
                <Card body-classes="p-0" header-classes="d-flex flex-row align-items-center justify-content-between">
                    <template #header>
                        <div>
                            Most visited pages
                        </div>
                        <div>
                            <Select :data="['Last 7 Days', 'Last 14 Days', 'Last Month']" selected="Last 7 Days"/>
                        </div>
                    </template>
                    <template #default>
                        <DataTable show-all :headers="mostVisitedPagesTable.headers" :data="mostVisitedPagesTable.data">
                            <template #header="{sortAsc, sortDesc, sortedHeaders}">
                                <Cell is-header v-for="header in mostVisitedPagesTable.headers">
                                <span>
                                    {{ header }}
                                </span>
                                    <span v-if="mostVisitedPagesTable.headers.indexOf(header) === 1">
                                    <span
                                        @click="sortAsc(header)"
                                        :class="[sortedHeaders[header] === 'asc'?'color-gray-800 fw-bold':'color-gray-400', 'cursor-pointer']">
                                        &#x2191;
                                    </span>
                                    <span
                                        @click="sortDesc(header)"
                                        :class="[sortedHeaders[header] === 'desc'?'color-gray-800 fw-bold':'color-gray-400', 'cursor-pointer']">
                                        &#x2193;
                                    </span>
                                </span>
                                </Cell>
                            </template>
                            <template #default="{row}">
                                <Cell v-for="(item, itemKey) in row">
                                    <div v-if="itemKey === 0" >
                                        <a href="#">{{item}}</a>
                                    </div>
                                    <div v-else-if="itemKey === 2" class="text-right">
                                        <Badge :type="item>0?'success':'danger'">
                                            {{item}}%
                                        </Badge>
                                    </div>
                                    <div v-else>
                                        {{item}}
                                    </div>
                                </Cell>
                            </template>
                        </DataTable>
                    </template>
                </Card>
            </div>
            <div class="col-sm-6 mt-5">
                <Card body-classes="p-0" header-classes="d-flex flex-row align-items-center justify-content-between">
                    <template #header>
                        <div>
                            Top referrers
                        </div>
                        <div>
                            <Select :data="['Last 7 Days', 'Last 14 Days', 'Last Month']" selected="Last 7 Days"/>
                        </div>
                    </template>
                    <DataTable :headers="referrersTable.headers" :data="referrersTable.data">
                        <template #default="{row}">
                            <Cell v-for="(item, itemKey) in row">
                                <div v-if="itemKey === 0" class="d-flex flex-row align-content-center">
                                    <span v-html="item.icon"></span>
                                    <span class="ms-3">
                                        <a href="#">{{item.url}}</a>
                                    </span>
                                </div>
                                <div v-else-if="itemKey === 2">
                                    <Badge :type="item>0?'success':'danger'">
                                        {{item}}%
                                    </Badge>
                                </div>
                                <div v-else>
                                    {{item}}
                                </div>
                            </Cell>
                        </template>
                    </DataTable>
                </Card>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-lg-3 mt-5" v-for="item in infoCols">
                <Card>
                    <template #default>
                        <div class="row align-items-center align-content-center">
                            <div class="col-6 justify-content-center">
                                <div
                                    style="height: 80%;width:80%;max-width:150px;display: block"
                                    :class="[`bg-${item.color}-light rounded p-3 text-${item.color}`]"
                                    v-html="item.icon"></div>
                            </div>
                            <div class="col-12 col-xl-6">
                                <div class="font-size-125 fw-bold">{{ item.title }}</div>
                                <div class="font-size-75 color-gray-600">
                                    In the last 7 day
                                </div>
                                <div :class="[`mt-3 text-${item.color} font-size-150 fw-bold`]">
                                    {{ item.value }}
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>

</template>

<script>
import icons from './../helpers/icons';
export default {
    name: "AnalyticsDashboard",

    data() {

        let visitsData = [];
        for (let i=0;i<12;i++){
            visitsData[i] = Math.ceil(Math.random()*50000 +Math.max(5000, Math.random()*3000));
        }

        return {
            chart1Config: {
                type:'bar',
                data:{
                    labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets:[
                        {
                            data:visitsData,
                            backgroundColor:'#703B9D',
                        }
                    ]
                },
                options:{
                    scales:{
                        yAxes:[{
                            ticks:{
                                beginAtZero: true,
                                maxTicksLimit: 10,
                            }
                        }],
                        xAxes:[{
                            gridLines:{
                                display:false,
                            }
                        }]
                    },
                    tooltips:{
                        displayColors:false,
                        callbacks: {
                            label(tooltipInterface, data){
                                let n =Intl.NumberFormat({style:'decimal'}).format(tooltipInterface.value);
                                return `${n} page views`;
                            }
                        }
                    }
                }
            },

            chart2Config:{
                type:'doughnut',
                data:{
                    labels:['Mobile', 'Desktop', 'Tablet', 'Crawlers'],
                    datasets:[{
                        data: [
                            37,
                            43,
                            13,
                            7,
                        ],
                        backgroundColor:[
                            '#ffc107',
                            '#28a745',
                            '#703B9D',
                            '#F2522E',
                            '#fe346e',
                        ],
                        borderColor:'transparent'
                    }],
                },
                options:{
                    tooltips:{
                        displayColors:false,
                        callbacks: {
                            label(tooltipInterface, data){
                                let n = data.datasets[0].data[tooltipInterface.index];
                                let label = data.labels[tooltipInterface.index];
                                return `${label} ${n}%`;
                            }
                        }
                    }
                }
            },

            mostVisitedPagesTable: {
                headers: [
                    'Page',
                    'Views',
                    null
                ],
                data: [
                    ['/shopping-cart', 13204, +12],
                    ['/how-to-install-outlook', 12923, -23],
                    ['/best-page-in-website', 9434, +343],
                    ['/en/learn-mandarin-language', 2394, +12],
                    ['/en/pdf-download', 435, -83],
                ]
            },

            referrersTable:{
                headers:[
                    'Website',
                    'Visitors',
                    null,
                ],
                data:[
                    [{icon:icons.Facebook, url:'https://facebook.com'}, 14506, -12],
                    [{icon:icons.Reddit, url:'https://reddit.com'}, 9563, +7],
                    [{icon:icons.Pinterest, url:'https://pinterest.com'}, 3523, -59],
                    [{icon:icons.Twitter, url:'https://twitter.com'}, 1876, -76],
                    [{icon:icons.YCombinator, url:'https://news.ycombinator.com'}, 998, -12],
                ]
            },

            infoCols:[
                {
                    title:'Sessions',
                    value:"65'345",
                    icon:icons.Activity,
                    color:'primary',
                },
                {
                    title:'Visitors',
                    value:"58'893",
                    icon:icons.Users,
                    color:'secondary',
                },
                {
                    title:'Pageviews',
                    value:"43'459",
                    icon:icons.Eye,
                    color:'warning',
                },
                {
                    title:'Sales',
                    value:"$1532",
                    icon:icons.Cash,
                    color:'success',
                },
            ],

            visitsChart:[

            ]
        }
    },

    computed:{
        icons(){
            return icons;
        }
    }
}
</script>

<style scoped>

</style>