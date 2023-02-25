///<reference path="../../index.js" />

myapp.config([
  "userServiceProvider",
  function (userServiceProvider) {
    userServiceProvider.setBaseURL("http://localhost:3000");
  },
]);
