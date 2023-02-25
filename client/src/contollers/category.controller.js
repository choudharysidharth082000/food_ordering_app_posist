///<reference path="../../index.js" />

const categoriesController = myapp.controller(
  "categoriesController",
  function ($scope, $http) {
    $scope.userName = localStorage.getItem("userName");
    $http
      .get("http://localhost:3000/v1/api/category/getAllCategories")
      .then((response) => {
        console.log(response.data.data);
        $scope.categories = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
);
