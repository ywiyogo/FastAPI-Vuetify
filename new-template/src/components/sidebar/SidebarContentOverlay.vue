<template>
    <div v-if="show" class="sidebar-content-overlay" @click="hideSidebar"></div>
</template>

<script>
    export default {
        name: "SidebarContentOverlay",
        props:['show'],
        methods:{
            hideSidebar(){
                this.$sidebar.close();
            }
        }
    }
</script>

<style scoped>

</style>