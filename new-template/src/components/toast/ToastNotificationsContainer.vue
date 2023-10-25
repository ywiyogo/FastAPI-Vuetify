<template>
    <div :key="key" :class="['toast-notifications-container', $toasts.containerPosition]" v-if="showContainer">
        <ToastNotification
            v-for="toast in toasts"
            :data="toast"
        />
    </div>
</template>
<script>
    export default {
        name: "ToastNotificationsContainer",

        computed:{
            showContainer(){
                return this.toasts.length > 0;
            },

            toasts(){
                return this.$toasts.getAll();
            },

            key(){
                return this.$toasts.lastRenderKey;
            }
        },

        created(){
           // console.log(this.$toasts);
        },
    }
</script>

<style scoped>

</style>