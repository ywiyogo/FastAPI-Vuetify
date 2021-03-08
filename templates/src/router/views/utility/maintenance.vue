<script>
import appConfig from "@/app.config";

export default {
  page: {
    title: "Maintenance",
    meta: [{ name: "description", content: appConfig.description }]
  },
}
</script>
<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <router-link tag="a" to="/" class="text-dark">
        <i class="fas fa-home h2"></i>
      </router-link>
    </div>
    <section class="my-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="home-wrapper">
              <div class="mb-5">
                <img src="@/assets/images/logo-dark.png" alt="logo" height="24" />
              </div>

              <div class="row justify-content-center">
                <div class="col-sm-4">
                  <div class="maintenance-img">
                    <img src="@/assets/images/maintenance.png" alt class="img-fluid mx-auto d-block" />
                  </div>
                </div>
              </div>
              <h3 class="mt-5">Site is Under Maintenance</h3>
              <p>Please check back in sometime.</p>

              <div class="row">
                <div class="col-md-4">
                  <div class="card mt-4 maintenance-box">
                    <div class="card-body">
                      <i class="bx bx-broadcast mb-4 h1 text-primary"></i>
                      <h5 class="font-size-15 text-uppercase">Why is the Site Down?</h5>
                      <p class="text-muted mb-0">
                        There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mt-4 maintenance-box">
                    <div class="card-body">
                      <i class="bx bx-time-five mb-4 h1 text-primary"></i>
                      <h5 class="font-size-15 text-uppercase">What is the Downtime?</h5>
                      <p class="text-muted mb-0">
                        Contrary to popular belief, Lorem Ipsum is not
                        simply random text. It has roots in a piece of classical.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mt-4 maintenance-box">
                    <div class="card-body">
                      <i class="bx bx-envelope mb-4 h1 text-primary"></i>
                      <h5 class="font-size-15 text-uppercase">Do you need Support?</h5>
                      <p class="text-muted mb-0">
                        If you are going to use a passage of Lorem
                        Ipsum, you need to be sure there isn't anything embar..
                        <a
                          href="mailto:no-reply@domain.com"
                          class="text-decoration-underline"
                        >no-reply@domain.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end row -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>