<script>
// import Layout from "../../layouts/main";
import Layout from "../../layouts/sto-main";
import NO_IMAGE from "../../../assets/images/product/no-image.png";
// import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Repository from "../../../repositories/RepositoryFactory";
import { baseDomain } from '../../../repositories/Clients/AxiosClient';
const CategoryRepository = Repository.get("categories");

export default {
  page: {
    title: "Kategori Produk",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      tableData: [],
      title: "Kategori Produk",
      items: [
        {
          text: "Tables",
          href: "/"
        },
        {
          text: "Advanced",
          active: true
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "name", sortable: false },
        { key: "description", sortable: false },
        { key: "Number of Product", sortable: false }
        // { key: "number_of_product", sortable: true },
      ]
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.tableData.length;
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
    this.getCategories();
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    getCategories: async function() {
      const categoryData = await CategoryRepository.get();

      this.tableData = categoryData.data.message;
    },
    getImagePath: function(category) {
      console.log(category.category_image)
      if (category.file_path) {
        return `${baseDomain}/${category.category_image}`;
      }
      return NO_IMAGE;
    }
  }
};
</script>

<template>
  <Layout>
    <div class="section-topbox mb-3">
      <div class="row">
        <div class="col-6">
          <h1>Category</h1>
        </div>
        <div class="col-6">
          <div class="topbox-items">
            <div class="items-overview-filter mr-3">
              <router-link
                tag="a"
                to="/product/category/add"
                class="side-nav-link-ref btn btn-primary btn-md _btn-custome"
              >Add Category</router-link>
            </div>
            <div class="items-overview-setting">
              <form class="app-search app-search--top d-none d-lg-block">
                <div class="position-relative">
                  <input type="text" v-model="filter" placeholder="Search..." class="form-control _control-search-box " />
                  <span class="bx bx-search-alt"></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card _br-6">
          <div class="card-body pt-0">
            <!-- <h4 class="card-title">Data Table</h4> -->
            <div class="row">
              <!-- <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                  </label>
                </div>
              </div> -->
              <!-- Search -->
              <!-- <div class="col-sm-12 col-md-6">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control form-control-sm ml-2"
                    ></b-form-input>
                  </label>
                </div>
              </div> -->
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                :items="tableData"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
              >
              <template v-slot:cell(name)="data">
                <div class="cell-name" :title="data.item.name">
                  <img :src="getImagePath(data.item)" width="137">
                   <router-link tag="a" class="blue_link" :to="`/product/edit/${data.item.id}`">
                    {{ data.item.name }}
                  </router-link>
                </div>
              </template>
              </b-table>
            </div>
            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style>
.table th {
  border-top: 0px !important;
}
</style>