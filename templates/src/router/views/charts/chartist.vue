<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  smilAnimationChart,
  simpleLineChart,
  polarBarChart,
  areaLineChart,
  lineSmoothingChart,
  overlappingBarChart,
  stackBarChart,
  horizontalBarChart,
  donutAnimateChart,
  simplePieChart,
  distributedSeries,
  labelPlacementChart,
  extremeConfiguration,
  lineAreaChart
} from "./data-chartist";

/**
 * Chartist-chart component
 */
export default {
  page: {
    title: "Chartist Chart",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      smilAnimationChart: smilAnimationChart,
      simpleLineChart: simpleLineChart,
      polarBarChart: polarBarChart,
      areaLineChart: areaLineChart,
      lineSmoothingChart: lineSmoothingChart,
      overlappingBarChart: overlappingBarChart,
      stackBarChart: stackBarChart,
      horizontalBarChart: horizontalBarChart,
      donutAnimateChart: donutAnimateChart,
      simplePieChart: simplePieChart,
      distributedSeries: distributedSeries,
      labelPlacementChart: labelPlacementChart,
      extremeConfiguration: extremeConfiguration,
      lineAreaChart: lineAreaChart,
      title: "Chartist Charts",
      items: [
        {
          text: "Charts",
          href: "/"
        },
        {
          text: "Chartist Charts",
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
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Advanced Smil Animations</h4>

            <!-- Advanced Smil Animations -->
            <chartist
              ratio="ct-chart"
              :data="smilAnimationChart.data"
              :options="smilAnimationChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Simple Line Chart</h4>

            <!-- Simple line chart -->
            <chartist
              ratio="ct-chart"
              :data="simpleLineChart.data"
              :options="simpleLineChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Line Chart With Area</h4>

            <!-- Line chart with area -->
            <chartist
              ratio="ct-chart"
              :data="areaLineChart.data"
              :options="areaLineChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Bi-polar Line Chart Wth Area Only</h4>

            <!-- Bi-polar Line chart -->
            <chartist
              ratio="ct-chart"
              :data="lineAreaChart.data"
              :options="lineAreaChart.options"
              type="Line"
            ></chartist>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Line Interpolation / Smoothing</h4>

            <!-- Line Interpolation / Smoothing chart -->
            <chartist
              ratio="ct-chart"
              type="Line"
              :data="lineSmoothingChart.data"
              :options="lineSmoothingChart.options"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Overlapping Bars On Mobile</h4>

            <!-- Overlapping bars on mobile -->
            <chartist
              ratio="ct-chart"
              :data="overlappingBarChart.data"
              :options="overlappingBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Stacked Bar Chart</h4>

            <!-- Stacked bar chart -->
            <chartist
              ratio="ct-chart"
              :data="stackBarChart.data"
              :options="stackBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Horizontal Bar Chart</h4>

            <!-- Horizontal bar chart -->
            <chartist
              ratio="ct-chart"
              :data="horizontalBarChart.data"
              :options="horizontalBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Distributed Series</h4>

            <!-- Distributed series -->
            <chartist
              ratio="ct-chart"
              :data="distributedSeries.data"
              :options="distributedSeries.options"
              type="Bar"
            ></chartist>
          </div>
          <!-- end card-body -->
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Label Placement</h4>

            <!-- Label placement chart -->
            <chartist
              ratio="ct-chart"
              :data="labelPlacementChart.data"
              :options="labelPlacementChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Extreme Responsive Configuration</h4>

            <chartist
              ratio="ct-chart"
              :data="extremeConfiguration.data"
              :options="extremeConfiguration.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body" dir="ltr">
            <h4 class="card-title mb-4">Bi-polar Bar Chart</h4>

            <!-- Bi-polar bar -->
            <chartist
              ratio="ct-chart"
              :data="polarBarChart.data"
              :options="polarBarChart.options"
              type="Bar"
            ></chartist>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Donut With Svg.animate</h4>

            <!-- Animating a Donut with Svg.animate -->
            <chartist
              ratio="ct-chart"
              :data="donutAnimateChart.data"
              :options="donutAnimateChart.options"
              type="Pie"
            ></chartist>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Simple Pie Chart</h4>

            <!-- Simple pie chart -->
            <chartist
              ratio="ct-chart"
              :data="simplePieChart.data"
              :options="simplePieChart.options"
              type="Pie"
            ></chartist>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
