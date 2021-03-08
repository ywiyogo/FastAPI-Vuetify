<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { userGridData } from "./data-user";

/**
 * Contacts-grid component
 */
export default {
  page: {
    title: "Contact User Grid",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      userGridData: userGridData,
      title: "User Grid",
      items: [
        {
          text: "Contacts",
          href: "/"
        },
        {
          text: "User Grid",
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
      <div v-for="user in userGridData" :key="user.id" class="col-xl-3 col-sm-6">
        <div class="card text-center">
          <div class="card-body">
            <div v-if="user.font" class="avatar-sm mx-auto mb-4">
              <span
                class="avatar-title rounded-circle bg-soft-primary text-primary font-size-16"
              >{{user.font}}</span>
            </div>
            <div v-if="user.image" class="mb-4">
              <img class="rounded-circle avatar-sm" :src="`${user.image}`" alt />
            </div>
            <h5 class="font-size-15">
              <a href="javascript: void(0);" class="text-dark">{{user.name}}</a>
            </h5>
            <p class="text-muted">{{user.text}}</p>

            <div>
              <a
                href="javascript: void(0);"
                class="badge badge-primary font-size-11 m-1"
              >{{user.projects[0]}}</a>
              <a
                href="javascript: void(0);"
                class="badge badge-primary font-size-11 m-1"
              >{{user.projects[1]}}</a>
              <a
                href="javascript: void(0);"
                class="badge badge-primary font-size-11 m-1"
              >{{user.projects[2]}}</a>
            </div>
          </div>
          <div class="card-footer bg-transparent border-top">
            <div class="contact-links d-flex font-size-20">
              <div class="flex-fill">
                <a v-b-tooltip.hover.top title="Message" href="javascript: void(0);">
                  <i class="bx bx-message-square-dots"></i>
                </a>
              </div>
              <div class="flex-fill">
                <a v-b-tooltip.hover.top title="Projects" href="javascript: void(0);">
                  <i class="bx bx-pie-chart-alt"></i>
                </a>
              </div>
              <div class="flex-fill">
                <a v-b-tooltip.hover.top title="Profile" href="javascript: void(0);">
                  <i class="bx bx-user-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-success">
            <i class="bx bx-hourglass bx-spin mr-2"></i> Load more
          </a>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </Layout>
</template>