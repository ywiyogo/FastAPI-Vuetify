<script>
import Layout from "../../layouts/sto-main";

export default {
    components: { Layout }
}
</script>

<template>
    <Layout>

        <div class="section-topbox mb-3">
            <div class="row">
                <div class="col-6">
                    <router-link tag="a" to="/setting/" class="d-block text-primary mb-2"><i class="dripicons-chevron-left"></i><h6>Settings</h6></router-link>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>

        <div class="content-page setting business">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-12 col-md-6 col-xl-6">
                        <div class="">
                            <h2>Manage Business</h2>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="topbox-items topbox-revert topbox-nomt">
                            <div class="items-overview-filter">
                                <router-link tag="a" to="/setting/managebusiness/add" class="btn btn-primary"><i class="mdi mdi-file-document-box-plus-outline"></i> Add New Business</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xl-12">
                    <div class="storage-box">

                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive mb-0">
                                    <table class="table table-centered table-nowrap">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Created</th>
                                                <th style="width: 20%;">Plan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="media">
                                                        <img src="../../../assets/images/icon/icon-shopee.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-2 font-16"><router-link tag="a" to="/setting/managebusiness/add" class="d-block text-primary mb-2">Shopee</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Blabla@gmail.com</td>
                                                <td>15 January 2020</td>
                                                <td>Starter</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="media">
                                                        <img src="../../../assets/images/icon/icon-toped.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-2 font-16"><router-link tag="a" to="/setting/managebusiness/add" class="d-block text-primary mb-2">Tokopedia</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Blabla@gmail.com</td>
                                                <td>15 January 2020</td>
                                                <td>Business</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </Layout>
</template>