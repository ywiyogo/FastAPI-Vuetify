import Vue from 'vue';

const CollapsePlugin = {
    install(Vue) {

        // Collapse directive that should be used on buttons where we want to toggle collapse on click
        Vue.directive('collapse', {
            inserted(el, {value}, vNode) {
                let collapseId = value;

                // Lsiten to click events and toggle collapse
                el.addEventListener('click', ()=>{
                    vNode.context.$collapse.toggle(collapseId);
                })
            }
        });

        // Global $collapse plugin
        Vue.prototype.$collapse = new Vue({
            data: {
                // Object of registered collapse components keyed by unique ids
                collapses: {},
            },

            methods: {

                // Register Collapse component instances with unique ids
                // Registration should happen in beforeMount()
                register(id, instance) {
                    if (id in this.collapses) {
                        console.error('Duplicate collapse id: ', id);
                    }
                    // Overwriting
                    this.$set(this.collapses, id, instance);
                },

                // Unregister from object
                unregister(id) {
                    if (id in this.collapses) {
                        this.$delete(this.collapses, id);
                    }
                },

                // Toggle targeted collapse
                toggle(id) {
                    if (id in this.collapses) {
                        this.collapses[id].show = !this.collapses[id].show;
                    }
                },

                show(id) {
                    if (id in this.collapses) {
                        this.collapses[id].show = true;
                    }
                },

                hide(id) {
                    if (id in this.collapses) {
                        this.collapses[id].show = false;
                    }
                },

                getState(id){
                    if (id in this.collapses) {
                        return this.collapses[id].show;
                    }
                    return null;
                },
            }
        });
    }
};

export default CollapsePlugin;
