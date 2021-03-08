<script>
import Layout from "../../layouts/sto-main";

export default {
    components: { Layout }
}
</script>

<template>
    <Layout>

        <div class="content-page setting pricing">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-12">
                        <h2>Plan and Pricing</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-8">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="pricebox starter">
                                <h5>Starter</h5>
                                <div class="prcheading">
                                    <h3>Free</h3>
                                </div>
                                <div class="prcinfo">
                                    <ul>
                                        <li>Free Hosting</li>
                                        <li>Customized Store</li>
                                        <li>Up to 100 product</li>
                                        <li>Stocave domain</li>
                                        <li>5% transactional fee</li>
                                        <li>2 bank account</li>
                                        <li>2 account</li>
                                        <li>Facebook Pixel integration</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="priceaction current">
                                <p>Current Plan</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="pricebox business">
                                <h5>Business</h5>
                                <div class="prcheading">
                                    <h3>Rp. 200 k</h3>
                                    <p>/month</p>
                                </div>
                                <div class="prcinfo">
                                    <ul>
                                        <li>Free Hosting</li>
                                        <li>Customized Store</li>
                                        <li>Unlimited product</li>
                                        <li>Connect your domain</li>
                                        <li>0% transactional fee</li>
                                        <li>All available bank</li>
                                        <li>10 account</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="priceaction base">
                                <p>Upgrade Plan</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="pricebox enterprise">
                                <h5>Enterprise</h5>
                                <div class="prcheading">
                                    <h3>Custom</h3>
                                </div>
                                <div class="prcinfo">
                                    <p>Do you need more function and customised service to suit your business ?</p>
                                    <br>
                                    <p>Let's talk and we'll make it</p>
                                </div>
                            </div>
                            <div class="priceaction base">
                                <p>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

    </Layout>
</template>