(function () {
 'use strict';
angular.module('MenuApp')
.controller('MenuCategorieController', MenuCategorieController);

MenuAppController.$inject =['items'];
function MenuCategorieController(items){
    var categories = this;
    categories.items = items;
}


})();
