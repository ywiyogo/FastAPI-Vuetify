<script>
import vue2Dropzone from "vue2-dropzone";
import DatePicker from "vue2-datepicker";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Projects-create component
 */
export default {
  page: {
    title: "Create New Project",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, DatePicker, Layout, PageHeader },
  data() {
    return {
      title: "Create New",
      items: [
        {
          text: "Projects",
          href: "/"
        },
        {
          text: "Create New",
          active: true
        }
      ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      },
      daterange: ""
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
            <h4 class="card-title mb-4">Create New Project</h4>
            <form>
              <div class="form-group row mb-4">
                <label for="projectname" class="col-form-label col-lg-2">Project Name</label>
                <div class="col-lg-10">
                  <input
                    id="projectname"
                    name="projectname"
                    type="text"
                    class="form-control"
                    placeholder="Enter Project Name..."
                  />
                </div>
              </div>
              <div class="form-group row mb-4">
                <label for="projectdesc" class="col-form-label col-lg-2">Project Description</label>
                <div class="col-lg-10">
                  <textarea
                    id="projectdesc"
                    class="form-control"
                    rows="3"
                    placeholder="Enter Project Description..."
                  ></textarea>
                </div>
              </div>

              <div class="form-group row mb-4">
                <label class="col-form-label col-lg-2">Project Date</label>
                <div class="col-lg-10">
                  <date-picker v-model="daterange" range append-to-body lang="en" confirm></date-picker>
                </div>
              </div>

              <div class="form-group row mb-4">
                <label for="projectbudget" class="col-form-label col-lg-2">Budget</label>
                <div class="col-lg-10">
                  <input
                    id="projectbudget"
                    name="projectbudget"
                    type="text"
                    placeholder="Enter Project Budget..."
                    class="form-control"
                  />
                </div>
              </div>
            </form>
            <div class="row mb-4">
              <label class="col-form-label col-lg-2">Attached Files</label>
              <div class="col-lg-10">
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
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-lg-10">
                <button type="submit" class="btn btn-primary">Create Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>