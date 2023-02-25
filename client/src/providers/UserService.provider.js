///<reference path="../../index.js" />

const userService = myapp.provider("userService", function () {
  var baseURL = "";
  this.setBaseURL = function (url) {
    baseURL = url;
  };
  this.$get = function ($http) {
    // $rootScope.baseURL = baseURL;
    const exportFunctions = {};

    exportFunctions.getAllUsers = function () {
      console.log("This is the base URL", baseURL);
      return new Promise(function (resolve, reject) {
        $http({
          method: "GET",
          url: baseURL + "/v1/api/user/allUsers",
        }).then(
          function successCallback(response) {
            resolve(response);
          },
          function errorCallback(response) {
            reject(response);
          }
        );
      });
    };
    //get all the brands
    exportFunctions.getAllBrands = function () {
      return new Promise(function (resolve, reject) {
        $http({
          method: "GET",
          url: baseURL + "/v1/api/brand/getBrands",
        }).then(
          function successCallback(response) {
            resolve(response);
          },
          function errorCallback(response) {
            reject(response);
          }
        );
      });
    };

    //get the usersby the brandID
    exportFunctions.getUsersByBrandID = function (brandID) {
      return new Promise(function (resolve, reject) {
        $http({
          method: "GET",
          url:
            baseURL +
            "/v1/api/user/userByBrandIDAndCheckEmployeeOutlet/" +
            brandID,
        }).then(
          function successCallback(response) {
            resolve(response);
          },
          function errorCallback(response) {
            reject(response);
          }
        );
      });
    };

    return exportFunctions;
  };
});
