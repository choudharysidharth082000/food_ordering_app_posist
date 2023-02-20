///<reference path="../../../index.js" />

const outletController = myapp.controller(
  "outletController",
  function ($scope, $http) {
    $scope.message = "Hello world";
    //fetch all the outlets
    $http.get("http://localhost:3000/v1/api/outlet/getAllOutlets").then((response) => {
      console.log(response.data.statusCode);
      $scope.outlets = response.data.statusCode;
    }
    ).catch(function(error)
    {
      console.log(error);
    })

  }
);
