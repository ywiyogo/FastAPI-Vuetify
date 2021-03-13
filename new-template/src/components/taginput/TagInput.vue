<template>
    <div>
        <div v-if="$slots['label'] || label.length>0" class="input-label">
            <slot name="label">
                <span v-if="label.length>0">{{label}}</span>
            </slot>
        </div>
        <div :class="['tag-input', 'form-control', 'input', {'focused':inputFocused}]" @click="focusInput">
            <span :class="['tag', `tag-${type}`]" v-for="(tag,i) in tags" :key="key(i)">
                <span class="tag-text">{{tag}}</span>
                <span ref="close" class="tag-close" @click="remove($event, i)" v-html="closeIcon"></span>
            </span>
            <input
                    @focus="inputFocused=true"
                    @blur="inputFocused=false"
                    :placeholder="showPlaceholder?placeholder:''"
                    ref="input"
                    class="input"
                    type="text"
                    v-on:keydown.enter="add"
                    v-on:keydown.delete="removeLast"
                    v-model="inputText">
        </div>
        <div class="input-info" v-if="$slots['info'] || infoText.length>0">
            <slot name="info">
                <span v-if="infoText.length > 0">{{infoText}}</span>
            </slot>
        </div>
    </div>
</template>

<script>

    /**
     * DESCRIPTION
        Tag input component.
        Simple usage example:
        <TagInput
            label="Tag input label"
            v-model="tags"
            info-text="Tag input info text"
            placeholder="Try to type something and hit enter..."
            type="secondary"></TagInput>

        Properties:
            value: Array of strings, used for displaying tags
            type: one of the available bootstrap theme types (default, primary, secondary, success, info, warning...)
            placeholder: placeholder for input field
            label: label text for tag input
            info-text: smaller info text for tag input
     */
    import icons from "../../helpers/icons";
    export default {
        name: "TagInput",

        props:{
            value:{
                type:Array,
                required:false,
                description: 'Initial value of tags used for v-model'
            },
            type:{
                type:String,
                default:'primary',
                required:false,
                description: 'One of default theme types that will be used to apply color and background styles. Available types are: default, primary, secondary, success, info, warning, danger, light, dark',
            },
            placeholder:{
                type:String,
                required:false,
                description: "Simply the placeholder for input",
            },
            infoText:{
                type:String,
                default:'',
                required:false,
                description:'Info message'
            },
            label:{
                type:String,
                default:'',
                required:false,
                description:'Label text'
            },
        },

        data(){
            return {
                closeIcon:icons.Times,
                tags:[],
                inputText:'',
                inputFocused:false,
            }
        },

        computed:{
            showPlaceholder(){
                return this.tags.length === 0;
            }
        },

        methods:{

            key(i){
                return i + (new Date().getTime()).toString();
            },

            // Adds tag to array and clears input
            add(){
                if(this.inputText.length > 0) {
                    this.tags.push(this.inputText);
                    this.inputText = '';

                    // Notify parent about changes
                    this.$emit('input', this.tags);
                }
            },

            // Focus underlying input when clicked on component
            focusInput(e){
                this.$refs.input.focus();
            },

            // Remove tag from data array based on provided index
            remove(e, index){
                // Prevent event bubbling up and focusing on input
                // if unstopped  - causes a need to double click in order to click event to work on other tags
                e.stopPropagation();

                this.tags.splice(index, 1);
            },

            // Used when delete button is pressed in empty input field
            // Removes last tag
            removeLast(){
                if(this.inputText.length === 0){
                    this.tags.pop();
                }
            }

        },

        mounted() {

            // If initial value was provided and is array
            // Add it to internal tags array.
            if(Array.isArray(this.value)) {
                this.tags = this.value;
            }

        }
    }
</script>

<style scoped>

</style>