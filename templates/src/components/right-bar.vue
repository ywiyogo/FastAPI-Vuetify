<script>
/**
 * Right sidebar component
 */
export default {
  components: {},
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      }
    };
  },

  methods: {
    hide() {
      this.$parent.toggleRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    }
  }
};
</script>

<template>
  <div>
    <div v-click-outside="config" class="right-bar">
      <div>
        <div class="rightbar-title px-3 py-4">
          <a href="javascript:void(0);" class="right-bar-toggle float-right" @click="hide">
            <i class="mdi mdi-close noti-icon"></i>
          </a>
          <h5 class="m-0">Settings</h5>
        </div>

        <!-- Settings -->
        <hr class="mt-0" />
        <h6 class="text-center mb-0">Choose Mode</h6>

        <div class="p-4">
          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//skote.vuejs-light.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-1.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//skote.vuejs-dark.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-2.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <div class="mb-2">
            <router-link tag="a" target="_blank" to="//skote.vuejs-rtl.themesbrand.com/">
              <img src="@/assets/images/layouts/layout-3.jpg" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>

<style lang="scss"></style>
