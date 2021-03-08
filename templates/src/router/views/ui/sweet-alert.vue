<script>
import Vue from "vue";
import Swal from "sweetalert2";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Sweet-alert component
 */
export default {
  page: {
    title: "Sweet Alert",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "SweetAlert 2",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "SweetAlert 2",
          active: true
        }
      ]
    };
  },
  methods: {
    showAlert() {
      Vue.swal("Any fool can use a computer!");
    },
    titleText() {
      Swal.fire("The Internet?", "That thing is still around?", "question");
    },
    successmsg() {
      Swal.fire("Good job!", "You clicked the button!", "success");
    },
    position() {
      Vue.swal({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    },
    confirm() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    cancel() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger ml-2"
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          showCancelButton: true
        })
        .then(result => {
          if (result.value) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },
    imageHeader() {
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: require("@/assets/images/logo-dark.png"),
        imageHeight: 20,
        confirmButtonColor: "#556ee6"
      });
    },
    timer() {
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            Swal.getContent().querySelector(
              "b"
            ).textContent = Swal.getTimerLeft();
          }, 100);
        },
        onClose: () => {
          clearInterval(timerInterval);
        }
      }).then(result => {
        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.timer
        ) {
          //console.log("I was closed by the timer"); // eslint-disable-line
        }
      });
    },
    custom() {
      Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down"
      });
    },
    customBackground() {
      Swal.fire({
        title: "Custom width, padding, background.",
        width: 600,
        padding: 100,
        confirmButtonColor: "#556ee6",
        background:
          "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"
      });
    },
    ajax() {
      Swal.fire({
        title: "Submit email to run ajax request",
        input: "email",
        showCancelButton: true,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#f46a6a",
        preConfirm: email => {
          // eslint-disable-next-line no-unused-vars
          return new Promise(function(resolve, reject) {
            setTimeout(function() {
              if (email === "taken@example.com") {
                Promise.reject(new Error("This email is already taken."));
              } else {
                resolve();
              }
            }, 2000);
          });
        },
        allowOutsideClick: false
      }).then(email => {
        Swal.fire({
          title: "Ajax request finished!",
          html: "Submitted email: " + email
        });
      });
    },
    chain() {
      Swal.mixin({
        input: "text",
        confirmButtonText: "Next &rarr;",
        showCancelButton: true,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#74788d",
        progressSteps: ["1", "2", "3"]
      })
        .queue([
          {
            title: "Question 1",
            text: "Chaining swal2 modals is easy"
          },
          "Question 2",
          "Question 3"
        ])
        .then(result => {
          if (result.value) {
            Swal.fire({
              title: "All done!",
              html:
                "Your answers: <pre><code>" +
                JSON.stringify(result.value) +
                "</code></pre>",
              confirmButtonText: "Lovely!"
            });
          }
        });
    },
    dynamicQueue() {
      var ipAPI = "https://api.ipify.org?format=json";
      Swal.queue([
        {
          title: "Your public IP",
          confirmButtonText: "Show my public IP",
          text: "Your public IP will be received " + "via AJAX request",
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return fetch(ipAPI)
              .then(response => response.json())
              .then(data => Swal.insertQueueStep(data.ip))
              .catch(() => {
                Swal.insertQueueStep({
                  type: "error",
                  title: "Unable to get your public IP"
                });
              });
          }
        }
      ]);
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
            <h4 class="card-title">Examples</h4>
            <p class="card-title-desc">
              A beautiful, responsive, customizable
              and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero
              dependencies.
            </p>

            <div class="row text-center">
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>A basic message</p>
                  <button type="button" class="btn btn-primary" @click="showAlert">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>A title with a text under</p>
                  <button type="button" class="btn btn-primary" @click="titleText">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>A success message!</p>
                  <button type="button" class="btn btn-primary" @click="successmsg">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>A warning message, with a function attached to the "Confirm"-button...</p>
                  <button type="button" class="btn btn-primary" @click="confirm">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>By passing a parameter, you can execute something else for "Cancel".</p>
                  <button type="button" class="btn btn-primary" @click="cancel">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>A message with custom Image Header</p>
                  <button type="button" class="btn btn-primary" @click="imageHeader">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>A message with auto close timer</p>
                  <button type="button" class="btn btn-primary" @click="timer">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>Custom HTML description and buttons</p>
                  <button type="button" class="btn btn-primary" @click="custom">Click me</button>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>A custom positioned dialog</p>
                  <button type="button" class="btn btn-primary" @click="position">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>A message with custom width, padding and background</p>
                  <button type="button" class="btn btn-primary" @click="customBackground">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <p>Ajax request example</p>
                <button type="button" class="btn btn-primary" @click="ajax">Click me</button>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>Chaining modals (queue) example</p>
                  <button type="button" class="btn btn-primary" @click="chain">Click me</button>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6 mb-2">
                <div class="p-3">
                  <p>Dynamic queue example</p>
                  <button type="button" class="btn btn-primary" @click="dynamicQueue">Click me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>