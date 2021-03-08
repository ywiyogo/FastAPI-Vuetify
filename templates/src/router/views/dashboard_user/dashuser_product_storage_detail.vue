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
                    <router-link tag="a" to="/product/storage/list" class="d-block text-primary mb-2 router-link-active"><i class="dripicons-chevron-left"></i><h6>Gudang 1</h6></router-link>
                </div>
            </div>
        </div>

        <div class="content-page product storage">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-12">
                        <h2>Details</h2>
                    </div>
                </div>
            </div>

            <div class="row">
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="col-xl-4">
                    <div class="sidebox channel">
                        <div class="card">
                            <div class="card-body">
                                <div class="channel-box mb-4">
                                    <div class="channel-meta">
                                        <h5 class="card-title">Connected sales channel</h5>
                                        <span class="meta-link"><router-link tag="a" to="/setting/saleschannel" class="d-block mb-2">Settings</router-link></span>
                                    </div>
                                    <p>List of sales channel thats is using this storage</p>
                                </div>
                                <div class="channel-box">
                                    <div class="media mb-2">
                                        <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded-circle avatar-sm mr-3">
                                        <div class="media-body">
                                            <h6 class="mt-3 font-16"><a href="/" class="d-block text-primary mb-2">Nama</a></h6>
                                        </div>
                                    </div>
                                    <div class="media mb-2">
                                        <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded-circle avatar-sm mr-3">
                                        <div class="media-body">
                                            <h6 class="mt-3 font-16"><a href="/" class="d-block text-primary mb-2">Nama</a></h6>
                                        </div>
                                    </div>
                                    <div class="media mb-2">
                                        <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded-circle avatar-sm mr-3">
                                        <div class="media-body">
                                            <h6 class="mt-3 font-16"><a href="/" class="d-block text-primary mb-2">Nama</a></h6>
                                        </div>
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