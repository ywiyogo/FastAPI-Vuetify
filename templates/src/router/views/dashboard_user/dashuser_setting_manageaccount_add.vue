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
                    <router-link tag="a" to="/setting/manageaccount" class="d-block text-primary mb-2 router-link-active"><i class="dripicons-chevron-left"></i><h6>Manage Account</h6></router-link>
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
                            <h2>Add Account</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-8 col-12">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 col-md-12 col-xl-6">
                    <div class="maddaccount-box">

                        <form action="#">
                            <div class="account-details">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Details</h4>
                                        <div class="form-row mb-3">
                                            <div class="col">
                                                <input type="text" class="form-control" id="" placeholder="First Name">
                                            </div>
                                            <div class="col">
                                                <input type="text" class="form-control" id="" placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="form-group marginbot-20">
                                            <input type="text" class="form-control" id="" placeholder="Email">
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input id="customCheck" type="checkbox" class="custom-control-input" />
                                            <label class="custom-control-label" for="customCheck">This account has full permission</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="account-permission">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="table-responsive mb-0">
                                            <table class="table table-centered table-nowrap">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>Section</th>
                                                        <th>Permission</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><p>Dashboard</p></td>
                                                        <td>
                                                            <ul class="nolist nolist__permission">
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio1"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio1">Read</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Order</p></td>
                                                        <td>
                                                            <ul class="nolist nolist__permission">
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio2"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio2">Read</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio3"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio3">Edit</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Product</p></td>
                                                        <td>
                                                            <ul class="nolist nolist__permission">
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio4"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio4">Read</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio5"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio5">Edit</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Discount</p></td>
                                                        <td>
                                                            <ul class="nolist nolist__permission">
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio6"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio6">Read</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio6"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio6">Edit</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Customer</p></td>
                                                        <td>
                                                            <ul class="nolist nolist__permission">
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio7"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio7">Read</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio7"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio7">Edit</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Analytics</p></td>
                                                        <td>
                                                            <ul class="nolist nolist__permission">
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio8"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio8">Read</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Online Shop</p></td>
                                                        <td>
                                                            <ul class="nolist nolist__permission">
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio9"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio9">Read</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio10"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio10">Edit</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><p>Settings</p></td>
                                                        <td>
                                                            <ul class="nolist nolist__permission">
                                                                <li>
                                                                    <div class="custom-control custom-radio">
                                                                        <input
                                                                        type="radio"
                                                                        id="customRadio11"
                                                                        name="customRadio"
                                                                        class="custom-control-input"
                                                                        />
                                                                        <label class="custom-control-label" for="customRadio11">Read</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6 col-lg-6">
                                    <button class="btn btn-danger">Delete</button>
                                </div>
                                <div class="col-6 col-lg-6">
                                    <div class="buttonbox toright">
                                        <button type="button" class="btn btn-secondary mr-3">Cancel</button>
                                        <button type="button" class="btn btn-primary">Invite</button>
                                    </div>
                                </div>
                            </div>

                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>