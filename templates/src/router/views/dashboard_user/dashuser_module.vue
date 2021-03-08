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
                <div class="col-12 col-md-6">
                    <h1>Module</h1>
                </div>
                <div class="col-12 col-md-6">
                    <div class="topbox-items topbox-revert">
                        <div class="items-overview-filter mr-3">
                            <router-link tag="a" to="/module/add" class="btn btn-primary btn-base"><i class="mdi mdi-file-document-box-plus-outline"></i>  Add Module</router-link>
                        </div>
                        <div class="items-overview-setting">
                            <form class="app-search app-search--top d-lg-block"><div class="position-relative"><input type="text" placeholder="Search..." class="form-control"><span class="bx bx-search-alt"></span></div></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-page module">
            <div class="module-list">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">My Module</h4>
                        <div class="table-responsive mb-0">
                            <table class="table table-nowrap thnoline">
                                <thead>
                                    <tr>
                                        <th style="width: 5%;"></th>
                                        <th></th>
                                        <th style="width: 10%;"></th>
                                        <th style="width: 10%;"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input id="chck1" type="checkbox" class="custom-control-input" />
                                                <label for="chck1" class="custom-control-label">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                                <div class="media-body">
                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/module/detail" class="d-block text-primary mb-2">Storage</router-link></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 class="mt-0 font-16"><router-link tag="a" to="/module/detail" class="d-block text-primary mb-2">Details</router-link></h6>
                                        </td>
                                        <td>
                                            <h6 class="mt-0 font-16"><router-link tag="a" to="/" class="d-block text-danger mb-2">Delete</router-link></h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="custom-control custom-checkbox">
                                                <input id="chck1" type="checkbox" class="custom-control-input" />
                                                <label for="chck1" class="custom-control-label">&nbsp;</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="media">
                                                <img src="/img/avatar-6.11d7dc68.jpg" alt="Generic placeholder image" height="64" class="d-flex align-self-start rounded mr-3">
                                                <div class="media-body">
                                                    <h6 class="mt-0 font-16"><router-link tag="a" to="/module/detail" class="d-block text-primary mb-2">Marketplace</router-link></h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6 class="mt-0 font-16"><router-link tag="a" to="/module/detail" class="d-block text-primary mb-2">Details</router-link></h6>
                                        </td>
                                        <td>
                                            <h6 class="mt-0 font-16"><router-link tag="a" to="/" class="d-block text-danger mb-2">Delete</router-link></h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- end table -->
                    </div>
                </div>
            </div>

            <div class="module-recommend">
                <h4>Module Recommendation</h4>
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="recom-item">
                                    <div class="item-img">
                                        <span class="unimage"><img src="../../../assets/images/product/img-1.png" alt=""></span>
                                    </div>
                                    <div class="item-info">
                                        <h5>Ingredient</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, ullam nulla. Quas adipisci molestias voluptatum pariatur sunt eveniet, excepturi et unde expedita enim temporibus dignissimos error, voluptates sint fugiat quia!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="recom-item">
                                    <div class="item-img">
                                        <span class="unimage"><img src="../../../assets/images/product/img-1.png" alt=""></span>
                                    </div>
                                    <div class="item-info">
                                        <h5>Ingredient</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, ullam nulla. Quas adipisci molestias voluptatum pariatur sunt eveniet, excepturi et unde expedita enim temporibus dignissimos error, voluptates sint fugiat quia!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="recom-item">
                                    <div class="item-img">
                                        <span class="unimage"><img src="../../../assets/images/product/img-1.png" alt=""></span>
                                    </div>
                                    <div class="item-info">
                                        <h5>Ingredient</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, ullam nulla. Quas adipisci molestias voluptatum pariatur sunt eveniet, excepturi et unde expedita enim temporibus dignissimos error, voluptates sint fugiat quia!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="recom-item">
                                    <div class="item-img">
                                        <span class="unimage"><img src="../../../assets/images/product/img-1.png" alt=""></span>
                                    </div>
                                    <div class="item-info">
                                        <h5>Ingredient</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, ullam nulla. Quas adipisci molestias voluptatum pariatur sunt eveniet, excepturi et unde expedita enim temporibus dignissimos error, voluptates sint fugiat quia!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                        <div class="buttonbox toright">
                            <button class="btn btn-primary btn-base">More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
</template>