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

        <div class="content-page setting shipping">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-8 col-md-6 col-xl-6">
                        <div class="">
                            <h2>Shipping</h2>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-8 col-md-6 col-xl-6">
                    <div class="storage-box">

                        <div class="card">
                            <div class="card-body">
                                <div class="sender-info">
                                    <div class="cust-metatitle">
                                        <h4 class="card-title mb-3">Sender Address</h4>
                                        <p class="meta-edit"><a href="#" class="btn btn-primary">Change</a></p>
                                    </div>
                                    <div class="cust-user">
                                        <p>Mahmud Malik</p>
                                        <p>email@email.com</p>
                                        <p>081232434343</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive mb-0">
                                    <table class="table table-centered table-nowrap">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>Courier</th>
                                                <th>Type</th>
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
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="nolist courier-package">
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input id="chck11" type="checkbox" class="custom-control-input" />
                                                                <label for="chck11" class="custom-control-label">Regular (2-3 days)</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input id="chck12" type="checkbox" class="custom-control-input" />
                                                                <label for="chck12" class="custom-control-label">YES (1 day)</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input id="chck13" type="checkbox" class="custom-control-input" />
                                                                <label for="chck13" class="custom-control-label">ONS (1 day)</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
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
                                                        <img src="../../../assets/images/icon/icon-shopee.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul class="nolist courier-package">
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input id="chck15" type="checkbox" class="custom-control-input" />
                                                                <label for="chck15" class="custom-control-label">Regular (2-3 days)</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input id="chck16" type="checkbox" class="custom-control-input" />
                                                                <label for="chck16" class="custom-control-label">YES (1 day)</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="custom-control custom-checkbox">
                                                                <input id="chck17" type="checkbox" class="custom-control-input" />
                                                                <label for="chck17" class="custom-control-label">ONS (1 day)</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="custom-control custom-checkbox">
                                                        <input id="chck1" type="checkbox" class="custom-control-input" />
                                                        <label for="chck1" class="custom-control-label">&nbsp;</label>
                                                    </div>
                                                </td>
                                                <td><p>Custom Courier</p></td>
                                                <td>
                                                    <input type="text" class="form-control" id="" placeholder="Custom Price">
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