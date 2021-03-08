<script>
import vue2Dropzone from 'vue2-dropzone'
import Multiselect from 'vue-multiselect'

import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'
import appConfig from "@/app.config";

/**
 * Add-product component
 */
export default {
   page: {
    title: "Add Product",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { vueDropzone: vue2Dropzone, Multiselect, Layout, PageHeader },
  data() {
    return {
      title: 'Add Product',
      items: [
        {
          text: 'Ecommerce',
          href: '/',
        },
        {
          text: 'Add Product',
          active: true,
        },
      ],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailHeight: 100,
      },
      value: null,
      value1: null,
      options: [
        'Alaska',
        'Hawaii',
        'California',
        'Nevada',
        'Oregon',
        'Washington',
        'Arizona',
        'Colorado',
        'Idaho',
        'Montana',
        'Nebraska',
        'New Mexico',
        'North Dakota',
        'Utah',
        'Wyoming',
        'Alabama',
        'Arkansas',
        'Illinois',
        'Iowa',
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic Information</h4>
            <p class="card-title-desc">Fill all information below</p>

            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="productname">Product Name</label>
                    <input id="productname" name="productname" type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="manufacturername">Manufacturer Name</label>
                    <input
                      id="manufacturername"
                      name="manufacturername"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="manufacturerbrand">Manufacturer Brand</label>
                    <input
                      id="manufacturerbrand"
                      name="manufacturerbrand"
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="price">Price</label>
                    <input id="price" name="price" type="text" class="form-control" />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label class="control-label">Category</label>
                    <multiselect v-model="value" :options="options"></multiselect>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Features</label>
                    <multiselect v-model="value1" :options="options" :multiple="true"></multiselect>
                  </div>
                  <div class="form-group">
                    <label for="productdesc">Product Description</label>
                    <textarea id="productdesc" class="form-control" rows="5"></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary mr-1">Save Changes</button>
              <button type="submit" class="btn btn-secondary">Cancel</button>
            </form>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">Product Images</h4>
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
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Meta Data</h4>
            <p class="card-title-desc">Fill all information below</p>

            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="metatitle">Meta title</label>
                    <input id="metatitle" name="productname" type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="metakeywords">Meta Keywords</label>
                    <input
                      id="metakeywords"
                      name="manufacturername"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="metadescription">Meta Description</label>
                    <textarea id="metadescription" class="form-control" rows="5"></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary mr-1">Save Changes</button>
              <button type="submit" class="btn btn-secondary">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
