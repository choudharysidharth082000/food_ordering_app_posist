///<reference path="../../../index.js" />

const adminDashboardController = myapp.controller(
  "adminDashboardController",
  function ($scope, $http) {
    $scope.userName = localStorage.getItem("userName");
    $http
      .get("http://localhost:3000/v1/api/product/getAllFoodItems")
      .then((response) => {
        console.log(response);
        $scope.foodItems = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    $http
      .get("http://localhost:3000/v1/api/category/getAllCategories")
      .then((response) => {
        console.log(response.data.data);
        $scope.categories = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });

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
