<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { projectData } from "./data-projects";

/**
 * Projects-list component
 */
export default {
  page: {
    title: "Projects List",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      projectData: projectData,
      title: "Projects List",
      items: [
        {
          text: "Projects",
          href: "/"
        },
        {
          text: "Projects List",
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
        <div class>
          <div class="table-responsive">
            <table class="table project-list-table table-nowrap table-centered table-borderless">
              <thead>
                <tr>
                  <th scope="col" style="width: 100px">#</th>
                  <th scope="col">Projects</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Team</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="project in projectData" :key="project.id">
                  <td>
                    <img :src="`${project.image}`" alt class="avatar-sm" />
                  </td>
                  <td>
                    <h5 class="text-truncate font-size-14">
                      <a href="javascript: void(0);" class="text-dark">{{project.text}}</a>
                    </h5>
                    <p class="text-muted mb-0">{{project.subtext}}</p>
                  </td>
                  <td>{{project.date}}</td>
                  <td>
                    <span
                      class="badge"
                      :class="{ 'badge-primary': `${project.status}` === 'Completed',
                  'badge-warning': `${project.status}` === 'Pending',
                  'badge-danger': `${project.status}` === 'Delay' }"
                    >{{project.status}}</span>
                  </td>
                  <td>
                    <div class="team">
                      <a href="javascript: void(0);" class="team-member d-inline-block">
                        <img :src="`${project.users[0]}`" class="rounded-circle avatar-xs m-1" alt />
                      </a>

                      <a href="javascript: void(0);" class="team-member d-inline-block">
                        <img :src="`${project.users[1]}`" class="rounded-circle avatar-xs m-1" alt />
                      </a>
                    </div>
                  </td>
                  <td>
                    <b-dropdown class="card-drop" variant="white" right toggle-class="p-0">
                      <template v-slot:button-content>
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </template>
                      <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Another action</b-dropdown-item>
                      <b-dropdown-item href="javascript: void(0);">Something else here</b-dropdown-item>
                    </b-dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
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
    <!-- end row -->
  </Layout>
</template>