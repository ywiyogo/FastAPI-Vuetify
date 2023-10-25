<template>
    <button @click="click" :class="['btn', `btn-${type}`, size !== undefined? `btn-${size}`:'', {'rounded':rounded},{'edgy':edgy}, {'still':still}]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",

        props:{
            type:{
                type:String,
                default:'primary',
                description: 'One of available bootstrap button types: primary, default, success, info, warning, danger',
                required:false,
            },
            size:{
                type:String,
                required:false,
                validator:(value)=>{
                    return ['lg', 'sm'].indexOf(value) !== -1;
                },
                description: 'Button size: lg for large, sm - for small',
            },
            rounded:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true .rounded class will be added and button will have rounded borders'
            },
            edgy:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true .edgy class will be added and button will have edgy borders'
            },
            still:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true translateY animation will be disabled on hover and click and button will not bounce',
            }
        },

        methods:{
            click(e){
                this.$emit('click', e);
            }
        }
    }
</script>

<style scoped>

</style>