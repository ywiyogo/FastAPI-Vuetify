<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Invoice-list component
 */
export default {
  page: {
    title: "Invoice List",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Invoice List",
      items: [
        {
          text: "Invoices",
          href: "/"
        },
        {
          text: "List",
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
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div class="avatar-sm mr-3 mx-lg-auto mb-4 float-left float-lg-none">
                    <span
                      class="avatar-title rounded-circle bg-soft-primary text-primary font-size-16"
                    >M</span>
                  </div>
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Marion Burton</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    tag="a"
                    to="/invoices/detail"
                    class="d-block text-primary mb-2"
                  >Invoice #14251</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Skote Dashboard UI</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1455
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 10 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    class="avatar-sm mr-3 rounded-circle"
                    alt="img"
                  />
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Francis Witte</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link tag="a" to="/invoices/detail" class="d-block mb-2">Invoice #14252</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Brand logo design</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1024
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 11 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-7.jpg"
                    class="avatar-sm mr-3 rounded-circle"
                    alt="img"
                  />
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Joseph Flint</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link tag="a" to="/invoices/detail" class="d-block mb-2">Invoice #14253</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Landing page Design</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1189
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 12 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-8.jpg"
                    class="avatar-sm mr-3 rounded-circle"
                    alt="img"
                  />
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Larry Nielsen</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    tag="a"
                    to="/invoices/detail"
                    class="d-block text-primary mb-2"
                  >Invoice #14254</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Redesign - Landing page</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1245
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 12 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-5.jpg"
                    class="avatar-sm mr-3 rounded-circle"
                    alt="img"
                  />
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Mark Evans</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link tag="a" to="/invoices/detail" class="d-block mb-2">Invoice #14255</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Blog Template Design</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1024
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 11 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div class="avatar-sm mr-3 mx-lg-auto mb-4 float-left float-lg-none">
                    <span class="avatar-title rounded-circle bg-soft-info text-info font-size-16">T</span>
                  </div>
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Timothy Lee</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link tag="a" to="/invoices/detail" class="d-block mb-2">Invoice #14256</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Landing page Design</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1189
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 13 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-1.jpg"
                    class="avatar-sm mr-3 rounded-circle"
                    alt="img"
                  />
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Stanley Bland</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    tag="a"
                    to="/invoices/detail"
                    class="d-block text-primary mb-2"
                  >Invoice #14257</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Landing page UI</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1148
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 14 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div class="avatar-sm mr-3 mx-lg-auto mb-4 float-left float-lg-none">
                    <span
                      class="avatar-title rounded-circle bg-soft-success text-success font-size-16"
                    >T</span>
                  </div>
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Tommy Wilson</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link tag="a" to="/invoices/detail" class="d-block mb-2">Invoice #14258</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Redesign - Dashboard</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1259
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 15 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-4.jpg"
                    class="avatar-sm mr-3 rounded-circle"
                    alt="img"
                  />
                  <h5 class="mt-lg-4 mb-1 font-size-15 text-truncate">Louis Brandon</h5>
                  <a href="javascript: void(0);" class="text-muted">@Skote</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link tag="a" to="/invoices/detail" class="d-block mb-2">Invoice #14259</router-link>
                  <h5 class="text-truncate mb-4 mb-lg-5">Email Template UI</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item mr-3">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Amount">
                        <i class="bx bx-money mr-1 text-primary"></i> $ 1355
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5 v-b-tooltip.hover class="font-size-14" title="Due Date">
                        <i class="bx bx-calendar mr-1 text-primary"></i> 15 Oct, 19
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-success">
            <i class="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i> Load more
          </a>
        </div>
      </div>
      <!-- end col-->
    </div>
  </Layout>
</template>