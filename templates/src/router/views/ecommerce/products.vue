<script>
import VueSlideBar from 'vue-slide-bar'

import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'
import appConfig from "@/app.config";

import { clothsData } from './data-products'

/**
 * Products component
 */
export default {
   page: {
    title: "Product",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { VueSlideBar, Layout, PageHeader },
  data() {
    return {
      clothsData: clothsData,
      title: 'Products',
      items: [
        {
          text: 'Ecommerce',
          href: '/',
        },
        {
          text: 'Products',
          active: true,
        },
      ],
      checkboxStatus: 'accepted',
      sliderPrice: 800,
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-lg-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Filter</h4>

            <div>
              <h5 class="font-size-14 mb-3">Clothes</h5>
              <ul class="list-unstyled product-list">
                <li>
                  <a href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right mr-1"></i> T-shirts
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right mr-1"></i> Shirts
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right mr-1"></i> Jeans
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right mr-1"></i> Jackets
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Price</h5>
              <vue-slide-bar v-model="sliderPrice" :min="0" :max="1000" />
            </div>

            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Discount</h5>

              <b-form-checkbox
                id="productdiscountCheck1"
                class="mt-2"
                value="accepted"
                unchecked-value="not_accepted"
              >Less than 10%</b-form-checkbox>

              <b-form-checkbox
                id="productdiscountCheck2"
                class="mt-2"
                value="accepted"
                unchecked-value="not_accepted"
              >10% or more</b-form-checkbox>

              <b-form-checkbox
                id="productdiscountCheck3"
                v-model="checkboxStatus"
                class="mt-2"
                value="accepted"
                unchecked-value="not_accepted"
              >20% or more</b-form-checkbox>

              <b-form-checkbox
                id="productdiscountCheck4"
                class="mt-2"
                value="accepted"
                unchecked-value="not_accepted"
              >30% or more</b-form-checkbox>

              <b-form-checkbox
                id="productdiscountCheck5"
                class="mt-2"
                value="accepted"
                unchecked-value="not_accepted"
              >40% or more</b-form-checkbox>

              <b-form-checkbox
                id="productdiscountCheck6"
                class="mt-2"
                value="accepted"
                unchecked-value="not_accepted"
              >50% or more</b-form-checkbox>
            </div>

            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Customer Rating</h5>
              <div>
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  4
                  <i class="bx bx-star text-warning"></i> & Above
                </b-form-checkbox>

                <b-form-checkbox
                  id="checkbox-2"
                  class="mt-2"
                  name="checkbox-2"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  3
                  <i class="bx bx-star text-warning"></i> & Above
                </b-form-checkbox>

                <b-form-checkbox
                  id="checkbox-3"
                  class="mt-2"
                  name="checkbox-3"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  2
                  <i class="bx bx-star text-warning"></i> & Above
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-4"
                  class="mt-2"
                  name="checkbox-4"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  1
                  <i class="bx bx-star text-warning"></i>
                </b-form-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row mb-3">
          <div class="col-xl-4 col-sm-6">
            <div class="mt-2">
              <h5>Clothes</h5>
            </div>
          </div>
          <div class="col-lg-8 col-sm-6">
            <form class="mt-4 mt-sm-0 float-sm-right form-inline">
              <div class="search-box mr-2">
                <div class="position-relative">
                  <input type="text" class="form-control border-0" placeholder="Search..." />
                  <i class="bx bx-search-alt search-icon"></i>
                </div>
              </div>
              <ul class="nav nav-pills product-view-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="javascript: void(0);">
                    <i class="bx bx-grid-alt"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript: void(0);">
                    <i class="bx bx-list-ul"></i>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div class="row">
          <div v-for="data in clothsData" :key="data.id" class="col-xl-4 col-sm-6">
            <div class="card">
              <div class="card-body">
                <div class="product-img position-relative">
                  <div v-if="data.discount" class="avatar-sm product-ribbon">
                    <span class="avatar-title rounded-circle bg-primary">{{data.discount}}</span>
                  </div>
                  <img :src="`${data.product}`" alt class="img-fluid mx-auto d-block" />
                </div>
                <div class="mt-4 text-center">
                  <h5 class="mb-3 text-truncate">
                    <a href="javascript: void(0);" class="text-dark">{{data.name}}</a>
                  </h5>

                  <p class="text-muted">
                    <i class="bx bx-star text-warning"></i>
                    <i class="bx bx-star text-warning"></i>
                    <i class="bx bx-star text-warning"></i>
                    <i class="bx bx-star text-warning"></i>
                    <i class="bx bx-star text-warning"></i>
                  </p>
                  <h5 class="my-0">
                    <span class="text-muted mr-2">
                      <del>{{data.oldprice}}</del>
                    </span>
                    <b>{{data.newprice}}</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col-lg-12">
            <ul class="pagination pagination-rounded justify-content-center mt-4">
              <li class="page-item disabled">
                <a href="javascript: void(0);" class="page-link">
                  <i class="mdi mdi-chevron-left"></i>
                </a>
              </li>
              <li class="page-item">
                <a href="javascript: void(0);" class="page-link">1</a>
              </li>
              <li class="page-item active">
                <a href="javascript: void(0);" class="page-link">2</a>
              </li>
              <li class="page-item">
                <a href="javascript: void(0);" class="page-link">3</a>
              </li>
              <li class="page-item">
                <a href="javascript: void(0);" class="page-link">4</a>
              </li>
              <li class="page-item">
                <a href="javascript: void(0);" class="page-link">5</a>
              </li>
              <li class="page-item">
                <a href="javascript: void(0);" class="page-link">
                  <i class="mdi mdi-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
