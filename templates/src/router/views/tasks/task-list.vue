<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { tasksChart } from "./data-tasklist";

/**
 * Task-list component
 */
export default {
  page: {
    title: "Task List",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      tasksChart: tasksChart,
      title: "Task List",
      items: [
        {
          text: "Tasks",
          href: "/"
        },
        {
          text: "Task List",
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
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Upcoming</h4>
            <div class="table-responsive mb-0">
              <table class="table table-nowrap table-centered">
                <tbody>
                  <tr>
                    <td style="width: 60px;">
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck1" type="checkbox" class="custom-control-input" />
                        <label class="custom-control-label" for="customCheck1"></label>
                      </div>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Create a Skote Dashboard UI</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member">
                          <img
                            src="@/assets/images/users/avatar-2.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>

                        <a href="javascript: void(0);" class="team-member">
                          <img
                            src="@/assets/images/users/avatar-1.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span class="badge badge-pill badge-soft-secondary font-size-11">Waiting</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          id="customCheck2"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="customCheck2"></label>
                      </div>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Create a New Landing UI</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-4.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>

                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-5.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>

                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <div class="avatar-xs">
                            <span
                              class="avatar-title rounded-circle bg-soft-primary text-primary"
                            >3 +</span>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span class="badge badge-pill badge-soft-primary font-size-11">Approved</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck3" type="checkbox" class="custom-control-input" />
                        <label class="custom-control-label" for="customCheck3"></label>
                      </div>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Create a Skote Logo</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <div class="avatar-xs">
                            <span class="avatar-title rounded-circle bg-soft-primary text-primary">F</span>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span class="badge badge-pill badge-soft-secondary font-size-11">Waiting</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">In Progress</h4>
            <div class="table-responsive mb-0">
              <table class="table table-nowrap table-centered">
                <tbody>
                  <tr>
                    <td style="width: 60px;">
                      <div class="custom-control custom-checkbox">
                        <input
                          id="customCheck4"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="customCheck4"></label>
                      </div>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Brand logo design</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-7.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span class="badge badge-pill badge-soft-success font-size-11">Complete</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck5" type="checkbox" class="custom-control-input" />
                        <label class="custom-control-label" for="customCheck5"></label>
                      </div>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Create a Blog Template UI</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <div class="avatar-xs">
                            <span class="avatar-title rounded-circle bg-soft-primary text-primary">S</span>
                          </div>
                        </a>

                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-8.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>

                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-1.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span class="badge badge-pill badge-soft-warning font-size-11">Pending</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Completed</h4>
            <div class="table-responsive mb-0">
              <table class="table table-nowrap table-centered">
                <tbody>
                  <tr>
                    <td style="width: 60px;">
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck6" type="checkbox" class="custom-control-input" />
                        <label class="custom-control-label" for="customCheck6"></label>
                      </div>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Redesign - Landing page</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-6.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <div class="avatar-xs">
                            <span class="avatar-title rounded-circle bg-soft-primary text-primary">F</span>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span class="badge badge-pill badge-soft-success font-size-11">Complete</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input
                          id="customCheck7"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="customCheck7"></label>
                      </div>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Multipurpose Landing</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-7.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span class="badge badge-pill badge-soft-success font-size-11">Complete</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div class="custom-control custom-checkbox">
                        <input id="customCheck8" type="checkbox" class="custom-control-input" />
                        <label class="custom-control-label" for="customCheck8"></label>
                      </div>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Create a Blog Template UI</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-4.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>

                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <div class="avatar-xs">
                            <span class="avatar-title rounded-circle bg-soft-primary text-primary">S</span>
                          </div>
                        </a>

                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-2.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span class="badge badge-pill badge-soft-success font-size-11">Complete</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">Tasks</h4>

            <apexchart
              class="apex-charts"
              type="line"
              height="280"
              :series="tasksChart.series"
              :options="tasksChart.chartOptions"
            ></apexchart>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Recent Tasks</h4>

            <div class="table-responsive mb-0">
              <table class="table table-nowrap table-centered">
                <tbody>
                  <tr>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Brand logo design</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-7.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Create a Blog Template UI</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <div class="avatar-xs">
                            <span class="avatar-title rounded-circle bg-soft-primary text-primary">S</span>
                          </div>
                        </a>

                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-8.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>

                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-1.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">Redesign - Landing page</a>
                      </h5>
                    </td>
                    <td>
                      <div class="team">
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-7.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                        <a href="javascript: void(0);" class="team-member d-inline-block">
                          <img
                            src="@/assets/images/users/avatar-4.jpg"
                            class="rounded-circle avatar-xs m-1"
                            alt
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- end table responsive -->
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
