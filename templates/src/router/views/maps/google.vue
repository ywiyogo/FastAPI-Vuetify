<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Google-map component
 */
export default {
  page: {
    title: "Google Map",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Google Maps",
      items: [
        {
          text: "Maps",
          href: "/"
        },
        {
          text: "Google Maps",
          active: true
        }
      ],
      markers: [
        {
          position: { lat: 10.0, lng: 10.0 }
        },
        {
          position: { lat: 15.0, lng: 13.0 }
        }
      ],
      pov: null,
      pano: null,
      edited: null,
      paths: [
        [
          { lat: 1.38, lng: 103.8 },
          { lat: 1.38, lng: 103.81 },
          { lat: 1.39, lng: 103.81 },
          { lat: 1.39, lng: 103.8 }
        ],
        [
          { lat: 1.382, lng: 103.802 },
          { lat: 1.382, lng: 103.808 },
          { lat: 1.388, lng: 103.808 },
          { lat: 1.388, lng: 103.802 }
        ]
      ]
    };
  },
  methods: {
    /**
     * street view data update
     */
    updatePov(pov) {
      this.pov = pov;
    },
    /**
     * street view data update
     */
    updatePano(pano) {
      this.pano = pano;
    },
    /**
     * polygon editing
     */
    updateEdited(mvcArray) {
      let paths = [];
      for (let i = 0; i < mvcArray.getLength(); i++) {
        let path = [];
        for (let j = 0; j < mvcArray.getAt(i).getLength(); j++) {
          let point = mvcArray.getAt(i).getAt(j);
          path.push({ lat: point.lat(), lng: point.lng() });
        }
        paths.push(path);
      }
      this.edited = paths;
    }
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
            <h4 class="card-title">Basic</h4>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- basic map -->
            <GmapMap :center="{ lat: 2, lng: 2 }" :zoom="5" style="height: 300px"></GmapMap>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Markers</h4>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Map with markers -->
            <gmap-map :center="{ lat: 11, lng: 12 }" :zoom="3" style="height: 300px">
              <gmap-marker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              ></gmap-marker>
            </gmap-map>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Street View Panoramas</h4>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Street view map -->
            <gmap-street-view-panorama
              style="height: 300px"
              :position="{ lat: 52.201272, lng: 0.118720 }"
              :pov="pov"
              :zoom="1"
              @pano_changed="updatePano"
              @pov_changed="updatePov"
            ></gmap-street-view-panorama>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Polygon Editing</h4>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Polygon editiong map -->
            <gmap-map :center="{ lat: 1.38, lng: 103.8 }" :zoom="12" style="height: 300px">
              <gmap-polygon :paths="paths" :editable="true" @paths_changed="updateEdited($event)"></gmap-polygon>
            </gmap-map>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Map type</h4>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Set map type -->
            <gmap-map
              :center="{ lat: 4, lng: 4 }"
              :zoom="3"
              style="height: 300px"
              map-type-id="terrain"
            ></gmap-map>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
