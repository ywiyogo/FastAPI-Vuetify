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
                <div class="col-6">
                    <h1>Settings</h1>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>

        <div class="content-page setting">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="setting-item mb-4">
                                <div class="media">
                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                    <div class="media-body">
                                        <h6 class="mt-4 font-16"><router-link tag="a" to="/setting/managebusiness" class="d-block text-primary mb-2">Manage Business</router-link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="setting-item mb-4">
                                <div class="media">
                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                    <div class="media-body">
                                        <h6 class="mt-4 font-16"><router-link tag="a" to="/setting/paymentprovider" class="d-block text-primary mb-2">Payments</router-link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="setting-item mb-4">
                                <div class="media">
                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                    <div class="media-body">
                                        <h6 class="mt-4 font-16"><router-link tag="a" to="/setting/email" class="d-block text-primary mb-2">Email</router-link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="setting-item mb-4">
                                <div class="media">
                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                    <div class="media-body">
                                        <h6 class="mt-4 font-16"><router-link tag="a" to="/setting/manageaccount" class="d-block text-primary mb-2">Manage Account</router-link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="setting-item mb-4">
                                <div class="media">
                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                    <div class="media-body">
                                        <h6 class="mt-4 font-16"><router-link tag="a" to="/setting/pricingplan" class="d-block text-primary mb-2">Plans</router-link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="setting-item mb-4">
                                <div class="media">
                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                    <div class="media-body">
                                        <h6 class="mt-4 font-16"><router-link tag="a" to="/setting/shipping" class="d-block text-primary mb-2">Shipping</router-link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="setting-item mb-4">
                                <div class="media">
                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                    <div class="media-body">
                                        <h6 class="mt-4 font-16"><router-link tag="a" to="/setting/billing" class="d-block text-primary mb-2">Billing</router-link></h6>
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