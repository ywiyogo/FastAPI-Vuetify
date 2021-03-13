<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li
                :class="['breadcrumb-item', {'active':item.active}]"
                v-for="(item, key) in items"
            >
                <component
                    :is="getItemComponent(item)"
                    :[href(item)]="item.link"
                    :class="['breadcrumb-link', ...linkClasses]"
                >
                    {{item.page}}
                    <!-- Separator -->
                    <svg v-if="key+1 !== numberOfItems" xmlns="http://www.w3.org/2000/svg" class="breadcrumb-divider" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="9 6 15 12 9 18"></polyline>
                    </svg>
                </component>
            </li>
        </ol>
    </nav>
</template>

<script>
    export default {
        name: "Breadcrumb",

        props:{
            items:{
                type: Array,
                required:true,
                validator(val){
                    let valid = false;
                    if(Array.isArray(val)){
                        val.forEach(v=>{
                            if(typeof v === 'object'){
                                if('page' in v && typeof v['page'] === 'string'){
                                    valid = true;
                                }
                            }
                        });
                    }
                    return true;
                },
                description: 'Array of objects which contain keys page for page name and link (optional) and active to indicate if page should be marked as active (optional)',
            },
            linkClasses: {
                type: String | Array,
                required: false,
                description: 'Additional classes that will be provided to .breadcrumb-link elements'
            },
        },

        computed:{
            numberOfItems(){
                return this.items.length;
            }
        },

        methods:{
            // Component tag for breadcrumb items. Set to <a> when there is a link provided
            getItemComponent(item){
                if('link' in item){
                    return 'a';
                }
                return 'span';
            },

            // Get href attribute if available
            href(item){
                if('link' in item && item.link.length>0){
                    return 'href';
                }
                return null;
            },
        },
    }
</script>

<style scoped>

</style>