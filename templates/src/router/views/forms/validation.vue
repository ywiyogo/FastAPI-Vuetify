<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue,
  maxValue,
  numeric,
  url,
  alphaNum
} from "vuelidate/lib/validators";

/**
 * Form validation component
 */
export default {
  page: {
    title: "Form Validation",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Validation",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Validation",
          active: true
        }
      ],
      form: {
        fname: "",
        lname: "",
        city: "",
        state: "",
        zipcode: ""
      },
      tooltipform: {
        fname: "",
        lname: "",
        username: "",
        city: "",
        state: ""
      },
      range: {
        minlen: "",
        maxlength: "",
        between: "",
        minval: "",
        maxval: "",
        rangeval: "",
        expr: ""
      },
      typeform: {
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        url: "",
        digit: "",
        number: "",
        alphanum: "",
        textarea: ""
      },
      submitted: false,
      submitform: false,
      submit: false,
      typesubmit: false
    };
  },
  validations: {
    form: {
      fname: { required },
      lname: { required },
      city: { required },
      state: { required },
      zipcode: { required }
    },
    tooltipform: {
      fname: { required },
      lname: { required },
      username: { required },
      city: { required },
      state: { required }
    },
    range: {
      minlen: { required, minLength: minLength(6) },
      maxlength: { required, maxLength: maxLength(6) },
      between: { required, minLength: minLength(5), maxLength: maxLength(10) },
      minval: { required, minValue: minValue(6) },
      maxval: { required, maxValue: maxValue(6) },
      rangeval: { required, minValue: minValue(6), maxValue: maxValue(100) },
      expr: { required }
    },
    typeform: {
      name: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
      email: { required, email },
      url: { required, url },
      digit: { required, numeric },
      number: { required, numeric },
      alphanum: { required, alphaNum },
      textarea: { required }
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
    },

    tooltipForm() {
      this.submitform = true;
      this.$v.$touch();
    },

    /**
     * Range validation form submit
     */
    // eslint-disable-next-line no-unused-vars
    rangeform(e) {
      this.submit = true;
      // stop here if form is invalid
      this.$v.$touch();
    },
    /**
     * Validation type submit
     */
    // eslint-disable-next-line no-unused-vars
    typeForm(e) {
      this.typesubmit = true;
      // stop here if form is invalid
      this.$v.$touch();
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
            <h4 class="card-title">Bootstrap Validation - Normal</h4>
            <p
              class="card-title-desc"
            >Provide valuable, actionable feedback to your users with HTML5 form validation–available in all our supported browsers.</p>
            <form class="needs-validation" @submit.prevent="formSubmit">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="validationCustom01">First name</label>
                    <input
                      id="validationCustom01"
                      v-model="form.fname"
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      value="Mark"
                      :class="{ 'is-invalid': submitted && $v.form.fname.$error }"
                    />
                    <div v-if="submitted && $v.form.fname.$error" class="invalid-feedback">
                      <span v-if="!$v.form.fname.required">This value is required.</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="validationCustom02">Last name</label>
                    <input
                      id="validationCustom02"
                      v-model="form.lname"
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      value="Otto"
                      :class="{ 'is-invalid': submitted && $v.form.lname.$error }"
                    />
                    <div v-if="submitted && $v.form.lname.$error" class="invalid-feedback">
                      <span v-if="!$v.form.lname.required">This value is required.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="validationCustom03">City</label>
                    <input
                      id="validationCustom03"
                      v-model="form.city"
                      type="text"
                      class="form-control"
                      placeholder="City"
                      :class="{ 'is-invalid': submitted && $v.form.city.$error }"
                    />
                    <div v-if="submitted && $v.form.city.$error" class="invalid-feedback">
                      <span v-if="!$v.form.city.required">This value is required.</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="validationCustom04">State</label>
                    <input
                      id="validationCustom04"
                      v-model="form.state"
                      type="text"
                      class="form-control"
                      placeholder="State"
                      :class="{ 'is-invalid': submitted && $v.form.state.$error }"
                    />
                    <div v-if="submitted && $v.form.state.$error" class="invalid-feedback">
                      <span v-if="!$v.form.state.required">This value is required.</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="validationCustom05">Zip</label>
                    <input
                      id="validationCustom05"
                      v-model="form.zipcode"
                      type="text"
                      class="form-control"
                      placeholder="Zip"
                      :class="{ 'is-invalid': submitted && $v.form.zipcode.$error }"
                    />
                    <div v-if="submitted && $v.form.zipcode.$error" class="invalid-feedback">
                      <span v-if="!$v.form.zipcode.required">This value is required.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input id="invalidCheck" type="checkbox" class="custom-control-input" />
                      <label
                        class="custom-control-label"
                        for="invalidCheck"
                      >Agree to terms and conditions</label>
                      <div class="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bootstrap Validation (Tooltips)</h4>
            <p class="card-title-desc">
              If your form layout allows it, you can swap the
              <code>.{valid|invalid}-feedback</code> classes for
              <code>.{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip.
            </p>
            <form class="needs-validation" @submit.prevent="tooltipForm">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group position-relative">
                    <label for="validationTooltip01">First name</label>
                    <input
                      id="validationTooltip01"
                      v-model="tooltipform.fname"
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      value="Mark"
                      :class="{ 'is-invalid': submitform && $v.tooltipform.fname.$error }"
                    />
                    <div v-if="submitform && $v.tooltipform.fname.$error" class="invalid-tooltip">
                      <span v-if="!$v.tooltipform.fname.required">Please provide valid First name.</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group position-relative">
                    <label for="validationTooltip02">Last name</label>
                    <input
                      id="validationTooltip02"
                      v-model="tooltipform.lname"
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      value="Otto"
                      :class="{ 'is-invalid': submitform && $v.tooltipform.lname.$error }"
                    />
                    <div v-if="submitform && $v.tooltipform.lname.$error" class="invalid-tooltip">
                      <span v-if="!$v.tooltipform.lname.required">Please provide valid Last name.</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group position-relative">
                    <label for="validationTooltipUsername">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span id="validationTooltipUsernamePrepend" class="input-group-text">@</span>
                      </div>
                      <input
                        id="validationTooltipUsername"
                        v-model="tooltipform.username"
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-describedby="validationTooltipUsernamePrepend"
                        :class="{ 'is-invalid': submitform && $v.tooltipform.username.$error }"
                      />
                      <div
                        v-if="submitform && $v.tooltipform.username.$error"
                        class="invalid-tooltip"
                      >
                        <span
                          v-if="!$v.tooltipform.username.required"
                        >Please choose a unique and valid username.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label for="validationTooltip03">City</label>
                    <input
                      id="validationTooltip03"
                      v-model="tooltipform.city"
                      type="text"
                      class="form-control"
                      placeholder="City"
                      :class="{ 'is-invalid': submitform && $v.tooltipform.city.$error }"
                    />
                    <div v-if="submitform && $v.tooltipform.city.$error" class="invalid-tooltip">
                      <span v-if="!$v.tooltipform.city.required">Please provide a valid city.</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group position-relative">
                    <label for="validationTooltip04">State</label>
                    <input
                      id="validationTooltip04"
                      v-model="tooltipform.state"
                      type="text"
                      class="form-control"
                      placeholder="State"
                      :class="{ 'is-invalid': submitform && $v.tooltipform.state.$error }"
                    />
                    <div v-if="submitform && $v.tooltipform.state.$error" class="invalid-tooltip">
                      <span v-if="!$v.tooltipform.state.required">Please provide a valid state.</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
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
            <h4 class="card-title">Validation type</h4>
            <p class="card-title-desc">
              Parsley is a javascript form validation
              library. It helps you provide your users with feedback on their form
              submission before sending it to your server.
            </p>

            <form action="#" @submit.prevent="typeForm">
              <div class="form-group">
                <label>Required</label>
                <input
                  v-model="typeform.name"
                  type="text"
                  class="form-control"
                  placeholder="Type something"
                  name="name"
                  :class="{ 'is-invalid': typesubmit && $v.typeform.name.$error }"
                />
                <div v-if="typesubmit && $v.typeform.name.$error" class="invalid-feedback">
                  <span v-if="!$v.typeform.name.required">This value is required.</span>
                </div>
              </div>

              <div class="form-group">
                <label>Equal To</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="password"
                    name="password"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.password.$error }"
                    placeholder="Password"
                  />
                  <div v-if="typesubmit && $v.typeform.password.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.password.required">This value is required.</span>
                    <span
                      v-if="!$v.typeform.password.minLength"
                    >Password must be at least 6 characters.</span>
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    v-model="typeform.confirmPassword"
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.confirmPassword.$error }"
                    placeholder="Re-Type Password"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.confirmPassword.required">This value is required.</span>
                    <span
                      v-else-if="!$v.typeform.confirmPassword.sameAsPassword"
                    >This value should be the same.</span>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>E-Mail</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="email"
                    name="email"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.email.$error }"
                    placeholder="Enter a valid e-mail"
                  />
                  <div v-if="typesubmit && $v.typeform.email.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.email.required">This value is required.</span>
                    <span v-if="!$v.typeform.email.email">This value should be a valid email.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>URL</label>
                <div>
                  <input
                    v-model="typeform.url"
                    type="url"
                    name="url"
                    class="form-control"
                    placeholder="URL"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.url.$error }"
                  />
                  <div v-if="typesubmit && $v.typeform.url.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.url.required">This value is required.</span>
                    <span v-if="!$v.typeform.url.url">This value should be a valid url.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Digits</label>
                <div>
                  <input
                    v-model="typeform.digit"
                    type="text"
                    name="digit"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.digit.$error }"
                    placeholder="Enter only digits"
                  />
                  <div v-if="typesubmit && $v.typeform.digit.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.digit.required">This value is required.</span>
                    <span v-if="!$v.typeform.digit.numeric">This value should be digits.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Number</label>
                <div>
                  <input
                    v-model="typeform.number"
                    type="text"
                    name="number"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.number.$error }"
                    placeholder="Enter only numbers"
                  />
                  <div v-if="typesubmit && $v.typeform.number.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.number.required">This value is required.</span>
                    <span v-if="!$v.typeform.number.numeric">This value should be a valid number.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Alphanumeric</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.alphanum.$error }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div v-if="typesubmit && $v.typeform.alphanum.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.alphanum.required">This value is required.</span>
                    <span v-if="!$v.typeform.alphanum.alphaNum">This value should be alphanumeric.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Textarea</label>
                <div>
                  <textarea
                    v-model="typeform.textarea"
                    class="form-control"
                    name="textarea"
                    :class="{ 'is-invalid': typesubmit && $v.typeform.textarea.$error }"
                    rows="5"
                  ></textarea>
                  <div v-if="typesubmit && $v.typeform.textarea.$error" class="invalid-feedback">
                    <span v-if="!$v.typeform.textarea.required">This value is required.</span>
                  </div>
                </div>
              </div>
              <div class="form-group mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary m-l-5 ml-1">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range validation</h4>
            <p class="card-title-desc">
              Parsley is a javascript form validation
              library. It helps you provide your users with feedback on their form
              submission before sending it to your server.
            </p>

            <form action="#" @submit.prevent="rangeform">
              <div class="form-group">
                <label>Min Length</label>
                <div>
                  <input
                    v-model="range.minlen"
                    type="text"
                    name="minlen"
                    class="form-control"
                    :class="{ 'is-invalid': submit && $v.range.minlen.$error }"
                    placeholder="Min 6 chars."
                  />
                  <div v-if="submit && $v.range.minlen.$error" class="invalid-feedback">
                    <span v-if="!$v.range.minlen.required">This value is required.</span>
                    <span
                      v-if="!$v.range.minlen.minLength"
                    >This value is too short. It should have 6 characters or more.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Max Length</label>
                <div>
                  <input
                    v-model="range.maxlength"
                    type="text"
                    class="form-control"
                    name="maxlength"
                    :class="{ 'is-invalid': submit && $v.range.maxlength.$error }"
                    placeholder="Max 6 chars."
                  />
                  <div v-if="submit && $v.range.maxlength.$error" class="invalid-feedback">
                    <span v-if="!$v.range.maxlength.required">This value is required.</span>
                    <span
                      v-if="!$v.range.maxlength.maxLength"
                    >This value is too long. It should have 6 characters or fewer.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Range Length</label>
                <div>
                  <input
                    v-model="range.between"
                    type="text"
                    class="form-control"
                    name="between"
                    :class="{ 'is-invalid': submit && $v.range.between.$error }"
                    placeholder="Text between 5 - 10 chars length"
                  />
                  <div v-if="submit && $v.range.between.$error" class="invalid-feedback">
                    <span v-if="!$v.range.between.required">This value is required.</span>
                    <span
                      v-if="!$v.range.between.maxLength"
                    >This value length is invalid. It should be between 5 and 10 characters long.</span>
                    <span
                      v-if="!$v.range.between.minLength"
                    >This value length is invalid. It should be between 5 and 10 characters long.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Min Value</label>
                <div>
                  <input
                    v-model="range.minval"
                    type="text"
                    name="minval"
                    class="form-control"
                    :class="{ 'is-invalid': submit && $v.range.minval.$error }"
                    placeholder="Min value is 6"
                  />
                  <div v-if="submit && $v.range.minval.$error" class="invalid-feedback">
                    <span v-if="!$v.range.minval.required">This value is required.</span>
                    <span
                      v-if="!$v.range.minval.minValue"
                    >This value should be greater than or equal to 6.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Max Value</label>
                <div>
                  <input
                    v-model="range.maxval"
                    type="text"
                    class="form-control"
                    name="maxval"
                    :class="{ 'is-invalid': submit && $v.range.maxval.$error }"
                    placeholder="Max value is 6"
                  />
                  <div v-if="submit && $v.range.maxval.$error" class="invalid-feedback">
                    <span v-if="!$v.range.maxval.required">This value is required.</span>
                    <span
                      v-if="!$v.range.maxval.maxValue"
                    >This value should be lower than or equal to 6.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Range Value</label>
                <div>
                  <input
                    v-model="range.rangeval"
                    type="text"
                    class="form-control"
                    name="rangeval"
                    :class="{ 'is-invalid': submit && $v.range.rangeval.$error }"
                    placeholder="Number between 6 - 100"
                  />
                  <div v-if="submit && $v.range.rangeval.$error" class="invalid-feedback">
                    <span v-if="!$v.range.rangeval.required">This value is required.</span>
                    <span v-if="!$v.range.rangeval.minValue">This value should be between 6 and 100.</span>
                    <span v-if="!$v.range.rangeval.maxValue">This value should be between 6 and 100.</span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Regular Exp</label>
                <div>
                  <input
                    v-model="range.expr"
                    type="text"
                    class="form-control"
                    name="expr"
                    :class="{ 'is-invalid': submit && $v.range.expr.$error }"
                    placeholder="Hex. Color"
                  />
                  <div v-if="submit && $v.range.expr.$error" class="invalid-feedback">
                    <span v-if="!$v.range.expr.required">This value is required.</span>
                  </div>
                </div>
              </div>

              <div class="form-group mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary m-l-5 ml-1">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>