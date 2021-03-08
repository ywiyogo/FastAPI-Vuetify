<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form-repeater Component
 */
export default {
  page: {
    title: "Form Repeater",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Repeater",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form Repeater",
          active: true
        }
      ],
      fields: [{ id: 1 }],
      phoneData: [{ id: 1 }]
    };
  },

  methods: {
    /**
     * Push the row in form
     */
    AddformData() {
      this.fields.push({ name: "", email: "", subject: "", message: "" });
    },
    /**
     * Delete the row
     */
    deleteRow(index) {
      if (confirm("Are you sure you want to delete this element?"))
        this.fields.splice(index, 1);
    },
    /**
     * Add the phone number in form
     */
    AddPhoneNo() {
      this.phoneData.push({ phone: "" });
    },
    /**
     * Delete the row from form
     */
    deletePhone(index) {
      this.phoneData.splice(index, 1);
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
            <h4 class="card-title mb-4">Example</h4>
            <form class="repeater" enctype="multipart/form-data">
              <div>
                <div v-for="(field, index) in fields" :key="field.id" class="row">
                  <div class="form-group col-lg-2">
                    <label for="name">Name</label>
                    <input
                      id="name"
                      v-model="field.name"
                      type="text"
                      name="untyped-input"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group col-lg-2">
                    <label for="email">Email</label>
                    <input id="email" v-model="field.email" type="email" class="form-control" />
                  </div>

                  <div class="form-group col-lg-2">
                    <label for="subject">Subject</label>
                    <input id="subject" v-model="field.subject" type="text" class="form-control" />
                  </div>

                  <div class="form-group col-lg-2">
                    <label for="resume">Resume</label>
                    <input id="resume" type="file" class="form-control-file" />
                  </div>

                  <div class="form-group col-lg-2">
                    <label for="message">Message</label>
                    <textarea id="message" v-model="field.message" class="form-control"></textarea>
                  </div>

                  <div class="col-lg-2 align-self-center">
                    <input
                      type="button"
                      class="btn btn-primary btn-block"
                      value="Delete"
                      @click="deleteRow(index)"
                    />
                  </div>
                </div>
              </div>
              <input
                type="button"
                class="btn btn-success mt-3 mt-lg-0"
                value="Add"
                @click="AddformData"
              />
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Nested</h4>
            <form class="outer-repeater">
              <div class="outer">
                <div class="outer">
                  <div class="form-group">
                    <label for="formname">Name :</label>
                    <input
                      id="formname"
                      type="text"
                      class="form-control"
                      placeholder="Enter your Name..."
                    />
                  </div>

                  <div class="form-group">
                    <label for="formemail">Email :</label>
                    <input
                      id="formemail"
                      type="email"
                      class="form-control"
                      placeholder="Enter your Email..."
                    />
                  </div>

                  <div class="inner-repeater mb-4">
                    <div class="inner form-group">
                      <label>Phone no :</label>
                      <div
                        v-for="(data , index) in phoneData"
                        :key="data.id"
                        class="inner mb-3 row"
                      >
                        <div class="col-md-10 col-8">
                          <input
                            v-model="data.phone"
                            type="text"
                            class="inner form-control"
                            placeholder="Enter your phone no..."
                          />
                        </div>
                        <div class="col-md-2 col-4">
                          <input
                            type="button"
                            class="btn btn-primary btn-block inner"
                            value="Delete"
                            @click="deletePhone(index)"
                          />
                        </div>
                      </div>
                    </div>
                    <input
                      type="button"
                      class="btn btn-success inner"
                      value="Add Number"
                      @click="AddPhoneNo"
                    />
                  </div>

                  <div class="form-group">
                    <label class="d-block mb-3">Gender :</label>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        id="customRadioInline1"
                        type="radio"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadioInline1">Male</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        id="customRadioInline2"
                        type="radio"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadioInline2">Female</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="formmessage">Message :</label>
                    <textarea id="formmessage" class="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>