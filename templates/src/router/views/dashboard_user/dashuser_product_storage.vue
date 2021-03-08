<script>
import Layout from "../../layouts/sto-main";

export default {
    components: { Layout}
}

</script>

<template>
    <Layout>

        <div class="section-topbox mb-3">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h1>Storage</h1>
                </div>
                <div class="col-12 col-md-6">
                    <div class="topbox-items topbox-revert">
                        <div class="items-overview-filter mr-3">
                            <router-link tag="a" to="/product/storage/add" class="btn btn-primary"><i class="mdi mdi-file-document-box-plus-outline"></i> Add Storage</router-link>
                        </div>
                        <div class="items-overview-setting">
                            <form class="app-search app-search--top d-lg-block"><div class="position-relative"><input type="text" placeholder="Search..." class="form-control"><span class="bx bx-search-alt"></span></div></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-page product storage">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive mb-0">
                        <table class="table table-centered table-nowrap">
                            <thead class="thead-light">
                                <tr>
                                <th style="width: 20px;">
                                    <div class="custom-control custom-checkbox">
                                    <input id="customCheck" type="checkbox" class="custom-control-input" />
                                    <label class="custom-control-label" for="customCheck">&nbsp;</label>
                                    </div>
                                </th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input id="chck1" type="checkbox" class="custom-control-input" />
                                            <label for="chck1" class="custom-control-label">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/list" class="d-block text-primary mb-2">Gudang 1</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Depok</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input id="chck2" type="checkbox" class="custom-control-input" />
                                            <label for="chck2" class="custom-control-label">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/list" class="d-block text-primary mb-2">Gudang 1</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Depok</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input id="chck3" type="checkbox" class="custom-control-input" />
                                            <label for="chck3" class="custom-control-label">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/list" class="d-block text-primary mb-2">Gudang 1</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Depok</td>
                                    <td>200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- end table -->
                </div>
            </div>
        </div>

    </Layout>
</template>