<template>
    <div :class="['pagination', size.length>0?`pagination-${size}`:'']">

        <div class="page-item" @click="previous">
            <span class="page-link">
                <slot name="previous">prev</slot>
            </span>
        </div>

        <div class="page-item" v-if="this.showFirst">
            <span @click="change(1)" class="page-link">1</span>
        </div>
        <div class="page-item" v-if="this.showFirst">
            <span class="page-link disabled">...</span>
        </div>
        <div
                :class="['page-item', {'active': i === parseInt(currentPage) && !disabledPages.includes(i)}, {'disabled': disabledPages.includes(i)}]"
                v-for="i in displayPages"
                :key="i"
        >
            <span @click="change(i)" class="page-link">{{i}}</span>
        </div>
        <div class="page-item" v-if="this.showLast">
            <span class="page-link disabled">...</span>
        </div>
        <div class="page-item" v-if="this.showLast">
            <span @click="change(pages)" class="page-link">{{pages}}</span>
        </div>
        <div class="page-item" @click="next">
            <span class="page-link">
                <slot name="next">next</slot>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",

        props:{
            pages:{
                type:Number,
                required:true,
                default:1,
                description: 'Total number of pages.'
            },
            value:{
                type:Number,
                required:false,
                default:1,
                description: 'Currently selected page number.'
            },
            size:{
                type:String,
                required:false,
                default:'',
                validator(val){
                    if(val.length > 0 ) {
                        return ['lg', 'sm'].indexOf(val) !== -1;
                    }
                    // Disable errors on non provided values
                    return true;
                },
                description: 'Sized bootstrap pagination: lg or sm for large and small respectively.',
            },
            threshold:{
                type:Number,
                default:1,
                required:false,
                description: 'Threshold defines how many page buttons should be shown around the current page button when it is in the middle.',
            },
            dontShowFirstPage:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true first page button will be hidden.',
            },
            dontShowLastPage:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true last page button will be hidden.',
            },
            disabledPages:{
                type:Array,
                required:false,
                default:()=>[],
                validator(val){
                    return Array.isArray(val);
                },
                description: 'Array of page numbers which should be disabled.',
            }
        },

        data(){
            return {
                displayPagesCalculated:false,
                displayPages:[],
            }
        },

        computed:{
            // First block for pagination
            showFirst(){
                return !this.displayPages.includes(1) && !this.dontShowFirstPage;
            },

            // Last block for pagination
            showLast(){
                return !this.displayPages.includes(this.pages) && !this.dontShowLastPage;
            },

            currentPage(){
                return this.value;
            },
        },

        methods:{
            change(pageNum){
                this.$emit('input', pageNum);
            },

            previousAvailable(){
                return this.currentPage - 1 > 0;
            },

            previous(){
                if(this.previousAvailable()){
                    this.change(this.currentPage-1);
                }
            },

            nextAvailable(){
                return this.currentPage + 1 <= parseInt(this.pages);
            },

            next(){
                if(this.nextAvailable()){
                    this.change(this.currentPage+1);
                }
            },

            // This function is the key for creating smooth experience,
            // middle page numbers are recalculated only when
            // currentPage number reaches an edge
            recalculateMiddle(){
                let list = [];
                if(
                    this.displayPagesCalculated === false ||
                    this.currentPage === this.displayPages[0]-1 ||
                    this.currentPage === this.displayPages[this.displayPages.length-1]+1 ||
                    [1, this.pages].includes(this.currentPage)
                ) {
                    for (let i = Math.max(1, this.currentPage - this.threshold); i <= Math.min(this.pages, this.currentPage + this.threshold); i++) {
                        list.push(i);
                    }
                    this.displayPagesCalculated = true;
                }
                else{
                    list = this.displayPages;
                }
                this.displayPages = list;
            }
        },

        watch:{
            // When current page is changed we want to recalculate middle pages
            value(val){
                this.$nextTick(this.recalculateMiddle);
            }
        },

        mounted() {
            // init
            this.recalculateMiddle();
        },
    }
</script>

<style scoped>

</style>