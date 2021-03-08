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
    <ul id="side-menu" class="metismenu list-unstyled">
        <li>
            <router-link tag="a" to="/home" class="side-nav-link-ref">
            <i class="bx bx-calendar"></i>
            <span>Home</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/register" class="side-nav-link-ref">
            <i class="bx bx-user-plus"></i>
            <span>Register</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">
            <i class="bx bx-group"></i>
            <span>Search Profile</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">
            <i class="bx bx-user"></i>
            <span>User</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">
            <i class="bx bx-log-out-circle"></i>
            <span>Logout</span>
            </router-link>
        </li>
        <!-- <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">
            <i class="bx bx-calendar"></i>
            <span>Analytics</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">
            <i class="bx bx-calendar"></i>
            <span>Module</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">
            <i class="bx bx-calendar"></i>
            <span>Online Shop</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">
            <i class="bx bx-calendar"></i>
            <span>POS</span>
            </router-link>
        </li>
        <li>
            <router-link tag="a" to="/" class="side-nav-link-ref">
            <i class="bx bx-calendar"></i>
            <span>Settings</span>
            </router-link>
        </li>

      <li class="menu-title">Menu</li>

      <li>
        <router-link tag="a" to="/" class="side-nav-link-ref">
          <i class="bx bx-home-circle"></i>
          <span class="badge badge-pill badge-info float-right">3</span>
          <span>Dashboard</span>
        </router-link>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-layout"></i>
          <span>Layouts</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/layout/horizontal" class="side-nav-link-ref">Horizontal</router-link>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="lightSidebar"
            >Light Sidebar</a>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="compactSidebar"
            >Compact Sidebar</a>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="iconSidebar"
            >Icon Sidebar</a>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="boxedLayout"
            >Boxed Layout</a>
          </li>
          <li>
            <a
              href="javascript: void(0);"
              class="side-nav-link-ref"
              @click="coloredSidebar"
            >Colored Sidebar</a>
          </li>
        </ul>
      </li>

      <li class="menu-title">Apps</li>

      <li>
        <router-link tag="a" to="/calendar" class="side-nav-link-ref">
          <i class="bx bx-calendar"></i>
          <span>Calendar</span>
        </router-link>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-briefcase-alt-2"></i>
          <span>Product</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/product" class="side-nav-link-ref">All Product</router-link>
          </li>
          <li>
            <router-link tag="a" to="/category" class="side-nav-link-ref">Category</router-link>
          </li>
        </ul>
      </li>
      

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-store"></i>
          <span>Ecommerce</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/ecommerce/products" class="side-nav-link-ref">Products</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/ecommerce/product-detail"
              class="side-nav-link-ref"
            >Product Detail</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ecommerce/orders" class="side-nav-link-ref">Orders</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ecommerce/customers" class="side-nav-link-ref">Customers</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ecommerce/cart" class="side-nav-link-ref">Cart</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ecommerce/checkout" class="side-nav-link-ref">Checkout</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ecommerce/shops" class="side-nav-link-ref">Shops</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ecommerce/add-product" class="side-nav-link-ref">Add Product</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-envelope"></i>
          <span>Email</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/email/inbox" class="side-nav-link-ref">Inbox</router-link>
          </li>
          <li>
            <router-link tag="a" to="/email/reademail" class="side-nav-link-ref">Read Email</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-receipt"></i>
          <span>Invoices</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/invoices/list" class="side-nav-link-ref">Invoice List</router-link>
          </li>
          <li>
            <router-link tag="a" to="/invoices/detail" class="side-nav-link-ref">Invoice Detail</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-briefcase-alt-2"></i>
          <span>Projects</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/projects/grid" class="side-nav-link-ref">Projects Grid</router-link>
          </li>
          <li>
            <router-link tag="a" to="/projects/list" class="side-nav-link-ref">Projects List</router-link>
          </li>
          <li>
            <router-link tag="a" to="/projects/overview" class="side-nav-link-ref">Project Overview</router-link>
          </li>
          <li>
            <router-link tag="a" to="/projects/create" class="side-nav-link-ref">Create New</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-task"></i>
          <span>Tasks</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/tasks/list" class="side-nav-link-ref">Task List</router-link>
          </li>
          <li>
            <router-link tag="a" to="/tasks/kanban" class="side-nav-link-ref">Kanban Board</router-link>
          </li>
          <li>
            <router-link tag="a" to="/tasks/create" class="side-nav-link-ref">Create Task</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bxs-user-detail"></i>
          <span>Contacts</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/contacts/grid" class="side-nav-link-ref">User Grid</router-link>
          </li>
          <li>
            <router-link tag="a" to="/contacts/list" class="side-nav-link-ref">User List</router-link>
          </li>
          <li>
            <router-link tag="a" to="/contacts/profile" class="side-nav-link-ref">Profile</router-link>
          </li>
        </ul>
      </li>

      <li class="menu-title">Pages</li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-user-circle"></i>
          <span>Authentication</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/auth/login-1">Login</router-link>
          </li>
          <li>
            <router-link tag="a" to="/auth/register-1">Register</router-link>
          </li>
          <li>
            <router-link tag="a" to="/auth/recoverpw">Recover Password</router-link>
          </li>
          <li>
            <router-link tag="a" to="/auth/lock-screen">Lock Screen</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-file"></i>
          <span>Utility</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/pages/starter" class="side-nav-link-ref">Starter Page</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/maintenance" class="side-nav-link-ref">Maintenance</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/timeline" class="side-nav-link-ref">Timeline</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/faqs" class="side-nav-link-ref">FAQs</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/pricing" class="side-nav-link-ref">Pricing</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/404" class="side-nav-link-ref">Error 404</router-link>
          </li>
          <li>
            <router-link tag="a" to="/pages/500" class="side-nav-link-ref">Error 500</router-link>
          </li>
        </ul>
      </li>

      <li class="menu-title">Components</li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-tone"></i>
          <span>UI Elements</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/ui/alerts" class="side-nav-link-ref">Alerts</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/buttons" class="side-nav-link-ref">Buttons</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/cards" class="side-nav-link-ref">Cards</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/carousel" class="side-nav-link-ref">Carousel</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/dropdowns" class="side-nav-link-ref">Dropdowns</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/grid" class="side-nav-link-ref">Grid</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/images" class="side-nav-link-ref">Images</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/modals" class="side-nav-link-ref">Modals</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/rangeslider" class="side-nav-link-ref">Range Slider</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/progressbars" class="side-nav-link-ref">Progress Bars</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/sweet-alert" class="side-nav-link-ref">Sweet-Alert</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/ui/tabs-accordions"
              class="side-nav-link-ref"
            >Tabs & Accordions</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/typography" class="side-nav-link-ref">Typography</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/video" class="side-nav-link-ref">Video</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/general" class="side-nav-link-ref">General</router-link>
          </li>
          <li>
            <router-link tag="a" to="/ui/colors" class="side-nav-link-ref">Colors</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-dropdown">
          <i class="bx bxs-eraser"></i>
          <span class="badge badge-pill badge-danger float-right">6</span>
          <span>Forms</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/form/elements" class="side-nav-link-ref">Form Elements</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/validation" class="side-nav-link-ref">Form Validation</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/advanced" class="side-nav-link-ref">Form Advanced</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/editor" class="side-nav-link-ref">Form Editor</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/uploads" class="side-nav-link-ref">Form File Upload</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/repeater" class="side-nav-link-ref">Form Repeater</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/wizard" class="side-nav-link-ref">Form Wizard</router-link>
          </li>
          <li>
            <router-link tag="a" to="/form/mask" class="side-nav-link-ref">Form Mask</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-list-ul"></i>
          <span>Tables</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/tables/basictable" class="side-nav-link-ref">Basic Tables</router-link>
          </li>
          <li>
            <router-link tag="a" to="/tables/advancedtable" class="side-nav-link-ref">Advanced Table</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bxs-bar-chart-alt-2"></i>
          <span>Charts</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/charts/apex" class="side-nav-link-ref">Apex Chart</router-link>
          </li>
          <li>
            <router-link tag="a" to="/charts/chartjs" class="side-nav-link-ref">Chartjs Chart</router-link>
          </li>
          <li>
            <router-link tag="a" to="/charts/chartist" class="side-nav-link-ref">Chartist Chart</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-aperture"></i>
          <span>Icons</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/icons/boxicons" class="side-nav-link-ref">Boxicons</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/icons/materialdesign"
              class="side-nav-link-ref"
            >Material Design</router-link>
          </li>
          <li>
            <router-link tag="a" to="/icons/dripicons" class="side-nav-link-ref">Dripicons</router-link>
          </li>
          <li>
            <router-link tag="a" to="/icons/fontawesome" class="side-nav-link-ref">Font awesome</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-map"></i>
          <span>Maps</span>
        </a>
        <ul class="sub-menu" aria-expanded="false">
          <li>
            <router-link tag="a" to="/maps/google" class="side-nav-link-ref">Google Maps</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-arrow">
          <i class="bx bx-share-alt"></i>
          <span>Multi Level</span>
        </a>
        <ul class="sub-menu" aria-expanded="true">
          <li>
            <a href="javascript: void(0);">Level 1.1</a>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow">Level 1.2</a>
            <ul class="sub-menu" aria-expanded="true">
              <li>
                <a href="javascript: void(0);">Level 2.1</a>
              </li>
              <li>
                <a href="javascript: void(0);">Level 2.2</a>
              </li>
            </ul>
          </li>
        </ul>
      </li> -->
    </ul>
  </div>
  <!-- Sidebar -->
</template>
