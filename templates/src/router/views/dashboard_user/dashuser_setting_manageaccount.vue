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
                    <router-link tag="a" to="/setting/" class="d-block text-primary mb-2 router-link-active"><i class="dripicons-chevron-left"></i><h6>Settings</h6></router-link>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>

        <div class="content-page setting manageaccount">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-8 col-md-6 col-xl-6">
                        <div class="">
                            <h2>Manage Account</h2>
                        </div>
                    </div>
                    <div class="col-8 col-md-6 col-xl-6">
                        <div class="topbox-items topbox-revert">
                            <div class="items-overview-filter mr-3">
                                <router-link tag="a" to="/setting/manageaccountadd" class="btn btn-primary"><i class="mdi mdi-file-document-box-plus-outline"></i> Add Account</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-md-12 col-xl-12">
                    <div class="storage-box">

                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive mb-0">
                                    <table class="table table-centered table-nowrap">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Last Login</th>
                                                <th>Role</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="/setting/manageaccountdetails">Donald Trubus</a>
                                                </td>
                                                <td>
                                                    <p>donald@gmail.com</p>
                                                </td>
                                                <td>
                                                    <p>15 Jun 2020, 13.20</p>
                                                </td>
                                                <td>
                                                    <p>Store Owner</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="/setting/manageaccountdetails">Donald Jco</a>
                                                </td>
                                                <td>
                                                    <p>donald@gmail.com</p>
                                                </td>
                                                <td>
                                                    <p>15 Jun 2020, 13.20</p>
                                                </td>
                                                <td>
                                                    <p>Staff</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>