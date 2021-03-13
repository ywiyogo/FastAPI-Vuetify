<template>
    <Card>
        <template slot="header">
            Typography
        </template>

        <div class="row">
            <div class="col">
                <blockquote class="blockquote">
                    Default bootstrap typography system is used in pair with NunitoSans font
                </blockquote>
            </div>
        </div>

        <div class="row mt-1 mb-1" v-for="i in 6" :key="i">
            <div class="col" v-html="hGenerator(i)"></div>
        </div>
        <div class="mt-3"></div>
        <div class="row mt-1 mb-1" v-for="i in 4" :key="i">
            <div class="col" v-html="displayGenerator(i)"></div>
        </div>
        <div class="mt-3"></div>
        <div class="row">
            <div class="col">
                <p>
                    This is a simple <b>paragraph</b> typography text with some Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt
                </p>
            </div>
        </div>
        <div class="row" v-for="color in colors" :key="color">
            <div class="col">
                <p :class="[`text-${color}`]">
                    This is a simple <b>paragraph</b> typography text with some Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt
                </p>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "Typography",

        data(){
            return{
                colors:[
                    "default",
                    "primary",
                    "secondary",
                    "success",
                    "info",
                    "warning",
                    "danger",
                    "dark",
                ],
            };
        },

        methods:{
            hGenerator(i){
                return `<h${i}>H${i} typography text</h${i}>`;
            },

            displayGenerator(i){
                return `<h1 class="display-${i}">Display-${i} heading </h1>`;
            }
        }
    }
</script>

<style scoped>

</style>