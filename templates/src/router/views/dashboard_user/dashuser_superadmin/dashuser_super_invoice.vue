<script>
import Layout from "../../../layouts/sto-main";

export default {
    components: { Layout }
}

</script>

<template>
    <Layout>

        <div class="section-topbox mb-3">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <h1>Invoice</h1>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="topbox-items topbox-revert">
                        
                        <div class="items-overview-setting">
                            <form class="app-search app-search--top d-lg-block"><div class="position-relative"><input type="text" placeholder="Search..." class="form-control"><span class="bx bx-search-alt"></span></div></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-page sadmin sinvoice">
            <div class="row">
                <div class="col-lg-6 col-xl-3">
                    <div class="card">
                        <div class="card-body box-overview">
                            <a href="#">
                                <p class="partbox-title">Total Invoice</p>
                                <p class="partbox-number">Rp. 32.343.000</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-3">
                    <div class="card">
                        <div class="card-body box-overview">
                            <a href="#">
                                <p class="partbox-title">Paid Invoice</p>
                                <p class="partbox-number">Rp. 32.343.000</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-3">
                    <div class="card">
                        <div class="card-body box-overview">
                            <a href="#">
                                <p class="partbox-title">Unpaid Invoice</p>
                                <p class="partbox-number">Rp. 32.343.000</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-3">
                    <div class="card">
                        <div class="card-body box-overview">
                            <a href="#">
                                <p class="partbox-title">Overdue</p>
                                <p class="partbox-number">Rp. 32.343.000</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="order-type">
                        <ul>
                            <li><a href="#" class="active">All</a></li>
                            <li><a href="#">Unpaid</a></li>
                            <li><a href="#">Paid</a></li>
                            <li><a href="#">Payment Proof</a></li>
                        </ul>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive mb-0">
                                <table class="table table-centered table-nowrap">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>Invoice</th>
                                            <th>Business Name</th>
                                            <th>Invoice Date</th>
                                            <th>Due Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><a href="#">Ayam Nikmat</a></td>
                                            <td><p>18 June 2020</p></td>
                                            <td><p>19 June 2020</p></td>
                                            <td><p>Rp. 100.000</p></td>
                                            <td><p class="labelstatus bg-soft-cancel text-cancel">Unpaid</p></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><a href="#">Ayam Nikmat</a></td>
                                            <td><p>18 June 2020</p></td>
                                            <td><p>19 June 2020</p></td>
                                            <td><p>Rp. 100.000</p></td>
                                            <td><p class="labelstatus bg-soft-success text-success">Paid</p></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><a href="#">Ayam Nikmat</a></td>
                                            <td><p>18 June 2020</p></td>
                                            <td><p>19 June 2020</p></td>
                                            <td><p>Rp. 100.000</p></td>
                                            <td><p class="labelstatus bg-soft-warning text-warning">Payment Proof</p></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><a href="#">Ayam Nikmat</a></td>
                                            <td><p>18 June 2020</p></td>
                                            <td><p>19 June 2020</p></td>
                                            <td><p>Rp. 100.000</p></td>
                                            <td><p class="labelstatus bg-soft-secondary text-secondary">Cancel</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
        </div>

    </Layout>
</template>