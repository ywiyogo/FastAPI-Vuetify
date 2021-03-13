<template>
    <div class="accordion" >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Accordion",

        props:{
            alwaysOne:{
                type:Boolean,
                default:false,
                description: 'If always-one property is added as true then only one accordion item will be open at a time. Others will be closed when new is enabled.'
            }
        },

        data(){
            return{
                children:[],
            };
        },

        methods:{
            // Close other accordion-items
            closeOthers(currentChild, isCollapseOpen){
                if(isCollapseOpen){
                    this.$children.forEach(child=>{
                        if(currentChild !== child && isCollapseOpen){
                            child.close();
                        }
                    });
                }
            }
        },

        mounted() {
            // Listen for changes and close other accordion-items if needed
            if(this.alwaysOne){
                this.$children.forEach((child) => {
                    child.$on('change', (state)=>{
                        this.closeOthers(child, state);
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>