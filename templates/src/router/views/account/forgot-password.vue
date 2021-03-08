<script>
import Layout from "../../layouts/auth";
import appConfig from "@/app.config";

/**
 * Forgot Password component
 */
export default {
  page: {
    title: "Forgot Password",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      email: "",
      error: null,
      tryingToReset: false,
      isResetError: false
    };
  },
  methods: {
    // ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset() {
      this.tryingToReset = true;
      // Reset the authError if it existed.
      this.error = null;
      return (
        this.resetPassword({
          email: this.email
        })
          // eslint-disable-next-line no-unused-vars
          .then(token => {
            this.tryingToReset = false;
            this.isResetError = false;
          })
          .catch(error => {
            this.tryingToReset = false;
            this.error = error ? error : "";
            this.isResetError = true;
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
                  <h5 class="text-primary">Reset Password</h5>
                  <p>Re-Password with Skote.</p>
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
                    <img src="@/assets/images/logo.svg" alt height="34" />
                  </span>
                </div>
              </router-link>
            </div>
            <div class="p-2">
              <b-alert v-model="isResetError" class="mb-4" variant="danger" dismissible>{{error}}</b-alert>
              <form @submit.prevent="tryToReset">
                <div class="form-group">
                  <label for="useremail">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="useremail"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group row mb-0">
                  <div class="col-12 text-right">
                    <button class="btn btn-primary w-md" type="submit">Reset</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="mt-5 text-center">
          <p>
            Remember It ?
            <router-link tag="a" to="/login" class="font-weight-medium text-primary">Sign In here</router-link>
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
