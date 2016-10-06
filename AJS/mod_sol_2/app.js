(function () {
 'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var buylist = this;
    buylist.message = "";
    buylist.items = ShoppingListCheckOffService.getToBuyItems();
    buylist.remove_item = function(itemIndex) {
      ShoppingListCheckOffService.remove_item(itemIndex);
      if (buylist.items.length == 0)
        buylist.message = "Everything is bought";
      };
    };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
     var boughtlist = this;
     boughtlist.items = ShoppingListCheckOffService.getBoughtItems();
  };


  function ShoppingListCheckOffService() {
    var service = this;

    //to buy list
    var itemsToBuy=[
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Chocolate",
        quantity: "3"
      },
      {
        name: "Apples",
        quantity: "5"
      },
      {
        name: "Cookies",
        quantity: "200"
      },
      {
        name: "Oranges",
        quantity: "4"
      },
    ];
    var itemsBought= [];

    service.getToBuyItems = function () {
      return itemsToBuy;
    };

    service.getBoughtItems = function () {
      console.log("hetttt");
      return itemsBought;
    };

    service.remove_item = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex,1);
    };

  }

})();
