<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Tabs & accordions component
 */
export default {
  page: {
    title: "Tabs & Accordion",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Tabs & Accordions",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Tabs & Accordions",
          active: true
        }
      ],
      text: `
         Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
        `,
      content: `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.`
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
            <h4 class="card-title">Default Tabs</h4>
            <p class="card-title-desc">
              Use the tab JavaScript plugin—include
              it individually or through the compiled
              <code
                class="highlighter-rouge"
              >bootstrap.js</code>
              file—to extend our navigational tabs and pills to create tabbable panes
              of local content, even via dropdown menus.
            </p>
            <b-tabs content-class="p-3 text-muted">
              <b-tab active class="border-0">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                {{ text }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                {{ content }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                {{ text }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                {{ content }}
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Justify Tabs</h4>
            <p class="card-title-desc">
              Use the tab JavaScript plugin—include
              it individually or through the compiled
              <code
                class="highlighter-rouge"
              >bootstrap.js</code>
              file—to extend our navigational tabs and pills to create tabbable panes
              of local content, even via dropdown menus.
            </p>
            <b-tabs pills justified content-class="p-3 text-muted">
              <b-tab active class="border-0">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                {{ text }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                {{ content }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                {{ text }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                {{ content }}
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Vertical Nav Tabs</h4>
            <p class="card-title-desc">Example of Vertical nav tabs</p>
            <b-tabs
              pills
              vertical
              nav-class="p-0"
              nav-wrapper-class="col-sm-3"
              content-class="pt-0 px-2 text-muted"
            >
              <b-tab title="Home" active title-item-class="mb-2">
                <b-card-text>{{ text }}</b-card-text>
              </b-tab>
              <b-tab title="Profile" title-item-class="mb-2">
                <b-card-text>{{ content }}</b-card-text>
              </b-tab>
              <b-tab title="Messages" title-item-class="mb-2">
                <b-card-text>{{ text }}</b-card-text>
              </b-tab>
              <b-tab title="Settings">
                <b-card-text>{{ content }}</b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Custom Tabs</h4>
            <p class="card-title-desc">Example of custom tabs</p>
            <b-tabs justified nav-class="nav-tabs-custom" content-class="p-3 text-muted">
              <b-tab active>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                {{ text }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                {{ content }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                {{ text }}
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                {{ content }}
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>

    <!-- Collapse -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Default Collapse</h4>
            <p class="card-title-desc mb-3">
              You can use a link with the
              <code class="highlighter-rouge">href</code>
              attribute, or a button with the
              <code
                class="highlighter-rouge"
              >data-target</code>
              attribute. In both cases, the
              <code
                class="highlighter-rouge"
              >data-toggle="collapse"</code>
              is required.
            </p>
            <b-button v-b-toggle.collapse class="m-1" variant="primary">Link with href</b-button>

            <!-- Using value -->
            <b-button v-b-toggle="'collapse'" class="m-1" variant="primary">Button with data-target</b-button>

            <!-- Element to collapse -->
            <b-collapse id="collapse" visible class="mt-1">
              <b-card>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</b-card>
            </b-collapse>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Accordion example</h4>
            <p class="card-title-desc">Extend the default collapse behavior to create an accordion.</p>
            <div role="tablist">
              <b-card no-body class="mb-1 shadow-none">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0">
                    <a
                      v-b-toggle.accordion-1
                      class="text-dark"
                      href="javascript: void(0);"
                    >Collapsible Group Item #1</a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0">
                    <a
                      v-b-toggle.accordion-2
                      class="text-dark"
                      href="javascript: void(0);"
                    >Collapsible Group Item #2</a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <h6 class="m-0">
                    <a
                      v-b-toggle.accordion-3
                      class="text-dark"
                      href="javascript: void(0);"
                    >Collapsible Group Item #3</a>
                  </h6>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>