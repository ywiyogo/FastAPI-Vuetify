<template>
    <div class="accordion-item shadow-none">
        <div :class="['accordion-header', {'collapsed':!isOpen}, ...headerClasses]" @click="toggle">
            <slot name="default" :open="isOpen"></slot>
        </div>
        <Collapse ref="collapse">
            <div class="accordion-body">
                <slot name="body"></slot>
            </div>
        </Collapse>
    </div>
</template>

<script>
    /**
     * Emits:
     * change event with Boolean value which represents whether item is collapsed (false) or open (true)
     */
    export default {
        name: "AccordionItem",

        props:{
            headerClasses:{
                type:String|Array,
                required:false,
                default:()=>[],
                description: 'Additional classes that will be added to .accordion-header element.'
            }
        },

        data(){
            return {
                isOpen:false,
            }
        },

        methods:{
            toggle(){
                // Toggle collapse
                this.$refs['collapse'].toggle();

                // Get state of collapse
                let state = this.$refs['collapse'].$data.show;

                // Emit event to parent Accordion
                this.emitClick(state);
            },

            open(){
                this.$refs['collapse'].open();
            },

            close(){
                this.$refs['collapse'].close();
            },

            emitClick(state){
                this.$emit('change', state);
            }
        },

        mounted(){
            // Watch for collapse display value change from $refs
            this.$watch(
                ()=>this.$refs.collapse.show,
                (val)=>{
                    this.isOpen = val;
                }
            );
        },
    }
</script>

<style scoped>

</style>