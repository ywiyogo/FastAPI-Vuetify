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
                    <h1>Discount</h1>
                </div>
                <div class="col-6">
                    <div class="topbox-items">
                        <div class="items-overview-filter mr-3">
                            <a href="#" class="btn btn-primary">Loyalty Program</a>
                        </div>
                        <div class="items-overview-filter mr-3">
                            <a href="#" class="btn btn-primary">Add Customer</a>
                        </div>
                        <div class="items-overview-setting mr-5">
                            <form class="app-search app-search--top d-none d-lg-block"><div class="position-relative"><input type="text" placeholder="Search..." class="form-control"><span class="bx bx-search-alt"></span></div></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
</template>