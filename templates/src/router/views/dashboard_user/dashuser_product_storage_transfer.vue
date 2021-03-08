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
                    <div class="col-xl-6">
                        <div class="">
                            <h2>Product Transfer</h2>
                        </div>
                    </div>
                    <div class="col-6">
                    </div>
                </div>
            </div>
            
            <form role="form" class="form-horizontal">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="form-row form-group">
                                    <label for="from" class="col-sm-2 col-lg-2 col-form-label">From</label>
                                    <input id="formfrom" type="text" placeholder="Gudang 1" class="form-control col-sm-10" disabled>
                                </div>
                            </div> 
                            <div class="col-xl-6">
                                <div class="form-row form-group">
                                    <label for="to" class="col-sm-2 col-lg-2 col-form-label">To</label>
                                    <input id="formto" type="text" placeholder="Gudang Tujuan" class="form-control col-sm-10">
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="section-topbox alter mb-3">
                            <div class="topbox-items">
                                <div class="items-overview-filter mr-3">
                                    <button type="submit" class="btn btn-primary btn-base"><i class="mdi mdi-cube-send"></i> Send</button>
                                </div>
                                <div class="items-overview-filter mr-3">
                                    <router-link tag="a" to="/" class="btn btn-secondary btn-base">Discard</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            
            <div class="row">
                <div class="col-xl-12">
                    <div class="storage-box">
                        <div class="card">
                            <div class="card-body">
                                <form class="app-search d-none d-lg-block"><div class="position-relative"><input type="text" placeholder="Search..." class="form-control"><span class="bx bx-search-alt"></span></div></form>

                                <div class="table-responsive mb-0">
                                    <table class="table table-centered table-nowrap">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Product</th>
                                                <th>Quantity</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="media">
                                                        <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru garis</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><input id="" type="text" placeholder="" class="form-control col-lg-2"></td>
                                                <td><i class="bx bx-trash"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="media">
                                                        <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru garis</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>50</td>
                                                <td><i class="bx bx-trash"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="media">
                                                        <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                                        <div class="media-body">
                                                            <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage/detail" class="d-block text-primary mb-2">Biru garis</router-link></h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><input id="" type="text" placeholder="" class="form-control col-lg-2"></td>
                                                <td><i class="bx bx-trash"></i></td>
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