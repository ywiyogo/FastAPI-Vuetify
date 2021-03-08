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

        <div class="content-page setting billing">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-8 col-md-6 col-xl-6">
                        <div class="">
                            <h2>Billing</h2>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                    </div>
                </div>
            </div>

            <div class="billing-wrapbox">
                <div class="row">
                    <div class="col-12 col-sm-12 col-xl-6">
                        <div class="card">
                            <div class="card-body">

                                <div class="billing-box balance">
                                    <div class="box-inner-bill">
                                        <h4 class="card-title mb-3">Outstanding Balance</h4>
                                        <div class="billing-info">
                                            <p class="price">Rp. 1.000.000</p>
                                            <p>This is the total of unpaid invoice and current usage</p>
                                        </div>
                                    </div>
                                    
                                    <p class="meta-edit"><a href="#" class="btn btn-primary">Make Payment</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-xl-6">
                        <div class="card">
                            <div class="card-body">

                                <div class="billing-box invoice">
                                    <div class="box-inner-bill mr-5">
                                        <h4 class="card-title mb-3">Current Invoice</h4>
                                        <div class="billing-info">
                                            <p class="price">Rp. 2.000.000</p>
                                            <p>Period : 1 June - 30 June 2020</p>
                                        </div>
                                    </div>
                                    <div class="box-inner-bill">
                                        <h4 class="card-title mb-3">Due Date</h4>
                                        <div class="billing-info">
                                            <p class="price">Rp. 2.000.000</p>
                                        </div>
                                    </div>

                                    <p class="meta-edit"><a href="/setting/billingunpaid" class="btn btn-primary">Pay Invoice</a></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="billing-history">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-3">History</h4>
                            <div class="table-responsive mb-0">
                                <table class="table table-centered table-nowrap">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Invoice</th>
                                            <th>Invoice Date</th>
                                            <th>Due Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="/setting/billingpaid">1001</a></td>
                                            <td><p>18 Jun 2020</p></td>
                                            <td><p>18 Jun 2020</p></td>
                                            <td><p>Rp. 1.000.000</p></td>
                                            <td><p class="labelstatus bg-soft-success text-success">Paid</p></td>
                                        </tr>
                                        <tr>
                                            <td><a href="/setting/billingunpaid">1002</a></td>
                                            <td><p>18 Jun 2020</p></td>
                                            <td><p>18 Jun 2020</p></td>
                                            <td><p>Rp. 1.000.000</p></td>
                                            <td><p class="labelstatus bg-soft-cancel text-cancel">Unpaid</p></td>
                                        </tr>
                                         <tr>
                                            <td><a href="#">1002</a></td>
                                            <td><p>18 Jun 2020</p></td>
                                            <td><p>18 Jun 2020</p></td>
                                            <td><p>Rp. 1.000.000</p></td>
                                            <td><p class="labelstatus bg-soft-dark text-secondary">Canceled</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </Layout>
</template>