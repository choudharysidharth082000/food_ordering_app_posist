///<reference path="../../index.js" />

const dashboardController = myapp.controller(
  "dashboardController",
  function ($scope) {
    $scope.brandOwner = [
      {
        number: 0,
        name: "Dashboard",
        link: "dashboard",
        isActive: false,
        icon: `fa-solid fa-house`,
      },
      {
        number: 1,
        name: "Products",
        link: "dashboard.products",
        isActive: false,
        icon: "fa-solid fa-cart-shopping",
      },
      {
        number: 2,
        name: "Orders",
        link: "/dashboard/orders",
        isActive: false,
        icon: "fa-solid fa-cash-register",
      },
      {
        number: 3,
        name: "Outlet",
        link: "dashboard.outlet",
        isActive: false,
        icon: "fa-solid fa-store",
      },
    ];

    //creating the navbar according to various roles
    $scope.admin = [
      {
        number: 0,
        name: "Dashboard",
        link: "dashboard",
        isActive: false,
        icon: `fa-solid fa-house`,
      },
      {
        number: 1,
        name: "Users",
        link: "dashboard.users",
        isActive: false,
        icon: "fa-solid fa-user-circle",
      },
      {
        number: 2,
        name: "Brands",
        link: "dashboard.brands",
        isActive: false,
        icon: "fa-solid fa-cart-shopping",
      },
      {
        number: 3,
        name: "Orders",
        link: "/dashboard/orders",
        isActive: false,
        icon: "fa-solid fa-cash-register",
      },
      {
        number: 4,
        name: "Categories",
        link: "/dashboard/categories",
        isActive: false,
        icon: "fa-solid fa-cart-shopping",
      },
      {
        number: 5,
        name: "Outlet",
        link: "dashboard.outlet",
        isActive: false,
        icon: "fa-solid fa-store",
      },
      
    ];
    console.log(localStorage.getItem("token"));
    //checking the login
    if (localStorage.getItem("token") === null) {
      window.location.href = "#/login";
    }
    if (localStorage.getItem("token") === "superadmin") {
      $scope.navbar = $scope.admin;
      console.log($scope.navbar);
    } else {
      $scope.navbar = $scope.brandOwner;
      console.log($scope.navbar);
    }

    $scope.message = "Hello world";
    //route protection
    $scope.$on("$stateChangeStart", function (event, toState, toParams) {
      if (toState.name === "dashboard") {
        if (localStorage.getItem("token") === null) {
          event.preventDefault();
          window.location.href = "#/login";
        }
      }
    });

    $scope.changeActiveStateDashboard = function (index) {
      $scope.navbar.forEach((element) => {
        element.isActive = false;
      });
      $scope.navbar[index].isActive = true;
    };

    $scope.logout = function () {
      localStorage.clear();
      window.location.href = "#/login";
    };
  }
);
