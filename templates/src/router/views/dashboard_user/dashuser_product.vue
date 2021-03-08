<script>
import Layout from "../../layouts/sto-main";
import NO_IMAGE from "../../../assets/images/product/no-image.png";
import Repository from "../../../repositories/RepositoryFactory";
import { baseDomain } from '../../../repositories/Clients/AxiosClient';

const ProductRepository = Repository.get("products");

export default {
  components: { Layout },
  data() {
    return {
      id: 0,
      tableData: [],
      title: "Product",
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
        { key: "category", sortable: false },
        { key: "price", sortable: false },
        { key: "stock", sortable: false },
        { 
            key: "status",
            sortable: false,
            formatter: (value) => {
              return value ? 'Available' : 'Not Available'
            },
        },
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
    this.getProducts();
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
    getProducts: async function() {
      const productData = await ProductRepository.get();

      this.tableData = productData.data.message;
    },
    deleteProduct: function(id) {
      this.$swal({
        icon: 'warning',
        title: 'Delete',
        text: 'Are you sure want to delete this product?',
        showCancelButton: true,
      })
        .then(async res => {
          if (res.value) {
            const deleteProductData = await ProductRepository.delete(id);
            if (deleteProductData) {
              const productData = await ProductRepository.get();
              this.tableData = productData.data.message;
            }
          }
        });
    },
    getImagePath: function(product) {
      // console.log(product.product_image)
      if (product.product_image) {
        return `${baseDomain}/${product.product_image}`;
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
        <div class="col-4">
          <h1>All Product</h1>
        </div>
        <div class="col-8">
          <div class="topbox-items">
            <div class="items-overview-filter mr-3 mb-1">
              <!-- <div id="tickets-table_length" class="dataTables_length">
                <label class="d-inline-flex align-items-center">
                  Show&nbsp;
                  <b-form-select v-model="perPage" class="mx-2" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                </label>
              </div> -->
            </div>
            <div class="items-overview-filter mr-3 mb-2">
              <router-link tag="a" to="/product/new" class="btn btn-primary _btn-custome">Add Product</router-link>
            </div>
            <div class="items-overview-setting">
              <!-- <form class="app-search app-search--top d-none d-lg-block"><div class="position-relative"><input type="text" placeholder="Search..." class="form-control"><span class="bx bx-search-alt"></span></div></form> -->
              <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                <label class="d-inline-flex align-items-center">
                  <b-form-input
                    v-model="filter"
                    type="search"
                    placeholder="Search..."
                    class="form-control _control-search-box form-control-sm ml-2"
                  ></b-form-input>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-page product">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive mb-0">
            <!-- <table class="table table-centered table-nowrap">
                            <thead class="thead-light">
                                <tr>
                                    <th style="width: 20px;">
                                        <div class="custom-control custom-checkbox">
                                        <input id="customCheck" type="checkbox" class="custom-control-input" />
                                        <label class="custom-control-label" for="customCheck">&nbsp;</label>
                                        </div>
                                    </th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input id="chck1" type="checkbox" class="custom-control-input" />
                                            <label for="chck1" class="custom-control-label">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-4 font-16"><router-link tag="a" to="/product/storage/list" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Shirt</td>
                                    <td>Rp. 3.200.000</td>
                                    <td>530</td>
                                    <td><p class="labelstatus bg-soft-success text-success">Available</p></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input id="chck1" type="checkbox" class="custom-control-input" />
                                            <label for="chck1" class="custom-control-label">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-4 font-16"><router-link tag="a" to="/product/storage/list" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Shirt</td>
                                    <td>Rp. 3.200.000</td>
                                    <td>530</td>
                                    <td><p class="labelstatus bg-soft-success text-success">Available</p></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input id="chck1" type="checkbox" class="custom-control-input" />
                                            <label for="chck1" class="custom-control-label">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-4 font-16"><router-link tag="a" to="/product/storage/list" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Shirt</td>
                                    <td>Rp. 3.200.000</td>
                                    <td>530</td>
                                    <td><p class="labelstatus bg-soft-success text-success">Available</p></td>
                                </tr>
                            </tbody>
            </table>-->

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
              <template v-slot:head(name)="row">
                <div class="custom-control d-inline-block custom-checkbox">
                    <input id="custome_check" type="checkbox" class="custom-control-input" />
                    <label class="custom-control-label back-grey" for="custome_check">&nbsp;</label>
                    <span class="">{{ row.label }}</span>
                </div>
              </template>
              <template v-slot:cell(name)="data">
                <div class="cell-name" :title="data.item.name">
                  <div class="custom-control d-inline-block custom-checkbox">
                      <input :id="'custome_check' +data.item.id" type="checkbox" class="custom-control-input" />
                      <label class="custom-control-label" :for="'custome_check' +data.item.id">&nbsp;</label>
                  </div>
                  <img :src="getImagePath(data.item)">
                  <router-link tag="a" class="blue_link" :to="`/product/edit/${data.item.id}`">
                    {{ data.item.name }}
                  </router-link>
                </div>
              </template>
              <template v-slot:cell(status)="">
                <p class="labelstatus bg-success text-dark">Available</p>
              </template>
              <template v-slot:cell(price)="row">
                <p>Rp. {{ row.value | toCurrency}}</p>
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
          <!-- end table -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.content-page.product table td .cell-name img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 8px;
  border-radius: 5px;
  border: 1px solid #f4f4f4;
}
.custom-control-label {
  background: #eef1f4;
  border-radius : 3px;
}
</style>