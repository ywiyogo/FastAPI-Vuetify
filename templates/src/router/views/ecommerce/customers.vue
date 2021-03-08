<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { customersData } from "./data-customers";
import appConfig from "@/app.config";

/**
 * Customers component
 */
export default {
   page: {
    title: "Customers",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      customersData: customersData,
      title: "Customers",
      items: [
        {
          text: "Ecommerce",
          href: "/"
        },
        {
          text: "Customers",
          active: true
        }
      ]
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
            <div class="row mb-2">
              <div class="col-sm-4">
                <div class="search-box mr-2 mb-2 d-inline-block">
                  <div class="position-relative">
                    <input type="text" class="form-control" placeholder="Search..." />
                    <i class="bx bx-search-alt search-icon"></i>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="text-sm-right">
                  <button
                    type="button"
                    class="btn btn-success btn-rounded mb-2 mr-2"
                  >
                    <i class="mdi mdi-plus mr-1"></i> New Customers
                  </button>
                </div>
              </div>
              <!-- end col-->
            </div>
            <div class="table-responsive">
              <table class="table table-centered table-nowrap">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Phone / Email</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Wallet Balance</th>
                    <th>Joining Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="customers in customersData" :key="customers.id">
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          :id="`customCheck${customers.id}`"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          :for="`customCheck${customers.id}`"
                        >&nbsp;</label>
                      </div>
                    </td>
                    <td>{{customers.username}}</td>
                    <td>
                      <p class="mb-1">{{customers.phone}}</p>
                      <p class="mb-0">{{customers.email}}</p>
                    </td>

                    <td>{{customers.address}}</td>
                    <td>
                      <span class="badge badge-success font-size-12">
                        <i class="mdi mdi-star mr-1"></i>
                        {{customers.rating}}
                      </span>
                    </td>
                    <td>{{customers.balance}}</td>
                    <td>{{customers.date}}</td>
                    <td>
                      <b-dropdown class="card-drop" variant="white" right toggle-class="p-0">
                        <template v-slot:button-content>
                          <i class="mdi mdi-dots-horizontal font-size-18"></i>
                        </template>

                        <b-dropdown-item>
                          <i class="fas fa-pencil-alt text-success mr-1"></i> Edit
                        </b-dropdown-item>

                        <b-dropdown-item>
                          <i class="fas fa-trash-alt text-danger mr-1"></i> Delete
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul class="pagination pagination-rounded justify-content-end mb-2">
              <li class="page-item disabled">
                <a class="page-link" href="javascript: void(0);" aria-label="Previous">
                  <i class="mdi mdi-chevron-left"></i>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript: void(0);">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);" aria-label="Next">
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
