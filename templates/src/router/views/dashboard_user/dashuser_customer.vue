<script>
// import Layout from "../../layouts/main";
import Layout from "../../layouts/sto-main";
// import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Repository from "../../../repositories/RepositoryFactory";
const CustomerRepository = Repository.get("customers");

export default {
  page: {
    title: "Customer",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      id: 0,
      tableData: [],
      title: "Customer",
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
        { key: "name", sortable: true },
        { key: "email", sortable: true },
        { key: "city", sortable: true },
        { key: "actions", label: "Actions" }
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
    this.getCustomers();
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
    getCustomers: async function() {
      const customerData = await CustomerRepository.get();

      this.tableData = customerData.data.message;
    },
    deleteCustomer: async function(id) {
      const deleteCustomerData = await CustomerRepository.delete(id);

      if (deleteCustomerData) {
        const customerData = await CustomerRepository.get();
        this.tableData = customerData.data.message;
      }
    },
    updateCustomer: async function(id) {
      this.$router.push(`/customer/edit/${id}`);
    }
  }
};
</script>

<template>
  <Layout>
    <div class="section-topbox mb-3">
      <div class="row">
        <div class="col-6">
          <h1>Customer</h1>
        </div>
        <div class="col-6">
          <div class="topbox-items">
            <div class="items-overview-filter mr-3">
              <router-link
                tag="a"
                to="/customer/add"
                class="side-nav-link-ref btn btn-primary btn-md"
              >Add Customer</router-link>
            </div>
            <div class="items-overview-setting mr-5">
              <form class="app-search app-search--top d-none d-lg-block">
                <div class="position-relative">
                  <input type="text" placeholder="Search..." class="form-control" />
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
        <div class="card">
          <div class="card-body">
            <!-- <h4 class="card-title">Data Table</h4> -->
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
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
              </div>
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
                <template v-slot:cell(actions)="row">
                  <b-button size="sm" @click="deleteCustomer(row.item.id)" class="error">Delete</b-button>
                  <b-button
                    size="sm"
                    @click="updateCustomer(row.item.id)"
                  > Edit</b-button>
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