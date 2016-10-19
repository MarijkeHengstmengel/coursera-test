(function () {
 'use strict';
angular.module('MenuApp')
.controller('MenuDetailController', MenuDetailController);

MenuDetailController.$inject =['items'];
function MenuDetailController(items){
  var detailItems = this;
 detailItems.items = items.data.menu_items;
}


})();
