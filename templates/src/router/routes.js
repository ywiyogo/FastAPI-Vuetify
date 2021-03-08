import store from '@/state/store'

export default [
  {
    path: '/',
    name: 'home',
    // meta: {
    //   authRequired: true,
    // },
    component: () => import('./views/dashboard_user/dashuser_dashboard'),
  },
  {
    path: '/home',
    name: 'Old dashboard homepage',
    // meta: {
    //   authRequired: true,
    // },
    component: () => import('./views/home_template'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/dashboard_user/dashuser_login'),
    // meta: {
    //   beforeResolve(routeTo, routeFrom, next) {
    //     // If the user is already logged in
    //     if (store.getters['auth/loggedIn']) {
    //       // Redirect to the home page instead
    //       next({ name: 'home' })
    //     } else {
    //       // Continue to the login page
    //       next()
    //     }
    //   },
    // },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('./views/account/register'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'home' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/forgot-password',
    name: 'Forgot password',
    component: () => import('./views/account/forgot-password'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'home' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        store.dispatch('auth/logOut')
        const authRequiredOnPreviousRoute = routeFrom.matched.some(
          (route) => route.push('/login')
        )
        // Navigate back to previous page, or home as a fallback
        next(authRequiredOnPreviousRoute ? { name: 'home' } : { ...routeFrom })
      },
    },
  },
  {
    path: '/404',
    name: '404',
    component: require('./views/utility/404').default,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
  {
    path: '/calendar',
    name: 'Calendar',
    //meta: { authRequired: true },
    component: () => import('./views/calendar/calendar')
  },
  {
    path: '/ecommerce/products',
    name: 'Products',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/products')
  },
  {
    path: '/ecommerce/product-detail',
    name: 'Product Detail',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/product-detail')
  },
  {
    path: '/ecommerce/orders',
    name: 'Orders',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/orders')
  },
  {
    path: '/ecommerce/customers',
    name: 'Customers',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/customers')
  },
  {
    path: '/ecommerce/cart',
    name: 'Cart',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/cart')
  },
  {
    path: '/ecommerce/checkout',
    name: 'Checkout',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/checkout')
  },
  {
    path: '/ecommerce/shops',
    name: 'Shops',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/shops')
  },
  {
    path: '/ecommerce/add-product',
    name: 'Add Product',
    meta: { authRequired: true },
    component: () => import('./views/ecommerce/add-product')
  },
  {
    path: '/invoices/detail',
    name: 'Invoice Detail',
    meta: { authRequired: true },
    component: () => import('./views/invoices/detail')
  },
  {
    path: '/invoices/list',
    name: 'Invoice List',
    meta: { authRequired: true },
    component: () => import('./views/invoices/list')
  },
  {
    path: '/ui/alerts',
    name: 'Alerts',
    meta: {
      authRequired: true
    },
    component: () => import('./views/ui/alerts')
  },
  {
    path: '/ui/buttons',
    name: 'Buttons',
    meta: {
      authRequired: true
    },
    component: () => import('./views/ui/buttons')
  },
  {
    path: '/ui/cards',
    name: 'Cards',
    meta: { authRequired: true },
    component: () => import('./views/ui/cards')
  },
  {
    path: '/ui/carousel',
    name: 'Carousel',
    meta: { authRequired: true },
    component: () => import('./views/ui/carousel')
  },
  {
    path: '/ui/dropdowns',
    name: 'Dropdowns',
    meta: { authRequired: true },
    component: () => import('./views/ui/dropdowns')
  },
  {
    path: '/ui/grid',
    name: 'Grid',
    meta: { authRequired: true },
    component: () => import('./views/ui/grid')
  },
  {
    path: '/ui/images',
    name: 'Images',
    meta: { authRequired: true },
    component: () => import('./views/ui/images')
  },
  {
    path: '/ui/modals',
    name: 'Modals',
    meta: { authRequired: true },
    component: () => import('./views/ui/modals')
  },
  {
    path: '/ui/rangeslider',
    name: 'Rangeslider',
    meta: { authRequired: true },
    component: () => import('./views/ui/rangeslider')
  },
  {
    path: '/ui/progressbars',
    name: 'Progressbars',
    meta: { authRequired: true },
    component: () => import('./views/ui/progressbars')
  },
  {
    path: '/ui/sweet-alert',
    name: 'Sweet-alert',
    meta: { authRequired: true },
    component: () => import('./views/ui/sweet-alert')
  },
  {
    path: '/ui/tabs-accordions',
    name: 'Tabs-accordions',
    meta: { authRequired: true },
    component: () => import('./views/ui/tabs-accordions')
  },
  {
    path: '/ui/typography',
    name: 'Typography',
    meta: { authRequired: true },
    component: () => import('./views/ui/typography')
  },
  {
    path: '/ui/video',
    name: 'Video',
    meta: { authRequired: true },
    component: () => import('./views/ui/video')
  },
  {
    path: '/ui/general',
    name: 'General',
    meta: { authRequired: true },
    component: () => import('./views/ui/general')
  },
  {
    path: '/ui/colors',
    name: 'Colors',
    meta: { authRequired: true },
    component: () => import('./views/ui/colors')
  },
  {
    path: '/projects/grid',
    name: 'Projects Grid',
    meta: { authRequired: true },
    component: () => import('./views/projects/projects-grid')
  },
  {
    path: '/projects/list',
    name: 'Projects List',
    meta: { authRequired: true },
    component: () => import('./views/projects/projects-list')
  },
  {
    path: '/projects/overview',
    name: 'Project Overview',
    meta: { authRequired: true },
    component: () => import('./views/projects/overview')
  },
  {
    path: '/projects/create',
    name: 'Create New',
    meta: { authRequired: true },
    component: () => import('./views/projects/create')
  },
  {
    path: '/contacts/grid',
    name: 'User Grid',
    meta: { authRequired: true },
    component: () => import('./views/contacts/contacts-grid')
  },
  {
    path: '/contacts/list',
    name: 'User List',
    meta: { authRequired: true },
    component: () => import('./views/contacts/contacts-list')
  },
  {
    path: '/contacts/profile',
    name: 'Profile',
    meta: { authRequired: true },
    component: () => import('./views/contacts/contacts-profile')
  },
  {
    path: '/charts/apex',
    name: 'Apex chart',
    meta: { authRequired: true },
    component: () => import('./views/charts/apex')
  },
  {
    path: '/charts/chartjs',
    name: 'Chartjs chart',
    meta: { authRequired: true },
    component: () => import('./views/charts/chartjs/index')
  },
  {
    path: '/charts/chartist',
    name: 'Chartist chart',
    meta: { authRequired: true },
    component: () => import('./views/charts/chartist')
  },
  {
    path: '/icons/boxicons',
    name: 'Boxicons Icon',
    meta: { authRequired: true },
    component: () => import('./views/icons/boxicons')
  },
  {
    path: '/icons/materialdesign',
    name: 'Materialdesign Icon',
    meta: { authRequired: true },
    component: () => import('./views/icons/materialdesign')
  },
  {
    path: '/icons/dripicons',
    name: 'Dripicons Icon',
    meta: { authRequired: true },
    component: () => import('./views/icons/dripicons')
  },
  {
    path: '/icons/fontawesome',
    name: 'Fontawesome Icon',
    meta: { authRequired: true },
    component: () => import('./views/icons/fontawesome')
  },
  {
    path: '/maps/google',
    name: 'Google Maps',
    meta: { authRequired: true },
    component: () => import('./views/maps/google')
  },
  {
    path: '/tables/basictable',
    name: 'Basic Tables',
    meta: { authRequired: true },
    component: () => import('./views/tables/basictable')
  },
  {
    path: '/tables/advancedtable',
    name: 'Advanced Tables',
    meta: { authRequired: true },
    component: () => import('./views/tables/advancedtable')
  },
  {
    path: '/form/advanced',
    name: 'Form Advanced',
    meta: { authRequired: true },
    component: () => import('./views/forms/advanced')
  },
  {
    path: '/form/elements',
    name: 'Form Elements',
    meta: { authRequired: true },
    component: () => import('./views/forms/elements')
  },
  {
    path: '/form/editor',
    name: 'CK Editor',
    meta: { authRequired: true },
    component: () => import('./views/forms/ckeditor')
  },
  {
    path: '/form/uploads',
    name: 'File Uploads',
    meta: { authRequired: true },
    component: () => import('./views/forms/uploads')
  },
  {
    path: '/form/validation',
    name: 'Form Validation',
    meta: { authRequired: true },
    component: () => import('./views/forms/validation')
  },
  {
    path: '/form/wizard',
    name: 'Form Wizard',
    meta: { authRequired: true },
    component: () => import('./views/forms/wizard')
  },
  {
    path: '/form/repeater',
    name: 'Form Repeater',
    meta: { authRequired: true },
    component: () => import('./views/forms/repeater')
  },
  {
    path: '/form/mask',
    name: 'Form Mask',
    meta: { authRequired: true },
    component: () => import('./views/forms/mask')
  },
  {
    path: '/pages/starter',
    name: 'Starter',
    meta: { authRequired: true },
    component: () => import('./views/utility/starter')
  },
  {
    path: '/pages/maintenance',
    name: 'Maintenance',
    meta: { authRequired: true },
    component: () => import('./views/utility/maintenance')
  },
  {
    path: '/pages/timeline',
    name: 'Timeline',
    meta: { authRequired: true },
    component: () => import('./views/utility/timeline')
  },
  {
    path: '/pages/faqs',
    name: 'FAQs',
    meta: { authRequired: true },
    component: () => import('./views/utility/faqs')
  },
  {
    path: '/pages/pricing',
    name: 'Pricing',
    meta: { authRequired: true },
    component: () => import('./views/utility/pricing')
  },
  {
    path: '/pages/404',
    name: 'Error-404',
    meta: { authRequired: true },
    component: () => import('./views/utility/404')
  },
  {
    path: '/pages/500',
    name: 'Error-500',
    meta: { authRequired: true },
    component: () => import('./views/utility/500')
  },
  {
    path: '/email/inbox',
    name: 'Inbox',
    meta: { authRequired: true },
    component: () => import('./views/email/inbox')
  },
  {
    path: '/email/reademail',
    name: 'Read Email',
    meta: { authRequired: true },
    component: () => import('./views/email/reademail')
  },
  {
    path: '/tasks/list',
    name: 'Task list',
    meta: { authRequired: true },
    component: () => import('./views/tasks/task-list')
  },
  {
    path: '/tasks/kanban',
    name: 'Kanbanboard',
    meta: { authRequired: true },
    component: () => import('./views/tasks/kanbanboard')
  },
  {
    path: '/tasks/create',
    name: 'Create Task',
    meta: { authRequired: true },
    component: () => import('./views/tasks/task-create')
  },
  {
    path: '/layout/horizontal',
    name: 'Horizontal',
    meta: { authRequired: true },
    component: () => import('./views/layout/horizontal')
  },
  {
    path: '/auth/login-1',
    name: 'Login sample',
    meta: { authRequired: true },
    component: () => import('./views/sample-pages/login-sample')
  },
  {
    path: '/auth/register-1',
    name: 'Register sample',
    meta: { authRequired: true },
    component: () => import('./views/sample-pages/register-sample')
  },
  {
    path: '/auth/recoverpw',
    name: 'Recover pwd',
    meta: { authRequired: true },
    component: () => import('./views/sample-pages/recoverpw-sample')
  },
  {
    path: '/auth/lock-screen',
    name: 'Lock screen',
    meta: { authRequired: true },
    component: () => import('./views/sample-pages/lockscreen')
  },

  // ====================================================================== STOCAVE DEVELOPMENT

  // ====================================================================== Dashboard Section #0
  {
    path: '/dashboard',
    name: 'Dashboard',
    //meta: { authRequired: false },
    component: () => import('./views/dashboard_user/dashuser_dashboard')
  },
  // ====================================================================== end Dashboard Section

  {
    path: '/product',
    name: 'Product List',
    //meta: { authRequired: true },
    component: () => import('./views/product/list-product')
  },
  {
    path: '/product/add',
    name: 'Product Add',
    meta: { authRequired: true },
    component: () => import('./views/product/add-product')
  },
  
  // ====================================================================== Order Section #1
  {
    path: '/order',
    name: 'Order',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_order')
  },

  {
    path: '/order/add',
    name: 'Order Add',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_order_add')
  },

  {
    path: '/order/detail',
    name: 'Order Detail',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_order_detail')
  },

  // ====================================================================== end Order Section

  // ====================================================================== customer section
  {
    path: '/customer',
    name: 'Customer',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_customer')
  },

  {
    path: '/customer/detail',
    name: 'Customer Detail',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_customer_detail')
  },

  {
    path: '/customer/add',
    name: 'Customer Add',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_customer_add')
  },
  {
    path: '/customer/edit/:id',
    name: 'Customer Edit',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_customer_edit')
  },

  {
    path: '/customer/loyalty',
    name: 'Customer Loyalty',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_customer_loyalty')
  },

  // ====================================================================== end customer section

  // ====================================================================== product section
  {
    path: '/product_list',
    name: 'Products List',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product')
  },

  // {
  //   path: '/product',
  //   name: 'Form Elements',
  //   meta: { authRequired: true },
  //   component: () => import('./views/dashboard_user/dashuser_product')
  // },

  {
    path: '/product/all',
    name: 'Product',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product')
  },

  {
    path: '/product/new',
    name: 'Add Product',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_add')
  },
  {
    path: '/product/edit/:id',
    name: 'Edit Product',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_edit')
  },

  {
    path: '/product/category',
    name: 'Category',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_category')
  },

  {
    path: '/product/category/add',
    name: 'Add Category',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_category_add')
  },

  {
    path: '/product/category/new',
    name: 'Add New Category',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_category_add')
  },

  {
    path: '/product/category/detail',
    name: 'Add New Category',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_category_detail')
  },

  {
    path: '/product/storage',
    name: 'Storage',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_storage')
  },

  {
    path: '/product/storage/add',
    name: 'Storage Add',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_storage_add')
  },

  {
    path: '/product/storage/list',
    name: 'Storage List',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_storage_list')
  },

  {
    path: '/product/storage/detail',
    name: 'Storage Detail',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_storage_detail')
  },

  {
    path: '/product/storage/transfer',
    name: 'Storage Transfer',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_storage_transfer')
  },

  {
    path: '/product/storage/edit',
    name: 'Storage Edit',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_storage_edit')
  },

  {
    path: '/product/ingredient',
    name: 'Storage Ingredient',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_ingredient')
  },

  {
    path: '/product/ingredient/add',
    name: 'Ingredient Add',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_ingredient_add')
  },

  {
    path: '/product/variant/edit',
    name: 'Variant Edit',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_product_variant_edit')
  },

  // ====================================================================== end product section

  // ====================================================================== discount section
  {
    path: '/discount',
    name: 'Discount',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_discount')
  },

  {
    path: '/discount/auto',
    name: 'Discount Auto',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_discount_auto')
  },

  {
    path: '/discount/auto/add',
    name: 'Discount Auto Add',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_discount_auto_add')
  },

  {
    path: '/discount/coupon',
    name: 'Discount Coupon',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_discount_coupon')
  },

  {
    path: '/discount/coupon/add',
    name: 'Discount Coupon Add',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_discount_coupon_add')
  },

  // ====================================================================== end discount section

  {
    path: '/analytic',
    name: 'Analytic',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_analytics')
  },

  {
    path: '/module',
    name: 'Module',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_module')
  },

  // ====================================================================== POS section
  {
    path: '/pos',
    name: 'POS',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_pos')
  },

  {
    path: '/pos/add',
    name: 'POS Add',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_pos_add')
  },

  {
    path: '/pos/detail',
    name: 'POS Detail',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_pos_detail')
  },

 // ====================================================================== end POS section

  {
    path: '/onlineshop',
    name: 'Online Shop',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_onlineshop')
  },

  // ====================================================================== setting section
  {
    path: '/setting',
    name: 'Setting',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting')
  },

  {
    path: '/setting/saleschannel',
    name: 'Setting - Sales Channel',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_saleschannel')
  },

  {
    path: '/setting/managebusiness',
    name: 'Setting - Manage Business',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_mbusiness')
  },

  {
    path: '/setting/managebusiness/add',
    name: 'Setting - Manage Business Add',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_mbusiness_add')
  },

  {
    path: '/setting/pricingplan',
    name: 'Setting - Plan and Pricing',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_mplanpricing')
  },

  {
    path: '/setting/paymentprovider',
    name: 'Setting - Payment Provider',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_paymentprovider')
  },

  {
    path: '/setting/shipping',
    name: 'Setting - Shipping',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_shipping')
  },

  {
    path: '/setting/manageaccount',
    name: 'Setting - My Account',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_manageaccount')
  },

  {
    path: '/setting/manageaccountadd',
    name: 'Setting - Add Account',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_manageaccount_add')
  },

  {
    path: '/setting/manageaccountdetails',
    name: 'Setting - Account Details',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_manageaccount_details')
  },

  {
    path: '/setting/manageaccountprofile',
    name: 'Setting - Account Details',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_manageaccount_myaccount')
  },

  {
    path: '/setting/email',
    name: 'Setting - Email',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_email')
  },

  {
    path: '/setting/billing',
    name: 'Setting - Billing',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_billing')
  },

  {
    path: '/setting/billingunpaid',
    name: 'Setting - Billing Unpaid',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_billing_unpaid')
  },

  {
    path: '/setting/billingpaid',
    name: 'Setting - Billing Paid',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_setting_billing_paid')
  },

  // ====================================================================== end setting section


  // ====================================================================== superadmin section
  
  {
    path: '/sadmin/business',
    name: 'Super Admin - Business',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_superadmin/dashuser_super_business')
  },

  {
    path: '/sadmin/account',
    name: 'Super Admin - Account',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_superadmin/dashuser_super_accountcust')
  },

  {
    path: '/sadmin/invoice',
    name: 'Super Admin - Invoice',
    meta: { authRequired: true },
    component: () => import('./views/dashboard_user/dashuser_superadmin/dashuser_super_invoice')
  }

  // ====================================================================== end setting section

]
