<template>
    <transition enter-active-class="animated fadeIn faster" v-if="!destroyed">
        <div
            @click="clicked"
            :class="['toast show', ...this.data.classes, `toast-${this.data.type}`]"
            role="alert"
            aria-live="assertive"
            aria-atomic="true">
            <div :class="['toast-header', {'no-border':data.title.toString().length ===0}]">
                <strong class="me-auto" v-if="data.title">{{data.title}}</strong>
                <small v-if="data.time">{{data.time}}</small>
                <button
                        v-if="this.data.showCloseButton"
                        @click="remove"
                        type="button"
                        class="ms-2 mb-1 btn-close"
                        data-dismiss="toast"
                        aria-label="Close">
                </button>
            </div>
            <div class="toast-body" v-if="data.body" v-html="data.body"></div>
        </div>
    </transition>
</template>

<script>

    export default {
        name: "ToastNotification",

        props:{
            // All available data properties are defined in toast/plugin.js optionsDefault
            data:{
                type:Object,
                required:true,
                description: 'Toast Notification data object that defines messages and behavior of toast notification',
            }
        },

        data(){
            return {
                destroyed:false,
            }
        },

        methods:{
            remove(){
                this.$toasts.remove(this.data);
            },

            clicked(){
                if(this.data.closeOnClick === true){
                    this.remove();
                }
            },

        },

        mounted() {
            // if timeout option is provided - remove after given timeout
            if(this.data.timeout !== -1){
                setTimeout(()=>{
                    this.$toasts.remove(this.data);
                }, this.data.timeout);
            }
        }
    }
</script>

<style scoped>

</style>