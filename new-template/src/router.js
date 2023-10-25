import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Dashboard from "./views/Dashboard";
import Buttons from "./views/Buttons";
import Breadcrumbs from "./views/Breadcrumbs";
import Forms from "./views/Forms";
import Typography from "./views/Typography";
import Alerts from "./views/Alerts";
import Dropdowns from "./views/Dropdowns";
import Components from "./views/Components";
import Charts from "./views/Charts";
import Collapses from "./views/Collapses";
import Tables from "./views/Tables";
import Tabs from "./views/Tabs";
import Tooltips from "./views/Tooltips";
import Toasts from "./views/Toasts";
import Badges from "./views/Badges";
import Pagination from "./views/Pagination";
import Progress from "./views/Progress";
import Modals from "./views/Modals";
import FileDropzone from "./views/FileDropzone";
import AnalyticsDashboard from "./views/AnalyticsDashboard";
import Register from "./views/Register";
import Login from "./views/Login";


const router = new VueRouter({
    base: '',
    mode: 'history',
    routes:[
        {
            path:'/analytics-demo',
            component:AnalyticsDashboard,
        },
        {
            path:'/',
            name: "dashboard",
            component:Dashboard,
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/login",
            component: Login
        },
        {
            path:'/charts',
            component:Charts,
        },
        {
            path:'/collapses',
            component:Collapses,
        },
        {
            path:'/dropdowns',
            component:Dropdowns,
        },
        {
            path:'/badges',
            component:Badges,
        },
        {
            path:'/breadcrumbs',
            component:Breadcrumbs,
        },
        {
            path:'/pagination',
            component:Pagination,
        },
        {
            path:'/progress',
            component:Progress,
        },
        {
            path:'/tabs',
            component:Tabs,
        },
        {
            path:'/tooltips',
            component:Tooltips,
        },
        {
            path:'/toasts',
            component:Toasts,
        },
        {
            path:'/components',
            component:Components,
        },
        {
            path:'/tables',
            component:Tables,
        },
        {
            path: '/alerts',
            component: Alerts,
        },
        {
            path:'/buttons',
            component: Buttons,
        },
        {
            path:'/forms',
            component: Forms,
        },
        {
            path:'/typography',
            component: Typography,
        },
        {
            path:'/modals',
            component: Modals,
        },
        {
            path:'/dropzone',
            component: FileDropzone,
        },
    ],
});

export default router;