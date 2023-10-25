<template>
    <div>
        <slot name="default" v-if="active"></slot>
    </div>
</template>

<script>
    export default {
        name: "NavItem",

        props:{
            title:{
                type:String,
                required:true,
                description: 'Title of Nav tab. Can be a string of html'
            },
        },

        data(){
            return {
                active:false,
            };
        },

        mounted() {

            // Register self in parent Nav component
            this.$parent.$data.children.push(this);

        }
    }
</script>

<style>
    .nav-enter{
        opacity: 0;
    }
    .nav-enter-active{
        transition: all 300ms;
    }
    .nav-leave-active{
        opacity: 1;
    }
    .nav-leave-to{
        opacity: 0;
    }
</style>