<script>
import MetisMenu from "metismenujs/dist/metismenujs";

export default {
  components: {},
  mounted: function() {
    document.body.setAttribute("data-sidebar", "dark");
    // eslint-disable-next-line no-unused-vars
    var menuRef = new MetisMenu("#side-menu");
    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("mm-active");
        const parent2 = parent.parentElement.closest("ul");
        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("mm-active");
            var childAnchor = parent3.querySelector(".has-arrow");
            var childDropdown = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("mm-active");
            if (childDropdown) childDropdown.classList.add("mm-active");

            const parent4 = parent3.parentElement;
            if (parent4) parent4.classList.add("mm-show");
            const parent5 = parent4.parentElement;
            if (parent5) parent5.classList.add("mm-active");
          }
        }
      }
    }
  },
  methods: {
    lightSidebar() {
      document.body.setAttribute("data-topbar", "dark");
      document.body.removeAttribute("data-sidebar");
      document.body.removeAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-sidebar-size", "small");
      document.body.classList.remove("vertical-collpsed");
    },
    compactSidebar() {
      document.body.setAttribute("data-sidebar-size", "small");
      document.body.setAttribute("data-sidebar", "dark");
      document.body.removeAttribute("data-layout-size", "boxed");
      document.body.classList.remove("vertical-collpsed");
      document.body.removeAttribute("data-topbar", "dark");
    },
    iconSidebar() {
      document.body.setAttribute("data-keep-enlarged", "true");
      document.body.classList.add("vertical-collpsed");
      document.body.setAttribute("data-sidebar", "dark");
      document.body.removeAttribute("data-topbar", "dark");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
    boxedLayout() {
      document.body.setAttribute("data-keep-enlarged", "true");
      document.body.classList.add("vertical-collpsed");
      document.body.setAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-sidebar", "colored");
      document.body.setAttribute("data-sidebar", "dark");
      document.body.removeAttribute("data-topbar", "dark");
    },
    coloredSidebar() {
      document.body.setAttribute("data-sidebar", "colored");
      document.body.removeAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-sidebar-size", "small");
      document.body.classList.remove("vertical-collpsed");
    }
  }
};
</script>

<template>
  <!-- ========== Left Sidebar Start ========== -->

  <!--- Sidemenu -->
  <div id="sidebar-menu">
    <!-- Left Menu Start -->
    <div class="store-menu">

    </div>
    <ul id="side-menu" class="metismenu list-unstyled">

        <li class="store-nav">
          <a href="javascript: void(0);" class="has-arrow icolink">
            <span class="iconav icproduct"></span>
            <span>Store Name</span>
          </a>
          <ul class="sub-menu" aria-expanded="false">
            <li>
              <router-link tag="a" to="/" class="side-nav-link-ref">Business Name</router-link>
              <p class="store-plan"><a href="/setting/pricingplan"><span>Starter</span></a></p>
            </li>
            <li>
              <router-link tag="a" to="/" class="side-nav-link-ref">Business Name</router-link>
              <p class="store-plan"><a href="/setting/pricingplan"><span>Starter</span></a></p>
            </li>
            <p class="store-link"><a href="/setting/managebusiness"><i class="mdi mdi-message-settings-variant"></i> Manage Business</a></p>
          </ul>
        </li> 

        <li>
            <router-link tag="a" to="/dashboard" class="side-nav-link-ref icolink">
              <span class="iconav icdash"></span>
              <span>Dashboard</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/order" class="side-nav-link-ref icolink">
              <span class="iconav icorder"></span>
              <span>Order</span>
            </router-link>
        </li>
        <li>
          <a href="javascript: void(0);" class="has-arrow icolink">
            <span class="iconav icproduct"></span>
            <span>Product</span>
          </a>
          <ul class="sub-menu" aria-expanded="false">
            <li>
              <router-link tag="a" to="/product/all" class="side-nav-link-ref">All Product</router-link>
            </li>
            <li>
              <router-link tag="a" to="/product/category" class="side-nav-link-ref">Category</router-link>
            </li>
            <li>
              <router-link tag="a" to="/product/storage" class="side-nav-link-ref">Storage</router-link>
            </li>
            <li>
              <router-link tag="a" to="/product/ingredient" class="side-nav-link-ref">Ingredient</router-link>
            </li>
          </ul>
        </li>      
        <li>
          <a href="javascript: void(0);" class="has-arrow icolink">
            <span class="iconav icdiscount"></span>
            <span>Discount</span>
          </a>
          <ul class="sub-menu" aria-expanded="false">
            <li>
              <router-link tag="a" to="/discount/auto" class="side-nav-link-ref">Automatic Discount</router-link>
            </li>
            <li>
              <router-link tag="a" to="/discount/coupon" class="side-nav-link-ref">Coupon</router-link>
            </li>
          </ul>
        </li>

        <li>
            <router-link tag="a" to="/customer" class="side-nav-link-ref icolink">
              <span class="iconav iccustomer"></span>
              <span>Customer</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/analytic" class="side-nav-link-ref icolink">
              <span class="iconav icanalytic"></span>
              <span>Analytics</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/module" class="side-nav-link-ref icolink">
            <span class="iconav icstore"></span>
            <span>Module</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/onlineshop" class="side-nav-link-ref icolink">
              <span class="iconav icstore"></span>
              <span>Online Shop</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/pos" class="side-nav-link-ref icolink">
              <span class="iconav icpos"></span>
              <span>POS</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/setting" class="side-nav-link-ref icolink">
            <span class="iconav icsetting"></span>
            <span>Settings</span>
            </router-link>
        </li>

        <br/>
        <br/>
        <br/>

        <li>
            <router-link tag="a" to="/sadmin/business" class="side-nav-link-ref icolink">
            <span class="iconav icsetting"></span>
            <span>Business</span>
            </router-link>
        </li>

        <li>
            <router-link tag="a" to="/sadmin/account" class="side-nav-link-ref icolink">
            <span class="iconav icsetting"></span>
            <span>User Account</span>
            </router-link>
        </li>

        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref icolink">
            <span class="iconav icsetting"></span>
            <span>Analytics</span>
            </router-link>
        </li>

        <li>
            <router-link tag="a" to="/sadmin/invoice" class="side-nav-link-ref icolink">
            <span class="iconav icsetting"></span>
            <span>Invoices</span>
            </router-link>
        </li>

        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref icolink">
            <span class="iconav icsetting"></span>
            <span>Plan</span>
            </router-link>
        </li>

        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref icolink">
            <span class="iconav icsetting"></span>
            <span>Ticket</span>
            </router-link>
        </li>

        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref icolink">
            <span class="iconav icsetting"></span>
            <span>Settings</span>
            </router-link>
        </li>

    </ul>
  </div>
  <!-- Sidebar -->
</template>
