<template>
  <v-container id="logout">
    <v-row justify="center">
      <v-card-actions text-center>
        Thank you and have a good day!
      </v-card-actions>
    </v-row>
    <v-spacer></v-spacer>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store
      .dispatch("logout")
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
