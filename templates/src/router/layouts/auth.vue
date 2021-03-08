<script>
export default {
  components: {}
};
</script>

<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link tag="a" to="/" class="text-dark">
        <i class="fas fa-home h2"></i>
      </router-link>
    </div>
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>
