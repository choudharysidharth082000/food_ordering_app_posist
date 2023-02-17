///<reference path="../../index.js" />

const loginService = myapp.factory("loginService", function ($http) {
  const finalObject = {};
  finalObject.login = function (email, password) {
    return new Promise(function (resolve, reject) {
      $http({
        method: "POST",
        url: "http://localhost:3000/v1/api/auth/login",
        data: {
          email: email,
          password: password,
        },
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
  return finalObject;
});
