<script>
import DatePicker from 'vue2-datepicker'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'
import appConfig from "@/app.config";

/**
 * Task-create component
 */
export default {
  page: {
    title: "Create Task",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { DatePicker, ckeditor: CKEditor.component, Layout, PageHeader },
  data() {
    return {
      title: 'Create Task',
      items: [
        {
          text: 'Tasks',
          href: '/',
        },
        {
          text: 'Create Task',
          active: true,
        },
      ],
      daterange: '',
      editor: ClassicEditor,
      teamMember: [{ id: 1 }],
    }
  },
  methods: {
    addMember() {
      this.teamMember.push({ name: '' })
    },
    deleteMember(index) {
      this.teamMember.splice(index, 1)
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Create New Task</h4>
            <form class="outer-repeater">
              <div data-repeater-list="outer-group" class="outer">
                <div data-repeater-item class="outer">
                  <div class="form-group row mb-4">
                    <label for="taskname" class="col-form-label col-lg-2">Task Name</label>
                    <div class="col-lg-10">
                      <input
                        id="taskname"
                        name="taskname"
                        type="text"
                        class="form-control"
                        placeholder="Enter Task Name..."
                      />
                    </div>
                  </div>
                  <div class="form-group row mb-4">
                    <label class="col-form-label col-lg-2">Task Description</label>
                    <div class="col-lg-10">
                      <ckeditor :editor="editor"></ckeditor>
                    </div>
                  </div>

                  <div class="form-group row mb-4">
                    <label class="col-form-label col-lg-2">Task Date</label>
                    <div class="col-lg-10">
                      <date-picker v-model="daterange" range append-to-body lang="en" confirm></date-picker>
                    </div>
                  </div>

                  <div class="inner-repeater mb-4">
                    <div class="inner form-group mb-0 row">
                      <label class="col-form-label col-lg-2">Add Team Member</label>
                      <div
                        v-for="( member, index) in teamMember"
                        :key="member.id"
                        class="inner col-lg-10 ml-md-auto"
                      >
                        <div class="mb-3 row align-items-center">
                          <div class="col-md-6">
                            <input
                              v-model="member.name"
                              type="text"
                              class="inner form-control"
                              placeholder="Enter Name..."
                            />
                          </div>
                          <div class="col-md-4">
                            <div class="mt-4 mt-md-0">
                              <input type="file" class="form-control-file" />
                            </div>
                          </div>
                          <div class="col-md-2">
                            <input
                              type="button"
                              class="btn btn-primary btn-block inner"
                              value="Delete"
                              @click="deleteMember(index)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-end">
                      <div class="col-lg-10">
                        <input
                          type="button"
                          class="btn btn-success inner"
                          value="Add Number"
                          @click="addMember"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mb-4">
                    <label for="taskbudget" class="col-form-label col-lg-2">Budget</label>
                    <div class="col-lg-10">
                      <input
                        id="taskbudget"
                        name="taskbudget"
                        type="text"
                        placeholder="Enter Task Budget..."
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div class="row justify-content-end">
              <div class="col-lg-10">
                <button type="submit" class="btn btn-primary">Create Task</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
