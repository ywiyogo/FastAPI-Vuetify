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
                <div class="col-12">
                    <router-link tag="a" to="/product/ingredient" class="d-block text-primary mb-2"><i class="dripicons-chevron-left"></i><h6>Ingredient</h6></router-link>
                </div>
            </div>
        </div>

        <div class="content-page product ingredient">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-12">
                        <h2>Milk</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-8">
                    <div class="ingredient-form">
                        <div class="card">
                            <div class="card-body">
                                <label for="">Name</label>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="" placeholder="">
                                </div>
                                <label for="">Unit</label>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="" placeholder="kg, ml, pcs, etc">
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive mb-0">
                                    <table class="table table-borderless table-nowrap">
                                        <thead>
                                            <tr>
                                                <th style="width: 20%;">Price</th>
                                                <th style="width: 20%;">Unit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Rp. 10.000">
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="unit-box">
                                                        <span class="unit-title">Per</span>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="1.000">
                                                            <div class="input-group-append">
                                                                <span class="input-group-text">Ml</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Inventory</h4>
                                <div class="table-responsive mb-0">
                                    <table class="table table-borderless table-nowrap">
                                        <thead>
                                            <tr>
                                                <th style="width: 20%;">Storage</th>
                                                <th style="width: 20%;">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage" class="d-block text-primary mb-2">Gudang 1</router-link></h6>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="1.000">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">Ml</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage" class="d-block text-primary mb-2">Gudang 1</router-link></h6>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="1.000">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">Ml</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/product/storage" class="d-block text-primary mb-2">Gudang 1</router-link></h6>
                                                </td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="1.000">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">Ml</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="button-box">
                            <button type="button" class="btn btn-danger">Delete Customer</button>
                        </div>
                    </div>
                </div>  

                <div class="col-xl-4">

                    <div class="sidebar-ingredient">
                        <div class="card">
                            <div class="card-body">
                                <div class="ingredient-box">
                                    <h4 class="card-title">Ingredient Category</h4>
                                    <select class="form-control mt-3">
                                        <option>Choose Category</option>
                                        <option>Large select</option>
                                        <option>Small select</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="ingredient-box">
                                    <h4 class="card-title">Low Alert</h4>
                                    <p>An alert will be sent when the ingredient level below the following amount</p>
                                    <div class="input-group mb-3 mt-3">
                                        <input type="text" class="form-control" placeholder="1.000">
                                        <div class="input-group-append">
                                            <span class="input-group-text">Ml</span>
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