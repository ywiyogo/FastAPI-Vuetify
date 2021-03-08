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
                    <router-link tag="a" to="/setting/manageaccount" class="d-block text-primary mb-2 router-link-active"><i class="dripicons-chevron-left"></i><h6>Manage Account</h6></router-link>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>

        <div class="content-page setting manageaccount">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-8 col-md-6 col-xl-6">
                        <div class="">
                            <h2>My Account</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-8 col-12">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-md-12 col-xl-6">
                    <div class="maddaccount-box">

                        <form action="#">
                            <div class="account-details">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Details</h4>
                                        <div class="form-row mb-3">
                                            <div class="col">
                                                <input type="text" class="form-control" id="" placeholder="First Name">
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" id="" placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="form-group marginbot-20">
                                            <input type="text" class="form-control" id="" placeholder="Email">
                                        </div>
                                        <div class="form-group marginbot-20">
                                            <input type="text" class="form-control" id="" placeholder="Phone Number (optional)">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="account-password">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Change Password</h4>
                                        <div class="form-group marginbot-20">
                                            <input type="text" class="form-control" id="" placeholder="Enter new password">
                                        </div>
                                        <div class="form-group marginbot-20">
                                            <input type="text" class="form-control" id="" placeholder="Re-enter new password">
                                        </div>
                                        <p>Leave blank if dont want to change password</p>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 col-lg-12">
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