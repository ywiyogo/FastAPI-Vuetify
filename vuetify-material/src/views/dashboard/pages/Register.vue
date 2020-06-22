<template>
  <v-container id="register">
    <v-row justify="center">
      <v-card-actions text-center>
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field
            v-model="username"
            :counter="10"
            :rules="usernameRules"
            label="Username"
            required
          ></v-text-field>

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

          <v-select
            v-model="gender"
            :items="genders"
            :rules="[v => !!v || 'Gender is required']"
            label="Gender"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="By clicking Agree and Join, you agree to the FastAPI-Vuetify User Agreement, Privacy Policy, and Cookie Policy."
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-10"
            @click="register"
          >
            Register
          </v-btn>

          <v-btn color="normal" class="mr-4" @click="reset">
            Reset Form
          </v-btn>
        </v-form>
      </v-card-actions>
    </v-row>
    <v-spacer></v-spacer>
  </v-container>
</template>

<script>
import { getAPI } from "../../../axios-api";
// import axios from 'axios'
export default {
  name: "Register",
  data: () => ({
    valid: true,
    username: "",
    usernameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    show_passwd: false,
    passwordRules: [v => !!v || "Password is required"],
    gender: null,
    genders: ["female", "male"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    register() {
      console.log("test register")
      this.$refs.form.validate();
      console.log("test debug")
      return getAPI.post("http://localhost:8000/profile", {
          username: this.username,
          email: this.email,
          password: this.password,
          gender: this.gender
        }).then(() => {
        this.$router.push({ name: "Home" });
      }).catch(err => {
          console.log(err);
          this.incorrectAuth = true;
        });
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style></style>
