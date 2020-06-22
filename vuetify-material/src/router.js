import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Search from "./views/dashboard/pages/Search";
import UserProfile from "./views/dashboard/pages/UserProfile";
import Login from "./views/dashboard/pages/Login";
import Logout from "./views/dashboard/pages/Logout";
import Register from "./views/dashboard/pages/Register";
import Home from "./views/dashboard/pages/Home";

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "Login",
      path: "/login",
      component: Login
    },
    {
      name: "Logout",
      path: "/logout",
      component: Logout
    },
    {
      name: "Search",
      path: "/search",
      component: Search,
      meta: { requiresAuth: true }
    },
    {
      name: "User Profile",
      path: "/user",
      component: UserProfile,
      meta: { requiresAuth: true }
    },
    {
      name: "Register",
      path: "/register",
      component: Register
    }
  ]
});

// Redirect authenticated pages to home if not logged-in
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("access_token");
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
