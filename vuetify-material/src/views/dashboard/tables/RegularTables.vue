<template>
  <v-container id="regular-tables" fluid tag="section">
    <base-v-component heading="Search for Values" link="components/simple-tables" />

    <base-material-card
      icon="mdi-clipboard-text"
      title="Profiles"
      class="px-5 py-3"
    >
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="APIData"
        :search="search"
      ></v-data-table>
    </base-material-card>

    <div class="py-3" />
  </v-container>
</template>

<script>
import { getAPI } from "../../../axios";
export default {
  name: "RegularTables",
  data() {
    return {
      search: "",
      headers: [
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
      APIData: []
    };
  },
  created() {
    getAPI
      .get("/profiles")
      .then(response => {
        console.log("Getting API data successful!");
        this.APIData = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>
