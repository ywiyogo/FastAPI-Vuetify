<template>
  <v-container id="login" :src="background_img">
    <v-row justify="center">
      <v-card-actions text-center>
        Welcome to FastAPI-Vuetify
      </v-card-actions>
    </v-row>
    <v-spacer></v-spacer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      background_img: "./assets/login.jpg"
    };
  }
};
</script>

<style></style>
