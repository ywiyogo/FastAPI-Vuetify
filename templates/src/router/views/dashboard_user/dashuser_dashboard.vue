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

        <div class="content-page dashboard">
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
                                <p class="partbox-title">Order</p>
                                <p class="partbox-number">27</p>
                                <div class="partbox-stats">
                                    <div class="stats-info">
                                        <span>Previous Period</span>
                                        <span>18</span>
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
                                <p class="partbox-title">Item Sold</p>
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
            </div>

            <div class="row">
                <div class="col-lg-12 col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Total Sales</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Top Product</h4>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Sales Channel</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Recent Order</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>