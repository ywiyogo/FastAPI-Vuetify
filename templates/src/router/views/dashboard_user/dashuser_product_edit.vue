<script>
import Layout from "../../layouts/sto-main";
import vue2Dropzone from "vue2-dropzone";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getArrayCombination } from '../../../utils/functions';
import Repository from "../../../repositories/RepositoryFactory";
import { baseURL, baseDomain } from '../../../repositories/Clients/AxiosClient';

const ProductRepository = Repository.get("products");
const CategoryRepository = Repository.get("categories");
const ProductTypeRepository = Repository.get("product_types");
const VendorRepository = Repository.get("vendors");
const VariantRepository = Repository.get("variants");

export default {
  name: 'DashProductEdit',
  components: {
    Layout,
    ckeditor: CKEditor.component,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      errors: {},
      loading: {},
      productCategories: [],
      productTypes: [],
      vendors: [],
      editor: ClassicEditor,
      editorData: "<h6>Edit product description</h6>",
      dropzoneOptions: {
        url: `${baseURL}/files/uploadmultiple`,
        thumbnailHeight: 150,
        thumbnailMethod: 'contain',
        paramName: 'myFiles',
        autoProcessQueue: false,
        // uploadMultiple: true,
        maxFiles: 10,
        // parallelUploads: 10,
        addRemoveLinks: true
      },
      product: {
        name: "",
        description: "",
        store_id: 0,
        product_type_id: null,
        category_id: null,
        vendor_id: null,
        price: 0,
        compared_price: 0,
        cost_price: 0,
        pos_id: 0,
        sku: '',
        weight: 0,
        enable_online_store: 0,
        enable_tokopedia: 0,
        enable_bukalapak: 0,
        enable_shopee: 0,
        enable_shipping: 0,
        enable_stock_tracking: 0,
        status: false,
        variant: [],
      },
      formAddVariant: {
        name: '',
        options: [],
      },
      variantTypeOpts: ['Size', 'Colour'],
      variantSizeOpts: [],
      variantColourOpts: [],
      variants: [],
    };
  },
  computed: {
    formAddVariantDisabled: function () {
      let hasEmptyOptions = false;

      this.formAddVariant.options.forEach(obj => {
        if (obj === '') hasEmptyOptions = true;
      });

      if (
        !this.formAddVariant.name
        || this.formAddVariant.options.length === 0
        || hasEmptyOptions
      ) {
        return true
      }
      return false;
    }
  },
  mounted() {
    this.getProduct();
    this.getCategories();
    this.getProductTypes();
    this.getVendors();
    this.getVariants();
  },
  methods: {
    editProduct: async function() {
      try {
        this.$set(this.loading, 'editProduct', true);

        await ProductRepository.update(this.product, this.$route.params.id);

        this.$set(this.loading, 'editProduct', false);

        this.$swal({
          icon: 'success',
          title: 'Update product success',
          showConfirmButton: false,
          timer: 1500
        })
          .then(() => {
            this.$router.go();
          });
      } catch (err) {
        this.errors = { ...this.errors, editProduct: err };
      }

      // const queuedImages = this.$refs.myVueDropzone.getQueuedFiles();

      // const { data } = await ProductRepository.create(this.product);

      // this.product = data.message;

      // if (queuedImages.length) {
      //   this.$refs.myVueDropzone.processQueue();
      // } else {
      //   this.$router.push("/product/all");
      // }
    },
    getProduct: async function() {
      try {
        const { data } = await ProductRepository.getCategory(this.$route.params.id);

        this.product = {
          name: data.message.name,
          description: data.message.description,
          store_id: data.message.store_id,
          product_type_id: data.message.product_type_id,
          category_id: data.message.category_id,
          vendor_id: data.message.vendor_id,
          price: data.message.price,
          sku: data.message.sku,
          weight: data.message.weight,
          enable_online_store: data.message.enable_online_store,
          enable_tokopedia: data.message.enable_tokopedia,
          enable_bukalapak: data.message.enable_bukalapak,
          enable_shopee: data.message.enable_shopee,
          enable_shipping: data.message.enable_shipping,
          enable_stock_tracking: data.message.enable_stock_tracking,
          file_name: data.message.file_name,
          file_path: data.message.file_path,
          status: data.message.status,
          slug: data.message.slug,
          compared_price: data.message.compared_price,
          cost_price: data.message.cost_price,
          stock: data.message.stock,
          variant: data.message.product_variants,
        };

        this.addImageToDropzone();
      } catch (err) {
        this.errors = { ...this.errors, getProduct: err };
      }
    },
    getCategories: async function() {
      const categoryData = await CategoryRepository.get();
      const options = [{ value: null, text: 'Pilih kategori produk'}];

      for (const key in categoryData.data.message) {
        if (categoryData.data.message.hasOwnProperty(key)) {
          const { id: value, name: text } = categoryData.data.message[key];
          options.push({ value, text });
        }
      }

      this.productCategories = options;
    },
    getProductTypes: async function() {
      const productTypeData = await ProductTypeRepository.get();
      const options = [{ value: null, text: 'Pilih tipe produk'}];

      for (const key in productTypeData.data.message) {
        if (productTypeData.data.message.hasOwnProperty(key)) {
          const { id: value, name: text } = productTypeData.data.message[key];
          options.push({ value, text });
        }
      }

      this.productTypes = options;
    },
    getVendors: async function() {
      const vendorData = await VendorRepository.get();
      const options = [{ value: null, text: 'Pilih vendor'}];

      for (const key in vendorData.data.message) {
        if (vendorData.data.message.hasOwnProperty(key)) {
          const { id: value, name: text } = vendorData.data.message[key];
          options.push({ value, text });
        }
      }

      this.vendors = options;
    },
    getVariants: async function() {
      try {
        const resColour = await VariantRepository.get({
          params: { type: 'colour' }
        });
        const resSizes = await VariantRepository.get({
          params: { type: 'size' }
        });
        
        this.variantColourOpts = resColour.data.message;
        this.variantSizeOpts = resSizes.data.message;
      } catch (err) {
        this.variantColourOpts = [];
        this.variantSizeOpts = [];
      }
    },
    formatOptionName: function (options) {
      const arrName = options.map(obj => obj.name);
      return arrName.join(' - ');
    },
    formatVariantName: function (variant) {
      const { variant_size_name, variant_colour_name } = variant;
      let name = '';
      if (variant_size_name) name += variant_size_name + ' ';
      if (variant_colour_name) name += variant_colour_name;
      return name;
    },
    addImageToDropzone() {
      const file = { name: this.product.file_name, type: 'image/png', size: 0 };
      const url = `${baseDomain}${this.product.file_path}`;
      this.$refs.myVueDropzone.manuallyAddFile(file, url);
    },
    dropzoneRemovedFile() {
      // console.log('removed', res)
    },
    dropzoneError(file, message, xhr) {
      console.log('dropzoneError', {file, message, xhr});
    },
    dropzoneSuccess() {
      this.$router.push("/product/all");
    },
    dropzoneSending(file, xhr, formData) {
      formData.append('model_id', this.product.id);
      formData.append('model_type', 'product');
    },
    addVariantOptions: function (e) {
      e.preventDefault();
      this.formAddVariant = {
        ...this.formAddVariant,
        options: [ ...this.formAddVariant.options, { name: '' } ]
      }
    },
    removeVariant: function (e, idx) {
      e.preventDefault();
      this.$delete(this.variants, idx);
      this.setProductVariant();
    },
    removeAddVariantOption: function (e, idx) {
      e.preventDefault();
      this.$delete(this.formAddVariant.options, idx);
    },
    addVariant: async function () {
      try {
        const newOptions = [];
  
        for (let i = 0; i < this.formAddVariant.options.length; i++) {
          const option = this.formAddVariant.options[i];
          const res = await VariantRepository.create({
            name: option.name,
            description: `description ${option.name}`,
            type: this.formAddVariant.name
          });
  
          newOptions.push(res.data.message);
        }
  
        this.formAddVariant = {
          ...this.formAddVariant,
          options: newOptions
        };
  
        this.variants.push(this.formAddVariant);
        this.formAddVariant = { name: '', options: [] };
        this.$bvModal.hide('add-variant');
        this.setProductVariant();
      } catch (err) {
        console.log('err: addVariant', err);
        return;
      }
    },
    setProductVariant: function () {
      const variantCombination = getArrayCombination(this.variants);
      this.$set(this.product, 'variant', variantCombination);
    },
  }
};
</script>

<template>
  <Layout>
    <div class="section-topbox mb-3">
      <div class="row">
        <div class="col-12">
          <router-link
            tag="a"
            to="/product/all"
            class="d-block text-primary mb-2 router-link-active"
          >
            <i class="dripicons-chevron-left"></i>
            <h6>Product</h6>
          </router-link>
        </div>
      </div>
    </div>

    <div class="content-page product">
      <form action="#" v-on:submit.prevent>
        <div class="section-topbox section-topbox--detail mb-3">
          <div class="row">
            <div class="col-xl-6">
              <div class>
                <h2>Edit Product</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="topbox-items">
                <div class="items-overview-filter mr-3">
                  <button type="reset" class="btn btn-secondary">Discard</button>
                </div>
                <div class="items-overview-filter">
                  <button
                    type="submit"
                    class="btn btn-primary btn-base"
                    @click="editProduct"
                    :disabled="loading.editProduct"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-8">
            <div class="card">
              <div class="card-body">
                <div class="product-desc">
                  <div class="form-group marginbot-20">
                    <label for>Name</label>
                    <input v-model="product.name" type="text" class="form-control" id placeholder />
                  </div>

                  <div class="form-group marginbot-20">
                    <label for>Description</label>
                    <ckeditor v-model="product.description" name="description" :editor="editor"></ckeditor>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="product-images">
                  <div class="form-group marginbot-20">
                    <label for>Images</label>
                    <vue-dropzone
                      id="dropzone"
                      ref="myVueDropzone"
                      :use-custom-slot="true"
                      :options="dropzoneOptions"
                      @vdropzone-removed-file="dropzoneRemovedFile"
                      @vdropzone-error="dropzoneError"
                      @vdropzone-success="dropzoneSuccess"
                      @vdropzone-sending="dropzoneSending"
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
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="product-price">
                  <div class="form-row mb-3">
                    <div class="col">
                      <label for>Price</label>
                      <input
                        v-model="product.price"
                        type="text"
                        name="price"
                        class="form-control"
                        id
                        placeholder
                      />
                    </div>
                    <div class="col">
                      <label for>Compared Price</label>
                      <input
                        v-model="product.compared_price"
                        name="compared_price"
                        type="text"
                        class="form-control"
                        id
                        placeholder
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for>Cost</label>
                    <input
                      v-model="product.cost_price"
                      name="cost_price"
                      type="text"
                      class="form-control"
                      id
                      placeholder
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="product-variant">
                  <h5 class="card-title">Variant</h5>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error voluptas autem eius dolorum molestias rerum labore ducimus enim iure, unde esse ad nam ipsum dolorem saepe quia debitis veritatis ipsa!</p>

                  <!-- if variant already added -->
                  <div v-if="variants.length > 0" class="variant-list mt-3">
                    <div class="table-responsive mb-0">
                      <table class="table table-centered table-nowrap">
                        <thead class="thead-light">
                          <tr>
                            <th>Variant</th>
                            <th>Option</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <template v-for="(variant, idx) in variants">
                            <tr :key="`variant-${idx}`">
                              <td>
                                <a href="#">{{variant.name}}</a>
                              </td>
                              <td>
                                <p>{{formatOptionName(variant.options)}}</p>
                              </td>
                              <td>
                                <a href="#" @click="(e) => removeVariant(e, idx)">
                                  <i class="fas fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- if variant already added -->

                  <div class="buttonbox toright mt-3">
                    <b-button v-b-modal.add-variant variant="primary">
                      <i class="mdi mdi-file-document-box-plus"></i> Add Variant
                    </b-button>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="product.variant.length > 0" class="card">
              <div class="card-body">
                <div class="variant-box">
                  <div class="buttonbox toright">
                    <router-link
                      tag="a"
                      to="/product/variant/edit"
                      class="d-block text-primary mb-3 router-link-active"
                    >
                      <strong>Edit Variant</strong>
                    </router-link>
                  </div>

                  <div class="table-responsive mb-0">
                    <table class="table table-centered table-nowrap">
                      <thead class="thead-light">
                        <tr>
                          <th></th>
                          <th>Variant</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>SKU</th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-for="(variant, idx) in product.variant">
                          <tr :key="`product-variant-${idx}`">
                            <td>
                              <div class="media">
                                <img
                                  src="/img/avatar-6.11d7dc68.jpg"
                                  alt="Generic placeholder image"
                                  height="32"
                                  class="d-flex align-self-start rounded mr-3"
                                />
                              </div>
                            </td>
                            <td>
                              <a href="#">{{formatVariantName(variant)}}</a>
                            </td>
                            <td>
                              <input
                                v-model="product.variant[idx].price"
                                type="text"
                                class="form-control"
                                placeholder
                              />
                            </td>
                            <td>
                              <input
                                v-model="product.variant[idx].quantity"
                                type="text"
                                class="form-control"
                                placeholder
                              />
                            </td>
                            <td>
                              <input
                                v-model="product.variant[idx].sku"
                                type="text"
                                class="form-control"
                                placeholder
                              />
                            </td>
                          </tr>
                        </template>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-4">
            <div class="sidebox product">
              <div class="card">
                <div class="card-body">
                  <div class="prodbox-attribute">
                    <!-- <div class="form-group">
                      <label for>Product Type (additional)</label>
                      <b-form-select v-model="product.product_type_id" :options="productTypes"></b-form-select>
                    </div> -->
                    <!-- <div class="form-group">
                      <label for>Vendor (additional)</label>
                      <b-form-select v-model="product.vendor_id" :options="vendors"></b-form-select>
                    </div> -->
                    <div class="form-group">
                      <label for>Category</label>
                      <b-form-select v-model="product.category_id" :options="productCategories"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label for>Hashtag</label>
                      <input type="text" v-model="product.tags" class="form-control" id placeholder />
                    </div>
                    <div class="form-group">
                      <label for>SKU</label>
                      <input type="text" name="sku" v-model="product.sku" class="form-control" id placeholder />
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="card">
                <div class="card-body">
                  <div class="prodbox-channel">
                    <h5 class="card-title mb-3">Sales Channel</h5>
                    <div class="filter-switch">
                      <ul>
                        <li>
                          Shopee
                          <div class="material-switch float-right">
                            <input
                              id="enable-shopee"
                              name="enable_shopee"
                              type="checkbox"
                              v-model="product.enable_shopee"
                              value="1"
                              unchecked-value="0"
                            />
                            <label for="enable-shopee" class="label-default"></label>
                          </div>
                        </li>
                        <li>
                          Tokopedia
                          <div class="material-switch float-right">
                            <input
                              id="enable-tokopedia"
                              name="enable_tokopedia"
                              type="checkbox"
                              v-model="product.enable_tokopedia"
                              value="1"
                              unchecked-value="0"
                            />
                            <label for="enable-tokopedia" class="label-default"></label>
                          </div>
                        </li>
                        <li>
                          Bukalapak
                          <div class="material-switch float-right">
                            <input
                              id="enable-bukalapak"
                              name="enable_bukalapak"
                              type="checkbox"
                              v-model="product.enable_bukalapak"
                              value="1"
                              unchecked-value="0"
                            />
                            <label for="enable-bukalapak" class="label-default"></label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="card">
                <div class="card-body">
                  <div class="prodbox-shipping">
                    <div class="filter-switch">
                      <ul>
                        <li>
                          Shipping
                          <div class="material-switch float-right">
                            <input
                              id="enable-shipping"
                              name="enable_shipping"
                              type="checkbox"
                              v-model="product.enable_shipping"
                              value="1"
                              unchecked-value="0"
                            />
                            <label for="enable-shipping" class="label-default"></label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="form-group">
                      <label for>Weight</label>
                      <input type="text" name="weight" v-model="product.weight" class="form-control" id placeholder />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div class="prodbox-tracking">
                    <div class="filter-switch">
                      <ul>
                        <li>
                          <strong>Stock Tracking</strong>
                          <div class="material-switch float-right">
                            <input
                              id="enable-stock-tracking"
                              name="enable_stock_tracking"
                              type="checkbox"
                              v-model="product.enable_stock_tracking"
                              value="1"
                              unchecked-value="0"
                            />
                            <label for="enable-stock-tracking" class="label-default"></label>
                          </div>
                          <p class="mt-3">Monitor product stock in real-time</p>
                        </li>
                      </ul>
                    </div>

                    <div class="tracking-list">
                      <!-- <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        />
                        <label class="form-check-label" for="exampleRadios1">
                          <p class="label-title">Inventory</p>
                          <p>Track a ready to sel product. Exp : Bags and clothing</p>
                        </label>
                      </div>
                      <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label class="form-check-label" for="exampleRadios2">
                          <p class="label-title">Ingredient</p>
                          <p>For product that need to make from ingredient. Exp : Food and Beverage</p>
                        </label>
                      </div> -->

                      <!-- if inventory selected -->
                      <div class="tracking-option inventory">
                        <p class="mb-3">
                          If there a product variant, manage the inventory from
                          <a
                            href="#"
                          >edit variant</a>
                        </p>

                        <h5>Low Alert</h5>
                        <p
                          class="mb-3"
                        >An alert will be sent when the inventory level below the following amount</p>
                        <div class="form-group">
                          <input type="text" class="form-control" id placeholder />
                        </div>
                      </div>
                      <!-- if inventory selected -->

                      <!-- if ingredient selected -->
                      <!-- <div class="tracking-option ingredient">
                        <div class="form-group">
                          <label for>Select ingredient</label>
                          <input type="text" class="form-control" id placeholder="Search" />
                        </div>
                        <div class="ingredient-list">
                          <div class="list-title">
                            <p>
                              <strong>Basic Ingredient</strong>
                            </p>
                            <p>
                              <strong>Unit</strong>
                            </p>
                          </div>
                          <div class="list-item">
                            <p>
                              <a href="#">Milk</a>
                            </p>
                            <p>100 ml</p>
                          </div>
                        </div>
                      </div> -->
                      <!-- if ingredient selected -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="card">
                <div class="card-body">
                  <div class="prodbox-tracking">
                    <div class="filter-switch">
                      <ul>
                        <li>
                          <strong>Product Status</strong>
                          <div class="material-switch float-right">
                            <input
                              id="status"
                              name="status"
                              type="checkbox"
                              v-model="product.status"
                              value=true
                              unchecked-value=false
                            />
                            <label for="status" class="label-default"></label>
                          </div>
                          <p class="mt-3">Set status for product</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </form>
    </div>

    <b-modal id="add-variant" title="Variant" title-class="font-18" :hide-footer="true">
      <div class="modalbox">
        <div class="form-group">
          <label for>Option Name</label>
          <select name="formAddVariantName" v-model="formAddVariant.name" class="form-control">
            <option value="">Example: size</option>
            <option value="size">Size</option>
            <option value="colour">Colour</option>
          </select>
        </div>
        <div class="form-group">
          <label for>Option</label>
          <template v-for="(option, idx) in formAddVariant.options">
            <div :key="`formAddVariant_options-${idx}`" class="option-item mb-3">
              <input
                type="text"
                v-model="formAddVariant.options[idx].name"
                class="form-control"
                placeholder="Example: Red, Small"
              />
              <!-- <select name="formAddVariantName" v-model="formAddVariant.options[idx]" class="form-control">
                <option value="">Example: Red, Small</option>
                <template v-if="formAddVariant.name === 'size'">
                  <option v-for="(item, idx) in variantSizeOpts" :key="`sizeOpts-${idx}`" :value="item.id">
                    {{item.name}}
                  </option>
                </template>
                <template v-if="formAddVariant.name === 'colour'">
                  <option v-for="(item, idx) in variantColourOpts" :key="`colourOpts-${idx}`" :value="item.id">
                    {{item.name}}
                  </option>
                </template>
              </select> -->
              <a href="#" @click="e => removeAddVariantOption(e, idx)">
                <span class="item-remove mt-2">x</span>
              </a>
            </div>
          </template>
          <p class="mt-3">
            <a href="#" @click="addVariantOptions">+ Add option</a>
          </p>
        </div>

        <div class="buttonbox toright mt-4">
          <button
            class="btn btn-secondary btn-base mr-3"
            @click="removeVariant"
          >
            Discard
          </button>
          <button
            class="btn btn-primary btn-base"
            @click="addVariant"
            :disabled="formAddVariantDisabled"
          >
            Enter
          </button>
        </div>
      </div>
    </b-modal>
  </Layout>
</template>