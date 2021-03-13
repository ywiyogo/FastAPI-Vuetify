<template>
    <div :class="['sidebar', closed?'closed':'', ]">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * Use $sidebar global variable in any component to control state of sidebar.
     * Available methods:
     *      $sidebar.close()
     *      $sidebar.open()
     *      $sidebar.toggle()
     * See src/components/sidebar/plugin.js for more info.
     */
    export default {
        name: "Sidebar",

        data(){
            return {
                // Initial state is open sidebar.
                closed:false,
            }
        },

        watch:{
            // Watch if sidebar is being closed/opened and adjust visibility
            '$sidebar.sidebarVisible':function(visible){
                this.closed = !visible;

                // On mobile we want to hide overflow so there is no incorrect scrolling on content when we
                // Interact with sidebar or SidebarContentOverlay
                document.body.classList.remove('overflow-hidden');
                if(window.innerWidth < 768 && visible === true){
                    document.body.classList.add('overflow-hidden');
                }
            }
        },

        mounted() {
            // Hide sidebar on mobile initially
            if(window.innerWidth < 768){
                this.$sidebar.close();
            }

            // Open/Close on touch
            document.addEventListener('DOMContentLoaded', ()=>{
                let body = document.body;
                let start = {}, end = {};

                body.addEventListener('touchstart', (touchEvent)=>{
                    let t = touchEvent.changedTouches[0];
                    start.x = t.clientX;
                    start.y = t.clientY;
                });
                body.addEventListener('touchend', (touchEvent)=>{
                    let t = touchEvent.changedTouches[0];
                    end.x = t.clientX;
                    end.y = t.clientY;

                    let diffX = Math.abs(end.x-start.x);
                    let diffY = Math.abs(end.y-start.y);

                    // Slide open only near left edge
                    // diffX > 50 prevents accidental small touches of being treated as swipes for sidebar
                    if(diffX > diffY && start.x <= 50 && diffX > 50){
                        this.$sidebar.open();
                    }
                    // Only left to right swipes allowed to close sidebar
                    if(diffX > 50 && start.x > end.x){
                        this.$sidebar.close();
                    }
                });

            });
        }
    }
</script>

<style scoped lang="scss">

    .icon{
        margin-right: 4px;
    }

</style>