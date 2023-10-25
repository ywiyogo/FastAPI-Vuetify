<template>
    <Card>
        <template slot="header">Badges</template>
        <div>
            <h5>Simple inline badges</h5>
            <Badge type="default">A default badge</Badge>
            <Badge type="primary">A primary badge</Badge>
            <Badge type="secondary">A secondary badge</Badge>
            <Badge type="success">A success badge</Badge>
            <Badge type="info">A info badge</Badge>
            <Badge type="warning">A warning badge</Badge>
            <Badge type="danger">A danger badge</Badge>
            <Badge type="light">A light badge</Badge>
        </div>
        <div class="mt-5">
            <h5>Simple pill badges</h5>
            <Badge pill type="default">A default badge</Badge>
            <Badge pill type="primary">A primary badge</Badge>
            <Badge pill type="secondary">A secondary badge</Badge>
            <Badge pill type="success">A success badge</Badge>
            <Badge pill type="info">A info badge</Badge>
            <Badge pill type="warning">A warning badge</Badge>
            <Badge pill type="danger">A danger badge</Badge>
            <Badge pill type="light">A light badge</Badge>
        </div>
        <div class="mt-5">
            <h5>Link badges</h5>
            <Badge type="default" link="#">A default badge</Badge>
            <Badge type="primary" link="#">A primary badge</Badge>
            <Badge type="secondary" link="#">A secondary badge</Badge>
            <Badge type="success" link="#">A success badge</Badge>
            <Badge type="info" link="#">A info badge</Badge>
            <Badge type="warning" link="#">A warning badge</Badge>
            <Badge type="danger" link="#">A danger badge</Badge>
            <Badge type="light" link="#">A light badge</Badge>
        </div>
        <div class="mt-5">
            <h5>Link pill badges</h5>
            <Badge pill type="default" link="#">A default badge</Badge>
            <Badge pill type="primary" link="#">A primary badge</Badge>
            <Badge pill type="secondary" link="#">A secondary badge</Badge>
            <Badge pill type="success" link="#">A success badge</Badge>
            <Badge pill type="info" link="#">A info badge</Badge>
            <Badge pill type="warning" link="#">A warning badge</Badge>
            <Badge pill type="danger" link="#">A danger badge</Badge>
            <Badge pill type="light" link="#">A light badge</Badge>
        </div>
        <div class="mt-5">
            <h5>Link inverse badges</h5>
            <Badge inverse type="default" link="#">A default badge</Badge>
            <Badge inverse type="primary" link="#">A primary badge</Badge>
            <Badge inverse type="secondary" link="#">A secondary badge</Badge>
            <Badge inverse type="success" link="#">A success badge</Badge>
            <Badge inverse type="info" link="#">A info badge</Badge>
            <Badge inverse type="warning" link="#">A warning badge</Badge>
            <Badge inverse type="danger" link="#">A danger badge</Badge>
            <Badge inverse type="light" link="#">A light badge</Badge>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "Badges"
    }
</script>

<style scoped>
    .badge {
        margin-right: 10px;
    }
</style>