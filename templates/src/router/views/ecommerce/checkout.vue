<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Product-checkout Component
 */
export default {
   page: {
    title: "Checkout",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Checkout",
      items: [
        {
          text: "Ecommerce",
          href: "/"
        },
        {
          text: "Checkout",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="checkout-tabs">
      <b-tabs pills vertical nav-class="p-0" nav-wrapper-class="col-lg-2 w-100">
        <b-tab active>
          <template v-slot:title>
            <i class="bx bxs-truck d-block check-nav-icon mt-4 mb-2"></i>
            <p class="font-weight-bold mb-4">Shipping Info</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Shipping information</h4>
                <p class="card-title-desc">Fill all information below</p>
                <form>
                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="input-name">Name</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-input id="input-name" placeholder="Enter your name"></b-form-input>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="billing-email-address">Email Address</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-input id="billing-email-address" placeholder="Enter your email"></b-form-input>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="billing-phone">Phone</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-input id="billing-phone" placeholder="Enter your Phone no."></b-form-input>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="billing-address">Address</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-textarea
                        id="billing-address"
                        rows="3"
                        placeholder="Enter full address"
                      ></b-form-textarea>
                    </b-col>
                  </b-row>

                  <div class="form-group row mb-4">
                    <label class="col-md-2 col-form-label">Country</label>
                    <div class="col-md-10">
                      <select class="form-control" title="Country">
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Cote d'Ivoire</option>
                        <option value="HR">Croatia (Hrvatska)</option>
                        <option value="CU">Cuba</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libyan Arab Jamahiriya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macau</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PW">Palau</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint LUCIA</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia (Slovak Republic)</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SH">St. Helena</option>
                        <option value="PM">St. Pierre and Miquelon</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands (British)</option>
                        <option value="VI">Virgin Islands (U.S.)</option>
                        <option value="WF">Wallis and Futuna Islands</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group row mb-4">
                    <label class="col-md-2 col-form-label">States</label>
                    <div class="col-md-10">
                      <select
                        class="form-control select2 select2-hidden-accessible"
                        title="Country"
                        data-select2-id="4"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="0" data-select2-id="6">Select States</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="DE">Delaware</option>
                        <option value="Fl">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="MT">Montana</option>
                        <option value="NV">Nevada</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Dakota</option>
                        <option value="TX">Texas</option>
                        <option value="VA">Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="example-textarea">Order Notes:</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-textarea
                        id="example-textarea"
                        rows="3"
                        placeholder="Write some note.."
                      ></b-form-textarea>
                    </b-col>
                  </b-row>
                </form>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <router-link
                  tag="a"
                  to="/ecommerce/cart"
                  class="btn text-muted d-none d-sm-inline-block btn-link"
                >
                  <i class="mdi mdi-arrow-left mr-1"></i> Back to Shopping Cart
                </router-link>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="text-sm-right">
                  <router-link tag="a" to="/ecommerce/checkout" class="btn btn-success">
                    <i class="mdi mdi-truck-fast mr-1"></i> Proceed to Shipping
                  </router-link>
                </div>
              </div>
              <!-- end col -->
            </div>
          </b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <i class="bx bx-money d-block check-nav-icon mt-4 mb-2"></i>
            <p class="font-weight-bold mb-4">Payment Info</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Payment information</h4>
                  <p class="card-title-desc">Fill all information below</p>

                  <div>
                    <div class="custom-control custom-radio custom-control-inline mr-4">
                      <input
                        id="customRadioInline1"
                        type="radio"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadioInline1">
                        <i class="fab fa-cc-mastercard mr-1 font-size-20 align-top"></i> Credit / Debit Card
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline mr-4">
                      <input
                        id="customRadioInline2"
                        type="radio"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="customRadioInline2">
                        <i class="fab fa-cc-paypal mr-1 font-size-20 align-top"></i> Paypal
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline mr-4">
                      <input
                        id="customRadioInline3"
                        type="radio"
                        name="customRadioInline1"
                        class="custom-control-input"
                        checked
                      />
                      <label class="custom-control-label" for="customRadioInline3">
                        <i class="far fa-money-bill-alt mr-1 font-size-20 align-top"></i> Cash on Delivery
                      </label>
                    </div>
                  </div>

                  <h5 class="mt-5 mb-3 font-size-15">For card Payment</h5>
                  <div class="p-4 border">
                    <form>
                      <b-form-group
                        id="input-group-2"
                        label="Card Number"
                        label-for="input-card"
                        class="mb-0"
                      >
                        <b-form-input id="input-card" placeholder="0000 0000 0000 0000"></b-form-input>
                      </b-form-group>

                      <b-row class="mt-4">
                        <b-col lg="6">
                          <b-form-group
                            id="input-group-2"
                            label="Name on card"
                            label-for="input-number"
                            class="mb-0"
                          >
                            <b-form-input id="input-number" placeholder="Name on Card"></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col lg="3">
                          <b-form-group
                            id="input-group-2"
                            label="Expiry date"
                            label-for="input-date"
                            class="mb-0"
                          >
                            <b-form-input id="input-date" placeholder="MM/YY"></b-form-input>
                          </b-form-group>
                        </b-col>

                        <b-col lg="3">
                          <b-form-group
                            id="input-group-2"
                            label="CVV Code"
                            label-for="cvvcodeInput"
                            class="mb-0"
                          >
                            <b-form-input id="cvvcodeInput" placeholder="Enter CVV Code"></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <router-link
                  tag="a"
                  to="/ecommerce/cart"
                  class="btn text-muted d-none d-sm-inline-block btn-link"
                >
                  <i class="mdi mdi-arrow-left mr-1"></i> Back to Shopping Cart
                </router-link>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="text-sm-right">
                  <router-link tag="a" to="/ecommerce/checkout" class="btn btn-success">
                    <i class="mdi mdi-truck-fast mr-1"></i> Proceed to Shipping
                  </router-link>
                </div>
              </div>
              <!-- end col -->
            </div>
          </b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <i class="bx bx-badge-check d-block check-nav-icon mt-4 mb-2"></i>
            <p class="font-weight-bold mb-4">Confirmation</p>
          </template>
          <b-card-text>
            <div class="card shadow-none border mb-0">
              <div class="card-body">
                <h4 class="card-title mb-4">Order Summary</h4>

                <div class="table-responsive">
                  <table class="table table-centered mb-0 table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Product Desc</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img
                            src="@/assets/images/product/img-1.png"
                            alt="product-img"
                            title="product-img"
                            class="avatar-md"
                          />
                        </th>
                        <td>
                          <h5 class="font-size-14 text-truncate">
                            <router-link
                              tag="a"
                              to="/ecommerce/product-detail"
                              class="text-dark"
                            >Half sleeve T-shirt (64GB)</router-link>
                          </h5>
                          <p class="text-muted mb-0">$ 450 x 1</p>
                        </td>
                        <td>$ 450</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img
                            src="@/assets/images/product/img-7.png"
                            alt="product-img"
                            title="product-img"
                            class="avatar-md"
                          />
                        </th>
                        <td>
                          <h5 class="font-size-14 text-truncate">
                            <router-link
                              tag="a"
                              to="/ecommerce/product-detail"
                              class="text-dark"
                            >Wirless Headphone</router-link>
                          </h5>
                          <p class="text-muted mb-0">$ 225 x 1</p>
                        </td>
                        <td>$ 225</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h6 class="m-0 text-right">Sub Total:</h6>
                        </td>
                        <td>$ 675</td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <div class="bg-soft-primary p-3 rounded">
                            <h5 class="font-size-14 text-primary mb-0">
                              <i class="fas fa-shipping-fast mr-2"></i> Shipping
                              <span class="float-right">Free</span>
                            </h5>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h6 class="m-0 text-right">Total:</h6>
                        </td>
                        <td>$ 675</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <router-link
                  tag="a"
                  to="/ecommerce/cart"
                  class="btn text-muted d-none d-sm-inline-block btn-link"
                >
                  <i class="mdi mdi-arrow-left mr-1"></i> Back to Shopping Cart
                </router-link>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="text-sm-right">
                  <router-link tag="a" to="/ecommerce/checkout" class="btn btn-success">
                    <i class="mdi mdi-truck-fast mr-1"></i> Proceed to Shipping
                  </router-link>
                </div>
              </div>
              <!-- end col -->
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>
