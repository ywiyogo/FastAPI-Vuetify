<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form-element component
 */
export default {
  page: {
    title: "Form Elements",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Elements",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form Elements",
          active: true
        }
      ],
      status: "not_accepted",
      checkCustom: "not_accepted",
      checked: true
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
            <h4 class="card-title">Textual inputs</h4>
            <p class="card-title-desc">
              Here are examples of
              <code>.form-control</code> applied to each
              textual HTML5
              <code>&lt;input&gt;</code>
              <code>type</code>.
            </p>

            <div class="row">
              <div class="col-12">
                <form class="form-horizontal" role="form">
                  <b-form-group
                    id="example text"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Text"
                    label-for="text"
                  >
                    <b-form-input for="text" value="Artisanal kale"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-search"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Search"
                    label-for="search"
                  >
                    <b-form-input
                      id="search"
                      value="How do I shoot web"
                      type="search"
                      name="search"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-email"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Email"
                    label-for="email"
                  >
                    <b-form-input id="email" value="bootstrap@example.com"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-url"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="URL"
                    label-for="url"
                  >
                    <b-form-input id="url" value="https://getbootstrap.com" type="url" name="url"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-tel"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Telephone"
                    label-for="tele"
                  >
                    <b-form-input id="tele" value="1-(555)-555-5555" type="tel" name="tel"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-password"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Password"
                    label-for="pwd"
                  >
                    <b-form-input id="pwd" type="password" value="password"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-number"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Number"
                    label-for="number"
                  >
                    <b-form-input id="number" value="42" type="number" name="number"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-date-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date and time"
                    label-for="date-time"
                  >
                    <b-form-input id="date-time" value="2019-08-19T13:45:00" type="datetime-local"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-date"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date"
                    label-for="date"
                  >
                    <b-form-input id="date" value="2019-08-19" type="date"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-month"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Month"
                    label-for="month"
                  >
                    <b-form-input id="month" value="2019-08" type="month"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-week"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Week"
                    label-for="week"
                  >
                    <b-form-input id="week" value="2019-W33" type="week"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Time"
                    label-for="time"
                  >
                    <b-form-input id="time" value="13:45:00" type="time"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="example-color"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Color"
                    label-for="color"
                  >
                    <b-form-input id="color" type="color" name="color" value="#556ee6"></b-form-input>
                  </b-form-group>

                  <div class="form-group row">
                    <label class="col-md-2 col-form-label">Select</label>
                    <div class="col-md-10">
                      <select class="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <label class="col-md-2 col-form-label">Custom Select</label>
                    <div class="col-md-10">
                      <select class="custom-select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc">
              Set heights using size like
              <code>lg</code> and
              <code>sm</code>.
            </p>
            <div>
              <div class="mb-4">
                <b-form-input id="input-md" placeholder="Default input"></b-form-input>
              </div>
              <div class="mb-4">
                <b-form-input id="input-small" size="sm" placeholder=".form-control-sm"></b-form-input>
              </div>
              <div class="mb-4">
                <b-form-input id="input-lg" size="lg" placeholder=".form-control-lg"></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range Inputs</h4>
            <p class="card-title-desc">
              Set horizontally scrollable range inputs using
              <code>.form-control-range</code>.
            </p>

            <div>
              <h5 class="font-size-14">Example</h5>
              <input id="formControlRange" type="range" class="form-control-range" />
            </div>
            <div class="mt-4">
              <h5 class="font-size-14">Custom Range</h5>
              <b-form-input id="custom-range" type="range"></b-form-input>

              <b-form-input id="customRange2" class="mt-4" type="range" min="0" max="5"></b-form-input>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Checkboxes</h4>

            <div class="row">
              <div class="col-md-6">
                <div>
                  <h5 class="font-size-14 mb-4">Default Checkboxes</h5>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">Default checkbox</label>
                  </div>
                  <div class="form-check form-check-right">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value
                      id="defaultCheck2"
                      checked
                    />
                    <label class="form-check-label" for="defaultCheck2">Default checkbox</label>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mt-4 mt-lg-0">
                  <h5 class="font-size-14 mb-4">Custom Checkboxes</h5>
                  <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked />
                    <label class="custom-control-label" for="customCheck1">Custom checkbox</label>
                  </div>
                  <div class="custom-control custom-checkbox custom-control-right">
                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                    <label class="custom-control-label" for="customCheck2">Custom checkbox</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Radios</h4>

            <div class="row">
              <div class="col-md-6">
                <div>
                  <h5 class="font-size-14 mb-4">Default Radios</h5>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">Default radio</label>
                  </div>
                  <div class="form-check form-check-right">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">Default radio</label>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mt-4 mt-lg-0">
                  <h5 class="font-size-14 mb-4">Custom Radios</h5>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-right">
                    <input
                      type="radio"
                      id="customRadio2"
                      name="customRadio"
                      class="custom-control-input"
                      checked
                    />
                    <label
                      class="custom-control-label"
                      for="customRadio2"
                    >Or toggle this other custom radio</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Switches</h4>
            <p class="card-title-desc">
              A switch has the markup of a custom checkbox but uses the
              <code>.custom-switch</code> class to render a toggle switch. Switches also support the
              <code>disabled</code> attribute.
            </p>
            <b-form-checkbox v-model="checked" switch class="mb-1">
              <label>Toggle this switch element</label>
            </b-form-checkbox>
            <b-form-checkbox switch disabled>
              <label>Disabled switch element</label>
            </b-form-checkbox>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">File browser</h4>
            <p class="card-title-desc">
              The file input is the most gnarly of the bunch and requires additional JavaScript if you’d like to hook them up with functional
              <em>Choose file…</em> and selected file name text.
            </p>
            <div class="custom-file">
              <input id="customFile" type="file" class="custom-file-input" />
              <label class="custom-file-label" for="customFile">Choose file</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>