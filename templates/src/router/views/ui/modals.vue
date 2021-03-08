<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Modals component
 */
export default {
  page: {
    title: "Modals",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Modals",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Modals",
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
            <h4 class="card-title">Modals Examples</h4>
            <p class="card-title-desc">
              Modals are streamlined, but flexible
              dialog prompts powered by JavaScript. They support a number of use cases
              from user notification to completely custom content and feature a
              handful of helpful subcomponents, sizes, and more.
            </p>
            <div class="modal bs-example-modal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title mt-0">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->

            <div class="row">
              <div class="col-sm-6 col-md-4 col-xl-3">
                <div class="my-4 text-center">
                  <p class="text-muted">Standard modal</p>
                  <b-button v-b-modal.modal-standard variant="primary">Standard modal</b-button>
                  <b-modal id="modal-standard" title="Modal Heading" title-class="font-18">
                    <h5>Overflowing text to show scroll behavior</h5>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  </b-modal>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-xl-3">
                <div class="my-4 text-center">
                  <p class="text-muted">Extra large modal</p>
                  <b-button v-b-modal.modal-xl variant="primary">Extra large modal</b-button>
                  <b-modal
                    id="modal-xl"
                    size="xl"
                    title="Extra large modal"
                    title-class="font-18"
                    hide-footer
                  >
                    <p>
                      Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in,
                      egestas eget quam. Morbi leo risus, porta ac
                      consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Vivamus sagittis lacus vel
                      augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur.
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Donec sed odio dui. Donec
                      ullamcorper nulla non metus auctor
                      fringilla.
                    </p>
                  </b-modal>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-xl-3">
                <div class="my-4 text-center">
                  <p class="text-muted">Large modal</p>
                  <b-button v-b-modal.modal-lg variant="primary">Large modal</b-button>
                  <b-modal
                    id="modal-lg"
                    size="lg"
                    title="Large modal"
                    title-class="font-18"
                    hide-footer
                  >
                    <p>
                      Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in,
                      egestas eget quam. Morbi leo risus, porta ac
                      consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Vivamus sagittis lacus vel
                      augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur.
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Donec sed odio dui. Donec
                      ullamcorper nulla non metus auctor
                      fringilla.
                    </p>
                  </b-modal>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-xl-3">
                <div class="my-4 text-center">
                  <p class="text-muted">Small modal</p>
                  <b-button v-b-modal.modal-sm variant="primary">Small modal</b-button>
                  <b-modal
                    id="modal-sm"
                    size="sm"
                    title="Small modal"
                    title-class="font-18"
                    hide-footer
                  >
                    <p>
                      Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in,
                      egestas eget quam. Morbi leo risus, porta ac
                      consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Vivamus sagittis lacus vel
                      augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur.
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Donec sed odio dui. Donec
                      ullamcorper nulla non metus auctor
                      fringilla.
                    </p>
                  </b-modal>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-xl-3">
                <div class="my-4 text-center">
                  <p class="text-muted">Center modal</p>
                  <b-button v-b-modal.modal-center variant="primary">Center modal</b-button>
                  <b-modal
                    id="modal-center"
                    centered
                    title="Center modal"
                    title-class="font-18"
                    hide-footer
                  >
                    <p>
                      Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in,
                      egestas eget quam. Morbi leo risus, porta ac
                      consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Vivamus sagittis lacus vel
                      augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur.
                      Praesent commodo cursus magna, vel scelerisque
                      nisl consectetur et. Donec sed odio dui. Donec
                      ullamcorper nulla non metus auctor
                      fringilla.
                    </p>
                  </b-modal>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-xl-3">
                <div class="my-4 text-center">
                  <p class="text-muted">Scrollable modal</p>
                  <b-button v-b-modal.modal-scrollable variant="primary">Scrollable</b-button>
                  <b-modal
                    id="modal-scrollable"
                    scrollable
                    title="Scrollable Modal"
                    title-class="font-18"
                  >
                    <p v-for="i in 15" :key="i">
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                  </b-modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>