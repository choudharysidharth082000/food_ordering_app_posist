///<reference path="../../../index.js" />

const dashboardControllerAdmin = myapp.controller(
  "dashboardControllerAdmin",
  function ($scope, $http) {
    $scope.modalCreate = "Create User";
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
    $scope.createUser = function ($event) {
      $event.preventDefault();
      if ($scope.modalCreate == "Create User") {
        //opening the hdiepassword and confirm password
        $scope.hidePassword = false;
        $scope.hideConfirmPassword = false;
        //removing the elements in teh state
        //opening the 

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
            alert("User is Created Successfully");
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
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        //hide password and cofirm password
        $scope.hidePassword = false;
        $scope.hideConfirmPassword = false;
        //update the user
        console.log("Updating the user");
        const userSchema = {
          nameUser: $scope.name,
          email: $scope.email,
          mobileNumber: $scope.phoneNumber,
          userName: $scope.userName,
          userType: "employee",
        };
        console.log(userSchema);

        $http
          .put(
            "http://localhost:3000/v1/api/auth/updateUser/" + $scope.userID,
            userSchema
          )
          .then(function (data) {
            console.log(data);
            //update the user list
            alert("User is Updated Successfully");
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
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    };

    $scope.editUser = function (user) {
      console.log(user);
      //adding the values to the scope
      $scope.name = user.name;
      $scope.email = user.emailUser;
      $scope.userName = user.userName;
      $scope.phoneNumber = user.phoneNumber;
      $scope.userID = user._id;

      //hide the passwprd and confirm password
      $scope.hidePassword = true;
      $scope.hideConfirmPassword = true;
      $scope.modalCreate = "Update User";
    };
  }
);



