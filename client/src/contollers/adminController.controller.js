///<reference path="../../index.js" />

const adminController = myapp.controller(
  "adminController",
  function ($scope, $location, loginService) {
    $scope.message = "Hello world";
    $scope.email = "";
    $scope.password = "";

    $scope.sampleClick = function ()
    {
      console.log("Hello world");
      console.log($location);
      $location.path("/dashboard");
    }

    $scope.loginClick = function ($event) {
      $event.preventDefault();

      loginService
        .login($scope.email, $scope.password)
        .then(function (response) {
          console.log(response);
          if (response.data.status === true) {
            console.log("Enterigg the location call");
            localStorage.setItem("token", response.data.data.userType);
            // localStorage.setItem("userType", response.data.userType);
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
