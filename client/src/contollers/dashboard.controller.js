///<reference path="../../index.js" />

const dashboardController = myapp.controller(
  "dashboardController",
  function ($scope) {
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
      $scope.admin.forEach((element) => {
        element.isActive = false;
      });
      $scope.admin[index].isActive = true;
    };

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
    ];
  }
);
