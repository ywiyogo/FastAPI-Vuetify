<template>
    <div :class="['card', cardClasses]">
        <div :class="['card-header', ...headerClasses]" v-if="$slots['header']">
            <slot name="header"></slot>
        </div>
        <div :class="['card-body', ...bodyClasses]">
            <slot></slot>
        </div>
        <div :class="['card-footer', ...footerClasses]" v-if="$slots['footer']">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props:{
            cardClasses:{
                type:String,
                description:'Additional classes applied to .card container.'
            },
            bodyClasses:{
                type: String | Array,
                required:false,
                default:()=>[],
                description: 'Additional classes applied to .card-body.'
            },
            headerClasses:{
                type: String | Array,
                required:false,
                default:()=>[],
                description: 'Additional classes applied to .card-header.'
            },
            footerClasses:{
                type: String | Array,
                required:false,
                default:()=>[],
                description: 'Additional classes applied to .card-footer.'
            }
        }
    }
</script>

<style scoped>

</style>