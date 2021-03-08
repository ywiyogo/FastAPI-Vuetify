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
                    <router-link tag="a" to="/setting/billing" class="d-block text-primary mb-2 router-link-active"><i class="dripicons-chevron-left"></i><h6>Billing</h6></router-link>
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
                            <h2>Invoice</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-8 col-12">
                    </div>
                </div>
            </div>
            
            <div class="billing-wrapbox">
                <div class="row">
                    <div class="col-12 col-md-12 col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="billing-invoice-box">
                                    <div class="bill-invo-meta mb-5">
                                        <div class="text-right mb-3">
                                            <p class="btn btn-warning btn-sm"><i class="mdi mdi-file-pdf"></i> Download PDF</p>
                                        </div>
                                        
                                        <div class="invometa-title">
                                            <h2>Invoice #12345</h2>
                                            <p class="labelstatus bg-soft-cancel text-cancel">Unpaid</p>
                                        </div>
                                        <div class="invometa-date">
                                            <p><span>Invoice date</span> : 30 June 2020</p>
                                            <p><span>Due date</span> : 07 July 2020</p>
                                        </div>
                                    </div>

                                    <div class="bill-invo-content mb-5">
                                        <div class="invocontent">
                                            <h5>Pay to :</h5>
                                            <p>Stocave <br/>
                                                Gedung Antam Lt. 3<br>
                                            </p>
                                        </div>
                                        <div class="invocontent">
                                            <h5>Invoice to :</h5>
                                            <p>Stocave <br/>
                                                Gedung Antam Lt. 3<br>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="bill-invo-items">
                                        <div class="table-responsive mb-0">
                                            <table class="table table-centered table-nowrap">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>Invoice Items</th>
                                                        <th>Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <!-- repeated items -->
                                                    <tr>
                                                        <td><p>Business Subscription</p></td>
                                                        <td><p>Rp. 200.000</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>1% Transaction Fee (1 June - 30 June)<br/>Rp. 1.000.000 x 1%</p></td>
                                                        <td><p>Rp. 100.000</p></td>
                                                    </tr>
                                                    <!-- repeated items -->

                                                    <!-- subtotal -->
                                                    <tr>
                                                        <td><p class="text-right">Subtotal</p></td>
                                                        <td><p>Rp. 300.000</p></td>
                                                    </tr>
                                                    <!-- subtotal -->

                                                    <!-- unique code > show after proceed payment -->
                                                    <tr>
                                                        <td><p class="text-right">Unique code</p></td>
                                                        <td><p>Rp. 342</p></td>
                                                    </tr>
                                                    <!-- subtotal -->

                                                    <!-- total -->
                                                    <tr>
                                                        <td><p class="text-right">Total</p></td>
                                                        <td><p>Rp. 300.000</p></td>
                                                    </tr>
                                                    <!-- total -->
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="billing-invoice-sidebox mb-5">
                                    <div class="bill-invo-payment mb-3">
                                        <h6>Total Due</h6>
                                        <p>Rp. 300.000</p>
                                    </div>
                                    <div class="bill-invo-paymethod">
                                        <h6>Payment Method</h6>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>Bank Name</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <button class="btn btn-primary">Proceed to Payment</button>
                                    </div>
                                </div>

                                <!-- show after proceed payment -->
                                <div class="billing-invoice-sidebox">
                                    <div class="bill-invo-paynumber mb-4">
                                        <h6>Total Due</h6>
                                        <div class="paynumber-info">
                                            <p>Payment Due</p>
                                            <p>Rp. 300.000</p>
                                        </div>
                                        <div class="paynumber-info">
                                            <p>Unique Code</p>
                                            <p>Rp. 324</p>
                                        </div>
                                    </div>

                                    <div class="bill-invo-amount mb-4">
                                        <h6>Transfer Amount</h6>
                                        <p>Rp. 300.324</p>
                                    </div>

                                    <div class="bill-invo-receiver">
                                        <h6>Transfer to :</h6>
                                        <img src="" alt="">
                                        <p class="rec-name">Donald Trubus - 1234567889</p>
                                        <p class="rec-note">Please transfer exactly until the last three digit to help us identify your payment faster</p>
                                        <p class="rec-code">Unique code expires in</p>
                                        <p></p>
                                    </div>

                                    <div class="button-invoice">
                                        <button type="button" class="btn btn-primary mb-2">Payment Confirmation</button>
                                        <button type="button" class="btn btn-secondary">Change Payment Method</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>