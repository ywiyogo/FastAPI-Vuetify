<template>
    <Card class="border-0">
        <div class="d-flex flex-row align-items-sm-center">
            <div class="d-flex flex-column">
                <b class="font-size-150">Total page views</b>
                <span class="font-size-200 color-gray-600">125'732</span>
            </div>
            <div class="ms-auto d-flex flex-column">
                <span class="text-success font-size-150 fw-bold mb-2">Growth</span>
                <Badge class="p-2 cursor-pointer" inverse pill type="success" v-tooltip="tooltipId">
                    <span class="font-size-125">+47%</span>
                </Badge>
            </div>

            <Tooltip :id="tooltipId">
                Compared to last year
            </Tooltip>
        </div>
        <div class="mt-3 mb-3">
            <b class="font-size-125">Page views by month</b>
        </div>
        <div>
            <Chart :config="config" />
        </div>
    </Card>
</template>

<script>
    import charts from "../helpers/charts";
    import {generateKey} from "../helpers/helpers";

    export default {
        name: "ChartBigPageViews",

        data(){
            return {
                config:charts.lineChartPageViews,
                tooltipId: generateKey(),
            }
        }
    }
</script>

<style scoped>

</style>