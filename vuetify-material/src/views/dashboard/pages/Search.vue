<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row>
      <v-spacer></v-spacer>
      <v-col class="align-self-end" cols="12" md="4">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- <v-card>
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card> -->

    <v-card>
      <v-tabs v-model="tab" background-color="primary" dark center-active grow>
        <v-tab :key="1">
          Block
        </v-tab>
        <v-tab :key="2">
          List
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :key="1">
          <v-row justify="center">
            <v-card
              v-for="profile in APIData"
              :key="profile.id"
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                {{ profile.name }}
              </v-card-title>

              <v-card-subtitle style="margin-top: 0">
                Language: {{ profile.language }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>

                <v-btn color="purple" text>
                  Explore
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{ profile.details }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-row>
        </v-tab-item>
        <v-tab-item :key="2">
          <v-data-table
            :headers="headers"
            :items="APIData"
            :search="search"
          ></v-data-table>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";

export default {
  name: "Search",
  computed: mapState(["APIData"]),
  data() {
    return {
      search: "",
      headers: [
        { text: "Image", value: "image" },
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Gender", value: "gender" },
        { text: "height", value: "height" },
        { text: "language", value: "language" },
        { text: "values", value: "values" },
        { text: "smoker", value: "smoker" }
      ],
      show: false,
      tab: null
    };
  },
  created() {

    var token = localStorage.getItem("access_token")//.localStorage.getItem("login_data").access_token
    axios.get("http://localhost:8000/profiles", {}, {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + token
          }})
      .then(response => {
        console.log("Getting API data successful!");
        this.$store.state.APIData = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>
