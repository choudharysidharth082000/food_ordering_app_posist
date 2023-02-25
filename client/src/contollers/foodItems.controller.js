///<reference path="../../index.js" />

const foodItemsController = myapp.controller(
  "foodItemsController",
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
  }
);
