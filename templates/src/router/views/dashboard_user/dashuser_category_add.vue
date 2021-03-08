<script>
// import Layout from "../../layouts/main";
import Layout from "../../layouts/sto-main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import vue2Dropzone from 'vue2-dropzone'

import { required } from "vuelidate/lib/validators";

import Repository from "../../../repositories/RepositoryFactory";
import { baseURL } from '../../../repositories/Clients/AxiosClient';

const CategoryRepository = Repository.get('categories');

/**
 * Form validation component
 */
export default {
  page: {
    title: "Add Categoy",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, Layout, PageHeader },
  data() {
    return {
      title: "Add Category",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Validation",
          active: true
        }
      ],
      typesubmit: false,
      category: {
        name: "",
        description: "",
        store_id: 0,
        slug: '',
        enable_online_store: 0,
        pos_id: 0
      },
      checked: false,
      dropzoneOptions: {
        url: `${baseURL}/files/uploadmultiple`,
        thumbnailHeight: 150,
        thumbnailMethod: 'contain',
        paramName: 'myFiles',
        autoProcessQueue: false,
        // uploadMultiple: true,
        maxFiles: 1,
        // parallelUploads: 10
      },
    };
  },
  validations: {
    typeform: {
      name: { required }
    }
  },
  methods: {
      //this.product.images = this.$refs.inputFile.files; // fileList
    createCategory: async function() {
      const queuedImages = this.$refs.myVueDropzone.getQueuedFiles();

      const { data } = await CategoryRepository.create(this.category);
      this.category = data.message;

      if (queuedImages.length) {
        this.$refs.myVueDropzone.processQueue();
      } else {
        this.$router.push('/product/category');
      }

    },
    dropzoneError(file, message, xhr) {
      console.log('dropzoneError', {file, message, xhr});
    },
    dropzoneSuccess() {
      this.$router.push("/product/category");
    },
    dropzoneSending(file, xhr, formData) {
      formData.append('model_id', this.category.id);
      formData.append('model_type', 'category');
    },
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <form action="#" v-on:submit.prevent>
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <label>Name</label>
                <input
                  v-model="category.name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>

              <div class="form-group">
                <label>Description</label>
                <div>
                  <textarea
                    v-model="category.description"
                    class="form-control"
                    name="description"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col-->

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-body">
                <h4 class="card-title">Category availablity</h4>

                <b-form-checkbox 
                  v-model="category.enable_online_store" 
                  switch class="mb-1"
                  value="1"
                  unchecked-value="0"
                >
                  <label>Online store</label>
                </b-form-checkbox>

                <!-- Will be activated after mvp -->
                <!-- <h4 class="card-title">POS</h4>
                <b-form-checkbox v-model="category.pos_id" switch class="mb-1">
                  <label>POS 1</label>
                </b-form-checkbox>
                <b-form-checkbox v-model="category.pos_id" switch class="mb-1">
                  <label>POS 2</label>
                </b-form-checkbox> -->
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-3">Category Image</h4>
              <vue-dropzone
                id="dropzone"
                ref="myVueDropzone"
                :use-custom-slot="true"
                :options="dropzoneOptions"
                @vdropzone-error="dropzoneError"
                @vdropzone-success="dropzoneSuccess"
                @vdropzone-sending="dropzoneSending"
              >
                <div class="dropzone-custom-content">
                  <div class="mb-1">
                    <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                  </div>
                  <h4>Drop file here or click to upload (Maximum 0.5 MB)</h4>
                </div>
              </vue-dropzone>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
      <div class="form-group mb-0">
        <div>
          <button type="submit" class="btn btn-primary" v-on:click="createCategory()">Submit</button>
          <button type="reset" class="btn btn-secondary m-l-5 ml-1">Cancel</button>
        </div>
      </div>
    </form>
  </Layout>
</template>