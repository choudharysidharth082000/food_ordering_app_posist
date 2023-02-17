///<reference path="../../index.js" />

const adminController = myapp.controller(
  "adminController",
  function ($scope, $location, loginService) {
    $scope.message = "Hello world";
    $scope.email = "";
    $scope.password = "";

    $scope.loginClick = function ($event) {
      $event.preventDefault();

      loginService
        .login($scope.email, $scope.password)
        .then(function (response) {
          console.log(response);
          if (response.data.status === true) {
            $location.path("/dashboard");
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
