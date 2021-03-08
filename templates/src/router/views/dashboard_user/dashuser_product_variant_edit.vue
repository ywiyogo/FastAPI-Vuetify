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
                    <router-link tag="a" to="/product/new" class="d-block text-primary mb-2 router-link-active"><i class="dripicons-chevron-left"></i><h6>Product</h6></router-link>
                </div>
            </div>
        </div>

        <div class="content-page product variant">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-xl-12">
                        <h2>Edit Variant</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-4">
                    <div class="sidebox variant">
                        <div class="card">
                            <div class="card-body">
                                <div class="variant-box mb-4">
                                    <h5 class="card-title">Variant</h5>

                                    <div class="variant-list">
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios1">
                                                <div class="media">
                                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                    <div class="media-body">
                                                        <h6 class="mt-0 font-16"><router-link tag="a" to="/" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                <div class="media">
                                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                    <div class="media-body">
                                                        <h6 class="mt-0 font-16"><router-link tag="a" to="/" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                            <label class="form-check-label" for="exampleRadios2">
                                                <div class="media">
                                                    <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                    <div class="media-body">
                                                        <h6 class="mt-0 font-16"><router-link tag="a" to="/" class="d-block text-primary mb-2">Biru Garis</router-link></h6>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="col-xl-8">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                        
                                    <div class="form-group">
                                        <label for="">Price</label>
                                        <input type="text" class="form-control" id="" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Compared Price</label>
                                        <input type="text" class="form-control" id="" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Cost</label>
                                        <input type="text" class="form-control" id="" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="">SKU</label>
                                        <input type="text" class="form-control" id="" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Weight</label>
                                        <input type="text" class="form-control" id="" placeholder="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title mb-4">Inventory</h5>
                                    <div class="variant-source">
                                        <div class="source-title mb-3">
                                            <p><strong>Ingredient</strong></p>
                                            <p><strong>Quantity</strong></p>
                                        </div>
                                        <div class="source-list mb-3">
                                            <div class="list-title">
                                                <a href="#" class="mt-2">Gudang 1</a>
                                            </div>
                                            <div class="list-input">
                                                <input type="text" class="form-control" id="" placeholder="">
                                            </div>
                                        </div>
                                        <div class="source-list mb-3">
                                            <div class="list-title">
                                                <a href="#" class="mt-2">Gudang 1</a>
                                            </div>
                                            <div class="list-input">
                                                <input type="text" class="form-control" id="" placeholder="">
                                            </div>
                                        </div>
                                        <div class="source-list mb-3">
                                            <div class="list-title">
                                                <a href="#" class="mt-2">Gudang 1</a>
                                            </div>
                                            <div class="list-input">
                                                <input type="text" class="form-control" id="" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title mb-4">Basic Ingredient</h5>
                                    <div class="variant-source">
                                        <div class="form-group">
                                            <label for="">Select Ingredient</label>
                                            <input type="text" class="form-control" id="" placeholder="Search">
                                        </div>

                                        <div class="source-title mb-3">
                                            <p><strong>Ingredient</strong></p>
                                            <p><strong>Quantity</strong></p>
                                        </div>
                                        <div class="source-list mb-3">
                                            <div class="list-title">
                                                <a href="#" class="mt-2">Milk</a>
                                            </div>
                                            <div class="list-input">
                                                <input type="text" class="form-control" id="" placeholder="">
                                            </div>
                                        </div>
                                        <div class="source-list mb-3">
                                            <div class="list-title">
                                                <a href="#" class="mt-2">Coffee</a>
                                            </div>
                                            <div class="list-input">
                                                <input type="text" class="form-control" id="" placeholder="">
                                            </div>
                                        </div>
                                        <div class="source-list mb-3">
                                            <div class="list-title">
                                                <a href="#" class="mt-2">Cup</a>
                                            </div>
                                            <div class="list-input">
                                                <input type="text" class="form-control" id="" placeholder="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>  
                 
                 <div class="col-lg-6">
                     <button class="btn btn-danger">Delete</button>
                 </div>
                 <div class="col-lg-6">
                     <div class="buttonbox toright">
                        <button type="button" class="btn btn-secondary mr-3">Discard</button>
                        <button type="button" class="btn btn-primary">Add Storage</button>
                    </div>
                 </div>
            </div>
        </div>

    </Layout>
</template>