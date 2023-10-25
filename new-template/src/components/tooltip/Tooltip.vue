<template>
    <transition name="tooltip-fade">
        <div v-show="show" class="tooltip" role="tooltip">
            <div class="arrow"></div>
            <div class="tooltip-inner">
                <slot/>
            </div>
        </div>
    </transition>
</template>

<script>
    /**
     * To show tooltip you have to use v-tooltip directive and pass tooltip id property on element which will trigger tooltip display
     */
    export default {
        name: "Tooltip",

        props:{
            id:{
                type:String,
                required:true,
                description: 'tooltip id, must be unique'
            }
        },

        data(){
            return {
                show: false,
            }
        },

        beforeMount() {
            // Register self in tooltips global object
            this.$tooltips.add(this.id, this);
        },

        beforeDestroy() {
            this.$tooltips.remove(this.id);
        }


    }
</script>

<style scoped>

    .tooltip-fade-enter{
        opacity: 0;
    }

    .tooltip-fade-enter-active,
    .tooltip-fade-leave-active{
        transition: opacity 400ms ease;
    }

    .tooltip-fade-leave-to{
        opacity: 0;
    }


</style>