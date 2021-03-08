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
                    <router-link tag="a" to="/setting/" class="d-block text-primary mb-2"><i class="dripicons-chevron-left"></i><h6>Settings</h6></router-link>
                </div>
                <div class="col-6">
                </div>
            </div>
        </div>

        <div class="content-page setting">
            <div class="section-topbox section-topbox--detail mb-3">
                <div class="row">
                    <div class="col-12 col-md-6 col-xl-6">
                        <div class="">
                            <h2>Payment Provider</h2>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="topbox-items topbox-revert topbox-nomt">
                            <b-button v-b-modal.add-bank-account variant="primary"><i class="mdi mdi-file-document-box-plus-outline"></i> Add Bank Account</b-button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xl-12">
                    <div class="storage-box">

                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title mb-3">Bank Account</h4>
                                <div class="table-responsive mb-0">
                                    <table class="table table-centered table-nowrap">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Bank</th>
                                                <th>Account Number</th>
                                                <th>Name</th>
                                                <th>Payment Check</th>
                                                <th style="width: 20%;">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="media">
                                                        <img src="../../../assets/images/icon/icon-shopee.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                    </div>
                                                </td>
                                                <td>12345678910</td>
                                                <td>Donald Trubus</td>
                                                <td><p class="labelstatus bg-soft-success text-success">Automatic</p></td>
                                                <td>
                                                    <ul class="nolist nolist__action">
                                                        <li class="act-bankconn">
                                                            <a href="javascript:void(0);" v-b-modal.bank-connect title="Bank Connect"><i class="mdi mdi-bank-transfer"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" v-b-modal.add-bank-account title="Edit"><i class="mdi mdi-file-document-edit-outline"></i></a>
                                                        </li>
                                                        <li class="act-delete">
                                                            <a href="javascript:void(0);" title="Delete"><i class="mdi mdi-delete-forever"></i></a>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                           <tr>
                                                <td>
                                                    <div class="media">
                                                        <img src="../../../assets/images/icon/icon-shopee.png" alt="Generic placeholder image" height="48" class="d-flex align-self-start rounded mr-3">
                                                    </div>
                                                </td>
                                                <td>12345678910</td>
                                                <td>Donald Trubus</td>
                                                <td><p class="labelstatus bg-soft-cancel text-cancel">Manual</p></td>
                                                <td>
                                                    <ul class="nolist nolist__action">
                                                        <li class="act-bankconn">
                                                            <a href="javascript:void(0);" v-b-modal.bank-connect title="Bank Connect"><i class="mdi mdi-bank-transfer"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" v-b-modal.add-bank-account title="Edit"><i class="mdi mdi-file-document-edit-outline"></i></a>
                                                        </li>
                                                        <li class="act-delete">
                                                            <a href="javascript:void(0);" title="Delete"><i class="mdi mdi-delete-forever"></i></a>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <p>Connect your online banking account to automated the payment address.</p>

                    </div>
                </div>
            </div>
        </div>

        <b-modal id="add-bank-account" title="Bank Account" title-class="font-18" :hide-footer="true">
            <div class="modalbox">
                <div class="form-group">
                    <label for="">Bank Name</label>
                    <input type="text" class="form-control" id="" placeholder="Ex: Mandiri">
                </div>
                <div class="form-group">
                    <label for="">Account Number</label>
                    <input type="text" class="form-control" id="" placeholder="">
                </div>
                <div class="form-group">
                    <label for="">Account Name</label>
                    <input type="text" class="form-control" id="" placeholder="">
                </div>

                <div class="buttonbox toright mt-4">
                    <button class="btn btn-secondary btn-base mr-3">Cancel</button>
                    <button class="btn btn-primary btn-base">Enter</button>
                </div>
            </div>
        </b-modal>

        <b-modal id="bank-connect" title="Bank Connect" title-class="font-18" :hide-footer="true">
            <div class="modalbox">
                <h4 class="mb-4">Bank Name</h4>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" id="" placeholder="Ex: Mandiri">
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" id="" placeholder="">
                </div>
                <p>By connecting yout online bank account, our system will automatically verified the payment, and proceed the order.</p>

                <div class="buttonbox toright mt-4">
                    <button class="btn btn-secondary btn-base mr-3">Cancel</button>
                    <button class="btn btn-primary btn-base">Enter</button>
                </div>
            </div>
        </b-modal>

    </Layout>
</template>