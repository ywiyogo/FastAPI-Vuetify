<script>
import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'
import appConfig from "@/app.config";

import { pricingData } from './data-pricing'

/**
 * Pricing component
 */
export default {
  page: {
    title: "Pricing",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      pricingData: pricingData,
      title: 'Pricing',
      items: [
        {
          text: 'Utility',
          href: '/',
        },
        {
          text: 'Pricing',
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
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="text-center mb-5">
          <h4>Choose your Pricing plan</h4>
          <p
            class="text-muted"
          >To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words If several languages coalesce</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="data in pricingData" :key="data.price" class="col-xl-3 col-md-6">
        <div class="card plan-box">
          <div class="card-body p-4">
            <div class="media">
              <div class="media-body">
                <h5>{{data.name}}</h5>
                <p class="text-muted">{{data.text}}</p>
              </div>
              <div class="ml-3">
                <i :class="`bx ${data.icon} h1 text-primary`"></i>
              </div>
            </div>
            <div class="py-4">
              <h2>
                <sup>
                  <small>$</small>
                </sup>
                {{data.price}}/
                <span class="font-size-13">Per month</span>
              </h2>
            </div>
            <div class="text-center plan-btn">
              <a
                href="javascript: void(0);"
                class="btn btn-primary btn-sm position-relative"
              >Sign up Now</a>
            </div>

            <div class="plan-features mt-5">
              <p>
                <i class="bx bx-checkbox-square text-primary mr-2"></i> Free Live Support
              </p>
              <p>
                <i class="bx bx-checkbox-square text-primary mr-2"></i> Unlimited User
              </p>
              <p>
                <i class="bx bx-checkbox-square text-primary mr-2"></i> No Time Tracking
              </p>
              <p>
                <i class="bx bx-checkbox-square text-primary mr-2"></i> Free Setup
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>