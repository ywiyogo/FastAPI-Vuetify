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
                    <h1>Add POS</h1>
                </div>
                <div class="col-6">
                    <div class="topbox-items">
                        <div class="items-overview-filter">
                            <router-link tag="a" to="/pos/add" class="btn btn-secondary btn-base mr-3">Discard</router-link>
                            <router-link tag="a" to="/pos/add" class="btn btn-primary btn-base">Save</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-page pointsales">
            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <form action="#">
                                <label for="">Store Name</label>
                                <div class="form-group marginbot-20">
                                    <input type="text" class="form-control" id="" placeholder="Store Name">
                                </div>
                                <label for="">Store Address</label>
                                <div class="form-group marginbot-20">
                                    <input type="text" class="form-control" id="" placeholder="Address">
                                </div>
                                <div class="form-group marginbot-20">
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

                                <div class="buttonbox toright">
                                    <button type="button" class="btn btn-primary btn-base">Enter</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="point-add">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="pos-service">
                                            <div class="service-meta">
                                                <h5 class="card-title">Tax and Charges</h5>
                                                <span class="add-link"><a href="#">Add New</a></span>
                                            </div>
                                            <div class="service-number">
                                                <a href="#">Service Fee</a>
                                                <span>10 %</span>
                                            </div>
                                            <div class="service-number">
                                                <a href="#">Service Fee</a>
                                                <span>10 %</span>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="pos-payment">
                                            <h5 class="card-title">Payment</h5>
                                            <p><a href="#">Gopay</a></p>
                                            <p><a href="#">Ovo</a></p>
                                            <p><a href="#">Dana</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4">
                    <div class="sidebox pointsale">
                        <div class="card">
                            <div class="card-body">
                                <div class="sale-user">
                                    <h4 class="card-title">Store Employee</h4>
                                    <span class="user-add"><a href="#">Add User</a></span>

                                    <div class="user-list mt-4">
                                        <div class="media mb-2">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded-circle avatar-sm mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-3 font-16"><a href="/" class="d-block text-primary mb-2">Nama User</a></h6>
                                            </div>
                                        </div>
                                        <div class="media mb-2">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded-circle avatar-sm mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-3 font-16"><a href="/" class="d-block text-primary mb-2">Nama User</a></h6>
                                            </div>
                                        </div>
                                        <div class="media mb-2">
                                            <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded-circle avatar-sm mr-3">
                                            <div class="media-body">
                                                <h6 class="mt-3 font-16"><a href="/" class="d-block text-primary mb-2">Nama User</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="sale-invent">
                                    <h4 class="card-title">Inventory</h4>
                                    <p>Sync</p>
                                    <div class="material-switch float-right">
                                        <input id="someSwitchOptionDefault1" name="someSwitchOption001" type="checkbox"/>
                                        <label for="someSwitchOptionDefault1" class="label-default"></label>
                                    </div>

                                    <div class="input-group mt-3">
                                        <select class="custom-select" id="inputGroupSelect05">
                                            <option selected>Choose warehouse</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">Enter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="sale-invent">
                                    <h4 ></h4>
                                    <p class="card-title">Ingredient Feature</p>
                                    <div class="material-switch float-right">
                                        <input id="someSwitchOptionDefault2" name="someSwitchOption002" type="checkbox"/>
                                        <label for="someSwitchOptionDefault2" class="label-default"></label>
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