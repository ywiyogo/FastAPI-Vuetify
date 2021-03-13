    <template>
    <div :class="[{'nav-column':navColumn}]">
        <div :class="['nav', 'nav-tabs', {'nav-fill': navFill}, {'flex-column':navColumn}]">
            <div
                v-for="(nav, i) in children"
                :class="['nav-item']"
                @click="clickedTab(i)"
            >
                <span :class="['nav-link',  {'active': nav.active}]" v-html="nav.title"></span>
            </div>
        </div>
        <component class="nav-content" :is="contentTag">
            <slot/>
        </component>
    </div>
</template>

<script>
    export default {
        name: "Nav",

        props:{
            contentTag:{
                type:String,
                required:false,
                default:'div',
                description: 'HTML tag for Nav content. Default is div',
            },
            initActiveTab:{
                type:Number,
                required:false,
                default:1,
                description: 'Initially activated tab number starting at 1',
            },
            navFill:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true .nav-fill class will be applied and navigation tabs will expand to full width of container'
            },
            navColumn:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true .flex-column class will be applied and navigation tabs will appear as a list column'
            }
        },

        data(){
            return {
                // Children are registered from NavItem
                children:[],
                currentlyActiveTab:null,
            };
        },

        computed:{
            // Index of currently active child from this.children array
            activeTab:{
                get(){
                    if(this.currentlyActiveTab === null){
                        // Human provided value will start from 1
                        return this.initActiveTab-1;
                    }
                    return this.currentlyActiveTab;
                },
                set(val){
                    this.currentlyActiveTab = val;
                }
            },
        },

        methods:{
            // Perform some actions when tab link is clicked
            clickedTab(i){
                this.activateTab(i);
                this.activeTab = i;
            },

            // i can either be index of this.children, or NavItem object
            activateTab(i){
                let compareFunc = null;

                // Define compare function
                if(typeof i === 'number'){
                    compareFunc = (child, index) =>{
                        child.active = i === index;
                    }
                }
                else{
                    compareFunc = (child, index) =>{
                        child.active = i === child;
                    }
                }

                // Loop through children and activate provided child
                this.children.forEach(compareFunc);
            }
        },

        mounted() {
            // Activate first tab initially
            this.activateTab(this.activeTab);
        }
    }
</script>

<style scoped>

</style>