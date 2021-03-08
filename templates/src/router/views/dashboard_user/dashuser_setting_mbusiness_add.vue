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
                    <router-link tag="a" to="/setting/managebusiness" class="d-block text-primary mb-2"><i class="dripicons-chevron-left"></i><h6>Manage Business</h6></router-link>
                </div>
            </div>
        </div>

        <div class="content-page setting business">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-12">
                        <h2>Add Business</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-12 col-xl-6">
                    <div class="storage-box">
                        <div class="card">
                            <div class="card-body">
                                <form action="#">
                                    <div class="form-row mb-4">
                                        <div class="col">
                                            <label>Name</label>
                                            <input type="text" class="form-control" id="" placeholder="">
                                        </div>
                                        <div class="col">
                                            <label>Email</label>
                                            <input type="text" class="form-control" id="" placeholder="">
                                        </div>
                                    </div>
                                    <label for="">Main Address</label>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="" placeholder="Address">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="" placeholder="Apartment, house number (optional)">
                                    </div>
                                    <div class="form-row mb-3">
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="Province">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="City">
                                        </div>
                                    </div>
                                    <div class="form-row mb-3">
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="Kecamatan">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="Postcode">
                                        </div>
                                    </div>

                                    <div class="form-row mt-4">
                                        <div class="col">
                                            <label for="">Logo</label>
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
                                        <div class="col">
                                            <label for="" class="d-block">Plan</label>
                                            <p class="btn btn-primary">Starter</p>
                                            <router-link tag="a" to="/setting/pricingplan" class="d-block text-primary mb-2 mt-4"><p>Upgrade Plan</p></router-link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

    </Layout>
</template>