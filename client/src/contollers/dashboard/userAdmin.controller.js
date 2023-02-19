///<reference path="../../../index.js" />

const dashboardControllerAdmin = myapp.controller(
  "dashboardControllerAdmin",
  function ($scope, $http) {
    $http
      .get("http://localhost:3000/v1/api/user/allUsers")
      .then(function (data) {
        console.log(data);
        $scope.users = data.data.Data;
        $http
          .get("http://localhost:3000/v1/api/brand/getBrands")
          .then(function (data) {
            console.log(data.data.statusCode);
            $scope.brands = data.data.statusCode;
            //now adding the indexes to the brands
            $scope.brands.forEach((element, index) => {
              element.index = index;
            });
            console.log($scope.brands);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });

    //creating the brand from the dashboard
    $scope.createBrand = function ($event) {
      $event.preventDefault();
      const userSchema = {
        nameUser: $scope.name,
        email: $scope.email,
        password: $scope.password,
        confirmPassword: $scope.confirmPassword,
        role: "employee",
        mobileNumber: $scope.phoneNumber,
        userName: $scope.userName,
      };
      console.log(userSchema);

      $http
        .post(
          "http://localhost:3000/v1/api/auth/signup/" +
            undefined +
            "/" +
            undefined,
          userSchema
        )
        .then(function (data) {
          console.log(data);
          //update the user list
          alert("User is Created Successfully")
          $http
            .get("http://localhost:3000/v1/api/user/allUsers")
            .then(function (data) {
              console.log(data);
              $scope.users = data.data.Data;
              $http
                .get("http://localhost:3000/v1/api/brand/getBrands")
                .then(function (data) {
                  console.log(data.data.statusCode);
                  $scope.brands = data.data.statusCode;
                  //now adding the indexes to the brands
                  $scope.brands.forEach((element, index) => {
                    element.index = index;
                  });
                  //closing teh modal
                  $("#createBrand").modal("hide");
                  
                })
                .catch(function (error) {
                  console.log(error);
                });
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }
);
