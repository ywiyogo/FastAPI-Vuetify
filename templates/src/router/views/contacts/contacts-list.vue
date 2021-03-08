<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { userGridData } from "./data-user";

/**
 * Contacts-list component
 */
export default {
  page: {
    title: "Contact User List",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      userGridData: userGridData,
      title: "User List",
      items: [
        {
          text: "Contacts",
          href: "/"
        },
        {
          text: "User List",
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
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-centered table-nowrap table-hover">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" style="width: 70px;">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Projects</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="list in userGridData" :key="list.id">
                    <td>
                      <div v-if="list.font" class="avatar-xs">
                        <span class="avatar-title rounded-circle">{{list.font}}</span>
                      </div>
                      <div v-if="list.image">
                        <img class="rounded-circle avatar-xs" :src="`${list.image}`" alt />
                      </div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">
                        <a href="#" class="text-dark">{{list.name}}</a>
                      </h5>
                      <p class="text-muted mb-0">{{list.text}}</p>
                    </td>
                    <td>{{list.email}}</td>
                    <td>
                      <div>
                        <a
                          href="javascript: void(0);"
                          class="badge badge-soft-primary font-size-11 m-1"
                        >{{list.projects[0]}}</a>
                        <a
                          href="javascript: void(0);"
                          class="badge badge-soft-primary font-size-11 m-1"
                        >{{list.projects[1]}}</a>
                        <a
                          href="javascript: void(0);"
                          class="badge badge-soft-primary font-size-11 m-1"
                        >{{list.projects[2]}}</a>
                      </div>
                    </td>
                    <td>125</td>
                    <td>
                      <ul class="list-inline font-size-20 contact-links mb-0">
                        <li class="list-inline-item px-2">
                          <a v-b-tooltip.hover title="Message">
                            <i class="bx bx-message-square-dots"></i>
                          </a>
                        </li>
                        <li class="list-inline-item px-2">
                          <a v-b-tooltip.hover title="Profile">
                            <i class="bx bx-user-circle"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <ul class="pagination pagination-rounded justify-content-center mt-4">
                  <li class="page-item disabled">
                    <a href="#" class="page-link">
                      <i class="mdi mdi-chevron-left"></i>
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">1</a>
                  </li>
                  <li class="page-item active">
                    <a href="#" class="page-link">2</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">3</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">4</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">5</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      <i class="mdi mdi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>