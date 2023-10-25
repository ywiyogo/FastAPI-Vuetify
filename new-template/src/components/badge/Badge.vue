<template>
    <component
        :is="element"
        :[href]="link"
        :class="[
            'badge',
            `bg-${type}`,
            {'rounded-pill':pill},
            {'badge-inverse':inverse},
            'text-decoration-none',
        ]"
    >
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: "Badge",

        props:{
            type:{
                type:String,
                default:'primary',
                required:false,
                description: 'One of available bootstrap button types: primary, secondary, default, success, info, warning, danger',
            },
            link:{
                type:String,
                default:'',
                required:false,
                description: 'Url of link, if link is provided the badge element will be set to <a>'
            },
            pill:{
                type:Boolean,
                default:false,
                required:false,
                description: 'If pill prop is provided and set to true then .badge-pill class will be applied'
            },
            inverse:{
                type:Boolean,
                default: false,
                required:false,
                description: 'If set to true .badge-inverse class will be added',
            }
        },

        computed:{
            element(){
                let el = 'span';

                // Change element to a
                if(this.link.length > 0){
                    el = 'a';
                }

                return el;
            },
            href(){
                if(this.link.length>0){
                    return 'href';
                }
                return null;
            },
            classes(){

            }
        }
    }
</script>

<style scoped>

</style>