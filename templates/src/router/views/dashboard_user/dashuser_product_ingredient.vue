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
                    <h1>Ingredient</h1>
                </div>
                <div class="col-12 col-md-6">
                    <div class="topbox-items topbox-revert">
                        <div class="items-overview-filter mr-3">
                            <router-link tag="a" to="/product/ingredient/add" class="btn btn-primary"><i class="mdi mdi-file-document-box-plus-outline"></i> Add Ingredient</router-link>
                        </div>
                        <div class="items-overview-setting">
                            <form class="app-search app-search--top d-lg-block"><div class="position-relative"><input type="text" placeholder="Search..." class="form-control"><span class="bx bx-search-alt"></span></div></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-page product ingredient">
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
                                <th>Category</th>
                                <th>Quantity</th>
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
                                            <div class="media-body">
                                                <h6 class="mt-0 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">Milk</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Bumbu</td>
                                    <td>200 ml</td>
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
                                            <div class="media-body">
                                                <h6 class="mt-0 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">Coffee</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Packaging</td>
                                    <td>200 gram</td>
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
                                            <div class="media-body">
                                                <h6 class="mt-0 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">Cup</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Minuman</td>
                                    <td>200  pcs</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="custom-control custom-checkbox">
                                            <input id="chck4" type="checkbox" class="custom-control-input" />
                                            <label for="chck4" class="custom-control-label">&nbsp;</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="media">
                                            <div class="media-body">
                                                <h6 class="mt-0 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">Syrup</router-link></h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Minuman</td>
                                    <td>200 ml</td>
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