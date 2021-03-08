<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Grid component
 */
export default {
  page: {
    title: "Grid",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Grid",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Grid",
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
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Grid options</h4>
            <p class="card-title-desc">
              See how aspects of the Bootstrap grid
              system work across multiple devices with a handy table.
            </p>

            <div class="table-responsive mb-0">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center">
                      Extra small
                      <br />
                      <small>&lt;576px</small>
                    </th>
                    <th class="text-center">
                      Small
                      <br />
                      <small>≥576px</small>
                    </th>
                    <th class="text-center">
                      Medium
                      <br />
                      <small>≥768px</small>
                    </th>
                    <th class="text-center">
                      Large
                      <br />
                      <small>≥992px</small>
                    </th>
                    <th class="text-center">
                      Extra large
                      <br />
                      <small>≥1200px</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="text-nowrap" scope="row">Grid behavior</th>
                    <td>Horizontal at all times</td>
                    <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
                  </tr>
                  <tr>
                    <th class="text-nowrap" scope="row">Max container width</th>
                    <td>None (auto)</td>
                    <td>540px</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                  </tr>
                  <tr>
                    <th class="text-nowrap" scope="row">Class prefix</th>
                    <td>
                      <code>.col-</code>
                    </td>
                    <td>
                      <code>.col-sm-</code>
                    </td>
                    <td>
                      <code>.col-md-</code>
                    </td>
                    <td>
                      <code>.col-lg-</code>
                    </td>
                    <td>
                      <code>.col-xl-</code>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-nowrap" scope="row"># of columns</th>
                    <td colspan="5">12</td>
                  </tr>
                  <tr>
                    <th class="text-nowrap" scope="row">Gutter width</th>
                    <td colspan="5">20px (10px on each side of a column)</td>
                  </tr>
                  <tr>
                    <th class="text-nowrap" scope="row">Nestable</th>
                    <td colspan="5">Yes</td>
                  </tr>
                  <tr>
                    <th class="text-nowrap" scope="row">Offsets</th>
                    <td colspan="5">Yes</td>
                  </tr>
                  <tr>
                    <th class="text-nowrap" scope="row">Column ordering</th>
                    <td colspan="5">Yes</td>
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
  </Layout>
</template>