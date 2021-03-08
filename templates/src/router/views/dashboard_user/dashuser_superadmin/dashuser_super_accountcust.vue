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
                    <h1>Customer</h1>
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

        <div class="content-page sadmin saccount">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive mb-0">
                                <table class="table table-centered table-nowrap">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Business</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><p>Donald Trubus</p></td>
                                            <td><p>donald@gmail.com</p></td>
                                            <td><a href="#">Toko Ayam</a></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><p>Donald Trubus</p></td>
                                            <td><p>donald@gmail.com</p></td>
                                            <td><a href="#">Toko Ayam</a></td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">1242</a></td>
                                            <td><p>Donald Trubus</p></td>
                                            <td><p>donald@gmail.com</p></td>
                                            <td>
                                                <p><a href="#">Toko Ayam</a></p>
                                                <p><a href="#">Toko Ayam</a></p>
                                                <p><a href="#">Toko Ayam</a></p>
                                            </td>
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