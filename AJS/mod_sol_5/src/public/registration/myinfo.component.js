(function () {
"use strict";

angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/registration/my-info-menu.html',
  bindings: {
    menu: '<'
  },
  controller: MyInfoMenuController
});

MyInfoMenuController.$inject = ['ApiPath'];
function MyInfoMenuController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}


})();
