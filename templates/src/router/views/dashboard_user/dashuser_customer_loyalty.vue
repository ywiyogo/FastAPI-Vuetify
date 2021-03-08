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
                    <router-link tag="a" to="/customer" class="d-block text-primary mb-2"><i class="dripicons-chevron-left"></i><h6>Customer</h6></router-link>
                </div>
            </div>
        </div>

        <div class="content-customer loyalty">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-12">
                        <h2>Loyalty Program</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="loyalty-box">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Earn Point</h4>
                                <div class="loyalty-info earnpoint">
                                    <p>Spend Rp. 10.000 = 10 point</p>
                                </div>
                                <div class="buttonbox toright loyalty-info button">
                                    <b-button v-b-modal.earn-point variant="primary btn-base"><i class="mdi mdi-file-document-edit-outline"></i> Edit</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-xl-12">
                    <div class="">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Reward</h4>
                                <div class="loyalty-info reward">
                                    <div class="table-responsive mb-0">
                                        <table class="table table-centered table-nowrap">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Redeem</th>
                                                <th>Reward</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>10 point</td>
                                                <td>10% discount from total sales up to Rp. 10.000</td>
                                            </tr>
                                            <tr>
                                                <td>20 point</td>
                                                <td>20% discount from total sales up to Rp. 10.000</td>
                                            </tr>
                                            <tr>
                                                <td>30 point</td>
                                                <td>30% discount from total sales up to Rp. 10.000</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="buttonbox toright loyalty-info button">
                                    <b-button v-b-modal.reward variant="primary btn-base"><i class="mdi mdi-file-document-box-plus-outline"></i> Add</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div><!-- end content-customer -->

        <b-modal id="earn-point" title="Program Type" title-class="font-18" :hide-footer="true">
            <div class="modalbox">
                <div class="modaloption">
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label" for="exampleRadios1">
                            <p class="label-title">Spend Rp. X = Y Point</p>
                            <p>Example : Every Rp. 10.000 spend <br/> Customer earn 10 point</p>
                        </label>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                            <p class="label-title">Buy X product = Y point</p>
                            <p>Example : buy 1 t-shirt <br/> Customer earn 10 point</p>
                        </label>
                    </div>
                </div>

                <div class="modalseparator">
                    <h5>Point Rule</h5>
                </div>

                <div class="modalfield">
                    <!-- if buy product selected -->
                    <div class="form-group poinproduct">
                        <select class="form-control mb-3">
                            <option>Product</option>
                            <option>Large select</option>
                            <option>Small select</option>
                        </select>
                        <input id="formget" type="text" placeholder="Search product" class="form-control">
                    </div>
                    <!-- if buy product selected -->

                    <div class="form-group">
                        <label for="spend">Spend</label>
                        <input id="formspend" type="text" placeholder="Rp. 10.000" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="get">Get</label>
                        <input id="formget" type="text" placeholder="10 point" class="form-control">
                    </div>
                </div>

                <div class="buttonbox toright mt-4">
                    <button class="btn btn-secondary mr-3">Discard</button>
                    <button class="btn btn-primary btn-base"><i class="mdi mdi-file-document-box-plus-outline"></i> Add</button>
                </div>
            </div>
        </b-modal>

        <b-modal id="reward" title="Reward Type" title-class="font-18" :hide-footer="true">
            <div class="modalbox">
                <div class="modaloption">
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label" for="exampleRadios1">
                            <p class="label-title">Y point = Rp.X discount</p>
                            <p>Example : Redeem 10 point <br/> Get Rp. 10.000 discount from total sales</p>
                        </label>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                            <p class="label-title">Y point = X % discount</p>
                            <p>Example : Redeem 10 point  <br/> Get 10% discount from total sales</p>
                        </label>
                    </div>
                    <div class="form-check mb-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                        <label class="form-check-label" for="exampleRadios3">
                            <p class="label-title">Y point = Product for free</p>
                            <p>Example : Redeem 10 point  <br/> Get 1 drink for free</p>
                        </label>
                    </div>
                </div>
                
                <div class="modalseparator">
                    <h5>Reward Rules</h5>
                </div>

                <div class="modalfield">
                    <!-- if Rp. X selected -->
                    <div class="form-group">
                        <label for="redeem">Redeem</label>
                        <input id="formredeem" type="text" placeholder="10 point" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="getreward">Get</label>
                        <input id="formgetreward" type="text" placeholder="Rp. 10.000 discount" class="form-control">
                    </div>
                    <!-- if Rp. X selected -->

                    <!-- if X % selected -->
                    <div class="form-group">
                        <label for="redeemprecent">Redeem</label>
                        <input id="formredeempercent" type="text" placeholder="10 point" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="getrewardpercent">Get</label>
                        <input id="formgetrewardpercent" type="text" placeholder="10% discount" class="form-control">
                    </div>
                    <div class="fieldcombo">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value id="maxpercent" />
                            <label for="maxpercent">Maximum Discount</label>
                        </div>
                        <input id="formmaxpercent" type="text" placeholder="Rp. 100.000" class="form-control">
                    </div>
                    <!-- if X % selected -->

                    <!-- if product free selected -->
                    <div class="form-group">
                        <label for="getrewardfree">Redeem</label>
                        <input id="formgetrewardfree" type="text" placeholder="10 point" class="form-control">
                    </div>
                    <div class="form-group freeproduct">
                        <label for="getrewardfree">Get</label>
                        <select class="form-control mb-3">
                            <option>Product</option>
                            <option>Large select</option>
                            <option>Small select</option>
                        </select>
                        <input id="formget" type="text" placeholder="Search product (for free)" class="form-control">
                    </div>
                    <!-- if product free selected -->

                </div>

                <div class="buttonbox toright mt-4">
                    <button class="btn btn-secondary mr-3">Discard</button>
                    <button class="btn btn-primary btn-base"><i class="mdi mdi-file-document-box-plus-outline"></i> Add</button>
                </div>
            </div>
        </b-modal>

    </Layout>
</template>