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

        <div class="content-page setting">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="">
                            <h2>Sales Channel</h2>
                        </div>
                    </div>
                    <div class="col-6">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xl-12">
                    <div class="storage-box">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Online Shop</h4>
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
                                                <th>Sales Channel</th>
                                                <th style="width: 20%;">Storage</th>
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
                                                        <img src="../../../assets/images/icon/icon-store.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-2 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">Online Shop</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <select class="form-control">
                                                        <option>Storage Name</option>
                                                        <option>Large select</option>
                                                        <option>Small select</option>
                                                    </select>
                                                </td>
                                            </tr>   
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Market Place</h4>
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
                                                <th>Sales Channel</th>
                                                <th>Account</th>
                                                <th>Status</th>
                                                <th style="width: 20%;">Storage</th>
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
                                                        <img src="../../../assets/images/icon/icon-shopee.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-2 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">Shopee</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Blabla@gmail.com</td>
                                                <td>Connected</td>
                                                <td>
                                                    <select class="form-control">
                                                        <option>Storage Name</option>
                                                        <option>Large select</option>
                                                        <option>Small select</option>
                                                    </select>
                                                </td>
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
                                                        <img src="../../../assets/images/icon/icon-toped.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-2 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">Tokopedia</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Blabla@gmail.com</td>
                                                <td>Connected</td>
                                                <td>
                                                    <select class="form-control">
                                                        <option>Storage Name</option>
                                                        <option>Large select</option>
                                                        <option>Small select</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">POS</h4>
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
                                                <th>Sales Channel</th>
                                                <th>POS Name</th>
                                                <th style="width: 20%;">Storage</th>
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
                                                        <img src="../../../assets/images/icon/icon-pos.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-2 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">POS</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Resto Bogor</td>
                                                <td>
                                                    <select class="form-control">
                                                        <option>Storage Name</option>
                                                        <option>Large select</option>
                                                        <option>Small select</option>
                                                    </select>
                                                </td>
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
                                                        <img src="../../../assets/images/icon/icon-pos.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-2 font-16"><router-link tag="a" to="/product/ingredient/add" class="d-block text-primary mb-2">POS</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Resto Jakarta</td>
                                                <td>
                                                    <select class="form-control">
                                                        <option>Storage Name</option>
                                                        <option>Large select</option>
                                                        <option>Small select</option>
                                                    </select>
                                                </td>
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