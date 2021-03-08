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
                    <router-link tag="a" to="/product/storage" class="d-block text-primary mb-2"><h6>Storage</h6></router-link>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>

        <div class="content-page product storage">
            <div class="row">
                <div class="col-xl-12">
                    <div class="">
                        <h2>Add Storage</h2>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="storage-box">
                        <div class="card">
                            <div class="card-body">
                                <form action="#">
                                    <label for="">Storage Details</label>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="" placeholder="Storage Name">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="" placeholder="Phone Number">
                                    </div>
                                    <label for="">Shipping Address</label>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="" placeholder="Address">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="" placeholder="Apartment, house number (optional)">
                                    </div>
                                    <div class="form-row mb-3">
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="Province">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="City">
                                        </div>
                                    </div>
                                    <div class="form-row mb-3">
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="Kecamatan">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" id="" placeholder="Postcode">
                                        </div>
                                    </div>

                                    <div class="buttonbox text-left">
                                        <button type="button" class="btn btn-secondary mr-3">Discard</button>
                                        <button type="button" class="btn btn-primary">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="col-xl-4">
                    <div class="storage-channel">
                        <div class="card">
                            <div class="card-body">
                                <div class="channel-box">
                                    <div class="channel-meta">
                                        <h6>Connected sales channel</h6>
                                        <a href="#">Settings</a>
                                    </div>
                                    <p>List of sales channel thats is using this storage</p>
                                </div>
                                <div class="channel-box">
                                    <p>Connect sales channel to this storage from settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

    </Layout>
</template>