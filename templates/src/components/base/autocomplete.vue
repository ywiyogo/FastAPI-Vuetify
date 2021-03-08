<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'BaseAutocomplete',
  components: { Multiselect },
  props: ['value', 'options', 'loading', 'label', 'placeholder'],
  methods: {
    onInput: function (value) {
      this.$emit('input', value);
    },
    onSearchChange: function (value) {
      this.$emit('search', value);
    },
    onSelect: function (value) {
      this.$emit('select', value);
    }
  }
}
</script>

<template>
  <div class="base-autocomplete position-relative">
    <Multiselect
      class="custom-multiselect"
      :value="value"
      :options="options"
      :loading="loading"
      :label="label"
      :placeholder="placeholder"
      @input="onInput"
      @search-change="onSearchChange"
      @select="onSelect"
    ></Multiselect>
    <span class="bx bx-search-alt"></span>
  </div>
</template>

<style lang="scss">
.base-autocomplete {
  .custom-multiselect {
    .multiselect__tags {
      background-color: #f3f3f9 !important;
      padding-left: 40px !important;
      padding-right: 20px !important;
      border: none !important;
    }

    .multiselect__input,
    .multiselect__placeholder {
      font-weight: 400;
      font-size: 12px !important;
      line-height: 1.5;
      color: #495057 !important;
      background-color: transparent !important;
      padding: 0 !important;
    }

    .multiselect__single {
      background-color: transparent !important;
      font-weight: 400;
      font-size: 12px !important;
      color: #495057 !important;
      line-height: 22px !important;
    }

    .multiselect__spinner {
      background-color: #f3f3f9 !important;
    }
  }

  .bx-search-alt {
    position: absolute;
    z-index: 99 !important;
    font-size: 16px;
    line-height: 38px;
    left: 13px;
    top: 0;
    color: #74788d;
  }
}
</style>