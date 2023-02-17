///<reference path="../../index.js" />
//creating the routes for the app
myapp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/signup");
  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "src/pages/login.html",
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
    .state("dashboard.campaign", {
      url: "/campaign",
      templateUrl: "src/pages/dashboard/campaign.html",
    })
    .state("analytics", {
      url: "/analytics",
      templateUrl: "src/pages/analytics.html",
    });
});
