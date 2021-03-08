<script>
import Layout from "../../layouts/auth";
import appConfig from "@/app.config";

/**
 * Register component
 */
export default {
  page: {
    title: "Register",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      registerSuccess: false
    };
  },
  methods: {
    // ...authMethods,
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.tryingToRegister = true;
      // Reset the regError if it existed.
      this.regError = null;
      return (
        this.register({
          email: this.email,
          password: this.password
        })
          // eslint-disable-next-line no-unused-vars
          .then(token => {
            this.tryingToRegister = false;
            this.isRegisterError = false;
            this.registerSuccess = true;
            if (this.registerSuccess) {
              this.$router.push(
                this.$route.query.redirectFrom || { name: "home" }
              );
            }
          })
          .catch(error => {
            this.tryingToRegister = false;
            this.regError = error ? error : "";
            this.isRegisterError = true;
          })
      );
    }
  }
};
</script>

<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-5">
        <div class="card overflow-hidden">
          <div class="bg-soft-primary">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">Free Register</h5>
                  <p>Get your free Skote account now.</p>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img src="@/assets/images/profile-img.png" alt class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div>
              <router-link tag="a" to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img src="@/assets/images/logo.svg" alt class="rounded-circle" height="34" />
                  </span>
                </div>
              </router-link>
            </div>

            <b-alert
              v-model="registerSuccess"
              class="mt-3"
              variant="success"
              dismissible
            >Registration successfull.</b-alert>

            <b-alert
              v-model="isRegisterError"
              class="mt-3"
              variant="danger"
              dismissible
            >{{regError}}</b-alert>

            <b-form class="p-2" @submit.prevent="tryToRegisterIn">
              <b-form-group id="email-group" label="Username" label-for="username">
                <b-form-input
                  id="username"
                  v-model="username"
                  type="text"
                  placeholder="Enter username"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="fullname-group" label="Email" label-for="email">
                <b-form-input id="email" v-model="email" type="email" placeholder="Enter email"></b-form-input>
              </b-form-group>

              <b-form-group id="password-group" label="Password" label-for="password">
                <b-form-input
                  id="password"
                  v-model="password"
                  type="password"
                  placeholder="Enter password"
                ></b-form-input>
              </b-form-group>

              <div class="mt-4">
                <b-button type="submit" variant="primary" class="btn-block">Register</b-button>
              </div>

              <div class="mt-4 text-center">
                <p class="mb-0">
                  By registering you agree to the Skote
                  <a
                    href="javascript: void(0);"
                    class="text-primary"
                  >Terms of Use</a>
                </p>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="mt-5 text-center">
          <p>
            Already have an account ?
            <router-link tag="a" to="/login" class="font-weight-medium text-primary">Login</router-link>
          </p>
          <p>
            © {{ new Date().getFullYear() }} Skote. Crafted with
            <i
              class="mdi mdi-heart text-danger"
            ></i> by Themesbrand
          </p>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>

<style lang="scss" module></style>
