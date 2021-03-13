<script>
    /**
     *  Simple ChartJS wrapper
     */

    // Importing without moment js dependency
    import ChartJS from 'chart.js';

    // Hide legend by default
    ChartJS.defaults.global.legend.display = false;

    export default {
        name: "Chart",

        props:{
            config:{
                type:Object,
                required:true,
                description: 'Chart.js constructor configuration object. Please see chartjs.org for more information.'
            },
            height:{
                required:false,
                type: Number,
            }
        },

        data(){
            return {
                chart:null,
            }
        },

        methods:{
            renderChart(){
                this.chart = new ChartJS(this.$refs.chart, this.config);
            }
        },

        mounted() {
            this.renderChart();
        },

        render(h){
            return h('canvas', {
                ref:'chart',
                style:[{height:this.height}]
            });
        }
    }
</script>