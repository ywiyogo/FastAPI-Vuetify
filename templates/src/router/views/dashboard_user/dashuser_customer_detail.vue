<script>
import Layout from "../../layouts/sto-main";
import CustomerDetail from "@/components/widgets/sto/sto_customer-detail";

export default {
    components: { Layout, CustomerDetail },

    data() {
        return {
            custdetail: [
                {
                    id: "#SK2540",
                    date: "10 Mar 2020",
                    total: "Rp. 3.200.000",
                    status: "Completed",
                    index: 1
                },
                {
                    id: "#SK2541",
                    date: "10 Mar 2020",
                    total: "Rp. 3.200.000",
                    status: "Completed",
                    index: 2
                },
                {
                    id: "#SK2542",
                    date: "10 Mar 2020",
                    total: "Rp. 3.200.000",
                    status: "Completed",
                    index: 3
                },
                {
                    id: "#SK2543",
                    date: "10 Mar 2020",
                    total: "Rp. 3.200.000",
                    status: "Completed",
                    index: 4
                },
                {
                    id: "#SK2544",
                    date: "10 Mar 2020",
                    total: "Rp. 3.200.000",
                    status: "Completed",
                    index: 5
                },
                {
                    id: "#SK2545",
                    date: "10 Mar 2020",
                    total: "Rp. 3.200.000",
                    status: "Completed",
                    index: 6
                }
            ]
        };
    }
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

        <div class="content-page customer">
            <div class="section-topbox section-topbox--detail mb-2">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="boxcustomer-meta mb-3">
                            <h2 class="mr-5">Mahmud Malik</h2>
                            <a href="#"><i class="mdi mdi-lock-reset"></i> Reset Password</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-8">
                    <div class="custbox-intro">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="intro-info">
                                            <p class="title">Total Order</p>
                                            <p class="number">5</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="intro-info">
                                            <p class="title">Total Spent</p>
                                            <p class="number">Rp. 3.200.000</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="intro-info">
                                            <p class="title">Average Spent</p>
                                            <p class="number">Rp. 3.200.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="custbox-content">
                        <div class="card">
                            <div class="card-body">
                                <CustomerDetail :custdetail="custdetail" />
                            </div>
                        </div>
                    </div>

                    <div class="custbox-message">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Message</h4>
                                <div><textarea name="" id="" rows="3" class="form-control info mb-3"></textarea></div>
                                <div><textarea name="" id="" rows="3" class="form-control info mb-3"></textarea></div>
                                <div><textarea name="" id="" rows="3" class="form-control default mb-3"></textarea></div>
                                <div class="buttonbox toright">
                                    <button type="button" class="btn btn-primary"><i class="mdi mdi-message-plus
"></i> Send</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div class="button-box">
                        <button type="button" class="btn btn-danger">Delete Customer</button>
                    </div>
                </div>  

                <div class="col-xl-4">
                    <div class="sidebox customer">
                        <div class="cust-info">
                            <div class="card">
                                <div class="card-body">
                                    <div class="cust-metatitle">
                                        <h4 class="card-title mb-3">Contact Details</h4>
                                        <p class="meta-edit"><a href="#">Edit</a></p>
                                    </div>
                                    <div class="cust-user">
                                        <p>Mahmud Malik</p>
                                        <p>email@email.com</p>
                                        <p>081232434343</p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="cust-metatitle">
                                        <h4 class="card-title mb-3">Address</h4>
                                        <p class="meta-edit"><a href="#">Edit</a></p>
                                    </div>
                                    <div class="mb-4">
                                        <p>Jl. Medan Merdeka No 2</p>
                                    </div>
                                    <p><a href="#">Add New Address</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="cust-point">
                            <div class="card">
                                <div class="card-body">
                                    <div class="cust-metatitle">
                                        <h4 class="card-title mb-3">Loyalty Point</h4>
                                        <p class="meta-edit"><a href="#">Edit</a></p>
                                    </div>
                                    <div class="cust-number">
                                        <p>300</p>
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