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
                <div class="col-12">
                    <router-link tag="a" to="/product/storage" class="d-block text-primary mb-2"><i class="dripicons-chevron-left"></i><h6>Storage</h6></router-link>
                </div>
            </div>
        </div>

        <div class="content-page product storage">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="">
                            <h2>Gudang 1</h2>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="topbox-items">
                            <div class="items-overview-filter mr-3">
                                <router-link tag="a" to="/product/storage" class="btn btn-primary btn-base">Save</router-link>
                            </div>
                            <div class="items-overview-filter mr-3">
                                <router-link tag="a" to="/product/storage" class="btn btn-secondary btn-base">Cancel</router-link>
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
                                <b-tabs justified nav-class="nav-tabs-custom" content-class="p-3 text-muted">
                                    <b-tab active>
                                        <template v-slot:title>
                                        <span class="d-inline-block d-sm-none">
                                            <i class="fas fa-home"></i>
                                        </span>
                                        <span class="d-none d-sm-inline-block">Product</span>
                                        </template>
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
                                                    <th>Product</th>
                                                    <th>Category</th>
                                                    <th>Stock</th>
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
                                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Shirt</td>
                                                        <td><input id="" type="text" placeholder="" class="form-control col-lg-2"></td>
                                                    </tr>
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
                                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Shirt</td>
                                                        <td><input id="" type="text" placeholder="" class="form-control col-lg-2"></td>
                                                    </tr>
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
                                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Shirt</td>
                                                        <td><input id="" type="text" placeholder="" class="form-control col-lg-2"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </b-tab>
                                    <b-tab>
                                        <template v-slot:title>
                                        <span class="d-inline-block d-sm-none">
                                            <i class="far fa-user"></i>
                                        </span>
                                        <span class="d-none d-sm-inline-block">Ingredient</span>
                                        </template>
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
                                                    <th>Product</th>
                                                    <th>Category</th>
                                                    <th>Stock</th>
                                                    <th>Status</th>
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
                                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Shirt</td>
                                                        <td>200</td>
                                                        <td>Available</td>
                                                    </tr>
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
                                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Shirt</td>
                                                        <td>200</td>
                                                        <td>Low Stock</td>
                                                    </tr>
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
                                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Shirt</td>
                                                        <td>200</td>
                                                        <td>Unavailable</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </b-tab>
                                    
                                    </b-tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
</template>