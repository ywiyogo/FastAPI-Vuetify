 <script>
import appConfig from "@/app.config";

export default {
  page: {
    title: "500 Error Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
};
</script>
 <template>
  <div class="account-pages my-5 pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center mb-5">
            <h1 class="display-2 font-weight-medium">
              5<i class="bx bx-buoy bx-spin text-primary display-3"></i>0
            </h1>
            <h4 class="text-uppercase">Internal Server Error</h4>
            <div class="mt-5 text-center">
              <router-link tag="a" class="btn btn-primary" to="/">Back to Dashboard</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 col-xl-6">
          <div>
            <img src="@/assets/images/error-img.png" alt class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
