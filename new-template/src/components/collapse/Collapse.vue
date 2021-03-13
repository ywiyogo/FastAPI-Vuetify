<template>
    <transition
        @enter="enter"
        @before-enter="beforeEnter"

        @leave="leave"
        @before-leave="beforeLeave"
    >
        <div v-show="show" class="collapse-holder">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    /**
     * Collapse can be toggled in 2 ways:
     * 1. Using v-collapse directive and providing collapse element id
     * 2. By using collapse component instance and utilizing toggle, open, close methods
     *
     * You can listen to @open and @close events on component for additional functionality about collapse display state
     */

    // Animation time in miliseconds
    const ANIMATION_TIME = 200;
    export default {
        name: "Collapse",

        data(){
            return{
                show:false,
                height:null,
            };
        },

        props:{
            id:{
                type:String,
                required:false,
                description: 'Unique id for collapse',
            },
            showInitially:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true - collapse content will be shown initially'
            },
        },

        methods:{
            enter(el, done){
                // Set to animate height
                // requestAnimationFrame is used 2 times because it does the trick on other browsers
                // We need to wait for browser to recalculate the element box otherwise transition does not work
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        el.style.height = this.height + 'px';

                        // Remove css height property because for some reason after-enter does not get called
                        setTimeout(()=>{
                            el.style.height = null;
                        }, ANIMATION_TIME);
                    });
                });
            },

            beforeEnter(el){
                // Getting box height even if display is set to none
                let initVisibility = el.style.visibility;
                let initDisplay = el.style.display;
                el.style.height = '';
                el.style.visibility = 'hidden';
                el.style.display = 'block';

                // Saving height in data
                let height = el.clientHeight;
                this.height = height;

                // Setting visibility back to initial
                el.style.visibility = initVisibility;

                // Setting initial values for animation
                el.style.display = 'block';
                el.style.height = 0+'px';
            },

            beforeLeave(el){
                // Set initial height
                el.style.height = this.height + 'px';
                el.style.display = 'block';
            },

            leave(el){
                // Shrink to 0px when leaving
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        el.style.height = '0px';
                    })
                });
            },

            /* Methods for manual control of collapse */
            // Open collapse
            open(){
                this.show = true;
            },

            // Close collapse
            close(){
                this.show = false;
            },

            // Toggle collapse
            toggle(){
                this.show = !this.show;
            },
        },

        beforeMount() {
            if(this.id !== undefined) {
                this.$collapse.register(this.id, this);
            }
        },

        beforeDestroy() {
            if(this.id !== undefined) {
                this.$collapse.unregister(this.id);
            }
        },

        mounted() {
            // Show collapse initially
            if(this.showInitially){
                this.show = true;
            }
        },

        watch:{
            // Emit events to parent on display change
            show:function(val){
                if(val){
                    this.$emit('open');
                }
                else{
                    this.$emit('close');
                }
            }
        }
    }
</script>

<style lang="scss">
    .collapse-holder{
        overflow: hidden;
        transition: height 200ms ease;
    }
</style>