<template>
    <Card class=" tooltip-showcase">
        <template slot="header">Some tooltips</template>
        <Button type="success" v-tooltip="{id:'a2', placement:'left'}">Tooltip left</Button>
        <Button type="primary" v-tooltip="{id:'a1', placement:'top'}">Tooltip top</Button>
        <Button type="info" v-tooltip="{id:'a4', placement:'bottom'}">Tooltip bottom</Button>
        <Button type="secondary" v-tooltip="{id:'a3', placement:'right'}">Tooltip right</Button>

        <Tooltip id="a1">
            <b>Fancy tooltip top</b>
        </Tooltip>
        <Tooltip id="a2">
            <b>Fancy tooltip left</b>
        </Tooltip>
        <Tooltip id="a3">
            <b>Fancy tooltip right</b>
        </Tooltip>
        <Tooltip id="a4">
            <b>Fancy tooltip bottom</b>
            <p>You can put any html in tooltip</p>
            <Button class="mb-2" size="sm" type="default">Even components</Button>
        </Tooltip>
    </Card>
</template>

<script>
    export default {
        name: "Tooltips",

        data() {
            return {
            }
        },
    }
</script>

<style  scoped lang="scss">
    .tooltip-showcase {
        .btn {
            margin-right: 10px;
            margin-top: 5px;
        }
    }
</style>