///<reference path="../../index.js" />

const userOrderController = myapp.controller(
  "userOrderController",
  function ($scope) {
    $scope.orderType = "dinein";
    $scope.subCategory = "Hello";
    const finalObject = {
      orderType: $scope.orderType,
    };
    //scrooll function to the next view port
    function scroll(startPoint, endpoint) {
      //scroll to height
      console.log(startPoint);
      window.scrollTo(startPoint, endpoint);
    }

    $scope.changeOrderType = function (orderType, startPoint, endPoint) {
        console.log(startPoint, orderType);
      $scope.orderType = orderType;
      scroll(startPoint, endPoint);
    };
    $scope.addSubCategory = function (subCategory, startPoint, endPoint) {
      $scope.subCategory = subCategory;
      scroll(startPoint, endPoint);
    };
  }
);
