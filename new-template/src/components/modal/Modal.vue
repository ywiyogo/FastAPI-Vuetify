<template>
    <div class="modal-container" v-if="internalOpen">
        <div class="modal-backdrop show"></div>
        <div
            ref="modal"
            class="modal d-block fade"
            tabindex="-1"
            @click.self="backdropClick"
            @keydown.esc="closeModal">
            <div :class="[
                'modal-dialog',
                {'modal-dialog-scrollable':dialogScrollable},
                {'modal-dialog-centered':dialogVerticallyCentered},
                dialogSize]">
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>/**
 *  Use these bootstrap classes when creating modals:
 *  .modal-header
 *  .modal-body
 *  .modal-header
 *  Emitted events:
 *      @closed(true) - is emitted when modal is closed by either escape button or click on backdrop.
 *      This event should be implemented in order to listen to modal state changes and set :open prop to false.
 *  Control of display:
 *      open prop
 */

import {getTransitionDurationInMs} from "../../helpers/helpers";

    export default {
        name: "Modal",

        data(){
            return{
                // Internal component representation of open prop. Defers value of prop on exit in order to show animation
                internalOpen: false,
                transitionDuration: null,
            }
        },

        props:{
            open:{
                type:Boolean,
                required:false,
                default:false,
                description: 'Control for showing modal. If set to true - modal will be displayed. If false - modal will be hidden.'
            },
            dialogScrollable:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If provided as true, .modal-dialog-scrollable class will be added to .modal-dialog and will make it scrollable if content exceeds viewport height.'
            },
            dialogVerticallyCentered:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If provided as true, .modal-dialog-centered will be added to .modal-dialog.',
            },
            dialogSize:{
                type:String,
                required:false,
                validator:(val)=>{
                    return [
                        'modal-sm',
                        'modal-lg',
                        'modal-xl',
                    ].indexOf(val) !== -1
                },
                description: 'Custom optional size classes for .modal-dialog. Available ones: modal-sm, modal-lg, modal-xl.',
            },
            disableBackdropExit:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true - modal will not be closed when user clicks on modal backdrop. Modal visibility must be managed manually by open prop or openModal/closeModal methods',
            }
        },

        methods:{
            backdropClick(){
                if(!this.disableBackdropExit){
                    this.closeModal();
                }
            },

            closeModal(){
                document.body.classList.remove('modal-open');

                // Calculate transition duration to show exit animation
                if(this.transitionDuration === null) {
                    this.transitionDuration = getTransitionDurationInMs(this.$refs.modal);
                }

                // Transition classes
                this.$refs.modal.classList.remove('show');

                // Allow for transition to finish
                setTimeout(()=>{
                    this.$emit('closed', true);
                    this.internalOpen = false;
                }, this.transitionDuration)
            },

            openModal(){
                this.internalOpen = true;

                // Add scroll lock for body when modal is open
                document.body.classList.add('modal-open');

                this.$nextTick(()=>{
                    // Focus modal on open in order to make esc button work
                    this.$refs.modal.focus();

                    // Transition classes
                    this.$refs.modal.classList.add('show');
                });
            },

        },

        watch:{
            open(val){
                if(val === true){
                    this.openModal();
                }
                else{
                    this.closeModal();
                }
            }
        },

        destroyed() {
            // Remove overflow classes from body if modal component is destroyed
            document.body.classList.remove('modal-open');

        }
    }
</script>

<style lang="scss">


</style>