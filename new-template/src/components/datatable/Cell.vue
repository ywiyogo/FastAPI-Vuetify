<script>
    export default {
        name: "Cell",

        props:{
            isHeader:{
                type:Boolean,
                required:false,
                default:false,
                description: 'Determines whether tag should be th or td'
            },
            cellClasses:{
                type:String | Array,
                required:false,
                default:'',
                description: 'Class name(s) that will be added to div which contains default slot values in td'
            }
        },

        computed:{
            tag(){
                let tag = 'td';
                if(this.isHeader === true){
                    tag = 'th';
                }
                return tag;
            },
        },

        render(h) {

            let cellClasses = ['datable-cell-content'];
            if(typeof this.cellClasses !== 'string'){
                cellClasses.push(...this.cellClasses);
            }
            else{
                cellClasses.push(this.cellClasses)
            }

            return h(
                this.tag,
                {
                    on:this.$listeners,
                    class:'datatable-cell'
                },
                [
                    h(
                        'div',
                        {
                            class:cellClasses,
                        },
                        this.$scopedSlots.default(),
                    )
                ]
            )
        }
    }
</script>

<style scoped>

</style>