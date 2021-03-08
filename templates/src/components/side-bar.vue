<script>
import simplebar from "simplebar-vue";

import SideNav from "./side-nav";

export default {
  components: { simplebar, SideNav },
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
      <SideNav />
    </simplebar>

    <simplebar v-else class="h-100">
      <SideNav />
    </simplebar>
  </div>
  <!-- Left Sidebar End -->
</template>

