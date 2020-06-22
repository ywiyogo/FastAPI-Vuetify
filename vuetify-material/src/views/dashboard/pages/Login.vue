<template>
  <v-container id="login" :src="background_img">
    <v-row justify="center">
      <v-card-actions text-center>
        <p v-if="incorrectAuth">Incorrect email or password entered!</p>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :counter="10"
            :rules="passwordRules"
            label="Password"
            :type="show_passwd ? 'text' : 'password'"
            :append-icon="show_passwd ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show_passwd = !show_passwd"
            required
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-10"
            @click="login"
          >
            Login
          </v-btn>

          <v-btn color="normal" text class="mr-4" @click="register">
            Create account
          </v-btn>
        </v-form>
      </v-card-actions>
    </v-row>
    <v-spacer></v-spacer>
  </v-container>
</template>

<script>
// Data variables are filled from the form
// The click button trigger the login method below, and calls the function login in store.js
// if it is succeed, then redirect to the search site.
// Forward the credential with username key because Oauth2 
export default {
  name: "Login",
  data() {
    return {
      background_img: "./assets/login.jpg",
      valid: true,
      password: "",
      show_passwd: false,
      passwordRules: [v => !!v || "Password is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      lazy: false,
      incorrectAuth: false
    };
  },
  methods: {
    login() {
      this.$refs.form.validate();
      this.$store
        .dispatch("login", { username: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: "Search" });
        })
        .catch(err => {
          console.log(err);
          this.incorrectAuth = true;
        });
    },
    register() {
      this.$router.push({ name: "Register" });
    }
  }
};
</script>

<style></style>
