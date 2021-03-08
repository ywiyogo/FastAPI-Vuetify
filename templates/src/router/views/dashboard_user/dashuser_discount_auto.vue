<script>
import Layout from "../../layouts/sto-main";
import DiscountSto from "@/components/widgets/sto/sto_discount";

export default {
    components: { Layout, DiscountSto },

    data() {
        return {
            discsto: [
                {
                    name: "Promo Lebaran",
                    term: "20% off from total",
                    status: "Active",
                    use: "2",
                    period: "10 Mar - 1 Jun",
                    index: 1
                },
                {
                    name: "Beli Banyak",
                    term: "Buy 2 get 3",
                    status: "Active",
                    use: "2",
                    period: "10 Mar - 1 Jun",
                    index: 2
                },
                {
                    name: "Promo Pembeli",
                    term: "10% with minimum Order of Rp. 100.000",
                    status: "Expired",
                    use: "2",
                    period: "10 Mar - 1 Jun",
                    index: 3
                }
            ]
        };
    }
}

</script>

<template>
    <Layout>

        <div class="section-topbox mb-3">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <h1>Automatic Discount</h1>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="topbox-items topbox-revert">
                        <div class="items-overview-filter mr-3">
                            <a href="/discount/auto/add" class="btn btn-primary"><i class="mdi mdi-file-document-box-plus-outline"></i> Add Discount</a>
                        </div>
                        <div class="items-overview-setting">
                            <form class="app-search app-search--top d-lg-block"><div class="position-relative"><input type="text" placeholder="Search..." class="form-control"><span class="bx bx-search-alt"></span></div></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-page discount auto">
            <div class="row">
                <div class="col-lg-12">
                    <div class="order-type">
                        <ul>
                            <li><a href="#" class="active">All</a></li>
                            <li><a href="#">Active</a></li>
                            <li><a href="#">Expired</a></li>
                            <li><a href="#">Draft</a></li>
                        </ul>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <!-- Transactions table -->
                            <DiscountSto :discsto="discsto" />
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
        </div>

    </Layout>
</template>