<script>
import vue2Dropzone from "vue2-dropzone";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * File Uploads component
 */
export default {
  page: {
    title: "Form File Upload",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, Layout, PageHeader },
  data() {
    return {
      title: "Form File Upload",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form File Upload",
          active: true
        }
      ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dropzone</h4>
            <p
              class="card-title-desc"
            >DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.</p>
            <!-- file upload -->
            <vue-dropzone
              id="dropzone"
              ref="myVueDropzone"
              :use-custom-slot="true"
              :options="dropzoneOptions"
            >
              <div class="dropzone-custom-content">
                <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                <h4>Drop files here or click to upload.</h4>
              </div>
            </vue-dropzone>
            <div class="text-center mt-4">
              <button type="button" class="btn btn-primary">Send Files</button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>