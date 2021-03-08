<script>
import VueSlideBar from "vue-slide-bar";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Range-slider component
 */
export default {
  page: {
    title: "Range Slider",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { VueSlideBar, Layout, PageHeader },
  data() {
    return {
      title: "Range Slider",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Range Slider",
          active: true
        }
      ],
      simpleValue: 10,
      sliderCustomzie: 300,
      sliderWithLabel: {
        value: 45,
        data: [15, 30, 45, 60, 75, 90, 120],
        range: [
          {
            label: "15 mins"
          },
          {
            label: "30 mins",
            isHide: true
          },
          {
            label: "45 mins"
          },
          {
            label: "1 hr",
            isHide: true
          },
          {
            label: "1 hr 15 mins"
          },
          {
            label: "1 hr 30 mins",
            isHide: true
          },
          {
            label: "2 hrs"
          }
        ],
        rangeValue: {}
      },
      customData: {
        value: 3,
        data: [1, 2, 3, 4, 5, 6, 7],
        range: [
          {
            label: "Sunday"
          },
          {
            label: "Monday"
          },
          {
            label: "Tuesday"
          },
          {
            label: "Wednesday"
          },
          {
            label: "Thursday"
          },
          {
            label: "Friday"
          },
          {
            label: "Saturday"
          }
        ]
      },
      loader: null,
      loadingValue: 0,
      customStyle: 800,
      lineHeight: 10
    };
  },
  methods: {
    /**
     * Range and label slider set range
     */
    callbackRange(val) {
      this.sliderWithLabel.rangeValue = val;
    },
    /**
     * Loading slider
     */
    startLoad() {
      this.loader = setInterval(() => {
        this.loadingValue++;
        if (this.loadingValue === 100) {
          clearInterval(this.loader);
        }
      }, 100);
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range slider</h4>
            <p
              class="card-title-desc"
            >Cool, comfortable, responsive and easily customizable range slider</p>
            <div class="row">
              <div class="col-md-6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Default</h5>
                  <div class="px-3">
                    <vue-slide-bar v-model="simpleValue" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Min-Max</h5>
                  <div class="px-3">
                    <vue-slide-bar v-model="sliderCustomzie" :min="100" :max="500" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Range and Label</h5>
                  <div class="px-3">
                    <vue-slide-bar
                      v-model="sliderWithLabel.value"
                      :data="sliderWithLabel.data"
                      :range="sliderWithLabel.range"
                      @callbackRange="callbackRange"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Loading</h5>
                  <div class="px-3">
                    <vue-slide-bar v-model="loadingValue" :show-tooltip="true" :is-disabled="true" />
                    <br />
                    <b-button size="sm" variant="light" @click="startLoad">Start</b-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Custom Style</h5>
                  <div class="px-3">
                    <vue-slide-bar
                      v-model="customStyle"
                      :min="100"
                      :max="1000"
                      :line-height="lineHeight"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Custom Data</h5>
                  <div class="px-3">
                    <vue-slide-bar :data="customData.data" :range="customData.range" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>