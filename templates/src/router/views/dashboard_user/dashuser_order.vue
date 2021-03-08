<script>
import format from 'date-fns/format';
import Layout from '../../layouts/sto-main';
import Repository from '../../../repositories/RepositoryFactory';
import { formatRupiah } from '../../../utils/formatter';

const OrderRepository = Repository.get('orders');

export default {
  name: 'DashboardOrder',
  components: { Layout },
  data() {
    return {
      errors: {},
      loading: {},
      tab: '',
      orders: [],
    };
  },
  mounted() {
    this.getOrders();
  },
  watch: {
    tab: function (prevTab, nextTab) {
      if (prevTab !== nextTab) {
        this.getOrders();
      }
    },
  },
  methods: {
    getOrders: async function () {
      try {
        const payload = {
          params: {
            status: this.tab,
          },
        };

        const res = await OrderRepository.get(payload);

        this.orders = res.data.message;
      } catch (err) {
        this.errors = { ...this.errors, orders: err };
        this.orders = [];
      }
    },
    onChangeTab: function (value) {
      this.tab = value;
    },
    getStatusStyles: function (status) {
      switch (status) {
        case 'Processing':
          return 'bg-soft-success text-success';
        case 'Sent':
          return 'bg-soft-info text-info';
        case 'Completed':
          return 'bg-soft-dark text-secondary';
        case 'Unpaid':
          return 'bg-soft-note text-note';
        case 'Draft':
          return 'bg-soft-primary text-primary';
        case 'Canceled':
          return 'bg-soft-cancel text-cancel';
        case 'Refund':
          return 'bg-soft-warning text-warning';
        default:
          break;
      }
    },
    formatDate: function (value) {
      if (!value) return;
      return format(new Date(value), 'dd MMMM yyyy');
    },
    formatPrice: function (value) {
      return formatRupiah(value);
    },
  }
};
</script>

<template>
  <Layout>
    <div class="section-topbox mb-3">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1>Order</h1>
        </div>
        <div class="col-12 col-md-6">
          <div class="topbox-items topbox-revert">
            <div class="items-overview-filter mr-3">
              <router-link tag="a" to="/order/add" class="btn btn-primary btn-base">Add Order</router-link>
            </div>
            <div class="items-overview-filter mr-3">
              <b-dropdown dropdown class="btn-base btn-drop">
                <template v-slot:button-content>Filter</template>
                <template>
                  <div role="tablist">
                    <b-card no-body class="mb-1 shadow-none">
                      <b-card-header header-tag="header" role="tab">
                        <h6 class="m-0">
                          <a
                            v-b-toggle.accordion-1
                            class="text-dark"
                            href="javascript: void(0);"
                          >Market Place</a>
                        </h6>
                      </b-card-header>
                      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <div class="filter-switch">
                            <ul>
                              <li>
                                Shopee
                                <div class="material-switch float-right">
                                  <input
                                    id="someSwitchOptionDefault1"
                                    name="someSwitchOption001"
                                    type="checkbox"
                                  />
                                  <label for="someSwitchOptionDefault1" class="label-default"></label>
                                </div>
                              </li>
                              <li>
                                Tokopedia
                                <div class="material-switch float-right">
                                  <input
                                    id="someSwitchOptionDefault2"
                                    name="someSwitchOption002"
                                    type="checkbox"
                                  />
                                  <label for="someSwitchOptionDefault2" class="label-default"></label>
                                </div>
                              </li>
                              <li>
                                Bukalapak
                                <div class="material-switch float-right">
                                  <input
                                    id="someSwitchOptionDefault3"
                                    name="someSwitchOption003"
                                    type="checkbox"
                                  />
                                  <label for="someSwitchOptionDefault3" class="label-default"></label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1 shadow-none">
                      <b-card-header header-tag="header" role="tab">
                        <h6 class="m-0">
                          <a
                            v-b-toggle.accordion-2
                            class="text-dark"
                            href="javascript: void(0);"
                          >POS</a>
                        </h6>
                      </b-card-header>
                      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                          <div class="filter-switch">
                            <ul>
                              <li>
                                Nama Toko
                                <div class="material-switch float-right">
                                  <input
                                    id="someSwitchOptionDefault4"
                                    name="someSwitchOption004"
                                    type="checkbox"
                                  />
                                  <label for="someSwitchOptionDefault4" class="label-default"></label>
                                </div>
                              </li>
                              <li>
                                Nama Toko
                                <div class="material-switch float-right">
                                  <input
                                    id="someSwitchOptionDefault5"
                                    name="someSwitchOption005"
                                    type="checkbox"
                                  />
                                  <label for="someSwitchOptionDefault5" class="label-default"></label>
                                </div>
                              </li>
                              <li>
                                Nama Toko
                                <div class="material-switch float-right">
                                  <input
                                    id="someSwitchOptionDefault"
                                    name="someSwitchOption001"
                                    type="checkbox"
                                  />
                                  <label for="someSwitchOptionDefault" class="label-default"></label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </template>
              </b-dropdown>
            </div>
            <div class="items-overview-setting">
              <div class="items-overview-setting">
                <form class="app-search app-search--top d-lg-block">
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
    </div>

    <div class="content-page order">
      <div class="row">
        <div class="col-lg-12">
          <div class="order-type">
            <ul>
              <li>
                <a
                  href="#"
                  :class="tab === '' && 'active'"
                  @click.prevent="() => onChangeTab('')"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="tab === 'Draft' && 'active'"
                  @click.prevent="() => onChangeTab('Draft')"
                >
                  Draft
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="tab === 'Unpaid' && 'active'"
                  @click.prevent="() => onChangeTab('Unpaid')"
                >
                  Pending Payment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="tab === 'Processing' && 'active'"
                  @click.prevent="() => onChangeTab('Processing')"
                >
                  Processing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="tab === 'Bukti Pembayaran' && 'active'"
                  @click.prevent="() => onChangeTab('Bukti Pembayaran')"
                >
                  Bukti Pembayaran
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="tab === 'Sent' && 'active'"
                  @click.prevent="() => onChangeTab('Sent')"
                >
                  Sent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="tab === 'Completed' && 'active'"
                  @click.prevent="() => onChangeTab('Completed')"
                >
                  Completed
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="tab === 'Refund' && 'active'"
                  @click.prevent="() => onChangeTab('Refund')"
                >
                  Refund
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="tab === 'Cancelled' && 'active'"
                  @click.prevent="() => onChangeTab('Cancelled')"
                >
                  Cancelled
                </a>
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="table-responsive mb-0">
                <table class="table table-centered table-nowrap">
                  <thead class="thead-light">
                    <tr>
                      <th style="width: 20px;">
                        <div class="custom-control custom-checkbox">
                          <input id="customCheck" type="checkbox" class="custom-control-input" />
                          <label class="custom-control-label" for="customCheck">&nbsp;</label>
                        </div>
                      </th>
                      <th>Order</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Sales Channel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="order in orders">
                      <tr :key="order.id">
                        <td>
                          <div class="custom-control custom-checkbox">
                            <input id="chck1" type="checkbox" class="custom-control-input" />
                            <label for="chck1" class="custom-control-label">&nbsp;</label>
                          </div>
                        </td>
                        <td>
                          <router-link
                            tag="a"
                            to="/order/detail"
                            class="d-block text-primary mb-2"
                          >#{{order.id}}</router-link>
                        </td>
                        <td>
                          <p>{{order.customer_name}}</p>
                        </td>
                        <td>{{formatDate(order.created_at)}}</td>
                        <td>
                          <p :class="`labelstatus ${getStatusStyles(order.status)}`">
                            {{order.status}}
                          </p>
                        </td>
                        <td>{{formatPrice(order.total)}}</td>
                        <td>
                          <div class="media">
                            <img
                              src="../../../assets/images/icon/icon-store.png"
                              alt="Generic placeholder image"
                              height="24"
                              class="d-flex align-self-start rounded mr-3"
                            />
                            <div class="media-body">
                              <h6 class="mt-2 font-16">
                                <router-link
                                  tag="a"
                                  to="/product/ingredient/add"
                                  class="d-block text-primary mb-2"
                                >Online Shop</router-link>
                              </h6>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>

                <template v-if="!loading.orders && !orders.length">
                  <div class="mt-4">
                    <h3 class="text-center text-secondary">
                      Order Kosong
                    </h3>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>