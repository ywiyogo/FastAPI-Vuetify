<template>
    <div :class="['select-dropdown', {'menu-open':!dropdownStateClosed}]">
        <Dropdown
                no-animation
                y-offset="3"
                menu-classes="w-100 py-0"
                ref="dropdown"
                class="w-100"
        >
            <div
                    @keydown.up="arrowUpEvent"
                    @keydown.down="arrowDownEvent"
                    @keydown.enter="selectSilently"
                    tabindex="-1"
                    class="select-dropdown-placeholder h-auto form-control input w-100 d-flex align-items-center justify-content-between"
                    slot="button"
                    @click="buttonClick">

                <div v-show="!showFilterInput">
                    <slot name="placeholder" :selected-item="selectedItem">{{selectedItem}}</slot>
                </div>
                <input
                        class="input blank w-100"
                        ref="input"
                        v-model="inputValue"
                        v-show="showFilterInput">
                <slot name="handle" :dropdown-open="!dropdownStateClosed">
                    <div class="select-dropdown-handle" v-html="icons.ChevronDown"></div>
                </slot>
            </div>
            <div ref="items">
                <div
                        :class="['dropdown-item', {'active': item === silentlySelectedItem}]"
                        v-for="(item, i) in filteredData"
                        @click="change(item)"
                        @mouseover="silentlySelectedItem = item"
                >
                    <slot name="default" :item="item" :is-selected="item === selectedItem">{{item}}</slot>
                </div>
            </div>
        </Dropdown>
    </div>
</template>

<script>
    /**
     * Recommended usage: with slots - this way you can define your own way of structuring dropdown items
     *  @slots:
     *      placeholder - slot which can be used to style the selected value, receives selectedItem slot property in parent
     *      default - slot which can be used to customize how select dropdown menu items look. Slot receives item property
     *      handle - slot for handle icon, can replace default one.
     *
     * is-searchable only works when data contains String or Number values. If data Array contains Objects - it will break.
     */
    import icons from "../../helpers/icons";
    export default {
        name: "Select",
        props: {
            data: {
                type: Array,
                required: true,
                description: 'Array of strings/integers - selectable options for select dropdown. Should be array of Numbers|Strings|Objects',
            },
            selected: {
                type: String | Number | Object,
                required: false,
                default: null,
                description: 'Selected item from data array. This property is not required, but if provided - will be prioritized over internal selected item value of component'
            },
            isSearchable: {
                type: Boolean,
                required: false,
                default: false,
                description: 'If provided as true - select will be searchable on click and user will be able to filter through the data'
            },
        },

        data() {
            return {
                icons,

                // Filtering input value
                inputValue: '',

                // this.data copy, which is filtered based on inputValue
                // values of filteredData will be used in rendering the dropdown list
                filteredData: [],

                // Selected item (component scope). Value will be emitted via @change to parent.
                selectedItem: null,

                // Indicates if dropdown state is open/closed
                dropdownStateClosed: true,

                // Silently selected item value. Value is selected on hover
                silentlySelectedItem: null,
            }
        },

        computed: {
            showFilterInput() {
                return this.isSearchable === true && !this.dropdownStateClosed;
            },

            silentlySelectedItemIndex() {
                return this.filteredData.indexOf(this.silentlySelectedItem);
            },
        },

        methods: {
            // Change selected item
            change(item) {
                // Emits change event to parent with data
                this.$emit('change', item);

                // Updating value of component
                this.selectedItem = item;

                // Cleanup silently selected item and set to current
                // So when arrow keys are used we start going from current item
                this.silentlySelectedItem = item;

                this.$nextTick(() => {
                    // Close dropdown
                    this.$refs.dropdown.close();

                    // Reset things only after dropdown is closed
                    this.$nextTick(() => {
                        // Reset filter input value and filteredData to default
                        this.filteredData = this.data;
                        this.inputValue = '';
                    });
                });

            },

            // Button slot of Dropdown (input/placeholder slot)
            // Triggered on dropdown open
            buttonClick(e) {
                this.$nextTick(() => {
                    // Close dropdown menu
                    if (!this.$refs.dropdown.closed) {
                        // Stop event bubbling up, because it will automatically set dropdown to open on
                        // Dropdown toggle method as it is being called on component click
                        e.stopPropagation();

                        // Close dropdown on button click when dropdown is open
                        this.$refs.dropdown.close();
                    }
                    // Open dropdown menu
                    else {
                        // Set to selected item just in case it got lost
                        // this.silentlySelectedItem = this.selectedItem;
                        //
                        // // Default data
                        this.filteredData = this.data;

                        // Populate filter input value if needed
                        if (this.isSearchable && this.selectedItem) {
                            this.inputValue = this.selectedItem;
                        }
                    }
                });
            },

            // Focus on filter input and select it's text if needed
            focusOnFilterInput() {
                this.$refs.input.focus();
                this.$refs.input.select();
            },

            // Filter shown data in dropdown menu based on filter input value
            filterSelection() {
                let val = this.inputValue.toString();
                this.filteredData = this.data.filter(f => {
                    if (f === null || f === undefined) {
                        return false;
                    }
                    return f.toString().toLowerCase().indexOf(val.toLowerCase()) !== -1
                });
            },

            // Enter button functionality
            selectSilently() {
                if (!this.dropdownStateClosed && this.silentlySelectedItem !== null) {
                    this.change(this.silentlySelectedItem);
                }
            },

            // Make silentlySelectedItem's html visible in viewport
            focusCurrentlySelectedItem() {
                this.$refs.items.children[this.silentlySelectedItemIndex].scrollIntoView({
                    // Prevents page of jumping and scrolls only dropdown menu
                    block: 'nearest',
                });
            },

            // Selects next/prev item from menu and focuses that item
            nextPrevItemFromData(indexShift) {
                // Index should be taken from displayed data
                let si = this.filteredData.indexOf(this.silentlySelectedItem);
                let nextIndex = 0;
                if (si !== -1) {
                    // Down the list
                    nextIndex = Math.max(0, si + indexShift);
                    if (indexShift > 0) {
                        // Up the list
                        nextIndex = Math.min(this.filteredData.length - 1, si + indexShift);
                    }
                }
                // Select item via index and focus to it
                this.silentlySelectedItem = this.filteredData[nextIndex];
                this.$nextTick(this.focusCurrentlySelectedItem);
            },

            // Select dropdown menu events to select items from data
            arrowUpEvent(e) {
                if (this.dropdownStateClosed) {
                    return;
                }
                // Disables scroll
                e.preventDefault();

                // Set previous item (up in the list)
                this.nextPrevItemFromData(-1);
            },

            arrowDownEvent(e) {
                if (this.dropdownStateClosed) {
                    return;
                }
                // Disables scroll
                e.preventDefault();

                // Set next item (down in the list)
                this.nextPrevItemFromData(+1);
            },
        },

        watch: {
            // Change selection on input
            inputValue: function (val) {
                if (!this.dropdownStateClosed) {
                    this.$nextTick(this.filterSelection);
                }
            },

            // Prioritize property value over component value of selected item
            // So if parent changes the value via props - it will be reflected in component state
            selected: function (val) {
                this.selectedItem = val;
            },

            // Focus on input when clicked on input and is-searchable is true
            showFilterInput: function (val) {
                if (val) {
                    this.$nextTick(this.focusOnFilterInput);
                }
            }
        },

        created() {
            // Assign data to filteredData
            this.filteredData = this.data;

            // Some parent level control of selected item
            this.selectedItem = this.selected;
        },

        mounted() {
            // Watch dropdown state
            this.$watch(() => this.$refs.dropdown.closed, (val) => {
                this.dropdownStateClosed = val;

                // Cleanup silently selected item on close
                if (val === true) {
                    this.silentlySelectedItem = this.selectedItem;
                }
                // Dropdown menu is open
                else{
                    // Focus selected item in viewport when we open up dropdown menu (For example when we have selected item in a long list)
                    this.$nextTick(()=>{
                        if(this.$refs.items !== undefined && this.silentlySelectedItemIndex !== -1){
                            this.focusCurrentlySelectedItem();
                        }
                    });
                }
            });
        }
    }
</script>

<style scoped>

</style>