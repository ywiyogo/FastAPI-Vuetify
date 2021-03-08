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
                <div class="col-6">
                    <router-link tag="a" to="/setting/" class="d-block text-primary mb-2 router-link-active"><i class="dripicons-chevron-left"></i><h6>Setting</h6></router-link>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>

        <div class="content-page setting email">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-8 col-md-6 col-xl-6">
                        <div class="">
                            <h2>Email</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-8 col-12">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-md-12 col-xl-6">
                    <div class="emailadd-box">
                        <form action="#">
                            <div class="account-details">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title mb-3">Email Sender Options</h4>
                                        <div class="form-group marginbot-20">
                                            <label for="">"From" name</label>
                                            <input type="text" class="form-control" id="" placeholder="Store name">
                                        </div>
                                        <div class="form-group marginbot-20">
                                            <label for="">"From" address</label>
                                            <input type="text" class="form-control" id="" placeholder="Store address">
                                        </div>
                                        <h4 class="card-title mb-3 mt-5">Email Language</h4>
                                        <div class="form-group marginbot-20">
                                            <input type="text" class="form-control" id="" placeholder="">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="col-12 col-md-12 col-xl-4">
                    <div class="maddaccount-box">

                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title mb-3">Header Logo</h4>
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

                        <div class="buttonbox">
                            <button type="button" class="btn btn-primary">Preview Email Template</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>