<template>
    <div>
        <Card>
            <template slot="header">
                Simple alerts
            </template>
            <Alert type="default">default alert</Alert>
            <Alert type="primary">primary alert</Alert>
            <Alert type="secondary">secondary alert</Alert>
            <Alert type="success">success alert</Alert>
            <Alert type="info">info alert</Alert>
            <Alert type="warning">warning alert</Alert>
            <Alert type="danger">danger alert</Alert>
            <Alert type="light">light alert</Alert>
            <Alert type="dark">dark alert</Alert>
        </Card>

        <Card class="mt-5">
            <template slot="header">
                Closable alerts
            </template>
            <Alert closable="true" type="default">default alert</Alert>
            <Alert closable="true" type="primary">primary alert</Alert>
            <Alert closable="true" type="secondary">secondary alert</Alert>
            <Alert closable="true" type="success">success alert</Alert>
            <Alert closable="true" type="info">info alert</Alert>
            <Alert closable="true" type="warning">warning alert</Alert>
            <Alert closable="true" type="danger">danger alert</Alert>
            <Alert closable="true" type="light">light alert</Alert>
            <Alert closable="true" type="dark">dark alert</Alert>
        </Card>

        <Card class="mt-5">
            <template slot="header">
                Closable alerts with custom html
            </template>
            <Alert closable="true" type="primary">
                <h1>Primary alert with custom html</h1>
                <hr>
                <p>You can use additional html in your alerts!</p>
            </Alert>
            <Alert closable="true" type="secondary">
                <h1>Secondary alert with custom html</h1>
                <hr>
                <p>You can use additional html in your alerts!</p>
                <b>You can put any kind of html inside me!</b>
                <div class="text-left mt-3">
                    <img class="img-fluid" style="max-width: 100%;" src="https://source.unsplash.com//Lr-KZKYzaj8/320x400">
                </div>
            </Alert>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "Alerts"

    }
</script>

<style scoped>

</style>