<template>
    <Card class="progresses">
        <template slot="header">Progress bars</template>

        <h5>Simple progress bars</h5>

        <Badge type="default">Default progress bar: {{progress.default}}%</Badge>
        <ProgressBar type="default" :progress="progress.default"/>

        <Badge type="primary">Primary progress bar: {{progress.primary}}%</Badge>
        <ProgressBar type="primary" :progress="progress.primary"/>

        <Badge type="secondary">Secondary progress bar: {{progress.secondary}}%</Badge>
        <ProgressBar type="secondary" :progress="progress.secondary"/>

        <Badge type="success">Success progress bar: {{progress.success}}%</Badge>
        <ProgressBar type="success" :progress="progress.success"/>

        <Badge type="info">Info progress bar: {{progress.info}}%</Badge>
        <ProgressBar type="info" :progress="progress.info"/>

        <Badge type="warning">Warning progress bar: {{progress.warning}}%</Badge>
        <ProgressBar type="warning" :progress="progress.warning"/>

        <Badge type="danger">Danger progress bar: {{progress.danger}}%</Badge>
        <ProgressBar type="danger" :progress="progress.danger"/>


        <h5 class="mt-5">Animated striped progress bars</h5>

        <Badge type="default">Default progress bar: {{progress.default}}%</Badge>
        <ProgressBar animated striped type="default" :progress="progress.default"/>

        <Badge type="primary">Primary progress bar: {{progress.primary}}%</Badge>
        <ProgressBar animated striped type="primary" :progress="progress.primary"/>

        <Badge type="secondary">Secondary progress bar: {{progress.secondary}}%</Badge>
        <ProgressBar animated striped type="secondary" :progress="progress.secondary"/>

        <Badge type="success">Success progress bar: {{progress.success}}%</Badge>
        <ProgressBar animated striped type="success" :progress="progress.success"/>

        <Badge type="info">Info progress bar: {{progress.info}}%</Badge>
        <ProgressBar animated striped type="info" :progress="progress.info"/>

        <Badge type="warning">Warning progress bar: {{progress.warning}}%</Badge>
        <ProgressBar animated striped type="warning" :progress="progress.warning"/>

        <Badge type="danger">Danger progress bar: {{progress.danger}}%</Badge>
        <ProgressBar animated striped type="danger" :progress="progress.danger"/>

        <Button @click="shuffleProgress" type="secondary" size="sm">Shuffle</Button>
    </Card>
</template>

<script>
    export default {
        name: "Progress",

        data(){
            return {
                progress: {
                    default: 10,
                    primary: 20,
                    secondary: 30,
                    success: 40,
                    info: 50,
                    warning: 60,
                    danger: 70,
                },
            }
        },

        methods:{
            shuffleProgress() {
                Object.keys(this.progress).forEach((key) => {
                    this.progress[key] = parseInt(Math.random() * 100);
                });
            },
        }
    }
</script>

<style scoped lang="scss">

    .progress {
        margin-bottom: 2rem;
    }

    .progresses {
        .badge {
            margin-bottom: 0.5rem;
        }
    }
</style>