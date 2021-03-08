<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Dropdowns component
 */
export default {
  page: {
    title: "Dropdowns",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Dropdowns",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Dropdowns",
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Single button dropdowns</h4>
            <p class="card-title-desc">
              Any single
              <code class="highlighter-rouge">.btn</code> can be turned into a dropdown
              toggle with some markup changes. Here’s how you can put them to work
              with either
              <code
                class="highlighter-rouge"
              >&lt;button&gt;</code>
              elements:
            </p>

            <div class="row">
              <div class="col-sm-6">
                <b-dropdown>
                  <template v-slot:button-content>
                    Dropdown button
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item>Action</b-dropdown-item>
                  <b-dropdown-item>Another Action</b-dropdown-item>
                  <b-dropdown-item>Something else here</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Variant</h4>
            <p
              class="card-title-desc mb-3"
            >The best part is you can do this with any button variant, too:</p>

            <div class>
              <div class="btn-group mr-1 mt-2">
                <b-dropdown text="Primary" variant="primary">
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown text="Secondary" variant="secondary">
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown text="Success" variant="success">
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown text="Info" variant="info">
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown text="Warning" variant="warning">
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group mr-1 mt-2">
                <b-dropdown text="Danger" variant="danger">
                  <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                  <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="javascript: void(0);">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>
              <!-- /btn-group -->
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc mb-3">
              Button dropdowns work with buttons of
              all sizes, including default and split dropdown buttons.
            </p>

            <div>
              <!-- Large button groups (default and split) -->
              <div class="mr-1 mt-2">
                <b-dropdown size="lg" class="m-2">
                  <template v-slot:button-content>
                    Large button
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                </b-dropdown>
                <b-dropdown size="sm" class="m-2">
                  <template v-slot:button-content>
                    Small button
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <b-dropdown-item-button>Action</b-dropdown-item-button>
                  <b-dropdown-item-button>Another action</b-dropdown-item-button>
                  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Drop variation</h4>
            <p class="card-title-desc mb-3">
              Trigger dropdown menus at the right of the elements by adding
              <code>dropleft</code> and
              <code>dropright</code> to the parent element.
            </p>

            <div class="dropdown mt-1">
              <b-dropdown dropright variant="success" class="m-2">
                <template slot="button-content">
                  Drop-right
                  <i class="mdi mdi-chevron-right"></i>
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown dropleft variant="info" class="m-2">
                <template slot="button-content">
                  <i class="mdi mdi-chevron-left"></i>
                  Drop-left
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dropup</h4>
            <p class="card-title-desc mb-3">
              Dropdown menus can be changed to expand upwards (instead of downwards) by adding
              <code>dropup</code> to the parent.
            </p>

            <div class="mt-1">
              <b-dropdown dropup variant="primary" class="m-2">
                <template slot="button-content">
                  Dropup
                  <i class="mdi mdi-chevron-up"></i>
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown dropup variant="warning" class="m-2">
                <template slot="button-content">
                  Dropup
                  <i class="mdi mdi-chevron-up"></i>
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown dropup variant="success" class="m-2">
                <template slot="button-content">
                  Dropup
                  <i class="mdi mdi-chevron-up"></i>
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown dropup variant="secondary" class="m-2">
                <template slot="button-content">
                  Dropup
                  <i class="mdi mdi-chevron-up"></i>
                </template>
                <b-dropdown-item-button>Action</b-dropdown-item-button>
                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
  </Layout>
</template>