<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  linewithDataChart,
  dashedLineChart,
  splineAreaChart,
  columnChart,
  columnDatalabelChart,
  barChart,
  mixedChart,
  radialChart,
  pieChart,
  donutChart
} from "./data-apex";

/**
 * Apex-chart component
 */
export default {
  page: {
    title: "Apex Chart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      linewithDataChart: linewithDataChart,
      dashedLineChart: dashedLineChart,
      splineAreaChart: splineAreaChart,
      columnChart: columnChart,
      columnDatalabelChart: columnDatalabelChart,
      barChart: barChart,
      mixedChart: mixedChart,
      radialChart: radialChart,
      pieChart: pieChart,
      donutChart: donutChart,
      title: "Apex charts",
      items: [
        {
          text: "Charts",
          href: "/"
        },
        {
          text: "Apex charts",
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
            <h4 class="card-title mb-4">Line With Data Labels</h4>
            <!-- Line with Data Labels chart -->
            <apexchart
              class="apex-charts"
              height="380"
              type="line"
              dir="ltr"
              :series="linewithDataChart.series"
              :options="linewithDataChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Dashed Line</h4>
            <!-- Dashed Line Chart -->
            <apexchart
              class="apex-charts"
              height="380"
              type="line"
              dir="ltr"
              :series="dashedLineChart.series"
              :options="dashedLineChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Spline Area</h4>
            <!-- Spline Area chart -->
            <apexchart
              class="apex-charts"
              height="350"
              type="area"
              dir="ltr"
              :series="splineAreaChart.series"
              :options="splineAreaChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Column Charts</h4>
            <!-- Column Charts -->
            <apexchart
              class="apex-charts"
              height="350"
              type="bar"
              dir="ltr"
              :series="columnChart.series"
              :options="columnChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Column With Data Labels</h4>
            <!-- Column with Data Labels -->
            <apexchart
              class="apex-charts"
              height="350"
              type="bar"
              dir="ltr"
              :series="columnDatalabelChart.series"
              :options="columnDatalabelChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Bar Chart</h4>
            <!-- Bar Chart -->
            <apexchart
              class="apex-charts"
              height="350"
              type="bar"
              dir="ltr"
              :series="barChart.series"
              :options="barChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Line, Column & Area Chart</h4>
            <!-- Line, Column & Area Chart -->
            <apexchart
              class="apex-charts"
              height="350"
              type="line"
              dir="ltr"
              :series="mixedChart.series"
              :options="mixedChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Radial Chart</h4>
            <!-- Radial Chart -->
            <apexchart
              class="apex-charts"
              height="380"
              type="radialBar"
              dir="ltr"
              :series="radialChart.series"
              :options="radialChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Pie Chart</h4>
            <!-- Pie Chart -->
            <apexchart
              class="apex-charts"
              height="320"
              type="pie"
              dir="ltr"
              :series="pieChart.series"
              :options="pieChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Donut Chart</h4>
            <!-- Donut Chart -->
            <apexchart
              class="apex-charts"
              height="320"
              type="donut"
              dir="ltr"
              :series="donutChart.series"
              :options="donutChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>