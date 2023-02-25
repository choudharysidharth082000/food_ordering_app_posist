///<reference path="../../../index.js" />

const dashboardControllerAdmin = myapp.controller(
  "dashboardControllerAdmin",
  function ($scope, $http, userService, $rootScope, serviceuser) {
    $scope.classChooseEmployeeType = "none";
    $scope.userName = localStorage.getItem("userName");
    $scope.modalCreate = "Create User";

    if (localStorage.getItem("userType") === "superadmin") {
      userService.getAllUsers().then(function (data) {
        console.log(data);
        $scope.users = data.data.Data;
        //available users to all controllers
        $rootScope.users = $scope.users;
        userService
          .getAllBrands()
          .then(function (data) {
            console.log(data.data.statusCode);
            $scope.brands = data.data.statusCode;
            $rootScope.rootAllBrands = $scope.brands;
            //now adding the indexes to the brands

            console.log($scope.brands);
          })
          .catch(function (error) {
            console.log(error);
          });
      });
      $scope.createUser = function () {
        const userSchema = {
          nameUser: $scope.name,
          email: $scope.email,
          password: $scope.password,
          confirmPassword: $scope.confirmPassword,
          role: "employee",
          mobileNumber: $scope.phoneNumber,
          userName: $scope.userNameForm,
        };
        serviceuser.createUser(userSchema).then(function (data) {
          console.log(data);
          if (data.data.statusCode == 200) {
            alert("User created successfully");
            //fetching the user again gor the updation
            userService
              .getAllUsers()
              .then(function (data) {
                console.log(data);
                $scope.users = data.data.Data;
                //update the users
                $rootScope.users = $scope.users;
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            alert("User creation failed");
          }
        });
      };
    } else if (localStorage.getItem("userType") == "admin") {
      $scope.classChooseEmployeeType = "block";
      //available users to all controllers
      if ($rootScope.userWithBrandID) {
        console.log("Root Scoped Data");
        console.log($rootScope.userWithBrandID);
        $scope.users = $rootScope.userWithBrandID;
      } else {
        userService
          .getUsersByBrandID(localStorage.getItem("brandID"))
          .then(function (data) {
            console.log(data);
            $scope.users = data.data.Data;
            //available users to all controllers
            $rootScope.userWithBrandID = $scope.usersWithBrandID;
            userService
              .getAllBrands()
              .then(function (data) {
                console.log(data.data.statusCode);
                $scope.brands = data.data.statusCode;
                $rootScope.rootAllBrands = $scope.brands;
                //now adding the indexes to the brands

                console.log($scope.brands);
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
    //function  when the manager is selected
    $scope.selectManager = function () {
      $scope.isManagerSelected = true;
      $scope.isEmployeeSelected = false;
      console.log($scope.isManagerSelected);
    };
    $scope.selectEmployee = function () {
      $scope.isManagerSelected = false;
      $scope.isEmployeeSelected = true;
      console.log($scope.isManagerSelected);
    };

    //updating the user

    //function for creating the user
    $scope.createUser = function () {
      console.log("Create User");
      if ($scope.modalCreate == "Create User") {
        const userSchema = {
          nameUser: $scope.name,
          email: $scope.email,
          password: $scope.password,
          confirmPassword: $scope.confirmPassword,
          role: "employee",
          mobileNumber: $scope.phoneNumber,
          userName: $scope.userNameForm,
        };
        serviceuser.createUser(userSchema).then(function (data) {
          console.log(data);
          if (data.data.statusCode == 200) {
            alert("User created successfully");
            //fetching the user again gor the updation
            userService
              .getAllUsers()
              .then(function (data) {
                console.log(data);
                $scope.users = data.data.Data;
                //update the users
                $rootScope.users = $scope.users;
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            alert("User creation failed");
          }
        });
      } else {
        const userSchema = {
          nameUser: $scope.name,
          email: $scope.email,
          password: $scope.password,
          confirmPassword: $scope.confirmPassword,
          userType: $scope.isManagerSelected ? "manager" : "employee",
          mobileNumber: $scope.phoneNumber,
          userName: $scope.userNameForm,
        };
        console.log(userSchema);
        serviceuser.updateUser(userSchema, $scope.userID).then(function (data) {
          console.log(data);
          if (data.data.statusCode == 200) {
            alert("User updated successfully");
            //fetching the user again gor the updation
            userService
              .getAllUsers()
              .then(function (data) {
                console.log(data);
                $scope.users = data.data.Data;
                //update the users
                $rootScope.users = $scope.users;
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            alert("User updation failed");
          }
        });
      }
    };

    $scope.editUser = function (user) {
      console.log(user);
      //adding the values to the scope
      $scope.name = user.name;
      $scope.email = user.emailUser;
      $scope.userNameForm = user.userName;
      $scope.phoneNumber = user.phoneNumber;
      $scope.userID = user._id;

      //hide the passwprd and confirm password
      $scope.hidePassword = true;
      $scope.hideConfirmPassword = true;
      $scope.modalCreate = "Update User";
    };
  }
);
