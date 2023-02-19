///<reference path="../../../index.js" />

const brandController = myapp.controller(
  "brandController",
  function ($scope, $http) {
    $http
      .get("http://localhost:3000/v1/api/brand/getBrands")
      .then(function (data) {
        console.log(data);
        $scope.brands = data.data.statusCode;
        //getting the users
        $http
          .get("http://localhost:3000/v1/api/user/allUsers")
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
      })
      .catch(function (error) {
        console.log(error);
      });
    $scope.dataObjects = {
      socialMedias: [],
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
      $scope.dataObjects.emails.push($scope.email);
      $scope.email = "";
    };
    $scope.addPhone = function ($event) {
      $event.preventDefault();
      $scope.dataObjects.phones.push($scope.phone);
      $scope.phone = "";
    };
    $scope.addAddress = function () {
      $scope.dataObjects.addresses.push($scope.address);
      $scope.address = "";
    };
    // add Social media with social media name and url in an object
    $scope.addSocialMedia = function () {
      const brandSchema = {
        name: $scope.socialMediaName,
        urlName: $scope.socialMediaURL,
      };
      $scope.dataObjects.socialMedias.push(brandSchema);
      $scope.socialMediaName = "";
      $scope.socialMediaURL = "";
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

    $scope.createBrand = function ($event) {
      $event.preventDefault();
      const brandSchema = {
        brandName: $scope.brandName,
        brandDescription: $scope.brandDescription,
        brandSocialMedia: $scope.dataObjects.socialMedias,
        brandEmail: $scope.dataObjects.emails,
        brandPhoneNumber: $scope.dataObjects.phones,
        brandAddress: $scope.dataObjects.addresses,
        brandLogo : "Test Logo",
        brandWebsite : "Test Website"

      };
      console.log(brandSchema);

      $http
        .post("http://localhost:3000/v1/api/brand/createBrand/" + $scope.selectedUser, brandSchema)
        .then(function (data) {
          console.log(data);
          //update the user list
          alert("Brand is Created Successfully");
          $http
            .get("http://localhost:3000/v1/api/brand/getBrands")
            .then(function (data) {
              console.log(data);
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
    };
  }
);
