///<reference path="../../../index.js" />

const userservice = myapp.service("serviceuser", function ($http) {
  const finalObject = {};
  finalObject.createUser = function (user) {
    console.log(user);
    return new Promise(function (resolve, reject) {
      console.log("User is", user);
      $http({
        method: "POST",
        url:
          "http://localhost:3000/v1/api/auth/signup/" +
          undefined +
          "/" +
          undefined,
        data: user,
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

  finalObject.createManagaer = function (user, brandID) {
    return new Promise(function (resolve, reject) {
      $http({
        method: "POST",
        url:
          "http://localhost:3000/v1/api/auth/signup/" +
          brandID +
          "/" +
          undefined,
        data: user,
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
  finalObject.createEmployee = function (user, brandID, outletID) {
    return new Promise(function (resolve, reject) {
      $http({
        method: "POST",
        url:
          "http://localhost:3000/v1/api/auth/signup/" +
          brandID +
          "/" +
          outletID,
        data: { ...user, userType: "employee" },
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

  //update the user
  finalObject.updateUser = function (user, userID) {
    return new Promise(function (resolve, reject) {
      $http({
        method: "PUT",
        url: "http://localhost:3000/v1/api/auth/updateUser/" + userID,
        data: user,
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

  //get all the users
  return finalObject;
});
