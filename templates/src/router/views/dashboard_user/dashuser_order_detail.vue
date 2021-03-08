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
                    <router-link tag="a" to="/order" class="d-block text-primary mb-2"><i class="dripicons-chevron-left"></i><h6>Order</h6></router-link>
                </div>
            </div>
        </div>

        <div class="content-page order">
            <div class="section-topbox section-topbox--detail mb-2">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="boxorder-meta mb-3">
                            <h2 class="mr-5">#1234</h2>
                            <p class="labelstatus process">Processing</p>
                        </div>
                        <div class="boxorder-metaction">
                            <p>12 Jun 2020 at 12:20 from Online Shop</p>
                            <p class="action-print">
                                <b-dropdown dropdown class="btn btn-warning btn-sm">
                                    <template v-slot:button-content><i class="dripicons-print mr-2"></i>Print</template>
                                    <template>
                                        <ul>
                                            <li><a href="#">Invoice Print</a></li>
                                            <li><a href="#">Label Print</a></li>
                                        </ul>
                                    </template>
                                </b-dropdown>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <div class="content-recap">
                        <div class="card">
                            <div class="card-body">
                                <div class="recap-list">
                                    <div class="recap-item">
                                        <ul>
                                            <li>
                                                <div class="item-img">
                                                    <span class="unimage"><img src="../../../assets/images/product/img-1.png" alt=""></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item-info">
                                                    <p class="item-title">Nama Produk</p>
                                                    <p class="item-subtitle">Nama Varian</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item-number">
                                                    <p>x 1</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item-price">
                                                    <p>Rp. 3.200.000</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="recap-item">
                                        <ul>
                                            <li>
                                                <div class="item-img">
                                                    <span class="unimage"><img src="../../../assets/images/product/img-1.png" alt=""></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item-info">
                                                    <p class="item-title">Nama Produk</p>
                                                    <p class="item-subtitle">Nama Varian</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item-number">
                                                    <p>x 1</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item-price">
                                                    <p>Rp. 3.200.000</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="recap-note">
                                    <h4 class="card-title">Note : </h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id, et facere quae cumque debitis possimus laborum a, officia at mollitia! Optio laudantium alias officia, quas ea et earum vel.</p>
                                </div>

                                <div class="recap-counting">
                                    <div class="item-number">
                                        <p>Add Discount</p>
                                        <p>-</p>
                                    </div>
                                    <div class="item-number">
                                        <p>Subtotal</p>
                                        <p>Rp. 400.000</p>
                                    </div>
                                    <div class="item-number">
                                        <p>Shipping</p>
                                        <p>Rp. 9.000</p>
                                    </div>
                                    <div class="item-number">
                                        <p><strong>Total</strong></p>
                                        <p><strong>Rp. 409.000</strong></p>
                                    </div>
                                </div>

                                <div class="buttonbox toright">
                                    <button class="btn btn-secondary btn-base">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-payment">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title mb-4">Payment</h4>
                                <div class="payment-info">
                                    <div class="item-status">
                                        <p class="status-title">Status</p>
                                        <p class="status-icon labelstatus canceled">Unpaid</p>
                                    </div>
                                </div>

                                <h4 class="card-title mb-4">Payment Proof</h4>
                                <div class="payment-info proof">
                                    <div class="item-proof">
                                        <div class="proof-img">
                                            <span class="unimage"><img src="../../../assets/images/product/img-1.png" alt=""></span>
                                        </div>
                                        <p class="proof-date">11:00 4/3/20</p>
                                    </div>
                                </div>

                                <div class="buttonbox toright">
                                    <button class="btn btn-secondary mr-3">Deny</button>
                                    <b-button v-b-modal.confirm-payment variant="primary" class="btn-base">Confirm Payment</b-button>
                                    <!-- <button class="btn btn-primary btn-base">Confirm Payment</button> -->
                                </div>
                            </div>
                        </div>

                        <!-- if payment is paid -->
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title mb-4">Payment</h4>
                                <div class="payment-info mb-5">
                                    <div class="item-status mb-3">
                                        <p class="status-title">Status</p>
                                        <p class="status-icon labelstatus process">Paid</p>
                                    </div>
                                    <div class="item-status">
                                        <p class="status-title">BCA - 12345678</p>
                                        <p class="status-icon">11:00 4/3/20</p>
                                    </div>
                                </div>

                                <h4 class="card-title mb-4">Payment Proof</h4>
                                <div class="payment-info proof">
                                    <div class="item-proof">
                                        <div class="proof-img">
                                            <span class="unimage"><img src="../../../assets/images/product/img-1.png" alt=""></span>
                                        </div>
                                        <p class="proof-date">11:00 4/3/20</p>
                                    </div>
                                </div>

                                <div class="buttonbox toright">
                                    <button class="btn btn-secondary">Edit</button>
                                </div>
                            </div>
                        </div>
                        <!-- if payment is paid -->

                    </div>

                    <div class="content-history">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title mb-4">History</h4>
                                <ul class="histolist">
                                    <li class="histolist-item is-done">
                                        <div class="item-history">
                                            <p class="history-title">Completed</p>
                                            <p class="history-date">11:00 4/3/20</p>
                                        </div>
                                    </li>
                                    <li class="histolist-item is-done">
                                        <div class="item-history">
                                            <p class="history-title">Parcel Delivered</p>
                                            <p class="history-date">11:00 4/3/20</p>
                                        </div>
                                    </li>
                                    <li class="histolist-item is-done">
                                        <div class="item-history">
                                            <p class="history-title">Order Sent via JNE</p>
                                            <p class="history-date">11:00 4/3/20</p>
                                        </div>
                                    </li>
                                    <li class="histolist-item is-done">
                                        <div class="item-history">
                                            <p class="history-title">Payment received via BCA</p>
                                            <p class="history-date">11:00 4/3/20</p>
                                        </div>
                                    </li>
                                    <li class="histolist-item is-done">
                                        <div class="item-history">
                                            <p class="history-title">Order Received</p>
                                            <p class="history-date">11:00 4/3/20</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4">
                    <div class="sidebox order">
                        <div class="sbox-status">
                            <div class="card">
                                <div class="card-body">
                                    <div class="input-group">
                                        <select class="custom-select" id="inputGroupSelect04">
                                            <option selected>Change status</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">Enter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sbox-tracking">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title mb-3">Tracking Info</h4>
                                    <div class="track-info mb-3">
                                        <p>JNE - 1234567890</p>
                                        <div class="info-meta">
                                            <span>Shipped on 12 Dec 2019</span>
                                            <span class="meta-delete">Delete</span>
                                        </div>
                                    </div>
                                    <div class="track-action">
                                        <select class="form-control mb-3">
                                            <option selected>Shipping provider</option>
                                            <option>Large select</option>
                                            <option>Small select</option>
                                        </select>
                                        <input type="text" class="form-control mb-3" id="" placeholder="Tracking number">

                                        <div class="buttonbox toright">
                                            <button class="btn btn-primary btn-base" type="button">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sbox-customer">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title mb-3">Customer</h4>
                                    <span class="customer-edit"><a href="#">Edit</a></span>

                                    <div class="customer-info mb-3 btline">
                                        <p><a href="#">John Doe</a></p>
                                    </div>
                                    <div class="customer-contact mb-3 btline">
                                        <p class="cutitle"><strong>Contact</strong></p>
                                        <p>john@gmail.com</p>
                                        <p>081223123123</p>
                                    </div>
                                    <div class="customer-shipping mb-3">
                                        <p class="cutitle"><strong>Shipping Address</strong></p>
                                        Jl. Mangga no 2 Setiabudi, Jakarta Selatan DKI Jakarta 123456
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sbox-note">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title mb-3">Order Notes</h4>
                                    <textarea name="" id="" cols="30" rows="3" class="info mb-2" disabled></textarea>
                                    <textarea name="" id="" cols="30" rows="3" class="info mb-2" disabled></textarea>
                                    <textarea name="" id="" cols="30" rows="4" class="default mb-3"></textarea>
                                    <div class="input-group">
                                        <select class="custom-select" id="inputGroupSelect05">
                                            <option selected>Customer notes</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-modal id="confirm-payment" title="Payment Method" title-class="font-18" :hide-footer="true">
            <div class="modalbox">
                <input type="text" class="form-control">
 
                <div class="buttonbox toright mt-4">
                    <button class="btn btn-secondary btn-base mr-3">Cancel</button>
                    <button class="btn btn-primary btn-base">Enter</button>
                </div>
            </div>
        </b-modal>

    </Layout>
</template>