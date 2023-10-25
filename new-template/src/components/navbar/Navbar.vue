<template>
    <nav class="navbar navigation-bar">
        <slot name="default" :toggle-sidebar="toggleSidebar">
            <div @click="toggleSidebar" class="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="30" height="30"
                     viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                     stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <line x1="4" y1="6" x2="20" y2="6"/>
                    <line x1="4" y1="12" x2="20" y2="12"/>
                    <line x1="4" y1="18" x2="20" y2="18"/>
                </svg>
            </div>
        </slot>
    </nav>
</template>

<script>

    export default {
        name: "Navbar",
        methods:{
            // Toggle sidebar visibility
            toggleSidebar(){
                this.$sidebar.toggle();
            }
        }
    }
</script>

<style scoped>

</style>