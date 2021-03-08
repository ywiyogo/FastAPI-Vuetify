<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Progressbar component
 */
export default {
  page: {
    title: "Progress Bars",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Progress Bars",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Progress Bars",
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
            <h4 class="card-title">Default Examples</h4>
            <p class="card-title-desc">
              Progress components are built with two
              HTML elements, some CSS to set the width, and a few attributes.
            </p>
            <b-progress :value="25" :max="100" class="mb-4"></b-progress>
            <b-progress :value="50" :max="100" class="mb-4"></b-progress>
            <b-progress :value="75" :max="100" class="mb-4"></b-progress>
            <b-progress :value="100"></b-progress>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Backgrounds</h4>
            <p class="card-title-desc">
              Use background utility classes to
              change the appearance of individual progress bars.
            </p>
            <b-progress :value="25" :max="100" class="mb-4" variant="success"></b-progress>
            <b-progress :value="50" :max="100" class="mb-4" variant="info"></b-progress>
            <b-progress :value="75" :max="100" class="mb-4" variant="warning"></b-progress>
            <b-progress :value="100" variant="danger"></b-progress>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Labels Example</h4>
            <p class="card-title-desc">
              Add labels to your progress bars by placing text within the
              <code
                class="highlighter-rouge"
              >.progress-bar</code>.
            </p>
            <b-progress :value="25" :max="100" show-value></b-progress>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Multiple bars</h4>
            <p
              class="card-title-desc"
            >Include multiple progress bars in a progress component if you need.</p>
            <b-progress class="mt-2" :max="100">
              <b-progress-bar :value="45 * (6 / 10)"></b-progress-bar>
              <b-progress-bar :value="45 * (2.5 / 10)" variant="success"></b-progress-bar>
              <b-progress-bar :value="45 * (1.5 / 10)" variant="info"></b-progress-bar>
            </b-progress>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Height</h4>
            <p class="card-title-desc">
              We only set a
              <code class="highlighter-rouge">height</code> value on the
              <code class="highlighter-rouge">.progress-bar</code>, so if you change
              that value the outer
              <code
                class="highlighter-rouge"
              >.progress</code>
              will automatically resize accordingly.
            </p>
            <b-progress height="3px" :value="25" class="mb-3"></b-progress>
            <b-progress height="20px" :value="25"></b-progress>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Animated stripes</h4>
            <p class="card-title-desc">
              The striped gradient can also be
              animated. Add
              <code
                class="highlighter-rouge"
              >.progress-bar-animated</code> to
              <code class="highlighter-rouge">.progress-bar</code> to animate the
              stripes right to left via CSS3 animations.
            </p>
            <b-progress :value="75" :max="100" animated></b-progress>
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
            <h4 class="card-title">Striped</h4>
            <p class="card-title-desc">
              Add
              <code class="highlighter-rouge">.progress-bar-striped</code>
              to any
              <code class="highlighter-rouge">.progress-bar</code> to apply a
              stripe via CSS gradient over the progress bar’s background color.
            </p>
            <b-progress :value="10" :max="100" class="mb-4" animated></b-progress>
            <b-progress :value="25" :max="100" class="mb-4" variant="success" animated></b-progress>
            <b-progress :value="50" :max="100" class="mb-4" variant="info" animated></b-progress>
            <b-progress :value="75" :max="100" class="mb-4" variant="warning" animated></b-progress>
            <b-progress :value="100" :max="100" class="mb-4" variant="danger" animated></b-progress>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>