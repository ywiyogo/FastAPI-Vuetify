<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />
  </v-app>
</template>

<script>
// import DashboardIndex from "./views/dashboard/Index";
import DashboardCoreAppBar from "./views/dashboard/components/core/AppBar";
import DashboardCoreDrawer from "./views/dashboard/components/core/Drawer";
import DashboardCoreView from "./views/dashboard/components/core/View";

export default {
  name: "App",
  components: {
    DashboardCoreAppBar,
    DashboardCoreDrawer,
    DashboardCoreView,
  },
  data: () => ({
    expandOnHover: false
  })
};
</script>
