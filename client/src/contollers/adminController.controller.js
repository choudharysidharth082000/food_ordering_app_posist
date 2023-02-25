///<reference path="../../index.js" />

const adminController = myapp.controller(
  "adminController",
  function ($scope, $location, loginService, $http) {
    $scope.message = "Hello world";
    $scope.email = "";
    $scope.password = "";

    $scope.sampleClick = function () {
      console.log("Hello world");
      console.log($location);
      $location.path("/dashboard");
    };

    $scope.loginClick = function ($event) {
      $event.preventDefault();

      loginService
        .login($scope.email, $scope.password)
        .then(function (response) {
          console.log(response);
          if (response.data.status === true) {
            console.log("Enterigg the location call");
            localStorage.setItem(
              "token",
              JSON.stringify(response.data.response.token)
            );
            window.localStorage.setItem(
              "userType",
              response.data.response.userType
            );
            window.localStorage.setItem(
              "userName",
              response.data.response.userName
            );
            localStorage.setItem(
              "brandID",
              response.data.response.brand.brandID
                ? response.data.response.brand.brandID
                : "none"
            );
            localStorage.setItem(
              "brandName",
              response.data.response.brand.brandName
                ? response.data.response.brand.brandName
                : "none"
            );
            localStorage.setItem(
              "outletID",
              response.data.response.outlet.outletID
                ? response.data.response.outlet.outletID
                : "none"
            );
            localStorage.setItem(
              "outletName",
              response.data.response.outlet.outletName
                ? response.data.response.outlet.outletName
                : "none"
            );
            location.href = "/index.html#!/dashboard";
            console.log("Close");
          } else {
            alert("Invalid credentials");
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("Something Went Wrong");
        });
    };
  }
);
