<template>
    <Card>
        <div class="d-flex flex-xl-row flex-column align-items-center">
            <div class="col-xl-4 d-flex flex-column ">
                <div class="font-size-100 fw-bold color-gray-500">
                    <slot name="title"></slot>
                </div>
                <div class="font-size-150 fw-bold">
                    <slot name="numbers"></slot>
                </div>
            </div>
            <div class="col-xl-8 p-0">
                <Chart :config="chartConfig"/>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "ChartWidgetSmall2",

        props:['chartConfig']
    }
</script>

<style scoped>

</style>