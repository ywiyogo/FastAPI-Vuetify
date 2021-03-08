<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import vue2Dropzone from 'vue2-dropzone'

import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { required } from "vuelidate/lib/validators";

import Repository from "../../../repositories/RepositoryFactory";
const ProductRepository = Repository.get('categories');

/**
 * Form validation component
 */
export default {
  page: {
    title: "productAdd",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, Layout, PageHeader, ckeditor: CKEditor.component  },
  data() {
    return {
      title: "Add Product",
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
      product: {
        name: "",
        description: "",
        store_id: 0,
        product_type_id: '',
        category_id: '',
        vendor_id: '',
        price: 0,
        compared_price: 0,
        cost_price: 0,
        enable_online_store: false,
        pos_id: 0
      },
      checked: false,
      editor: ClassicEditor,
      editorData:
        "<h3>Add product description</h5>",
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailHeight: 100,
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
    createProduct: async function() {
      const { data } = await ProductRepository.create(this.product);
      this.product = data;
    }
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
                  v-model="product.name"
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>

              <div class="form-group">
                <label>Description</label>
                <div>
                  
                  <ckeditor v-model="editorData" name="description" :editor="editor"></ckeditor>
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
                <div class="form-group">
                  <label>Product Type</label>
                  <input
                    v-model="product.product_type_id"
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="product_type_id"
                  />
                  <label>Product Type</label>
                  <input
                    v-model="product.product_type_id"
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="product_type_id"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>

      <!-- Product Image -->
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-3">Products Image</h4>
              <vue-dropzone
                id="dropzone"
                ref="myVueDropzone"
                :use-custom-slot="true"
                :options="dropzoneOptions"
              >
                <div class="dropzone-custom-content">
                  <div class="mb-1">
                    <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                  </div>
                  <h4>Drop files here or click to upload.</h4>
                </div>
              </vue-dropzone>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col-->

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-body">
                <h4 class="card-title">Product availablity</h4>

                <b-form-checkbox v-model="product.enable_online_store" switch class="mb-1">
                  <label>Online store</label>
                </b-form-checkbox>

                <h4 class="card-title">POS</h4>
                <b-form-checkbox v-model="product.pos_id" switch class="mb-1">
                  <label>POS 1</label>
                </b-form-checkbox>
                <b-form-checkbox v-model="product.pos_id" switch class="mb-1">
                  <label>POS 2</label>
                </b-form-checkbox>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>

      <!-- Product Price -->
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <label>Price</label>
                  <input
                    v-model="product.price"
                    type="text"
                    class="form-control"
                    placeholder="Price"
                    name="price"
                  />

                  
                </div>
                <div class="col-lg-6">
                  <label>Compared Price</label>
                  <input
                    v-model="product.compared_price"
                    type="text"
                    class="form-control"
                    placeholder="Compared Price"
                    name="compared_price"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <label>Cost</label>
                  <input
                    v-model="product.cost_price"
                    type="text"
                    class="form-control"
                    placeholder="Cost Price"
                    name="price"
                  />
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
                <h4 class="card-title">Product availablity</h4>

                <b-form-checkbox v-model="product.enable_online_store" switch class="mb-1">
                  <label>Online store</label>
                </b-form-checkbox>

                <h4 class="card-title">POS</h4>
                <b-form-checkbox v-model="product.pos_id" switch class="mb-1">
                  <label>POS 1</label>
                </b-form-checkbox>
                <b-form-checkbox v-model="product.pos_id" switch class="mb-1">
                  <label>POS 2</label>
                </b-form-checkbox>
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-3">Variant</h4>
              <p>This feature allow variant to a product such as size and colour</p>
              <router-link tag="a" to="/product/add" class="side-nav-link-ref  btn-md float-md-right">+Add Variant</router-link>
              
            </div>
          </div>
          <!-- end card -->
        </div>
        <!-- end col-->

        <div class="col-lg-4">
          
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- End Row -->
      <div class="form-group mb-0">
        <div>
          <button type="submit" class="btn btn-primary" v-on:click="createProduct()">Submit</button>
          <button type="reset" class="btn btn-secondary m-l-5 ml-1">Cancel</button>
        </div>
      </div>
    </form>
  </Layout>
</template>