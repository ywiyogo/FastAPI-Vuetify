<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Timeline component
 */
export default {
  page: {
    title: "Timeline",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Timeline",
      items: [
        {
          text: "Utility",
          href: "/"
        },
        {
          text: "Timeline",
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
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Horizontal Timeline</h4>

            <div class="hori-timeline">
              <ul class="list-inline events">
                <li class="list-inline-item event-list">
                  <div class="mt-4">
                    <div class="px-3">
                      <p
                        class="text-muted mb-4"
                      >It will be as simple as occidental in fact it will be Cambridge</p>
                    </div>

                    <div class="event-up-icon">
                      <i
                        class="bx bx-up-arrow-circle h1 text-primary bx-fade-up-hover up-arrow-icon"
                      ></i>
                    </div>
                    <div class="event-date mt-3">
                      <div class="text-primary">12 September</div>
                      <h5 class="mt-2">First event</h5>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item event-list">
                  <div class="mt-4">
                    <div class="px-3">
                      <p
                        class="text-muted mb-4"
                      >To an English person, it will seem like simplified English existence.</p>
                    </div>

                    <div class="event-up-icon">
                      <i
                        class="bx bx-up-arrow-circle h1 text-primary bx-fade-up-hover up-arrow-icon"
                      ></i>
                    </div>
                    <div class="event-date mt-3">
                      <div class="text-primary">06 October</div>
                      <h5 class="mt-2">Second event</h5>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item event-list">
                  <div class="mt-4">
                    <div class="px-3">
                      <p
                        class="text-muted mb-4"
                      >For science, music, sport, etc, Europe uses the same vocabulary.</p>
                    </div>

                    <div class="event-up-icon">
                      <i
                        class="bx bx-up-arrow-circle h1 text-primary bx-fade-up-hover up-arrow-icon bx-fade-up"
                      ></i>
                    </div>
                    <div class="event-date mt-3">
                      <div class="text-primary">25 October</div>
                      <h5 class="mt-2">Third event</h5>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item event-list">
                  <div class="mt-4">
                    <div class="px-3">
                      <p
                        class="text-muted mb-4"
                      >New common language will be more simple than existing.</p>
                    </div>

                    <div class="event-up-icon">
                      <i
                        class="bx bx-up-arrow-circle h1 text-primary bx-fade-up-hover up-arrow-icon"
                      ></i>
                    </div>
                    <div class="event-date mt-3">
                      <div class="text-primary">04 November</div>
                      <h5 class="mt-2">Fourth event</h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-5">Vertical Timeline</h4>
            <div class>
              <ul class="verti-timeline list-unstyled">
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="media">
                    <div class="mr-3">
                      <i class="bx bx-copy-alt h2 text-primary"></i>
                    </div>
                    <div class="media-body">
                      <div>
                        <h5>Ordered</h5>
                        <p
                          class="text-muted"
                        >New common language will be more simple and regular than the existing.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="media">
                    <div class="mr-3">
                      <i class="bx bx-package h2 text-primary"></i>
                    </div>
                    <div class="media-body">
                      <div>
                        <h5>Packed</h5>
                        <p
                          class="text-muted"
                        >To achieve this, it would be necessary to have uniform grammar.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list active">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle bx-fade-right"></i>
                  </div>
                  <div class="media">
                    <div class="mr-3">
                      <i class="bx bx-car h2 text-primary"></i>
                    </div>
                    <div class="media-body">
                      <div>
                        <h5>Shipped</h5>
                        <p
                          class="text-muted"
                        >It will be as simple as Occidental in fact, it will be Occidental..</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="media">
                    <div class="mr-3">
                      <i class="bx bx-badge-check h2 text-primary"></i>
                    </div>
                    <div class="media-body">
                      <div>
                        <h5>Delivered</h5>
                        <p
                          class="text-muted"
                        >To an English person, it will seem like simplified English.</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>