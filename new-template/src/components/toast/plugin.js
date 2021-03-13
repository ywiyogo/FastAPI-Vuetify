import ToastNotification from './ToastNotification'
import ToastNotificationContainer from './ToastNotificationsContainer'
import {generateKey} from "../../helpers/helpers";

/**
 * Toast notification plugin. Prepares component of notifications and initializes control object
 *
 */
const ToastNotifications = {
    install(Vue) {
        Vue.component(ToastNotification.name, ToastNotification);
        Vue.component(ToastNotificationContainer.name, ToastNotificationContainer);

        // Toasts plugin
        Vue.prototype.$toasts = new Vue({
            data(){
                return {
                    // Array of toast notifications that are currently added
                    all: [],

                    // Time based id used to force redraw
                    lastRenderKey:null,

                    // Time when the lastRenderKey was last generated
                    // Used for performance reasons
                    lastRenderKeyTime:0,
                }
            },

            computed:{
                // Container position based on first toast in this.all
                containerPosition(){
                    return this.all.length>0?this.all[0].position||'':'';
                }
            },

            methods:{

                /**
                 * Default values for tooltip options
                 * @returns {{position: string, body: string, title: string, timeout: number}}
                 */
                optionsDefault(){
                    return {
                        // String for toast body text. Can include html
                        body:'',
                        // String for toasts head title
                        title:'',
                        // Toast position: top-left | top-right | top-center | bottom-left | bottom-right | bottom-center
                        position:'top-right',
                        // Time in milliseconds when tooltip will be closed automatically. If set to -1 tooltip won't be closed automatically
                        timeout:5000,
                        // Whether toast should be closed on click
                        closeOnClick:false,
                        // Appendable classes to toast notification
                        classes:[],
                        // Whether close button should be shown or not
                        showCloseButton:true,
                        // One of available bootstrap theme-colors:  default primary secondary success info warning danger light dark
                        type:'primary',
                    }
                },

                /**
                 * Adjust user input to match prop types correctly
                 * @returns {{timeout(*=): (number)}|number|*}
                 */
                optionsTransformers(){
                    return {
                        // Timeout value should be integer
                        timeout(val){
                            if(typeof val === 'string'){
                                return parseInt(val);
                            }
                            return val;
                        }
                    }
                },

                // Create new toast notification
                add(options = {}) {
                    // Filling in default required data
                    let defaults = this.optionsDefault();
                    let transformers = this.optionsTransformers();
                    for(let key in defaults){
                        if(!options.hasOwnProperty(key)){
                            options[key] = defaults[key];
                        }
                        // Transform values
                        if(transformers.hasOwnProperty(key)){
                            options[key] = transformers[key](options[key]);
                        }
                    }

                    this.all.push(options);
                    this.$nextTick(this.updateRerenderTime);
                },

                // Removes toast notification
                // OptionsObject is options object provided in this.add()
                remove(optionsObject){
                    this.all = this.all.filter((options)=> {
                        console.log(options === optionsObject);
                        return options !== optionsObject
                    });
                    this.$nextTick(this.updateRerenderTime);
                },

                // Getter for this.all
                getAll() {
                    return this.all;
                },

                updateRerenderTime(){
                    // Prevent key regeneration for multiple times per second except when it was the last item
                    if(this.lastRenderKeyTime + 1000 < (new Date).getTime() || this.all.length === 0) {
                        this.lastRenderKeyTime = generateKey();
                    }
                }
            }
        });
    }
};

export default ToastNotifications;