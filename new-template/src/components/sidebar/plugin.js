import Sidebar from "./Sidebar";
import SidebarContentOverlay from "./SidebarContentOverlay";

/**
 * Sidebar plugin is used to track if sidebar is closed or opened
 */
const SidebarPlugin = {
    install(Vue){

        // Components of sidebar
        Vue.component(Sidebar.name, Sidebar);
        Vue.component(SidebarContentOverlay.name, SidebarContentOverlay);

        // Instance which will store information about visibility of sidebar
        let app = new Vue({
            data:{
                sidebarVisible:true,
            },
            methods:{
                // Sidebar state management methods
                toggle(){
                    this.sidebarVisible = !this.sidebarVisible;
                },
                open(){
                    this.sidebarVisible = true;
                },
                close(){
                    this.sidebarVisible = false;
                },
            }
        });

        // Adding global $sidebar property to Vue object
        Vue.prototype.$sidebar = app;
    }
};

export default SidebarPlugin;

