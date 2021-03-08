<script>
export default {
  methods: {
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling;
      if (nextEl && !nextEl.classList.contains("show")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("show");
        }
        nextEl.classList.add("show");
      } else if (nextEl) {
        nextEl.classList.remove("show");
      }
      return false;
    },
    topbarLight() {
      document.body.setAttribute("data-topbar", "light");
      document.body.removeAttribute("data-layout-size", "boxed");
    },
    boxedWidth() {
      document.body.setAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-topbar", "light");
      document.body.setAttribute("data-topbar", "dark");
    },
    coloredHeader() {
      document.body.setAttribute("data-topbar", "colored");
      document.body.removeAttribute("data-layout-size", "boxed");
    }
  }
};
</script>
<template>
  <div class="topnav">
    <div class="container-fluid">
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
        <div id="topnav-menu-content" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/">
                <i class="bx bx-home-circle mr-2"></i>Dashboard
              </router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                id="topnav-components"
                class="nav-link dropdown-toggle arrow-none"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="bx bx-tone mr-2"></i>UI Elements
                <div class="arrow-down"></div>
              </a>
              <div
                class="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                aria-labelledby="topnav-components"
              >
                <div class="row">
                  <div class="col-lg-4">
                    <router-link tag="a" to="/ui/alerts" class="dropdown-item">Alerts</router-link>
                    <router-link tag="a" to="/ui/buttons" class="dropdown-item">Buttons</router-link>
                    <router-link tag="a" to="/ui/cards" class="dropdown-item">Cards</router-link>
                    <router-link tag="a" to="/ui/carousel" class="dropdown-item">Carousel</router-link>
                    <router-link tag="a" to="/ui/dropdowns" class="dropdown-item">Dropdowns</router-link>
                    <router-link tag="a" to="/ui/grid" class="dropdown-item">Grid</router-link>
                  </div>
                  <div class="col-lg-4">
                    <router-link tag="a" to="/ui/images" class="dropdown-item">Images</router-link>
                    <router-link tag="a" to="/ui/modals" class="dropdown-item">Modals</router-link>
                    <router-link tag="a" to="/ui/rangeslider" class="dropdown-item">Range Slider</router-link>
                    <router-link tag="a" to="/ui/progressbars" class="dropdown-item">Progress Bars</router-link>
                    <router-link tag="a" to="/ui/sweet-alert" class="dropdown-item">Sweet-Alert</router-link>
                    <router-link
                      tag="a"
                      to="/ui/tabs-accordions"
                      class="dropdown-item"
                    >Tabs & Accordions</router-link>
                  </div>
                  <div class="col-lg-4">
                    <router-link tag="a" to="/ui/typography" class="dropdown-item">Typography</router-link>
                    <router-link tag="a" to="/ui/video" class="dropdown-item">Video</router-link>
                    <router-link tag="a" to="/ui/general" class="dropdown-item">General</router-link>
                    <router-link tag="a" to="/ui/colors" class="dropdown-item">Colors</router-link>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                id="topnav-pages"
                class="nav-link dropdown-toggle arrow-none"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="bx bx-customize mr-2"></i>Apps
                <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-pages">
                <router-link tag="a" to="/calendar" class="dropdown-item">Calendar</router-link>
                <div class="dropdown">
                  <a
                    id="topnav-email"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Email
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-email">
                    <router-link tag="a" to="/email/inbox" class="dropdown-item">Inbox</router-link>
                    <router-link tag="a" to="/email/reademail" class="dropdown-item">Read Email</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-ecommerce"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Ecommerce
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-ecommerce">
                    <router-link tag="a" to="/ecommerce/products" class="dropdown-item">Products</router-link>
                    <router-link
                      tag="a"
                      to="/ecommerce/product-detail"
                      class="dropdown-item"
                    >Product Detail</router-link>
                    <router-link tag="a" to="/ecommerce/orders" class="dropdown-item">Orders</router-link>
                    <router-link tag="a" to="/ecommerce/customers" class="dropdown-item">Customers</router-link>
                    <router-link tag="a" to="/ecommerce/cart" class="dropdown-item">Cart</router-link>
                    <router-link tag="a" to="/ecommerce/checkout" class="dropdown-item">Checkout</router-link>
                    <router-link tag="a" to="/ecommerce/shops" class="dropdown-item">Shops</router-link>
                    <router-link
                      tag="a"
                      to="/ecommerce/add-product"
                      class="dropdown-item"
                    >Add Product</router-link>
                  </div>
                </div>

                <div class="dropdown">
                  <a
                    id="topnav-project"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Projects
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-project">
                    <router-link tag="a" to="/projects/grid" class="dropdown-item">Projects Grid</router-link>
                    <router-link tag="a" to="/projects/list" class="dropdown-item">Projects List</router-link>
                    <router-link
                      tag="a"
                      to="/projects/overview"
                      class="dropdown-item"
                    >Project Overview</router-link>
                    <router-link tag="a" to="/projects/create" class="dropdown-item">Create New</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-task"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Tasks
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-task">
                    <router-link tag="a" to="/tasks/list" class="dropdown-item">Task List</router-link>
                    <router-link tag="a" to="/tasks/kanban" class="dropdown-item">Kanban Board</router-link>
                    <router-link tag="a" to="/tasks/create" class="dropdown-item">Create Task</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-contact"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Contacts
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-contact">
                    <router-link tag="a" to="/contacts/grid" class="dropdown-item">User Grid</router-link>
                    <router-link tag="a" to="/contacts/list" class="dropdown-item">User List</router-link>
                    <router-link tag="a" to="/contacts/profile" class="dropdown-item">Profile</router-link>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                id="topnav-charts"
                class="nav-link dropdown-toggle arrow-none"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="bx bx-collection mr-2"></i>Components
                <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-charts">
                <div class="dropdown">
                  <a
                    id="topnav-form"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Forms
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-form">
                    <router-link tag="a" to="/form/elements" class="dropdown-item">Form Elements</router-link>
                    <router-link tag="a" to="/form/validation" class="dropdown-item">Form Validation</router-link>
                    <router-link tag="a" to="/form/advanced" class="dropdown-item">Form Advanced</router-link>
                    <router-link tag="a" to="/form/editor" class="dropdown-item">Form Editor</router-link>
                    <router-link tag="a" to="/form/uploads" class="dropdown-item">Form File Upload</router-link>
                    <router-link tag="a" to="/form/repeater" class="dropdown-item">Form Repeater</router-link>
                    <router-link tag="a" to="/form/wizard" class="dropdown-item">Form Wizard</router-link>
                    <router-link tag="a" to="/form/mask" class="dropdown-item">Form Mask</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-table"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Tables
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-table">
                    <router-link tag="a" to="/tables/basictable" class="dropdown-item">Basic Tables</router-link>
                    <router-link
                      tag="a"
                      to="/tables/advancedtable"
                      class="dropdown-item"
                    >Advanced Table</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-table"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Charts
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-table">
                    <router-link tag="a" to="/charts/apex" class="dropdown-item">Apex charts</router-link>
                    <router-link tag="a" to="/charts/chartjs" class="dropdown-item">Chartjs Chart</router-link>
                    <router-link tag="a" to="/charts/chartist" class="dropdown-item">Chartist Chart</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-table"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Icons
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-table">
                    <router-link tag="a" to="/icons/boxicons" class="dropdown-item">Boxicons</router-link>
                    <router-link
                      tag="a"
                      to="/icons/materialdesign"
                      class="dropdown-item"
                    >Material Design</router-link>
                    <router-link tag="a" to="/icons/dripicons" class="dropdown-item">Dripicons</router-link>
                    <router-link tag="a" to="/icons/fontawesome" class="dropdown-item">Font awesome</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-map"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Maps
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-map">
                    <router-link tag="a" to="/maps/google" class="dropdown-item">Google Maps</router-link>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                id="topnav-more"
                class="nav-link dropdown-toggle arrow-none"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="bx bx-file mr-2"></i>Extra pages
                <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu" aria-labelledby="topnav-more">
                <div class="dropdown">
                  <a
                    id="topnav-invoice"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Invoices
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-invoice">
                    <router-link tag="a" to="/invoices/list" class="dropdown-item">Invoice List</router-link>
                    <router-link tag="a" to="/invoices/detail" class="dropdown-item">Invoice Detail</router-link>
                  </div>
                </div>
                <div class="dropdown">
                  <a
                    id="topnav-utility"
                    class="dropdown-item dropdown-toggle arrow-none"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="onMenuClick"
                  >
                    Utility
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-utility">
                    <router-link tag="a" to="/pages/starter" class="dropdown-item">Starter Page</router-link>
                    <router-link tag="a" to="/pages/maintenance" class="dropdown-item">Maintenance</router-link>
                    <router-link tag="a" to="/pages/timeline" class="dropdown-item">Timeline</router-link>
                    <router-link tag="a" to="/pages/faqs" class="dropdown-item">FAQs</router-link>
                    <router-link tag="a" to="/pages/pricing" class="dropdown-item">Pricing</router-link>
                    <router-link tag="a" to="/pages/404" class="dropdown-item">Error 404</router-link>
                    <router-link tag="a" to="/pages/500" class="dropdown-item">Error 500</router-link>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown active">
              <a
                class="nav-link dropdown-toggle arrow-none"
                href="#"
                id="topnav-layout"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="onMenuClick"
              >
                <i class="bx bx-layout mr-2"></i>Layouts
                <div class="arrow-down"></div>
              </a>
              <div class="dropdown-menu dropdown-menu-right active" aria-labelledby="topnav-layout">
                <router-link tag="a" class="dropdown-item active" to="/">Vertical</router-link>
                <a
                  @click="topbarLight"
                  href="javascript: void(0);"
                  class="dropdown-item"
                >Light Topbar</a>
                <a @click="boxedWidth" href="javascript: void(0);" class="dropdown-item">Boxed</a>
                <a
                  @click="coloredHeader"
                  href="javascript: void(0);"
                  class="dropdown-item"
                >Colored Header</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>