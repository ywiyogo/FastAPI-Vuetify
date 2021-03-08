<script>
import simplebar from "simplebar-vue";

import SideNavSto from "./sto_side-nav";

export default {
  components: { simplebar, SideNavSto },
  props: {
    isCondensed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60
      }
    };
  },

  methods: {}
};
</script>

<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="vertical-menu">
    <simplebar v-if="!isCondensed" :settings="settings" class="h-100">
      <SideNavSto />
    </simplebar>

    <simplebar v-else class="h-100">
      <SideNavSto />
    </simplebar>
  </div>
  <!-- Left Sidebar End -->
</template>

