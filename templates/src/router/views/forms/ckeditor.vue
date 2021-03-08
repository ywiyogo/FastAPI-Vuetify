<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * CK Editor component
 */
export default {
  page: {
    title: "Form Editor",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, ckeditor: CKEditor.component },
  data() {
    return {
      title: "CK Editor",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "CK Editor",
          active: true
        }
      ],
      editor: ClassicEditor,
      editorData:
        "<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>"
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
            <h4 class="card-title">Default Editor</h4>
            <p class="card-title-desc">Super simple wysiwyg editor on Bootstrap</p>
            <!-- Editor -->
            <ckeditor v-model="editorData" :editor="editor"></ckeditor>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>