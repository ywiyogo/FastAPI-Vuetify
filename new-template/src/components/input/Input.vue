<template>
    <div :class="[
        'input-container',
        {'valid':invalid === false},
        {'error':invalid === true},
    ]">
        <div v-if="$slots['label'] || label.length>0" class="input-label">
            <slot name="label">
                <span v-if="label.length>0">{{ label }}</span>
            </slot>
        </div>
        <div class="input-group">
            <slot name="prepend"></slot>
            <component :is="tag"
                       :class="[
                    'form-control',
                    'input',
                    {'valid':invalid === false},
                    {'error':invalid === true},
                    {'form-control-lg': size === 'lg'},
                    {'form-control-sm': size === 'sm'},
                ]"
                       :type="type"
                       :placeholder="placeholder"
                       :value="value"
                       v-on="events">
                <template v-if="tag==='textarea'">{{ value }}</template>
            </component>
            <slot name="append"></slot>
        </div>
        <div class="input-info" v-if="$slots['info'] || infoText.length>0">
            <slot name="info">
                <span v-if="infoText.length > 0">{{ infoText }}</span>
            </slot>
        </div>
        <div class="input-error" v-if="$slots['error'] || errorText.length>0">
            <slot name="error">
                <span v-if="errorText.length > 0">{{ errorText }}</span>
            </slot>
        </div>
    </div>
</template>

<script>
/**
 * Simple input component.
 * Slots:
 * info - informative text slot
 * error - error text slot
 * append-addon - input group right addon
 * prepend-addon - input group left addon
 */
export default {
    name: "Input",
    data() {
        return {}
    },
    props: {
        type: {
            type: String,
            default: 'text',
            description: 'Input type attribute',
            required: false,
        },
        value: {
            type: String | Number,
            description: 'Input value attribute',
            required: false,
        },
        name: {
            type: String,
            description: 'Input name attribute',
            required: false,
        },
        placeholder: {
            type: String,
            default: '',
            description: 'Input placeholder value',
            required: false,
        },
        invalid: {
            type: Boolean,
            default: null,
            description: 'Whether input is invalid and error message must be shown. By default it is set to null so no styling is added.',
            required: false,
        },
        errorText: {
            type: String,
            default: '',
            description: 'Error message',
            required: false,
        },
        infoText: {
            type: String,
            default: '',
            description: 'Info message',
            required: false,
        },
        label: {
            type: String,
            default: '',
            description: 'Label text',
            required: false,
        },
        size: {
            type: String,
            default: '',
            description: 'Input size: lg - for large, sm - for small',
            required: false,
        },
        required: {
            type: Boolean,
            default: true,
            description: 'Whether filling input is required or no',
            required: false,
        },
        tag: {
            type: String,
            default: 'input',
            description: 'Tag for input element. Can be either input or textarea',
            required: false,
        }
    },
    computed: {
        // Input field events
        events() {
            return {
                ...this.$listeners,
                input: this.input,
            }
        },
    },
    methods: {
        // Emit value change to parent
        input(event) {
            let val = event.target.value;
            this.$emit('input', val);
        },
    },
}
</script>

<style scoped>

</style>