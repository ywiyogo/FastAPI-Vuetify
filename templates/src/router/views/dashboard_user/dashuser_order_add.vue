<script>
import debounce from 'lodash/debounce';
import Layout from '../../layouts/sto-main';
import ProductCard from '../../../components/product/product-card';
import Autocomplete from '../../../components/base/autocomplete';
import Repository from '../../../repositories/RepositoryFactory';
import { formatRupiah } from '../../../utils/formatter';
import store from '@/store'

const OrderRepository = Repository.get('orders');
const ProductRepository = Repository.get('products');
const CustomerRepository = Repository.get('customers');
const VariantRepository = Repository.get('variants');
const CategoryRepository = Repository.get('categories');
const ShippingRepository = Repository.get('shipping');

export default {
  name: 'DashboardOrderAdd',
  components: { Layout, ProductCard, Autocomplete },
  data() {
    return {
      errors: {},
      loading: {},
      products: [],
      variants: [],
      categories: [],
      order: null,
      cart: [],
      customer: null,
      customerOptions: [],
      form: {
        province: '',
        city: '',
        subdistrict: '',
        courier: '',
        postcode: '',
        courierService: '',
      },
      provinces: [],
      cities: [],
      subdistricts: [],
      courierServices: [],
      modalVariant: {
        product: null,
        variantColour: '',
        variantSize: '',
      }
    }
  },
  computed: {
    subtotalPrice: function () {
      return this.cart.reduce((acc, curr) => {
        return acc + (curr.price * curr.qty)
      }, 0);
    },
    shippingPrice: function () {
      if (!this.form.courierService.cost) return 0;
      return this.form.courierService.cost.reduce((a, b) => {
        return a.value || 0 + b.value;
      }, 0);
    },
    totalPrice: function () {
      return this.subtotalPrice + this.shippingPrice;
    },
    variantColours: function () {
      let variants = [];
      const productVariant = this.modalVariant.product
        ? this.modalVariant.product.product_variant
        : [];

      for (let i = 0; i < productVariant.length; i++) {
        const variant = productVariant[i];
        const variantId = variant.variant_colour_id;

        if (variantId && !variants.includes(variantId)) {
          variants.push(variantId);
        }
      }

      return variants.map(id => {
        return this.variants.find(obj => obj.id === id);
      });
    },
    variantSizes: function () {
      let variants = [];
      const productVariant = this.modalVariant.product
        ? this.modalVariant.product.product_variant
        : [];

      for (let i = 0; i < productVariant.length; i++) {
        const variant = productVariant[i];
        const variantId = variant.variant_size_id;

        if (variantId && !variants.includes(variantId)) {
          variants.push(variantId);
        }
      }

      return variants.map(id => {
        return this.variants.find(obj => obj.id === id);
      });
    }
  },
  mounted() {
    this.getProducts();
    this.getVariants();
    this.getCategories();
    this.getProvinces();
  },
  watch: {
    'form.province': function (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.$set(this.form, 'city', '');
        this.$set(this.form, 'postcode', '');
        this.$set(this.form, 'subdistrict', '');
        this.$set(this.form, 'courier', '');
        this.$set(this.form, 'courierService', '');
        this.getCities();
      }
    },
    'form.city': function (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.$set(this.form, 'postcode', this.form.city.postal_code);
        this.$set(this.form, 'subdistrict', '');
        this.$set(this.form, 'courier', '');
        this.$set(this.form, 'courierService', '');
        this.getSubdistricts();
      }
    },
    'form.subdistrict': function (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        if (this.form.courier) {
          this.getShippingCost();
        }
      }
    },
    'form.courier': function (newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.getShippingCost();
      }
    }
  },
  methods: {
    getProducts: async function () {
      try {
        const res = await ProductRepository.get();
        this.products = res.data.message;
      } catch (err) {
        this.errors = { ...this.errors, getProducts: err };
      }
    },
    getVariants: async function () {
      try {
        const res = await VariantRepository.get({
          query: '?type=colour&type=size'
        });
        
        this.variants = res.data.message;
      } catch (err) {
        this.errors = { ...this.errors, getVariants: err };
      }
    },
    getCategories: async function () {
      try {
        const res = await CategoryRepository.get();
        this.categories = res.data.message;
      } catch (err) {
        this.errors = { ...this.errors, getCategories: err };
      }
    },
    getProvinces: async function () {
      try {
        const res = await ShippingRepository.getProvince();
        this.provinces = res.data.message;
      } catch (err) {
        this.errors = { ...this.errors, getProvince: err };
      }
    },
    getCities: async function () {
      try {
        const res = await ShippingRepository.getCity({
          params: {
            province: this.form.province.province_id
          }
        });
        this.cities = res.data.message;
      } catch (err) {
        this.errors = { ...this.errors, getCities: err };
      }
    },
    getSubdistricts: async function () {
      try {
        const res = await ShippingRepository.getSubdistrict({
          params: {
            city: this.form.city.city_id
          }
        });
        this.subdistricts = res.data.message;
      } catch (err) {
        this.errors = { ...this.errors, getSubdistricts: err };
      }
    },
    getShippingCost: async function () {
      try {
        const res = await ShippingRepository.getCost({}, {
          params: {
            weight: '1700', // Get weight from product detail
            courier: this.form.courier,
            originType: 'city',
            origin: '501',// Todo: get origin store city
            destinationType: 'subdistrict',
            destination: this.form.subdistrict.subdistrict_id,
          }
        });

        const { results } = res.data.message;

        let services = [];

        results.forEach(result => {
          let service = {
            code: result.code,
            name: result.name,
          };
          result.costs.forEach(cost => {
            service = { ...service, ...cost };
            services.push(service);
          });
        });

        this.courierServices = services;
      } catch (err) {
        this.errors = { ...this.errors, getShippingCost: err };
      }
    },
    onSearchCustomer: debounce(async function (keyword) {
      if (keyword) {
        this.$set(this.loading, 'searchCustomer', true);
        const res = await CustomerRepository.getCustomer(`search/email?keyword=${keyword}`);
        this.$set(this.loading, 'searchCustomer', false);
        this.customerOptions = res.data.message || [];
      }
    }, 1000),
    onSelectCustomer: function (customer) {
      this.$set(this.form, 'firstname', customer.name);
      this.$set(this.form, 'email', customer.email);
      this.$set(this.form, 'customer_id', customer.id);
    },
    openModalVariant: function (product) {
      this.$set(this.modalVariant, 'product', product);
      this.$bvModal.show('modal-variant');
    },
    onCloseModalVariant: function () {
      this.modalVariant = {
        product: null,
        variantColour: '',
        variantSize: '',
      };
    },
    selectModalVariant: function (name, value) {
      this.$set(this.modalVariant, name, value);
    },
    sendOrder: async function () {
      try {
        const payload = {
          store_id: store.state.user.default_store.store_id,
          channel_id: 1,// Todo
          customer_id: this.form.customer_id,
          shipping_id: 1,// Todo
          tracking_number: Date.now(),
          comments: this.form.notes,
          status: 'Unpaid',
          sub_total: this.subtotalPrice,
          total: this.totalPrice,
          courier: this.form.courierService.code,
          shipping_cost: this.shippingPrice,
          order_date: new Date(),
          cart: this.cart.map(item => ({
            product_id: item.id,
            attributes: 'atribute',
            notes: this.form.notes,
            quantity: item.qty,
            unit_cost: item.price
          })),
        };

        this.$set(this.loading, 'sendOrder', true);

        await OrderRepository.create(payload);

        this.$set(this.loading, 'sendOrder', false);

        this.$swal({
          icon: "success",
          title: "Success creating order",
          onClose: () => {
            this.$router.push('/order');
          }
        });
      } catch (err) {
        this.errors = { ...this.errors, order: err };
      }
    },
    draftOrder: function () {},
    markOrderAsPaid: function () {},
    addToCart: function (newProduct) {
      const addingQty = this.cart.find(obj => obj.id === newProduct.id);

      if (addingQty) {
        this.cart = this.cart.map(obj => {
          if (obj.id === newProduct.id) {
            const newQty = obj.qty + 1;
            return {
              ...obj,
              qty: newQty,
            };
          }
          return obj; 
        })
      } else {
        newProduct = {
          ...newProduct,
          qty: newProduct.qty + 1 || 1,
        };
  
        this.cart.push(newProduct);
      }

      this.$bvModal.hide('modal-variant');
    },
    removeFromCart: function (idx) {
      this.$delete(this.cart, idx);
    },
    formatPrice: function (value) {
      return formatRupiah(value);
    },
  }
};
</script>

<template>
  <Layout>
    <div class="content-page order">
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <div class="order-product">
            <div class="mainsearching">
              <form class="app-search app-search--top d-none d-lg-block">
                <div class="position-relative">
                  <input type="text" placeholder="Search" class="form-control" />
                  <span class="bx bx-search-alt"></span>
                </div>
              </form>
            </div>
            <b-tabs justified nav-class="nav-tabs-custom" content-class="p-3 text-muted">
              <b-tab active>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">All</span>
                </template>
                <div class="product-list">
                  <div class="row">
                    <template v-for="product in products">
                      <div :key="`product-${product.id}`" class="col-lg-3 col-md-3 col-6">
                        <ProductCard :item="product" @click="openModalVariant" />
                      </div>
                    </template>
                  </div>
                </div>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Category</span>
                </template>
                <div class="product-list">
                  <div class="row">
                    <template v-for="category in categories">
                      <div :key="`category-${category.id}`" class="col-lg-3 col-md-3 col-6">
                        <ProductCard :item="category" :hidePrice="true" />
                      </div>
                    </template>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>

        <div class="col-lg-4 col-md-4">
          <div class="sidebox order">
            <div class="card">
              <div class="card-body">
                <div v-if="!cart.length" class="cart-list-empty">
                  <div class="text-center mt-2 mb-3">
                    <h5 class="text-muted">Cart is empty</h5>
                  </div>
                </div>
                <div v-else class="cart-list">
                  <template v-for="(cartItem, idx) in cart">
                    <div :key="`cart-${cartItem.id}`" class="summary-item">
                      <div class="item-product">
                        <div class="product-name">
                          <p class="name-product">
                            <a href="#">{{cartItem.name}}</a>
                          </p>
                          <p class="name-variant">{{cartItem.variant}}</p>
                        </div>
                        <div class="product-number">
                          <input
                            type="text"
                            class="form-control"
                            v-model="cart[idx].qty"
                          />
                        </div>
                        <div class="product-price">
                          <p>{{formatPrice(cartItem.price)}}</p>
                        </div>
                        <a type="button" @click="() => removeFromCart(idx)">
                          <span class="product-remove">X</span>
                        </a>
                      </div>
                    </div>
                  </template>
                </div>
                <!-- end summary-item -->

                <div class="summary-note">
                  <label class="font-weight-bold mb-2">Notes</label>
                  <textarea v-model="form.notes" name="order_notes" id cols="30" rows="3"></textarea>
                </div>
                <!-- end summary-note -->

                <div class="summary-number">
                  <div class="item-number">
                    <p class="text-primary">Add Discount</p>
                    <p>-</p>
                  </div>
                  <div class="item-number">
                    <p>Subtotal</p>
                    <p>{{formatPrice(subtotalPrice)}}</p>
                  </div>
                  <div class="item-number">
                    <p class="text-primary">Shipping</p>
                    <p>{{formatPrice(shippingPrice)}}</p>
                  </div>
                  <div class="item-number">
                    <p>
                      <strong>Total</strong>
                    </p>
                    <p>
                      <strong>{{formatPrice(totalPrice)}}</strong>
                    </p>
                  </div>
                </div>
                <!-- end summary-number -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
          <div class="shipping-box wrapbox card">
            <div class="card-body">
              <form @submit.prevent="sendOrder">
                <label for>Details</label>
                <div class="form-group marginbot-20">
                  <div class="mainsearching">
                    <Autocomplete
                      v-model="customer"
                      name="customer"
                      :options="customerOptions"
                      :loading="loading.searchCustomer"
                      placeholder="Find Customer"
                      label="name"
                      @search="onSearchCustomer"
                      @select="onSelectCustomer"
                    />
                  </div>
                </div>
                <div class="form-row mb-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      v-model="form.firstname"
                      name="firstname"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      v-model="form.lastname"
                      name="lastname"
                    />
                  </div>
                </div>
                <div class="form-group marginbot-20">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    v-model="form.email"
                    name="email"
                  />
                </div>
                <div class="form-group marginbot-20">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    v-model="form.phone"
                    name="phone"
                  />
                </div>
                <label for>Shipping Address</label>
                <div class="form-group marginbot-20">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    v-model="form.address"
                    name="address"
                  />
                </div>
                <div class="form-group marginbot-20">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apartment, house number (optional)"
                    v-model="form.address_detail"
                    name="address_detail"
                  />
                </div>
                <div class="form-row">
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control" v-model="form.province" name="province">
                        <option value="">Province</option>
                        <option v-for="item in provinces" :key="item.province" :value="item">
                          {{item.province}}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control disabled" v-model="form.city" name="city">
                        <option value="">City</option>
                        <option v-for="item in cities" :key="item.city_name" :value="item">
                          {{item.city_name}}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control" v-model="form.subdistrict" name="subdistrict">
                        <option value="">Kecamatan</option>
                        <option v-for="item in subdistricts" :key="item.subdistrict_name" :value="item">
                          {{item.subdistrict_name}}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Postcode"
                      v-model="form.postcode"
                      name="postcode"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control" v-model="form.courier" name="courier">
                        <option value="">Courier</option>
                        <option value="jne">JNE</option>
                        <option value="tiki">TIKI</option>
                        <option value="pos">POS</option>
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control" v-model="form.courierService" name="courierService">
                        <option value="">Courier Service</option>
                        <option v-for="item in courierServices" :key="item.service" :value="item">
                          {{item.name}} - {{item.service}}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="buttonbox toright">
                  <button
                    class="button btn btn-secondary margintop-10 mr-3"
                    @click="draftOrder"
                    :disabled="loading.draftOrder"
                  >
                    Draft
                  </button>
                  <button
                    class="button btn btn-secondary button--cancel margintop-10 mr-3"
                    @click="markOrderAsPaid"
                    :disabled="loading.markOrderAsPaid"
                  >
                    Mark as Paid
                  </button>
                  <button
                    type="submit"
                    class="button btn btn-primary margintop-10"
                    :disabled="loading.sendOrder"
                  >
                    Send Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="modal-variant" @hide="onCloseModalVariant" centered hide-header hide-footer>
      <div class="modalbox">
        <div class="variant-list p-2">
          <div v-if="!variantColours.length && !variantSizes.length">
            <h5 class="font-weight-bold text-secondary text-center mt-3">
              No Variant
            </h5>
          </div>
          <div v-if="variantColours.length" class="variant-type mb-3">
            <h5>Size</h5>
            <div class="row">
              <template v-for="item in variantColours">
                <div :key="item.id" class="col-6 col-md-3 mb-3">
                  <b-button
                    :variant="modalVariant.variantColour.id === item.id ? 'primary' : 'outline-secondary'"
                    @click="() => selectModalVariant('variantColour', item)"
                    block
                  >
                    {{item.name}}
                  </b-button>
                </div>
              </template>
            </div>
          </div>
          <div v-if="variantSizes.length" class="variant-type">
            <h5>Colour</h5>
            <div class="row">
              <template v-for="item in variantSizes">
                <div :key="item.id" class="col-6 col-md-3 mb-3">
                  <b-button
                    :variant="modalVariant.variantSize.id === item.id ? 'primary' : 'outline-secondary'"
                    @click="() => selectModalVariant('variantSize', item)"
                    block
                  >
                    {{item.name}}
                  </b-button>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <b-button
            variant="primary"
            @click="() => addToCart(modalVariant.product)"
          >
            Enter
          </b-button>
        </div>
      </div>
    </b-modal>
  </Layout>
</template>