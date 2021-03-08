<script>
import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'
import appConfig from "@/app.config";

import { shopsData } from './data-shops'

/**
 * Shops component
 */
export default {
   page: {
    title: "Shops",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      shopsData: shopsData,
      title: 'Shops',
      items: [
        {
          text: 'Ecommerce',
          href: '/',
        },
        {
          text: 'Shops',
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
      <div v-for="shops in shopsData" :key="shops.id" class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="row">
            <div class="col-xl-5">
              <div class="text-center p-4 border-right">
                <div class="avatar-sm mx-auto mb-4">
                  <span
                    :class="`avatar-title rounded-circle bg-soft-${shops.color} text-${shops.color} font-size-16`"
                  >{{shops.avatar}}</span>
                </div>
                <h5 class="text-truncate">{{shops.name}}</h5>
              </div>
            </div>

            <div class="col-xl-7">
              <div class="p-4 text-center text-xl-left">
                <div class="row">
                  <div class="col-md-6">
                    <div>
                      <p class="text-muted mb-2 text-truncate">Products</p>
                      <h5>{{shops.products}}</h5>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div>
                      <p class="text-muted mb-2 text-truncate">Wallet Balance</p>
                      <h5>{{shops.balance}}</h5>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <a href="#">See profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  end row -->

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
    <!-- end row -->
  </Layout>
</template>
