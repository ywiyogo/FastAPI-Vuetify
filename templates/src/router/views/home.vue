<script>
import Layout from "../layouts/main";
import appConfig from "@/app.config";

import Profile from "@/components/widgets/profile";
import Earning from "@/components/widgets/earning";
import Stat from "@/components/widgets/stat";
import Transaction from "@/components/widgets/transaction";
import Emailsent from "@/components/widgets/emailsent";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, Profile, Stat, Transaction, Earning, Emailsent },
  data() {
    return {
      title: "Dashboard",
      statData: [
        {
          icon: "bx bx-copy-alt",
          title: "Orders",
          value: "1,235"
        },
        {
          icon: "bx bx-archive-in",
          title: "Revenue",
          value: "$35, 723"
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Average Price",
          value: "$16.2"
        }
      ],
      transactions: [
        {
          id: "#SK2540",
          name: "Neal Matthews",
          date: "07 Oct, 2019",
          total: "$400",
          status: "Paid",
          payment: ["fa-cc-mastercard", "Mastercard"],
          index: 1
        },
        {
          id: "#SK2541",
          name: "Jamal Burnett",
          date: "07 Oct, 2019",
          total: "$380",
          status: "Chargeback",
          payment: ["fa-cc-visa", "Visa"],
          index: 2
        },
        {
          id: "#SK2542",
          name: "Juan Mitchell",
          date: "06 Oct, 2019",
          total: "$384",
          status: "Paid",
          payment: ["fab fa-cc-paypal", "Paypal"],
          index: 3
        },
        {
          id: "#SK2543",
          name: "Barry Dick",
          date: "05 Oct, 2019",
          total: "$412",
          status: "Paid",
          payment: ["fa-cc-mastercard", "Mastercard"],
          index: 4
        },
        {
          id: "#SK2544",
          name: "Ronald Taylor",
          date: "04 Oct, 2019",
          total: "$404",
          status: "Refund",
          payment: ["fa-cc-visa", "Visa"],
          index: 5
        },
        {
          id: "#SK2545",
          name: "Jacob Hunter",
          date: "04 Oct, 2019",
          total: "$392",
          status: "Paid",
          payment: ["fab fa-cc-paypal", "Paypal"],
          index: 6
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box d-flex align-items-center justify-content-between">
          <h4 class="mb-0 font-size-18">Dashboard</h4>

          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item active">Welcome to Skote Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- end page title -->

    <div class="row">
      <div class="col-xl-4">
        <Profile />
        <Earning />
      </div>
      <!-- end col -->
      <div class="col-xl-8">
        <div class="row">
          <div v-for="stat of statData" :key="stat.icon" class="col-md-4">
            <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
          </div>
        </div>

        <!-- Email sent -->
        <Emailsent />
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Social Source</h4>
            <div class="text-center">
              <div class="avatar-sm mx-auto mb-4">
                <span class="avatar-title rounded-circle bg-primary font-size-18">
                  <i class="mdi mdi-facebook text-white"></i>
                </span>
              </div>
              <p class="font-16 text-muted mb-2"></p>
              <h5>
                <a href="javascript: void(0);" class="text-dark">
                  Facebook -
                  <span class="text-muted font-16">125 sales</span>
                </a>
              </h5>
              <p
                class="text-muted"
              >Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.</p>
              <a href="javascript: void(0);" class="text-primary font-16">
                Learn more
                <i class="mdi mdi-chevron-right"></i>
              </a>
            </div>
            <div class="row mt-4">
              <div class="col-sm-4">
                <div class="social-source text-center mt-3">
                  <div class="avatar-xs mx-auto mb-3">
                    <span class="avatar-title rounded-circle bg-primary font-size-16">
                      <i class="mdi mdi-facebook text-white"></i>
                    </span>
                  </div>
                  <h5 class="font-size-15">Facebook</h5>
                  <p class="text-muted mb-0">125 sales</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="social-source text-center mt-3">
                  <div class="avatar-xs mx-auto mb-3">
                    <span class="avatar-title rounded-circle bg-info font-size-16">
                      <i class="mdi mdi-twitter text-white"></i>
                    </span>
                  </div>
                  <h5 class="font-size-15">Twitter</h5>
                  <p class="text-muted mb-0">112 sales</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="social-source text-center mt-3">
                  <div class="avatar-xs mx-auto mb-3">
                    <span class="avatar-title rounded-circle bg-pink font-size-16">
                      <i class="mdi mdi-instagram text-white"></i>
                    </span>
                  </div>
                  <h5 class="font-size-15">Instagram</h5>
                  <p class="text-muted mb-0">104 sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-5">Activity</h4>
            <ul class="verti-timeline list-unstyled">
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle font-size-18"></i>
                </div>
                <div class="media">
                  <div class="mr-3">
                    <h5 class="font-size-14">
                      22 Nov
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"
                      ></i>
                    </h5>
                  </div>
                  <div class="media-body">
                    <div>Responded to need “Volunteer Activities</div>
                  </div>
                </div>
              </li>
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle font-size-18"></i>
                </div>
                <div class="media">
                  <div class="mr-3">
                    <h5 class="font-size-14">
                      17 Nov
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"
                      ></i>
                    </h5>
                  </div>
                  <div class="media-body">
                    <div>
                      Everyone realizes why a new common language would be desirable...
                      <a
                        href="javascript: void(0);"
                      >Read more</a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="event-list active">
                <div class="event-timeline-dot">
                  <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                </div>
                <div class="media">
                  <div class="mr-3">
                    <h5 class="font-size-14">
                      15 Nov
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"
                      ></i>
                    </h5>
                  </div>
                  <div class="media-body">
                    <div>Joined the group “Boardsmanship Forum”</div>
                  </div>
                </div>
              </li>
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle font-size-18"></i>
                </div>
                <div class="media">
                  <div class="mr-3">
                    <h5 class="font-size-14">
                      12 Nov
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"
                      ></i>
                    </h5>
                  </div>
                  <div class="media-body">
                    <div>Responded to need “In-Kind Opportunity”</div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="text-center mt-4">
              <a href="javascript: void(0);" class="btn btn-primary btn-sm">Load More</a>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Top Cities Selling Product</h4>

            <div class="text-center">
              <div class="mb-4">
                <i class="bx bx-map-pin text-primary display-4"></i>
              </div>
              <h3>1,456</h3>
              <p>San Francisco</p>
            </div>

            <div class="table-responsive mt-4">
              <table class="table table-centered">
                <tbody>
                  <tr>
                    <td style="width: 140px">
                      <p class="mb-0">San Francisco</p>
                    </td>
                    <td style="width: 120px">
                      <h5 class="mb-0">1,456</h5>
                    </td>
                    <td>
                      <b-progress :value="94" variant="primary" height="5px"></b-progress>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="mb-0">Los Angeles</p>
                    </td>
                    <td>
                      <h5 class="mb-0">1,123</h5>
                    </td>
                    <td>
                      <b-progress :value="82" variant="success" height="5px"></b-progress>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="mb-0">San Diego</p>
                    </td>
                    <td>
                      <h5 class="mb-0">1,026</h5>
                    </td>
                    <td>
                      <b-progress :value="70" variant="warning" height="5px"></b-progress>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Latest Transaction</h4>
            <!-- Transactions table -->
            <Transaction :transactions="transactions" />
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
