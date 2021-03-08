<script>
import Layout from "../../layouts/sto-main";
import vue2Dropzone from 'vue2-dropzone'

export default {
    components: { Layout, vueDropzone: vue2Dropzone },
    data() {
        return {
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailHeight: 100,
                maxFiles: 1,
                acceptedFiles: "image/*",
                addRemoveLinks: true,
            }
        };
    }
}
</script>

<template>
    <Layout>

        <div class="section-topbox mb-3">
            <div class="row">
                <div class="col-12">
                    <router-link tag="a" to="/product/category" class="d-block text-primary mb-2 router-active-link"><i class="dripicons-chevron-left"></i><h6>Category</h6></router-link>
                </div>
            </div>
        </div>

        <div class="content-page product category">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-12">
                        <h2>Add Category</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-8">
                    <div class="category-form">
                        <div class="card">
                            <div class="card-body">
                                <label for="">Name</label>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="" placeholder="">
                                </div>
                                <label for="">Description (optional)</label>
                                <div class="form-group">
                                   <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="category-avail">
                                        <h5 class="card-title mb-3">Category Availability</h5>
                                        <div class="filter-switch">
                                            <ul>
                                                <li>
                                                    Online Store
                                                    <div class="material-switch float-right">
                                                        <input id="someSwitchOptionDefault1" name="someSwitchOption001" type="checkbox"/>
                                                        <label for="someSwitchOptionDefault1" class="label-default"></label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <b-card no-body class="mb-1 shadow-none">
                                        <b-card-header header-tag="header" role="tab">
                                        <h6 class="m-0">
                                            <a v-b-toggle.accordion-2 class="text-dark" href="javascript: void(0);">POS</a>
                                        </h6>
                                        </b-card-header>
                                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                            <b-card-body>
                                                <div class="filter-switch">
                                                    <ul>
                                                        <li>
                                                            Nama Toko
                                                            <div class="material-switch float-right">
                                                                <input id="someSwitchOptionDefault4" name="someSwitchOption004" type="checkbox"/>
                                                                <label for="someSwitchOptionDefault4" class="label-default"></label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            Nama Toko
                                                            <div class="material-switch float-right">
                                                                <input id="someSwitchOptionDefault5" name="someSwitchOption005" type="checkbox"/>
                                                                <label for="someSwitchOptionDefault5" class="label-default"></label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            Nama Toko
                                                            <div class="material-switch float-right">
                                                                <input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox"/>
                                                                <label for="someSwitchOptionDefault" class="label-default"></label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-card-body>
                                        </b-collapse>
                                    </b-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Image</h4>
                                    <vue-dropzone
                                        id="dropzone"
                                        ref="myVueDropzone"
                                        :use-custom-slot="true"
                                        :options="dropzoneOptions"
                                    >
                                        <div class="dropzone-custom-content">
                                        <div class="mb-1">
                                            <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                                        </div>
                                        <h4>Drop files here or click to upload.</h4>
                                        </div>
                                    </vue-dropzone>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  


            </div>
        </div>

    </Layout>
</template>