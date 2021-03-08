<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DonutChart from "./DonutChart";
import PolarChart from "./PolarChart";
import RadarChart from "./RadarChart";

/**
 * Chartjs-chart component
 */
export default {
  page: {
    title: "Chartjs Chart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    PageHeader,
    BarChart,
    LineChart,
    PieChart,
    DonutChart,
    PolarChart,
    RadarChart
  },
  data() {
    return {
      title: "Chartjs Chart",
      items: [
        {
          text: "Charts",
          href: "/"
        },
        {
          text: "Chartjs Chart",
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Line Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">86541</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">2541</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">102030</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Line Chart -->
            <LineChart :height="300" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Bar Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">2541</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">84845</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">12001</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Bar Chart -->
            <BarChart :height="300" />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Pie Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">2536</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">69421</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">89854</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Pie Chart -->
            <PieChart :height="140" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Donut Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">9595</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">36524</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">62541</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Donut Chart -->
            <DonutChart :height="140" />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Polar area Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">4852</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">3652</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">85412</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Polar area Chart -->
            <PolarChart :height="160" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Radar Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">694</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">55210</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">489498</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Radar Chart -->
            <RadarChart :height="160" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>