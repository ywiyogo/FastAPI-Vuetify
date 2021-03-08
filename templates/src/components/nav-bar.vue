
<script>
import simplebar from "simplebar-vue";

/**
 * Nav-bar Component
 */
export default {
  components: { simplebar },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }
  }
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link tag="a" to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-dark.png" alt height="17" />
            </span>
          </router-link>

          <router-link tag="a" to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-light.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-light.png" alt height="19" />
            </span>
          </router-link>
        </div>

        <button
          id="vertical-menu-btn"
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item"
          @click="toggleMenu"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="bx bx-search-alt"></span>
          </div>
        </form>
        <b-dropdown
          variant="black"
          class="dropdown-mega d-none d-lg-block ml-2"
          toggle-class="header-item"
          menu-class="dropdown-megamenu"
        >
          <template v-slot:button-content>
            Mega Menu
            <i class="mdi mdi-chevron-down"></i>
          </template>

          <div class="row">
            <div class="col-sm-8">
              <div class="row">
                <div class="col-md-4">
                  <h5 class="font-size-14 mt-0">UI Components</h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="javascript:void(0);">Lightbox</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Range Slider</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Sweet Alert</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Rating</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Forms</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Tables</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Charts</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-4">
                  <h5 class="font-size-14 mt-0">Applications</h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="javascript:void(0);">Ecommerce</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Calendar</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Email</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Projects</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Tasks</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Contacts</a>
                    </li>
                  </ul>
                </div>

                <div class="col-md-4">
                  <h5 class="font-size-14 mt-0">Extra Pages</h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="javascript:void(0);">Light Sidebar</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Compact Sidebar</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Horizontal layout</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Maintenance</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Coming Soon</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Timeline</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="row">
                <div class="col-sm-6">
                  <h5 class="font-size-14 mt-0">UI Components</h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="javascript:void(0);">Lightbox</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Range Slider</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Sweet Alert</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Rating</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Forms</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Tables</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Charts</a>
                    </li>
                  </ul>
                </div>

                <div class="col-sm-5">
                  <div>
                    <img
                      src="@/assets/images/megamenu-img.png"
                      alt
                      class="img-fluid mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-dropdown>
      </div>

      <div class="d-flex">
        <b-dropdown
          class="d-inline-block d-lg-none ml-2"
          variant="black"
          menu-class="dropdown-menu-lg p-0"
          toggle-class="header-item noti-icon"
          right
        >
          <template v-slot:button-content>
            <i class="mdi mdi-magnify"></i>
          </template>

          <form class="p-3">
            <div class="form-group m-0">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search ..."
                  aria-label="Recipient's username"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">
                    <i class="mdi mdi-magnify"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </b-dropdown>

        <b-dropdown variant="black" right toggle-class="header-item">
          <template v-slot:button-content>
            <img class src="@/assets/images/flags/us.jpg" alt="Header Language" height="16" />
          </template>

          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/spain.jpg" alt="user-image" class="mr-1" height="12" />
            <span class="align-middle">Spanish</span>
          </a>

          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/germany.jpg" alt="user-image" class="mr-1" height="12" />
            <span class="align-middle">German</span>
          </a>

          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/italy.jpg" alt="user-image" class="mr-1" height="12" />
            <span class="align-middle">Italian</span>
          </a>

          <!-- item-->
          <a href="javascript:void(0);" class="dropdown-item notify-item">
            <img src="@/assets/images/flags/russia.jpg" alt="user-image" class="mr-1" height="12" />
            <span class="align-middle">Russian</span>
          </a>
        </b-dropdown>

        <b-dropdown
          class="d-none d-lg-inline-block noti-icon"
          menu-class="dropdown-menu-lg"
          right
          toggle-class="header-item"
          variant="black"
        >
          <template v-slot:button-content>
            <i class="bx bx-customize"></i>
          </template>

          <div class="px-lg-2">
            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="@/assets/images/brands/github.png" alt="Github" />
                  <span>GitHub</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="@/assets/images/brands/bitbucket.png" alt="bitbucket" />
                  <span>Bitbucket</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="@/assets/images/brands/dribbble.png" alt="dribbble" />
                  <span>Dribbble</span>
                </a>
              </div>
            </div>

            <div class="row no-gutters">
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="@/assets/images/brands/dropbox.png" alt="dropbox" />
                  <span>Dropbox</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="@/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                  <span>Mail Chimp</span>
                </a>
              </div>
              <div class="col">
                <a class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="@/assets/images/brands/slack.png" alt="slack" />
                  <span>Slack</span>
                </a>
              </div>
            </div>
          </div>
        </b-dropdown>

        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="bx bx-fullscreen"></i>
          </button>
        </div>

        <b-dropdown
          right
          menu-class="dropdown-menu-lg p-0"
          toggle-class="header-item noti-icon"
          variant="black"
        >
          <template v-slot:button-content>
            <i class="bx bx-bell bx-tada"></i>
            <span class="badge badge-danger badge-pill">3</span>
          </template>

          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="m-0">Notifications</h6>
              </div>
              <div class="col-auto">
                <a href="#!" class="small">View All</a>
              </div>
            </div>
          </div>
          <simplebar style="max-height: 230px;">
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-primary rounded-circle font-size-16">
                    <i class="bx bx-cart"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Your order is placed</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">If several languages coalesce the grammar</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i> 3 min ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="@/assets/images/users/avatar-3.jpg"
                  class="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">James Lemire</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">It will seem like simplified English.</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i> 1 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-success rounded-circle font-size-16">
                    <i class="bx bx-badge-check"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Your item is shipped</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">If several languages coalesce the grammar</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i> 3 min ago
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="@/assets/images/users/avatar-4.jpg"
                  class="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Salena Layfield</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i> 1 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </simplebar>
          <div class="p-2 border-top">
            <a class="btn btn-sm btn-light btn-block text-center" href="javascript:void(0)">
              <i class="mdi mdi-arrow-down-circle mr-1"></i> Load More..
            </a>
          </div>
        </b-dropdown>

        <b-dropdown right variant="black" toggle-class="header-item">
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/avatar-1.jpg"
              alt="Header Avatar"
            />
            <span class="d-none d-xl-inline-block ml-1">Henry</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <!-- item-->
          <a class="dropdown-item" href="/contacts/profile">
            <i class="bx bx-user font-size-16 align-middle mr-1"></i> Profile
          </a>
          <a class="dropdown-item" href="javascript: void(0);">
            <i class="bx bx-wallet font-size-16 align-middle mr-1"></i> My Wallet
          </a>
          <a class="dropdown-item d-block" href="javascript: void(0);">
            <span class="badge badge-success float-right">11</span>
            <i class="bx bx-wrench font-size-16 align-middle mr-1"></i> Settings
          </a>
          <a class="dropdown-item" href="javascript: void(0);">
            <i class="bx bx-lock-open font-size-16 align-middle mr-1"></i> Lock screen
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="/logout">
            <i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout
          </a>
        </b-dropdown>

        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle toggle-right"
            @click="toggleRightSidebar"
          >
            <i class="bx bx-cog bx-spin toggle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
