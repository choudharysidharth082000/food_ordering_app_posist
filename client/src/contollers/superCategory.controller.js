///<reference path="../../index.js" />

const superCategoryController = myapp.controller(
  "superCategoryController",
  function ($scope, $http) {
    $scope.userName = localStorage.getItem("userName");
    $http
      .get("http://localhost:3000/v1/api/superCategory/getAllSuperCategories")
      .then((response) => {
        console.log(response.data.data);
        $scope.superCategories = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
);
