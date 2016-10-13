(function () {
 'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'

      },
      controller: NarrowItDownController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var menu = this;

    menu.searchTerm = "";

    menu.foundItems = function (){
      menu.found = [];
      menu.message = "";
      var promise = MenuSearchService.getMatchedMenuItems ();
      promise.then(function (response) {
        if ((menu.searchTerm != undefined)  && (menu.searchTerm.length > 0))
        {
          for(var i = 0; i < response.data.menu_items.length; i++)
          {
            var description =  response.data.menu_items[i].description;
            var searchText = menu.searchTerm.toLowerCase();
            if (description.toLowerCase().indexOf(searchText) !== -1)
                menu.found.push(response.data.menu_items[i]);
          }
          if (menu.found.length == 0)
          {
            menu.message = "Nothing found";
          }
        }
        else {
          menu.message = "Nothing found";
        }
      })
      .catch(function (error) {
        console.log(error);
      })

    };
    menu.removeItem = function(itemIndex){
      menu.found.splice(itemIndex,1);
    };
  };

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function () {
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      });
      return response;
    };

  }

})();
