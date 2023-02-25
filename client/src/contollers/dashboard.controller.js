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
        name: "Users",
        link: "dashboard.users",
        isActive: false,
        icon: "fa-solid fa-user-circle",
      },
      {
        number: 2,
        name: "Outlets",
        link: "dashboard.outlet",
        isActive: false,
        icon: "fa-solid fa-cart-shopping",
      },
      {
        number: 3,
        name: "Sub Categories",
        link: "/dashboard/subCategories",
        isActive: false,
        icon: "fa-solid fa-cash-register",
      },
      {
        number: 4,
        name: "Categories",
        link: "dashboard.categories",
        isActive: false,
        icon: "fa-solid fa-shopping",
      },
      {
        number: 5,
        name: "Food Items",
        link: "dashboard.foodItems",
        isActive: false,
        icon: "fa-solid fa-store",
      },
      {
        number: 6,
        name: "Customers",
        link: "dashboard.customers",
        isActive: false,
        icon: "fa-solid fa-user",
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
        name: "Super Categories",
        link: "dashboard.superCategories",
        isActive: false,
        icon: "fa-solid fa-cash-register",
      },
      {
        number: 4,
        name: "Categories",
        link: "dashboard.categories",
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
      {
        number: 6,
        name: "Food Items",
        link: "dashboard.foodItems",
        isActive: false,
        icon: "fa-solid fa-store",
      },
    ];
    console.log(localStorage.getItem("token"));
    //checking the login
    $scope.logout = function () {
      console.log("Hello world");
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
      window.location.href = "#/login";
    };

    if (localStorage.getItem("token") === null) {
      window.location.href = "#/login";
    }
    if (localStorage.getItem("userType") === "superadmin") {
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
  }
);
