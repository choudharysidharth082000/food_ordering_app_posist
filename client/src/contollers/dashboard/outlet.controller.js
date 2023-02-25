///<reference path="../../../index.js" />

const outletController = myapp.controller(
  "outletController",
  function ($scope, $http) {
    $scope.classOutlet = "none";
    $scope.userName = localStorage.getItem("userName");
    if (localStorage.getItem("userType") == "superadmin") {
      $scope.message = "Hello world";
      //fetch all the outlets
      $http
        .get("http://localhost:3000/v1/api/outlet/getAllOutlets")
        .then((response) => {
          console.log(response.data.statusCode);
          $scope.outlets = response.data.statusCode;
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (localStorage.getItem("userType") === "admin") {
      $http;

      $http
        .get(
          "http://localhost:3000/v1/api/user/userByBrandIDAndCheckEmployeeOutlet/" +
            localStorage.getItem("brandID")
        )
        .then(function (data) {
          console.log(data);
          $scope.users = data.data.Data;
          //now adding the indexes to the brands
          $scope.brands.forEach((element, index) => {
            element.index = index;
          });
          console.log($scope.brands);
        })
        .catch(function (error) {
          console.log(error);
        });

      $scope.classOutlet = "block";
      $scope.modalCreate = "Create Outlet";

      console.log("Entering the local block");
      $scope.message = "Hello world";
      //fetch all the outlets
      $http
        .get(
          "http://localhost:3000/v1/api/outlet/getOutletByBrandID/" +
            localStorage.getItem("brandID")
        )
        .then((response) => {
          console.log(response.data.statusCode);
          $scope.outlets = response.data.statusCode;
        })
        .catch(function (error) {
          console.log(error);
        });

      //additional functions
      $scope.dataObjects = {
        ouletSocialMedias: [],
        emails: [],
        phones: [],
        addresses: [],
      };
      $scope.addSocialMedia = function () {
        $scope.dataObjects.socialMedias.push($scope.socialMedia);
        $scope.socialMedia = "";
      };
      $scope.addEmail = function () {
        console.log("Hello world");
        $scope.dataObjects.emails.push($scope.outletEmail);
        $scope.outletEmail = "";
      };
      $scope.addPhone = function () {
        console.log("Hello world");
        $scope.dataObjects.phones.push($scope.outletPhone);
        console.log($scope.dataObjects);
        $scope.outletPhone = "";
      };
      $scope.addAddress = function () {
        $scope.dataObjects.addresses.push($scope.outletAddress);
        $scope.address = "";
      };
      // add Social media with social media name and url in an object
      $scope.addSocialMedia = function () {
        const brandSchema = {
          name: $scope.outletSocialMediaName,
          urlName: $scope.outletSocialMediaURL,
        };
        $scope.dataObjects.ouletSocialMedias.push(brandSchema);
        console.log($scope.dataObjects);
        $scope.outletSocialMediaName = "";
        $scope.outletSocialMediaURL = "";
      };

      $scope.removeEmail = function (index) {
        $scope.dataObjects.emails.splice(index, 1);
      };
      $scope.removePhone = function (index) {
        $scope.dataObjects.phones.splice(index, 1);
      };
      $scope.removeAddress = function (index) {
        $scope.dataObjects.addresses.splice(index, 1);
      };

      //function to create the outlet
      $scope.createOutlet = function ($event) {
        $event.preventDefault();
        $http
          .post(
            "http://locahost:300m/v1/api/outlet/createOutlet/" +
              localStorage.getItem("brandID") +
              "/" +
              $scope.selectedUser._id,
            {
              outletName: $scope.outletName,
              outletSocialMedias: $scope.dataObjects.ouletSocialMedias,
              outletDescription: $scope.outletDescription,
              outletEmails: $scope.dataObjects.emails,
              outletPhoneNumber: $scope.dataObjects.phones,
              outletAddress: $scope.dataObjects.addresses,
              outletOwnerName: $scope.selectedUser.name,
              brandName: localStorage.getItem("brandName"),
            }
          )
          .then(function (data) {
            console.log(data);
          })
          .catch(function (error) {
            console.log(error);
            alert(error.message);
          });

        //creting the users
        $http
          .post(
            "http://localhost:3000/v1/api/user/createUser/" +
              localStorage.getItem("brandID") +
              "/" +
              $scope.selectedUser._id,
            {
              name: $scope.name,
              email: $scope.emailUser,
              userName: $scope.userName,
              phoneNumber: $scope.phoneNumber,
              password: $scope.outletOwnerPassword,
              userType: "outlet",
              outletID: data.data.Data._id,
              outletName: $scope.outletName,
              brandID: localStorage.getItem("brandID"),
              brandName: localStorage.getItem("brandName"),
            }
          )
          .then(function (data) {
            console.log(data);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    }
  }
);
