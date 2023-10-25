<template>
    <Card class="">
        <template slot="header">Breadcrumb</template>
        <h5>Breadcrumb with last page active</h5>
        <Breadcrumb :items="[
                {
                    page:'Home',
                    link:'/'
                },
                {
                    page:'Product',
                    link: '/product'
                },
                {
                    page:'Checkout',
                    link: '/checkout',
                    active:true,
                },
            ]"/>
        <h5 class="mt-5">Breadcrumb with no page active</h5>
        <Breadcrumb :items="[
                {
                    page:'Home',
                    link:'/'
                },
                {
                    page:'First page',
                    link: '/first-page'
                },
                {
                    page:'Second page',
                    link: '/second-page',
                },
                {
                    page:'Page without a link',
                },
                {
                    page:'Last page',
                    link: '/last-page',
                },
            ]"/>
    </Card>
</template>

<script>
    export default {
        name: "Breadcrumbs"
    }
</script>

<style scoped lang="scss">

</style>