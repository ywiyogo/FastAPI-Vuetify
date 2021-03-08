<script>
import Layout from "../../layouts/sto-main";

import appConfig from "@/app.config";

import Repository from "../../../repositories/RepositoryFactory";
const CustomerRepository = Repository.get("customers");

export default {
  page: {
    title: "customerAdd",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      title: "Add Customer",
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
      customer: {
        // id: null,
        store_id: 1,
        first_name: "",
        last_name: "",
        email: "",
        phone_number: 0,
        shipping_address: "",
        house_number: 0,
        province: "",
        city: "",
        district: "",
        postcode: ""
      }
    };
  },
  methods: {
    //this.product.images = this.$refs.inputFile.files; // fileList
    createCustomer: async function() {
      const { data } = await CustomerRepository.create(this.customer);
      this.customer = data;

      this.$router.push("/customer");
    }
  }
};
</script>

<template>
  <Layout>
    <div class="section-topbox mb-3">
      <div class="row">
        <div class="col-6">
          <router-link tag="a" to="/customer" class="d-block text-primary mb-2">
            <h6>Customer</h6>
          </router-link>
        </div>
        <div class="col-6"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-8">
        <div class>
          <div>
            <h2>Add Customer</h2>
          </div>
        </div>

        <div class>
          <div class="card">
            <div class="card-body">
              <form action="#" v-on:submit.prevent>
                <label for>Details</label>

                <div class="form-row marginbot-20">
                  <div class="col">
                    <input
                      type="text"
                      v-model="customer.first_name"
                      name="first_name"
                      class="form-control"
                      id="first_name"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col">
                    <input
                      v-model="customer.last_name"
                      name="last_name"
                      type="text"
                      class="form-control"
                      id="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="form-group marginbot-20">
                  <input
                    v-model="customer.email"
                    name="email"
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group marginbot-20">
                  <input
                    v-model="customer.phone_number"
                    name="phone_number"
                    type="number"
                    class="form-control"
                    id="phone_number"
                    placeholder="Phone Number"
                  />
                </div>
                <label for>Shipping Address</label>
                <div class="form-group marginbot-20">
                  <input
                    v-model="customer.shipping_address"
                    name="shipping_address"
                    type="text"
                    class="form-control"
                    id="shipping_address"
                    placeholder="Address"
                  />
                </div>
                <div class="form-group marginbot-20">
                  <input
                    v-model="customer.house_number"
                    name="house_number"
                    type="number"
                    class="form-control"
                    id="house_number"
                    placeholder="Apartment, house number (optional)"
                  />
                </div>
                <div class="form-row marginbot-20">
                  <div class="col">
                    <input
                      v-model="customer.province"
                      name="province"
                      type="text"
                      class="form-control"
                      id="province"
                      placeholder="Province"
                    />
                  </div>
                  <div class="col">
                    <input
                      v-model="customer.city"
                      name="city"
                      type="text"
                      class="form-control"
                      id
                      placeholder="City"
                    />
                  </div>
                </div>
                <div class="form-row marginbot-20">
                  <div class="col">
                    <input v-model="customer.district" 
                      name="district" 
                      type="text" 
                      class="form-control"
                      id="district"
                      placeholder="Kecamatan" 
                    />
                  </div>
                  <div class="col">
                    <input v-model="customer.postcode" 
                      name="postcode" 
                      type="text" 
                      class="form-control" 
                      id 
                      placeholder="Postcode" 
                    />
                  </div>
                </div>

                <div class="buttonbox toright">
                  <button type="button" class="btn btn-secondary mr-3">Discard</button>
                  <button type="submit" v-on:click="createCustomer()" class="btn btn-primary btn-base"><i class="mdi mdi-file-document-box-plus-outline"></i> Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4"></div>
    </div>
  </Layout>
</template>