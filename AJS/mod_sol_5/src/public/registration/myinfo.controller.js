(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['registrationService'];
  function MyInfoController(registrationService) {

  var myInfo = this;

  myInfo.user = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    menu: ""
  };

  myInfo.user = registrationService.getInfo();
  myInfo.menu = registrationService.getMenuItem();

  myInfo.getMenu = function ()
 {
   return myInfo.menu;
 };

}


})();
