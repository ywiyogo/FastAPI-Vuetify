<template>
    <div id="app">
        <!-- Notification container -->
        <ToastNotificationsContainer/>
        <!-- Sidebar -->
        <Sidebar>
            <div class="sidebar-brand d-flex justify-content-center align-items-center">
                <b class="font-size-150 logo-text">Enzyme UI</b>
            </div>


            <!-- Sidebar menu items -->
            <ul class="nav flex-column sidebar-items">
                <li
                    :class="['nav-item', 'sidebar-item']"
                    v-for="(link,i) in links"
                    :key="i"
                >
                    <!-- Simple link to route -->
                    <span
                        v-if="link.children === undefined"
                        :class="['sidebar-link d-flex flex-row align-items-center w-100 h-100', {'active':$route.path === link.path}]"
                        @click="navigateToPath(link.path, $event)"
                    >
                        <!-- <div v-if="link.icon !== undefined" v-html="link.icon"></div> -->
                        <img :src="link.img" alt="" style="width:17px;">
                        <div class="ms-3">{{ link.name }}</div>
                    </span>

                    <!-- Link with children links which will be placed in collapse -->
                    <div v-else>
                        <span class="sidebar-link d-flex flex-row align-items-center w-100 h-100"
                              v-collapse="link.collapseId">
                            <div v-if="link.icon !== undefined" v-html="link.icon"></div>
                            <div class="ms-3 d-flex align-items-center">
                                <div>{{ link.name }}</div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     :style="[link.collapseOpen === true?{transform:'rotate(180deg)'}:{},]"
                                     class="stroke-default ms-2" width="15" height="15" viewBox="0 0 24 24"
                                     stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"/>
                                  <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </div>
                        </span>
                        <Collapse :id="link.collapseId" @open="links[i].collapseOpen = true"
                                  @close="links[i].collapseOpen = false">
                            <div
                                v-for="(child,id) in link.children"
                                :key="id"
                                :class="['ps-5 sidebar-link d-flex flex-row align-items-center w-100 h-100', {'active':$route.path === child.path}]"
                                @click="navigateToPath(child.path, $event)"
                            >
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="10"
                                         height="10" viewBox="0 0 24 24" stroke-width="5" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="9"/>
                                    </svg>
                                </div>
                                <div class="ms-3">{{ child.name }}</div>
                            </div>
                        </Collapse>
                    </div>
                </li>
                <!-- <li class="nav-item dropdown-divider"></li>
                <li class="nav-item sidebar-item">
                    <a href="/docs" class="sidebar-link d-flex flex-row align-items-center w-100 h-100">Documentation</a><i class="fas fa-user"></i>
                </li> -->
            </ul>
        </Sidebar>
        <div :class="['app-container', {'sidebar-open':!sidebarClosed}]">
            <!-- This will be shown only on mobile as black transparent clickable content overlay. See src/assets/scss/core/_sidebar.scss -->
            <SidebarContentOverlay :show="!sidebarClosed"></SidebarContentOverlay>
            <!--Navigation bar-->
            <Navbar>
                <template v-slot:default="{toggleSidebar}">
                    <div class="d-flex align-items-center w-100">
                        <!--Hamburger menu-->
                        <div @click="toggleSidebar" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="30" height="30"
                                 viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1="4" y1="6" x2="20" y2="6"/>
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <line x1="4" y1="18" x2="20" y2="18"/>
                            </svg>
                        </div>
                        <!--Search field-->
                        <div class="ms-5 d-none d-sm-block" style="width:200px;">
                            <Dropdown class="w-100" menu-classes="w-100">
                                <template #button>
                                    <Input class="m-0" size="sm" placeholder="Search"></Input>
                                </template>
                                <div class="dropdown-item">
                                    Test Search Link 1
                                </div>
                                <div class="dropdown-item">
                                    Test Search Link 2
                                </div>
                                <div class="dropdown-item">
                                    Test Search Link 3
                                </div>
                            </Dropdown>
                        </div>
                        <div class="ms-auto d-flex flex-row justify-content-end align-items-center">
                            <!--Notification bell-->
                            <div class="cursor-pointer position-relative ms-4">
                                <Dropdown size="md" menu-classes="dropdown-menu-sm"
                                          :popper-config="{placement:'bottom-end'}">
                                    <template #button>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="30"
                                             height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <path
                                                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                                        </svg>
                                        <!--Notification badge-->
                                        <Badge pill class="font-size-50 position-absolute" style="top:0;right: 0;">3
                                        </Badge>
                                    </template>
                                    <!-- Dropdown content with multiple orders-->
                                    <div :key="name" class="d-flex flex-row p-2 align-content-center justify-content-center" v-for="{name, title} in [
                                        {
                                            name: 'Michele Piper',
                                            title: 'New Order ($56)'
                                        },
                                        {
                                            name: 'Austin Bay',
                                            title: 'New Order ($98)'
                                        },
                                        {
                                            name: 'Linus Toskey',
                                            title: 'New Order ($12)'
                                        },
                                    ]">
                                        <div class="d-flex flex-column justify-content-center me-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-success" width="20"
                                                 height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                                                 fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <circle cx="9" cy="19" r="2"/>
                                                <circle cx="17" cy="19" r="2"/>
                                                <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="text-success font-size-100 fw-bold">{{ title }}</div>
                                            <div class="color-gray-500 font-size-75">{{ name }}</div>
                                        </div>
                                    </div>
                                    <div class="text-center p-2 font-size-75">
                                        <a href="#" class=" color-gray-500">Mark all as read</a>
                                    </div>
                                </Dropdown>
                            </div>
                            <!--User avatar with dropdown -->
                            <div class="ms-5">
                                <Dropdown class="">
                                    <template #button>
                                        <div
                                            class="d-flex flex-row align-items-center justify-content-center cursor-pointer">
                                            <div class="me-3">
                                                <div class="fw-bold">Jolly</div>
                                                <div class="font-size-75 color-gray-600">Admin</div>
                                            </div>
                                            <img style="max-width: 30px;" class="rounded-circle"
                                                 src="https://source.unsplash.com/mEZ3PoFGs_k/80x80">
                                        </div>
                                    </template>
                                    <!-- Dropdown content -->
                                    <div class="dropdown-item d-flex align-items-center p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="20"
                                             height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <path
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </svg>
                                        <div class="ms-3 ">
                                            Settings
                                        </div>
                                    </div>
                                    <div class="dropdown-item d-flex align-items-center p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="20"
                                             height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <path
                                                d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/>
                                            <path d="M7 12h14l-3 -3m0 6l3 -3"/>
                                        </svg>
                                        <div class="ms-3 ">
                                            Logout
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </template>
            </Navbar>
            <!-- Content with router view -->
            <div class="content-container container-fluid mt-4 mb-5">
                <div class="row">
                    <div class="col">
                        <transition mode="out-in" name="fade">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icons from './helpers/icons';
import {generateKey} from "./helpers/helpers";

export default {
    name: 'app',

    data() {
        return {
            icons,
            // State of sidebar
            sidebarClosed: false,
            links: [
                {
                    name: 'Home',
                    path: '/',
                    icon: icons.Dashboard,
                    img: require("@/assets/img/home-solid.svg")
                    
                },
                // {
                //     name: 'Analytics Dashboard',
                //     path: '/analytics-demo',
                //     icon: icons.ChartPie,
                // },
                // {
                //     name: 'Charts',
                //     path: '/charts',
                //     icon: icons.Charts,
                // },
                {
                    name: 'Register',
                    path: '/register',
                    icon: icons.Users,
                    img: require("@/assets/img/user-plus-solid.svg")
                },
                {
                    name: 'Login',
                    path: '/login',
                    icon: icons.Users,
                    img: require("@/assets/img/sign-in-alt-solid.svg")
                },
                // {
                //     name: 'Components',
                //     path: '/components',
                //     icon: icons.Components,
                //     collapseId: generateKey(),
                //     collapseOpen: false,
                //     children: [
                //         {
                //             name: 'Alerts',
                //             path: '/alerts',
                //         },
                //         {
                //             name: 'Buttons',
                //             path: '/buttons',
                //         },
                //         {
                //             name: 'Badges',
                //             path: '/badges',
                //         },
                //         {
                //             name: 'Breadcrumbs',
                //             path: '/breadcrumbs',
                //         },
                //         {
                //             name: 'Collapse',
                //             path: '/collapses',
                //         },
                //         {
                //             name: 'Dropdowns',
                //             path: '/dropdowns',
                //         },
                //         {
                //             name: 'Modals',
                //             path: '/modals',
                //         },
                //         {
                //             name: 'Pagination',
                //             path: '/pagination',
                //         },
                //         {
                //             name: 'Progress',
                //             path: '/progress',
                //         },
                //         {
                //             name: 'Tabs',
                //             path: '/tabs',
                //         },
                //         {
                //             name: 'Toasts',
                //             path: '/toasts',
                //         },
                //         {
                //             name: 'Tooltips',
                //             path: '/tooltips',
                //         },
                //         {
                //             name: 'File Dropzone',
                //             path: '/dropzone',
                //         },
                //     ]
                // },
                {
                    name: 'Search Profiles',
                    path: '/profile',
                    icon: icons.Forms,
                    img: require("@/assets/img/search-solid.svg")
                    
                },
                {
                    name: 'User',
                    path: '/user',
                    icon: icons.Typography,
                    img: require("@/assets/img/user-solid.svg")
                },
                {
                    name: 'Log Out',
                    path: '/logout',
                    icon: icons.Typography,
                    img: require("@/assets/img/sign-out-alt-solid.svg")
                },
            ]
        }
    },

    methods: {
        navigateToPath(path, e) {
            e.stopPropagation();

            // Close sidebar on mobile devices on sidebar link click
            if (window.innerWidth < 768) {
                this.$sidebar.close();
            }

            this.$router.push({path});
        }
    },

    watch: {
        // Watch if sidebar is being closed/opened and adjust visibility of overlay, content
        '$sidebar.sidebarVisible': function (val) {
            this.sidebarClosed = !val;
        }
    }
}
</script>

<style lang="scss">
.fade-enter {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-leave-to {
    opacity: 0;
}

.logo-text {
    background: linear-gradient(45deg, var(--bs-primary), var(--bs-secondary));
    background-clip: text;
    color: transparent;
}
</style>
