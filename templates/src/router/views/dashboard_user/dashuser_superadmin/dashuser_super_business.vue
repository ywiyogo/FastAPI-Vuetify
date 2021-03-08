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
                    <h1>Business</h1>
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

        <div class="content-page sadmin sbusiness">
            <div class="row">
                <div class="col-lg-12">
                    <div class="order-type">
                        <ul>
                            <li><a href="#" class="active">All</a></li>
                            <li><a href="#">Starter</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Enterprise</a></li>
                        </ul>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive mb-0">
                                <table class="table table-centered table-nowrap">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>ID</th>
                                            <th>Business Name</th>
                                            <th>Business Category</th>
                                            <th>Plan</th>
                                            <th>Domain</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><p>Ayam Nikmat</p></td>
                                            <td><p>Food and Beverage</p></td>
                                            <td><p class="planlabel starter">Starter</p></td>
                                            <td><a href="#">ayam.stocave.com</a></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><p>Ayam Nikmat</p></td>
                                            <td><p>Food and Beverage</p></td>
                                            <td><p class="planlabel business">Business</p></td>
                                            <td><a href="#">ayam.stocave.com</a></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><p>Ayam Nikmat</p></td>
                                            <td><p>Food and Beverage</p></td>
                                            <td><p class="planlabel enterprise">Enterprise</p></td>
                                            <td><a href="#">ayam.stocave.com</a></td>
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