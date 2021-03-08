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
                    <h1>Point of Sales</h1>
                </div>
                <div class="col-6">
                    <div class="topbox-items">
                        <div class="items-overview-filter mr-3">
                            <router-link tag="a" to="/pos/add" class="btn btn-primary btn-base">POS</router-link>
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
                            <div class="pos-info">
                                <div class="info-item mb-4">
                                    <h5 class="card-title">Store Name</h5>
                                    <a href="#">Toko Bangunan</a>
                                </div>
                                <div class="info-item">
                                    <h5 class="card-title">Shipping Address</h5>
                                    <p>Jl Mangga No 2 Setiabudi, Jakarta Selatan DKI Jakarta 1234</p>
                                </div>
                                <div class="buttonbox toright">
                                    <button class="btn btn-secondary btn-base">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="point-add">
                        <div class="row">
                            <div class="col-md-4">
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
                            <div class="col-md-4">
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
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="sale-invent">
                                            <h4 class="card-title">Inventory</h4>
                                            <p>Sync</p>
                                            <div class="material-switch float-right">
                                                <input id="someSwitchOptionDefault1" name="someSwitchOption001" type="checkbox"/>
                                                <label for="someSwitchOptionDefault1" class="label-default"></label>
                                            </div>
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
                                    <h4 class="card-title">Store User</h4>
                                    <span class="user-add">Add User</span>

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
                    </div>
                </div>
            </div>

            <div class="section-topbox mb-3">
                <div class="row">
                    <div class="col-6">
                        <h1>Overview</h1>
                    </div>
                    <div class="col-6">
                        <div class="topbox-items">
                            <div class="items-overview-filter mr-5">
                                <b-dropdown dropdown class="btn-base">
                                    <template v-slot:button-content>
                                        Filter
                                    </template>
                                    <template>
                                        <div class="filter-switch with-space">
                                            <ul>
                                                <li>
                                                    Total Sales
                                                    <div class="material-switch float-right">
                                                        <input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox"/>
                                                        <label for="someSwitchOptionDefault" class="label-default"></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    Net Sales
                                                    <div class="material-switch float-right">
                                                        <input id="someSwitchOptionDefault2" name="someSwitchOption002" type="checkbox"/>
                                                        <label for="someSwitchOptionDefault2" class="label-default"></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    Items Sold
                                                    <div class="material-switch float-right">
                                                        <input id="someSwitchOptionDefault3" name="someSwitchOption003" type="checkbox"/>
                                                        <label for="someSwitchOptionDefault3" class="label-default"></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    Revenue
                                                    <div class="material-switch float-right">
                                                        <input id="someSwitchOptionDefault4" name="someSwitchOption004" type="checkbox"/>
                                                        <label for="someSwitchOptionDefault4" class="label-default"></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    Visitor
                                                    <div class="material-switch float-right">
                                                        <input id="someSwitchOptionDefault5" name="someSwitchOption005" type="checkbox"/>
                                                        <label for="someSwitchOptionDefault5" class="label-default"></label>
                                                    </div>
                                                </li>
                                                <li>
                                                    Average Order Value
                                                    <div class="material-switch float-right">
                                                        <input id="someSwitchOptionDefault6" name="someSwitchOption006" type="checkbox"/>
                                                        <label for="someSwitchOptionDefault6" class="label-default"></label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </b-dropdown>
                            </div>
                            <div class="items-overview-setting mr-5">
                                <b-dropdown dropleft>
                                    <template v-slot:button-content>
                                        <i class="fa fa-ellipsis-v"></i>
                                    </template>
                                    <b-dropdown-item>Total Sales</b-dropdown-item>
                                    <b-dropdown-item>Net Sales</b-dropdown-item>
                                    <b-dropdown-item>Items Sold</b-dropdown-item>
                                    <b-dropdown-item>Revenue</b-dropdown-item>
                                    <b-dropdown-item>Visitor</b-dropdown-item>
                                    <b-dropdown-item>Average Order Value</b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-page widgetpos">
                <div class="row">
                    <div class="col-lg-6 col-xl-3">
                        <div class="card">
                            <div class="card-body box-overview">
                                <a href="#">
                                    <p class="partbox-title">Total Sales</p>
                                    <p class="partbox-number">Rp. 32.343.000</p>
                                    <div class="partbox-stats">
                                        <div class="stats-info">
                                            <span>Previous Period</span>
                                            <span>Rp. 32.343.000</span>
                                        </div>
                                        <div class="stats-number">
                                            <span class="number-arrow arrow-up"><i class="mdi mdi-arrow-top-right"></i></span>
                                            <span class="number-percent">20%</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="card">
                            <div class="card-body box-overview">
                                <a href="#">
                                    <p class="partbox-title">Net Sales</p>
                                    <p class="partbox-number">Rp. 32.343.000</p>
                                    <div class="partbox-stats">
                                        <div class="stats-info">
                                            <span>Previous Period</span>
                                            <span>Rp. 32.343.000</span>
                                        </div>
                                        <div class="stats-number">
                                            <span class="number-arrow arrow-up"><i class="mdi mdi-arrow-top-right"></i></span>
                                            <span class="number-percent">20%</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="card">
                            <div class="card-body box-overview">
                                <a href="#">
                                    <p class="partbox-title">Visitor</p>
                                    <p class="partbox-number">361</p>
                                    <div class="partbox-stats">
                                        <div class="stats-info">
                                            <span>Previous Period</span>
                                            <span>456</span>
                                        </div>
                                        <div class="stats-number">
                                            <span class="number-arrow arrow-bottom"><i class="mdi mdi-arrow-bottom-right"></i></span>
                                            <span class="number-percent">20%</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="card">
                            <div class="card-body box-overview">
                                <a href="#">
                                    <p class="partbox-title">Order</p>
                                    <p class="partbox-number">32</p>
                                    <div class="partbox-stats">
                                        <div class="stats-info">
                                            <span>Previous Period</span>
                                            <span>28</span>
                                        </div>
                                        <div class="stats-number">
                                            <span class="number-arrow arrow-up"><i class="mdi mdi-arrow-top-right"></i></span>
                                            <span class="number-percent">20%</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="card">
                            <div class="card-body box-overview">
                                <a href="#">
                                    <p class="partbox-title">Items Sold</p>
                                    <p class="partbox-number">32</p>
                                    <div class="partbox-stats">
                                        <div class="stats-info">
                                            <span>Previous Period</span>
                                            <span>28</span>
                                        </div>
                                        <div class="stats-number">
                                            <span class="number-arrow arrow-up"><i class="mdi mdi-arrow-top-right"></i></span>
                                            <span class="number-percent">20%</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="card">
                            <div class="card-body box-overview">
                                <a href="#">
                                    <p class="partbox-title">Average Order Values</p>
                                    <p class="partbox-number">Rp. 189.045</p>
                                    <div class="partbox-stats">
                                        <div class="stats-info">
                                            <span>Previous Period</span>
                                            <span>Rp. 225.065</span>
                                        </div>
                                        <div class="stats-number">
                                            <span class="number-arrow arrow-bottom"><i class="mdi mdi-arrow-bottom-right"></i></span>
                                            <span class="number-percent">20%</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="card">
                            <div class="card-body box-overview">
                                <a href="#">
                                    <p class="partbox-title">Revenue</p>
                                    <p class="partbox-number">Rp. 189.045</p>
                                    <div class="partbox-stats">
                                        <div class="stats-info">
                                            <span>Previous Period</span>
                                            <span>Rp. 189.045</span>
                                        </div>
                                        <div class="stats-number">
                                            <span class="number-arrow arrow-neutral"><i class="mdi mdi-arrow-right"></i></span>
                                            <span class="number-percent">20%</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="card">
                            <div class="card-body box-overview">
                                <a href="#">
                                    <p class="partbox-title">Revenue</p>
                                    <p class="partbox-number">Rp. 189.145</p>
                                    <div class="partbox-stats">
                                        <div class="stats-info">
                                            <span>Previous Period</span>
                                            <span>Rp. 189.045</span>
                                        </div>
                                        <div class="stats-number">
                                            <span class="number-arrow arrow-up"><i class="mdi mdi-arrow-top-right"></i></span>
                                            <span class="number-percent">20%</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
</template>