import Vue from 'vue';
import { createPopper } from '@popperjs/core';
import Tooltip from './Tooltip';
/**
 * Tooltip plugin usage:
 * 1. Create tooltip component and bind unique id parameter to it or you can pass an object with id of tooltip and placement
 * {id:tooltip-id, placement:top|right|bottom|left}
 * Any valid html or other components can be used inside
 * tooltip. Tooltip will be registered to Vue.$tooltips global property in beforeMount hook.
 * 2. Add v-tooltip directive to any component you want to have the tooltip that was created. Specify the id of tooltip
 * that was created in the first step when binding value to v-tooltip.
 * @type {{install(*): void}}
 */
const TooltipPlugin = {
    install(Vue){

        // Register component
        Vue.component(Tooltip.name, Tooltip);

        // Popper.js functionality
        Vue.directive('tooltip', {
            inserted(el, {value}, vnode ){
                // v-tooltip should provide the id
                let tooltipObject = null;
                let tooltipId = null;
                let placement = 'bottom';
                if(typeof value === 'object'){
                    tooltipObject = value;
                    tooltipId = tooltipObject.id;

                    if('placement' in tooltipObject){
                        placement = tooltipObject.placement;
                    }
                }
                else{
                    // Only id is provided
                    tooltipId = value
                }
                let tooltip = vnode.context.$tooltips.tooltips[tooltipId];

                if(tooltip === undefined){
                    console.error('Called for undefined tooltip with id:', tooltipId);
                    return;
                }

                // Create popper and set tooltip to display on mouseover
                el.addEventListener('mouseover', ()=>{
                    tooltip.show = true;
                    const p = createPopper(el, tooltip.$el, {
                        placement:placement,
                        modifiers:[
                            {
                                name: 'offset',
                                options:{
                                    offset:[0, 10],
                                }
                            }
                        ]
                    });
                    vnode.context.$nextTick(p.update);
                });

                // Hide tooltip when mouse leaves the main element
                el.addEventListener('mouseout', ()=>{
                    tooltip.show = false;
                });
            }
        });

        // Global $tooltips property
        Vue.prototype.$tooltips = new Vue({
            data:{
                tooltips: {},
            },
            methods:{

                // Tooltip registration function. Should be used in Tooltip.vue component beforeMount()
                add(tooltipId, tooltip){
                    // Only unique ids should be added
                    if(tooltipId in this.tooltips){
                        console.error("Duplicate tooltip with id: ", tooltipId)
                    }
                    else{
                        // Registering tooltip
                        this.$set(this.tooltips, tooltipId, tooltip);
                    }
                },

                // Unregister tooltip (when main component is destroyed)
                remove(tooltipId){
                    delete this.tooltips[tooltipId];
                }
            }
        });
    }
};

export default TooltipPlugin;
