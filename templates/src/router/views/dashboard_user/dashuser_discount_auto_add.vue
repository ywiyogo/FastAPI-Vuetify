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
                    <router-link tag="a" to="/discount/auto" class="d-block text-primary mb-2 router-link-active"><i class="dripicons-chevron-left"></i><h6>Automatic Discount</h6></router-link>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>

        <div class="content-page discount auto">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-8 col-md-6 col-xl-6">
                        <div class="">
                            <h2>Add Automatic Discount</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-8 col-12">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-md-12 col-xl-6">
                    <div class="discauto-box">

                        <form action="#">
                            <div class="discount-name">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="" class="mb-3">Discount Name</label>
                                            <input type="text" class="form-control" id="" placeholder="Name">
                                        </div>
                                        <p>Customer will see this discount name</p>
                                    </div>
                                </div>
                            </div>

                            <div class="discount-type">
                                <div class="card">
                                    <div class="card-body">
                                        <label for="" class="mb-3">Type</label>
                                        <ul class="nolist nolist__permission">
                                            <li>
                                                <div class="custom-control custom-radio">
                                                    <input
                                                    type="radio"
                                                    id="customRadio1"
                                                    name="customRadio"
                                                    class="custom-control-input"
                                                    />
                                                    <label class="custom-control-label" for="customRadio1">Percentage</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-radio">
                                                    <input
                                                    type="radio"
                                                    id="customRadio2"
                                                    name="customRadio"
                                                    class="custom-control-input"
                                                    />
                                                    <label class="custom-control-label" for="customRadio2">Fixed Amount</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="custom-control custom-radio">
                                                    <input
                                                    type="radio"
                                                    id="customRadio3"
                                                    name="customRadio"
                                                    class="custom-control-input"
                                                    />
                                                    <label class="custom-control-label" for="customRadio3">Free Shipping</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="discount-value">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="" class="mb-3">Discount Value</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control col-sm-4" placeholder="10">
                                                <div class="input-group-append">
                                                    <span class="input-group-text">%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="mb-3">Discount Amount Limit</label>
                                            <input type="text" class="form-control col-sm-4" placeholder="Rp. 200.000">
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input id="customCheck" type="checkbox" class="custom-control-input" />
                                            <label class="custom-control-label" for="customCheck">Discount Amount Limit</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <div class="discount-requirement">
                                <div class="card">
                                    <div class="card-body">
                                        <label for="" class="mb-3">Requirement</label>
                                        <div class="custom-control custom-radio mb-3">
                                            <input
                                                type="radio"
                                                id="customRadio22"
                                                name="customRadio"
                                                class="custom-control-input" />
                                            <label class="custom-control-label mb-2" for="customRadio22">Minimum Purchase Amount</label>
                                            <input type="text" class="form-control col-sm-4" placeholder="Rp. 200.000">
                                        </div>
                                        <div class="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                id="customRadio23"
                                                name="customRadio"
                                                class="custom-control-input"/>
                                            <label class="custom-control-label" for="customRadio23">Minimum Item Quantity</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <div class="discount-period">
                                <div class="card">
                                    <div class="card-body">
                                        <label for="" class="mb-3">Periods</label>
                                        <b-form-group
                                            id="example-date-time"
                                            label-cols-sm="3"
                                            label-cols-lg="3"
                                            label="Start Date & Time"
                                            label-for="date-time">
                                            <b-form-input id="date-time" value="2019-08-19T13:45:00" type="datetime-local"></b-form-input>
                                        </b-form-group>

                                        <b-form-group
                                            id="example-date-time"
                                            label-cols-sm="3"
                                            label-cols-lg="3"
                                            label="End Date & Time"
                                            label-for="date-time">
                                            <b-form-input id="date-time" value="2019-08-19T13:45:00" type="datetime-local"></b-form-input>
                                        </b-form-group>
                                        <div class="custom-control custom-checkbox">
                                            <input id="customCheck1" type="checkbox" class="custom-control-input" />
                                            <label class="custom-control-label" for="customCheck1">No End Time</label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-6 col-lg-6">
                                </div>
                                <div class="col-6 col-lg-6">
                                    <div class="buttonbox toright">
                                        <button type="button" class="btn btn-secondary mr-3">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>