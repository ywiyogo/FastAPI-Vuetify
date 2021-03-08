<script>
import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'
import appConfig from "@/app.config";

/**
 * Alerts component
 */
export default {
  page: {
    title: "Alerts",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Alerts',
      items: [
        {
          text: 'UI Elements',
          href: '/',
        },
        {
          text: 'Alerts',
          active: true,
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Default Alerts</h4>
            <p class="card-title-desc">
              Alerts are available for any length of
              text, as well as an optional dismiss button. For proper styling, use one
              of the four
              <strong>required</strong> contextual classes (e.g.,
              <code class="highlighter-rouge">.alert-success</code>). For inline
              dismissal, use the alerts jQuery plugin.
            </p>

            <div class>
              <b-alert show variant="primary">A simple primary alert—check it out!</b-alert>
              <b-alert show variant="secondary">A simple secondary alert—check it out!</b-alert>
              <b-alert show variant="success">A simple success alert—check it out!</b-alert>
              <b-alert show variant="danger">A simple danger alert—check it out!</b-alert>
              <b-alert show variant="warning">A simple warning alert—check it out!</b-alert>
              <b-alert show variant="info">A simple info alert—check it out!</b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Link color</h4>
            <p class="card-title-desc">
              Use the
              <code class="highlighter-rouge">.alert-link</code> utility class to
              quickly provide matching colored links within any alert.
            </p>

            <div class>
              <b-alert show variant="primary">
                A simple primary alert with
                <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="secondary">
                A simple secondary alert with
                <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="success">
                A simple success alert with
                <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="danger">
                A simple danger alert with
                <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="warning">
                A simple warning alert with
                <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
              <b-alert show variant="info">
                A simple info alert with
                <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
              </b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dismissing</h4>
            <p class="card-title-desc">
              Add a dismiss button and the
              <code>.alert-dismissible</code> class, which adds extra padding
              to the right of the alert and positions the
              <code>.close</code> button.
            </p>

            <div class>
              <b-alert show dismissible variant="primary">A simple primary alert—check it out!</b-alert>
              <b-alert show dismissible variant="secondary">A simple secondary alert—check it out!</b-alert>
              <b-alert show dismissible variant="success">A simple success alert—check it out!</b-alert>
              <b-alert show dismissible variant="danger">A simple danger alert—check it out!</b-alert>
              <b-alert show dismissible variant="warning">A simple warning alert—check it out!</b-alert>
              <b-alert show dismissible variant="info">A simple info alert—check it out!</b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">With Icon</h4>

            <div class>
              <b-alert show dismissible variant="primary">
                <i class="mdi mdi-bullseye-arrow mr-2"></i>A simple primary alert—check it out!
              </b-alert>

              <b-alert show dismissible variant="secondary">
                <i class="mdi mdi-grease-pencil mr-2"></i>A simple secondary alert—check it out!
              </b-alert>

              <b-alert show dismissible variant="success">
                <i class="mdi mdi-check-all mr-2"></i>A simple success alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="danger">
                <i class="mdi mdi-block-helper mr-2"></i>A simple danger alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="warning">
                <i class="mdi mdi-alert-outline mr-2"></i>A simple warning alert—check it out!
              </b-alert>
              <b-alert show dismissible variant="info">
                <i class="mdi mdi-alert-circle-outline mr-2"></i>A simple info alert—check it out!
              </b-alert>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
  </Layout>
</template>