///<reference path="../../index.js" />
//creating the routes for the app
myapp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/signup");
  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "src/pages/login.html",
    })
    .state("orderCustomer", {
      url: "/orderCustomer",
      templateUrl: "src/pages/order.html",
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "src/pages/signup.html",
    })
    .state("dashboard", {
      url: "/dashboard",
      templateUrl: "src/pages/dashboard.html",
    })
    .state("dashboard.users", {
      url: "/users",
      templateUrl: "src/pages/dashboard/user.html",
    })
    .state("dashboard.foodItems", {
      url: "/foodItems",
      templateUrl: "src/pages/dashboard/foodItems.html",
    })
    .state("dashboard.brands", {
      url: "/brands",
      templateUrl: "src/pages/dashboard/brand.html",
    })
    .state("dashboard.campaign", {
      url: "/campaign",
      templateUrl: "src/pages/dashboard/campaign.html",
    })
    .state("dashboard.products", {
      url: "/products",
      templateUrl: "src/pages/dashboard/products.html",
    })
    .state("dashboard.outlet", {
      url: "/outlet",
      templateUrl: "src/pages/dashboard/outlet.html",
    })
    .state("dashboard.orders", {
      url: "/orders",
      templateUrl: "src/pages/dashboard/orders.html",
    })
    .state("userOrder", {
      url: "/userOrder",
      templateUrl: "src/pages/userOrder.html",
    })
    .state("dashboard.categories", {
      url: "/categories",
      templateUrl: "src/pages/dashboard/category.html",
    })
    .state("dashboard.superCategories", {
      url: "/superCategories",
      templateUrl: "src/pages/dashboard/superCategories.html",
    })
    .state("dashboardBrand", {
      url: "/dashboardBrand/:brandID",
      templateUrl: "src/pages/adminBrand/dashboardBrand.html",
    })
    .state("dashboardBrand.outlet", {
      url: "/outlet",
      templateUrl: "src/pages/adminBrand/outlet.html",
    })
    
});
