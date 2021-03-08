<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * FAQs component
 */
export default {
  page: {
    title: "FAQs",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "FAQs",
      items: [
        {
          text: "Utility",
          href: "/"
        },
        {
          text: "FAQs",
          active: true
        }
      ]
    };
  }
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="checkout-tabs">
      <b-tabs pills vertical nav-class="p-0" nav-wrapper-class="col-lg-2 w-100">
        <b-tab active>
          <template v-slot:title>
            <i class="bx bx-question-mark d-block check-nav-icon mt-4 mb-2"></i>
            <p class="font-weight-bold mb-4">General Questions</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div class="tab-pane fade show active">
                  <h4 class="card-title mb-5">General Questions</h4>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p
                        class="text-muted"
                      >New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                    </div>
                  </div>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p
                        class="text-muted"
                      >Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                    </div>
                  </div>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p
                        class="text-muted"
                      >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                    </div>
                  </div>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p
                        class="text-muted"
                      >Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                    </div>
                  </div>
                  <div class="faq-box media">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p
                        class="text-muted"
                      >To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          </b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <i class="bx bx-check-shield d-block check-nav-icon mt-4 mb-2"></i>
            <p class="font-weight-bold mb-4">Privacy Policy</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div class="tab-pane">
                  <h4 class="card-title mb-5">Privacy Policy</h4>

                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p
                        class="text-muted"
                      >Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                    </div>
                  </div>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p
                        class="text-muted"
                      >To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                    </div>
                  </div>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p
                        class="text-muted"
                      >New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                    </div>
                  </div>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p
                        class="text-muted"
                      >Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                    </div>
                  </div>
                  <div class="faq-box media">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p
                        class="text-muted"
                      >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          </b-card-text>
        </b-tab>
        <b-tab title-item-class="mb-2">
          <template v-slot:title>
            <i class="bx bx-support d-block check-nav-icon mt-4 mb-2"></i>
            <p class="font-weight-bold mb-4">Support</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div class="tab-pane">
                  <h4 class="card-title mb-5">Support</h4>

                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p
                        class="text-muted"
                      >To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                    </div>
                  </div>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p
                        class="text-muted"
                      >Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                    </div>
                  </div>

                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p
                        class="text-muted"
                      >Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                    </div>
                  </div>
                  <div class="faq-box media mb-4">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p
                        class="text-muted"
                      >If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                    </div>
                  </div>

                  <div class="faq-box media">
                    <div class="faq-icon mr-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p
                        class="text-muted"
                      >New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          </b-card-text>
        </b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>