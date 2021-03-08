<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Toolbar from "./toolbar";

/**
 * Email-read component
 */
export default {
  page: {
    title: "Read Email",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    PageHeader,
    Toolbar,
    ckeditor: CKEditor.component
  },
  data() {
    return {
      title: "Read Email",
      items: [
        {
          text: "Email",
          href: "/"
        },
        {
          text: "Read Email",
          active: true
        }
      ],
      showModal: false,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>"
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <!-- Left sidebar -->
        <div class="email-leftbar card">
          <b-button variant="danger" @click="showModal = true">Compose</b-button>
          <div class="mail-list mt-4">
            <a href="javascript: void(0);" class="active">
              <i class="mdi mdi-email-outline mr-2"></i> Inbox
              <span class="ml-1 float-right">(18)</span>
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-star-outline mr-2"></i>Starred
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-diamond-stone mr-2"></i>Important
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-file-outline mr-2"></i>Draft
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-email-check-outline mr-2"></i>Sent Mail
            </a>
            <a href="javascript: void(0);">
              <i class="mdi mdi-trash-can-outline mr-2"></i>Trash
            </a>
          </div>

          <h6 class="mt-4">Labels</h6>

          <div class="mail-list mt-1">
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-info float-right"></span>Theme Support
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-warning float-right"></span>Freelance
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-primary float-right"></span>Social
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-danger float-right"></span>Friends
            </a>
            <a href="javascript: void(0);">
              <span class="mdi mdi-arrow-right-drop-circle text-success float-right"></span>Family
            </a>
          </div>

          <h6 class="mt-4">Chat</h6>

          <div class="mt-2">
            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-2.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Scott Median</p>
                <p class="text-muted">Hello</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-3.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Julian Rosa</p>
                <p class="text-muted">What about our next..</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-4.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">David Medina</p>
                <p class="text-muted">Yeah everything is fine</p>
              </div>
            </a>

            <a href="javascript: void(0);" class="media">
              <img
                class="d-flex mr-3 rounded-circle"
                src="@/assets/images/users/avatar-6.jpg"
                alt="Generic placeholder image"
                height="36"
              />
              <div class="media-body chat-user-box">
                <p class="user-title m-0">Jay Baker</p>
                <p class="text-muted">Wow that's great</p>
              </div>
            </a>
          </div>
        </div>
        <!-- End Left sidebar -->

        <!-- Right Sidebar -->
        <div class="email-rightbar mb-3">
          <div class="card">
            <div class="btn-toolbar p-3" role="toolbar">
              <Toolbar />
            </div>

            <div class="card-body">
              <div class="media mb-4">
                <img
                  class="d-flex mr-3 rounded-circle avatar-sm"
                  src="@/assets/images/users/avatar-2.jpg"
                  alt="Generic placeholder image"
                />
                <div class="media-body">
                  <h5 class="font-size-14 mt-1">Humberto D. Champion</h5>
                  <small class="text-muted">support@domain.com</small>
                </div>
              </div>

              <h4 class="mt-0 font-size-16">This Week's Top Stories</h4>

              <p>Dear Lorem Ipsum,</p>
              <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.</p>
              <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
              <p>Sincerly,</p>
              <hr />

              <div class="row">
                <div class="col-xl-2 col-6">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src="@/assets/images/small/img-3.jpg"
                      alt="Card image cap"
                    />
                    <div class="py-2 text-center">
                      <a href class="font-weight-medium">Download</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-2 col-6">
                  <div class="card">
                    <img
                      class="card-img-top img-fluid"
                      src="@/assets/images/small/img-4.jpg"
                      alt="Card image cap"
                    />
                    <div class="py-2 text-center">
                      <a href class="font-weight-medium">Download</a>
                    </div>
                  </div>
                </div>
              </div>

              <a href="javascript: void(0);" class="btn btn-secondary waves-effect mt-4">
                <i class="mdi mdi-reply"></i> Reply
              </a>
            </div>
          </div>
        </div>
        <!-- card -->
      </div>
      <!-- end Col-9 -->
    </div>
    <b-modal v-model="showModal" title="New Message" centered>
      <form>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="To" />
        </div>

        <div class="form-group">
          <input type="text" class="form-control" placeholder="Subject" />
        </div>
        <div class="form-group">
          <ckeditor v-model="editorData" :editor="editor"></ckeditor>
        </div>
      </form>
      <template v-slot:modal-footer>
        <b-button variant="secondary" @click="showModal = false">Close</b-button>
        <b-button variant="primary">
          Send
          <i class="fab fa-telegram-plane ml-1"></i>
        </b-button>
      </template>
    </b-modal>
  </Layout>
</template>
