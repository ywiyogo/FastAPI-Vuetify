<script>
import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'
import appConfig from "@/app.config";

/**
 * Product-cart component
 */
export default {
   page: {
    title: "Cart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Cart',
      items: [
        {
          text: 'Ecommerce',
          href: '/',
        },
        {
          text: 'Cart',
          active: true,
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-centered mb-0 table-nowrap">
                <thead class="thead-light">
                  <tr>
                    <th>Product</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th colspan="2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="@/assets/images/product/img-1.png"
                        alt="product-img"
                        title="product-img"
                        class="avatar-md"
                      />
                    </td>
                    <td>
                      <h5 class="font-size-14 text-truncate">
                        <router-link
                          to="/ecommerce/product-detail"
                          class="text-dark"
                        >Half sleeve T-shirt</router-link>
                      </h5>
                      <p class="mb-0">
                        Color :
                        <span class="font-weight-medium">Maroon</span>
                      </p>
                    </td>
                    <td>$ 450</td>
                    <td>02</td>
                    <td>$ 900</td>
                    <td>
                      <a href="javascript:void(0);" class="action-icon text-danger">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="@/assets/images/product/img-2.png"
                        alt="product-img"
                        title="product-img"
                        class="avatar-md"
                      />
                    </td>
                    <td>
                      <h5 class="font-size-14 text-truncate">
                        <router-link
                          to="/ecommerce/product-detail"
                          class="text-dark"
                        >Light blue T-shirt</router-link>
                      </h5>
                      <p class="mb-0">
                        Color :
                        <span class="font-weight-medium">Light blue</span>
                      </p>
                    </td>
                    <td>$ 225</td>
                    <td>01</td>
                    <td>$ 225</td>
                    <td>
                      <a href="javascript:void(0);" class="action-icon text-danger">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="@/assets/images/product/img-3.png"
                        alt="product-img"
                        title="product-img"
                        class="avatar-md"
                      />
                    </td>
                    <td>
                      <h5 class="font-size-14 text-truncate">
                        <router-link
                          to="/ecommerce/product-detail"
                          class="text-dark"
                        >Black Color T-shirt</router-link>
                      </h5>
                      <p class="mb-0">
                        Color :
                        <span class="font-weight-medium">Black</span>
                      </p>
                    </td>
                    <td>$ 152</td>
                    <td>02</td>
                    <td>$ 304</td>
                    <td>
                      <a href="javascript:void(0);" class="action-icon text-danger">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="@/assets/images/product/img-4.png"
                        alt="product-img"
                        title="product-img"
                        class="avatar-md"
                      />
                    </td>
                    <td>
                      <h5 class="font-size-14 text-truncate">
                        <router-link to="/ecommerce/product-detail" class="text-dark">Hoodie (Blue)</router-link>
                      </h5>
                      <p class="mb-0">
                        Color :
                        <span class="font-weight-medium">Blue</span>
                      </p>
                    </td>
                    <td>$ 145</td>
                    <td>02</td>
                    <td>$ 290</td>
                    <td>
                      <a href="javascript:void(0);" class="action-icon text-danger">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="@/assets/images/product/img-5.png"
                        alt="product-img"
                        title="product-img"
                        class="avatar-md"
                      />
                    </td>
                    <td>
                      <h5 class="font-size-14 text-truncate">
                        <router-link
                          to="/ecommerce/product-detail"
                          class="text-dark"
                        >Half sleeve T-Shirt</router-link>
                      </h5>
                      <p class="mb-0">
                        Color :
                        <span class="font-weight-medium">Light orange</span>
                      </p>
                    </td>
                    <td>$ 138</td>
                    <td>01</td>
                    <td>$ 138</td>
                    <td>
                      <a href="javascript:void(0);" class="action-icon text-danger">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="@/assets/images/product/img-6.png"
                        alt="product-img"
                        title="product-img"
                        class="avatar-md"
                      />
                    </td>
                    <td>
                      <h5 class="font-size-14 text-truncate">
                        <router-link
                          to="/ecommerce/product-detail"
                          class="text-dark"
                        >Green color T-shirt</router-link>
                      </h5>
                      <p class="mb-0">
                        Color :
                        <span class="font-weight-medium">Green</span>
                      </p>
                    </td>
                    <td>$ 152</td>
                    <td>02</td>
                    <td>$ 304</td>
                    <td>
                      <a href="javascript:void(0);" class="action-icon text-danger">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <router-link to="/ecommerce/product-detail" class="btn btn-secondary">
                  <i class="mdi mdi-arrow-left mr-1"></i> Continue Shopping
                </router-link>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="text-sm-right mt-2 mt-sm-0">
                  <router-link to="/ecommerce/checkout" class="btn btn-success">
                    <i class="mdi mdi-cart-arrow-right mr-1"></i> Checkout
                  </router-link>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row-->
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Card Details</h5>

            <div class="card bg-primary text-white visa-card mb-0">
              <div class="card-body">
                <div>
                  <i class="bx bxl-visa visa-pattern"></i>

                  <div class="float-right">
                    <i class="bx bxl-visa visa-logo display-3"></i>
                  </div>

                  <div>
                    <i class="bx bx-chip h1 text-warning"></i>
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col-4">
                    <p>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                    </p>
                  </div>
                  <div class="col-4">
                    <p>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                    </p>
                  </div>
                  <div class="col-4">
                    <p>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                      <i class="fas fa-star-of-life m-1"></i>
                    </p>
                  </div>
                </div>

                <div class="mt-5">
                  <h5 class="text-white float-right mb-0">12/22</h5>
                  <h5 class="text-white mb-0">Fredrick Taylor</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">Order Summary</h4>

            <div class="table-responsive">
              <table class="table mb-0">
                <tbody>
                  <tr>
                    <td>Grand Total :</td>
                    <td>$ 1,857</td>
                  </tr>
                  <tr>
                    <td>Discount :</td>
                    <td>- $ 157</td>
                  </tr>
                  <tr>
                    <td>Shipping Charge :</td>
                    <td>$ 25</td>
                  </tr>
                  <tr>
                    <td>Estimated Tax :</td>
                    <td>$ 19.22</td>
                  </tr>
                  <tr>
                    <th>Total :</th>
                    <th>$ 1744.22</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- end table-responsive -->
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
